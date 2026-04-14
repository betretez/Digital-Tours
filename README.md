# South-View Cemetery — Historical Figures Tour

An interactive 360° virtual tour of South-View Cemetery in Atlanta, Georgia, built to honor the cemetery's historic role in Black Atlanta. Visitors explore 12 curated stops via immersive panoramic photography, clickable hotspots on notable figures, and a contextual timeline spanning 1865 to 2021.

---

## Live Preview

Open `index.html` in a browser (served over HTTP — see [Running Locally](#running-locally)).

---

## Project Structure

```
Digital-Tours/
├── index.html          # Single-page application entry point
├── css/
│   └── tour.css        # All styling (variables, animations, layout)
├── js/
│   └── tour.js         # Tour data, scene definitions, and logic
├── images/             # Web-ready equirectangular panoramas + portraits
│   ├── scene_01.jpg    # Tour scene images (scene_01 → scene_32)
│   ├── ...
│   ├── king_memorial.jpg
│   ├── herndon.jpg     # Notable person portraits
│   ├── dobbs.jpg
│   └── king_sr.jpg
└── new_images/         # Raw Insta360 X5 source files (.insp)
    ├── IMG_20260306_103607_00_001.insp
    └── ...             # 32 raw captures from March 6, 2026 shoot
```

---

## How It Works

The tour is a **client-side single-page app** — no server, no database. It runs entirely in the browser.

**Dependencies (loaded via CDN):**
- [Pannellum 2.5](https://pannellum.org/) — 360° equirectangular panorama viewer
- [Google Fonts](https://fonts.google.com/) — Cinzel (display) + Cormorant Garamond (body)

**Navigation:**
- **Forward / Back buttons** (right panel) — move through 12 sequential stops
- **Mini-map dots** (bottom-right) — jump to any stop directly
- **Timeline markers** (bottom bar) — jump to a historically significant moment with context

**Hotspots:**
- 🟡 **Gold dot** — Information hotspot. Click to open a text card.
- 🟣 **Purple dot** — Notable Person hotspot. Click to open a biographical card with portrait, dates, and facts.

---

## Running Locally

Pannellum requires images to be served over HTTP (not opened as `file://`). Use any static server:

```bash
# Python 3
cd Digital-Tours
python3 -m http.server 8080
# → open http://localhost:8080
```

```bash
# Node.js (npx)
npx serve .
```

---

## Processing Raw .insp Images

The `new_images/` folder holds raw dual-fisheye `.insp` files from the Insta360 X5 camera. These must be converted to equirectangular JPEGs before use in the tour.

**Requirements:** `ffmpeg`, `Pillow` (`pip install Pillow`)

```bash
#!/bin/bash
INPUT_DIR="new_images"
OUTPUT_DIR="images"

i=1
for f in $(ls "$INPUT_DIR"/*.insp | sort); do
    scene_num=$(printf "%02d" $i)
    ffmpeg -y -i "$f" \
      -vf "v360=dfisheye:equirect:ih_fov=200:iv_fov=200,scale=7680:3840" \
      -q:v 2 "$OUTPUT_DIR/scene_${scene_num}.jpg"
    i=$((i + 1))
done
```

Then apply the nadir blur (camera operator area) in Python:

```python
from PIL import Image
import cv2, numpy as np, os

for i in range(1, 33):
    path = f"images/scene_{i:02d}.jpg"
    img = Image.open(path)
    arr = np.array(img)
    h = arr.shape[0]
    nadir = arr[int(h * 0.75):, :]
    arr[int(h * 0.75):, :] = cv2.GaussianBlur(nadir, (201, 201), 60)
    Image.fromarray(arr).save(path, quality=90)
```

> **Note:** The bottom 25% of every equirectangular image is the nadir zone — it always shows the camera operator. The blur above removes them from view without affecting the main panorama.

---

## Tour Data Reference (`js/tour.js`)

### Scene Definitions

Each stop in the tour is a `sceneDef` object inside the `sceneDefs` array:

```js
{
  id: 's01',                    // Unique scene ID (used internally by Pannellum)
  title: 'Cemetery Entrance',   // Displayed in header and navigation labels
  file: 'scene_01.jpg',         // Panorama file inside images/
  initialYaw: -10,              // Starting horizontal angle (degrees, 0 = forward)
  initialPitch: -5,             // Starting vertical angle (degrees, 0 = horizon)
  initialHfov: 110,             // Starting field of view (degrees)
  extra: [ /* hotspot objects */ ]
}
```

**Current stops:**

| # | ID   | Title                  | Image File        | Hotspot Type   |
|---|------|------------------------|-------------------|----------------|
| 1 | s01  | Cemetery Entrance      | scene_01.jpg      | Info           |
| 2 | s02  | Main Drive             | scene_03.jpg      | —              |
| 3 | s03  | Cedar Grove            | scene_05.jpg      | Info           |
| 4 | s04  | Magnolia Walk          | scene_10.jpg      | Info           |
| 5 | s05  | Historic Section       | scene_13.jpg      | Person: Herndon|
| 6 | s06  | Williams Plot          | scene_16.jpg      | Person: Williams|
| 7 | s07  | Interior Gardens       | scene_19.jpg      | Info           |
| 8 | s08  | Memorial Overlook      | scene_22.jpg      | Info           |
| 9 | s09  | Hilltop Memorial       | scene_25.jpg      | Person: Dobbs  |
|10 | s10  | Chapel View            | scene_28.jpg      | Info           |
|11 | s11  | King Family Mausoleum  | king_memorial.jpg | Person: King Sr.|
|12 | s12  | Juneteenth Marker      | scene_32.jpg      | Info           |

### Notable People

Biographical profiles live in the `people` object at the top of `tour.js`:

```js
const people = {
  herndon: {
    name:  'Alonzo Franklin Herndon',
    dates: '1858 – 1927',
    photo: 'images/herndon.jpg',   // null if no portrait available
    facts: [
      'Born enslaved in Social Circle, Georgia',
      // ...
    ],
    audio: null   // reserved for future narration audio
  },
  // dobbs, king_sr, williams_ad ...
};
```

### Timeline Events

Historical markers at the bottom of the page are defined in `timelineInfo`:

```js
const timelineInfo = {
  1865: {
    title: 'Juneteenth — Freedom Arrives',
    body:  'On June 19, 1865 ...',
    scene: 's01'    // scene to navigate to when "Go to Location" is clicked
  },
  // 1886, 1905, 1927, 1961, 1984, 2021 ...
};
```

---

## Adding & Editing Content

See [CONTRIBUTING.md](CONTRIBUTING.md) for step-by-step guides on:

- Adding a new tour stop
- Adding a notable person profile
- Adding or moving a hotspot
- Adding a timeline event
- Adding a portrait photo

---

## Design System

Colors and typography are defined as CSS variables in `tour.css`:

```css
:root {
  --gold:           #d4af37;
  --gold-dim:       rgba(212, 175, 55, 0.4);
  --gold-glow:      rgba(212, 175, 55, 0.25);
  --bg-deep:        #0a0a0c;
  --text-primary:   #f0ece2;
  --text-muted:     rgba(240, 236, 226, 0.5);
  --info-color:     #7ec8e3;
  --person-color:   #c47fdb;
}
```

**Fonts:**
- `Cinzel` — headings, labels, UI chrome
- `Cormorant Garamond` — body text, captions

---

## Browser Support

Requires a modern browser with support for:
- ES6 JavaScript (const, arrow functions, template literals)
- CSS custom properties, `backdrop-filter`, Grid/Flexbox
- WebGL (required by Pannellum for panorama rendering)

Tested in Chrome, Firefox, and Safari (desktop). Mobile layout is supported but simplified.

---

## License

All historical content, biographical text, and panoramic photography are property of South-View Cemetery and associated rights holders. Code is provided for educational and heritage documentation purposes.
