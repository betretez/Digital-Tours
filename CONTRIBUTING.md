# Contributing Guide

Step-by-step instructions for updating the South-View Cemetery Historical Figures Tour. All tour content lives in two files: `js/tour.js` (data) and `css/tour.css` (styling). No build process is required.

---

## Table of Contents

1. [Adding a New Tour Stop](#1-adding-a-new-tour-stop)
2. [Adding a Notable Person Profile](#2-adding-a-notable-person-profile)
3. [Adding a Portrait Photo](#3-adding-a-portrait-photo)
4. [Adding or Moving a Hotspot](#4-adding-or-moving-a-hotspot)
5. [Adding a Timeline Event](#5-adding-a-timeline-event)
6. [Processing New .insp Images](#6-processing-new-insp-images)
7. [Hotspot Positioning Guide](#7-hotspot-positioning-guide)
8. [Cache Busting After CSS Changes](#8-cache-busting-after-css-changes)

---

## 1. Adding a New Tour Stop

Open `js/tour.js` and add a new object to the `sceneDefs` array. Insert it at the position in the list where you want it to appear in the tour sequence.

```js
const sceneDefs = [
  // ... existing stops ...
  {
    id: 's13',                      // Must be unique. Follow the sXX pattern.
    title: 'New Stop Name',         // Shown in header and navigation buttons
    file: 'scene_XX.jpg',           // Image file inside images/ folder
    initialYaw: 0,                  // Horizontal starting angle (see §7)
    initialPitch: -5,               // Vertical starting angle (-5 is slightly downward, natural)
    initialHfov: 110,               // Field of view in degrees (80–120 is typical)
    extra: []                       // Leave empty, or add a hotspot (see §4)
  }
];
```

**Things to check after adding a stop:**

- The `id` must be unique across all `sceneDefs`.
- The `file` must exist in the `images/` folder as a 7680×3840 equirectangular JPEG.
- The scene counter in the header ("X of 12") updates automatically.
- The mini-map SVG in `index.html` has hard-coded dots for 12 scenes — if you add more, you'll need to add a corresponding `<circle>` element with a matching `data-scene` attribute.

---

## 2. Adding a Notable Person Profile

Open `js/tour.js` and add a new entry to the `people` object near the top of the file.

```js
const people = {
  // ... existing people ...

  your_key: {
    name:  'Full Name Here',
    dates: '1850 – 1920',           // Birth and death years
    photo: 'images/portrait.jpg',   // Path to portrait, or null if unavailable
    facts: [
      'First notable fact about this person.',
      'Second fact — keep each one to 1–2 sentences.',
      'Third fact.',
      'Fourth fact.',
      'Fifth fact.'
    ],
    audio: null                     // Reserved for future narration. Leave null.
  }
};
```

**Tips for writing facts:**
- Lead with the most surprising or significant accomplishment.
- Write in simple, present-tense language ("He organizes..." → "Organized...").
- Aim for 4–6 facts. More than 6 can overwhelm the card.
- The card scrolls vertically if there are many facts, but shorter is better.

After adding the person, wire them to a hotspot (see §4) so they appear in the tour.

---

## 3. Adding a Portrait Photo

1. Obtain a portrait image (JPG or PNG, ideally square or portrait orientation).
2. Resize to **400×400px** or larger — the card displays it at 130×130px with a Ken Burns animation, so some extra resolution is good.
3. Save it to the `images/` folder (e.g., `images/williams_ad.jpg`).
4. Update the `photo` field in the `people` object:

```js
williams_ad: {
  photo: 'images/williams_ad.jpg',   // was: null
  // ...
}
```

The portrait will appear automatically in the person card overlay when the hotspot is clicked. If `photo` remains `null`, the card simply shows the name and facts without an image.

---

## 4. Adding or Moving a Hotspot

Hotspots are defined in the `extra` array inside a `sceneDef`.

### Info hotspot (gold dot — general information)

```js
extra: [
  {
    type: 'info',
    pitch: -8,              // Vertical angle (negative = below horizon)
    yaw: 0,                 // Horizontal angle (0 = forward, see §7)
    cssClass: 'hs-info',
    createTooltipFunc: createInfoTooltip,
    createTooltipArgs: {
      heading: 'Card Title Here',
      body: 'The text that appears in the info card when the hotspot is clicked.'
    }
  }
]
```

### Person hotspot (purple dot — notable individual)

```js
extra: [
  {
    type: 'info',
    pitch: -12,
    yaw: 0,
    cssClass: 'hs-person',
    createTooltipFunc: createPersonTooltip,
    createTooltipArgs: 'your_key'   // Must match a key in the people object
  }
]
```

### Moving an existing hotspot

Find the hotspot's `pitch` and `yaw` values inside the relevant scene's `extra` array and update them. See §7 for how to figure out the right angles.

### Multiple hotspots per scene

A scene can have more than one hotspot. Just add multiple objects to the `extra` array:

```js
extra: [
  { type: 'info', pitch: -8, yaw: 20, cssClass: 'hs-info', ... },
  { type: 'info', pitch: -12, yaw: -30, cssClass: 'hs-person', ... }
]
```

---

## 5. Adding a Timeline Event

Open `js/tour.js` and add a new year key to the `timelineInfo` object:

```js
const timelineInfo = {
  // ... existing years ...

  1942: {
    title: 'Teachers\' Salary Equalization',
    body:  'In 1942, Rev. Martin Luther King Sr. led a successful campaign to equalize the salaries of Black and white public school teachers in Atlanta — a landmark legal and civic victory.',
    scene: 's11'    // ID of the scene to navigate to when "Go to Location" is clicked
  }
};
```

**Then update the HTML.** Timeline markers are hard-coded in `index.html`. Find the `#timeline` section and add a new marker at the appropriate horizontal position:

```html
<div class="timeline-marker" data-year="1942" style="left: 68%;">
  <div class="timeline-event">1942</div>
</div>
```

The `left` percentage represents the year's position on the timeline. The current markers span 1865–2021 (156 years). To calculate the position:

```
left % = (year − 1865) / (2021 − 1865) × 100
```

For 1942: `(1942 − 1865) / 156 × 100 ≈ 49%`

---

## 6. Processing New .insp Images

When a new photography session produces `.insp` files from the Insta360 X5, convert them before adding to the tour.

**Requirements:** `ffmpeg` and `Pillow` Python library.

```bash
pip install Pillow
```

**Step 1 — Convert dual-fisheye to equirectangular:**

```bash
#!/bin/bash
# Run from the Digital-Tours directory
INPUT_DIR="new_images"
OUTPUT_DIR="images"
STARTING_NUMBER=33    # Change to continue from where scene files left off

i=$STARTING_NUMBER
for f in $(ls "$INPUT_DIR"/*.insp | sort); do
    scene_num=$(printf "%02d" $i)
    echo "Converting $f → scene_${scene_num}.jpg"
    ffmpeg -y -i "$f" \
      -vf "v360=dfisheye:equirect:ih_fov=200:iv_fov=200,scale=7680:3840" \
      -q:v 2 "$OUTPUT_DIR/scene_${scene_num}.jpg"
    i=$((i + 1))
done
echo "Done."
```

**Step 2 — Apply nadir blur (removes camera operator from bottom of image):**

```python
from PIL import Image
import cv2, numpy as np, os, glob

image_files = sorted(glob.glob("images/scene_*.jpg"))

for path in image_files:
    img = Image.open(path)
    arr = np.array(img)
    h = arr.shape[0]
    nadir_start = int(h * 0.75)       # Bottom 25% = nadir zone
    region = arr[nadir_start:, :]
    arr[nadir_start:, :] = cv2.GaussianBlur(region, (201, 201), 60)
    Image.fromarray(arr).save(path, quality=90)
    print(f"Blurred nadir: {path}")
```

**Step 3 — Add the new scenes to `tour.js`** (see §1).

---

## 7. Hotspot Positioning Guide

Hotspot position is controlled by two values:

| Property | Meaning | Range |
|----------|---------|-------|
| `pitch`  | Vertical angle | −90 (straight down) to +90 (straight up). Use −5 to −15 for near-ground objects like grave markers. Use 0 for eye-level objects. |
| `yaw`    | Horizontal angle | −180 to +180. 0 is the `initialYaw` direction. Positive = right, negative = left. |

**Rule of thumb:** Always set `yaw` close to the scene's `initialYaw` so the hotspot is visible the moment the scene loads. If you want the hotspot to appear directly in front:

```js
initialYaw: 20,   // scene's starting direction
// hotspot:
yaw: 20           // same as initialYaw → dot appears centered on load
```

**Finding the right angle:** Load the tour in a browser, navigate to the scene, and rotate the panorama until you're looking at the object you want to mark. The Pannellum viewer doesn't display pitch/yaw values natively, but you can enable debug mode temporarily:

```js
// In buildConfig(), add to the default section:
default: { firstScene: 's01', sceneFadeDuration: 800, hotSpotDebug: true },
```

With `hotSpotDebug: true`, a crosshair appears and logs the pitch/yaw of wherever you click to the browser console. Remove it when done.

---

## 8. Cache Busting After CSS Changes

Browsers aggressively cache CSS files. After editing `tour.css`, increment the version number in the `<link>` tag inside `index.html` so visitors load the updated stylesheet:

```html
<!-- Before -->
<link rel="stylesheet" href="css/tour.css?v=3">

<!-- After (increment v= each time you update the CSS) -->
<link rel="stylesheet" href="css/tour.css?v=4">
```

This applies only to the `tour.css` link. Pannellum and Google Fonts are loaded from CDN and have their own caching headers.

---

## Quick Reference

| Task | File | Section |
|------|------|---------|
| Add a tour stop | `js/tour.js` | `sceneDefs` array |
| Add a person profile | `js/tour.js` | `people` object |
| Add/move a hotspot | `js/tour.js` | `sceneDefs[n].extra` array |
| Add a timeline event | `js/tour.js` + `index.html` | `timelineInfo` + `#timeline` |
| Change colors/fonts | `css/tour.css` | `:root` variables |
| Add a portrait photo | `images/` folder + `tour.js` | `people.your_key.photo` |
| Process new .insp files | Terminal | ffmpeg + Python (see §6) |
| Force CSS reload in browser | `index.html` | `<link href="css/tour.css?v=N">` |
