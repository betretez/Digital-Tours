'use strict';

/* ================================================================
   PEOPLE
   ================================================================ */
const people = {
  herndon: {
    name:  'Alonzo Franklin Herndon',
    dates: '1858 – 1927',
    photo: 'images/herndon.jpg',
    facts: [
      'Born enslaved in Social Circle, Georgia',
      'Founded Atlanta Life Insurance Company in 1905 — the largest Black-owned insurance company in the U.S.',
      'Transformed a $1.25 shoeshine cloth into a barbershop empire serving Atlanta\'s elite',
      'His Classical Revival mansion on University Drive is now a National Historic Landmark',
      'At his death, his estate was valued at over $500,000'
    ],
    audio: null
  },
  dobbs: {
    name:  'John Wesley Dobbs',
    dates: '1882 – 1961',
    photo: 'images/dobbs.jpg',
    facts: [
      'Grand Master of Georgia\'s Prince Hall Masons for 35 years',
      'Organized Atlanta\'s first large-scale voter-registration drive for Black citizens in 1932',
      '"The Mayor of Auburn Avenue" — the heart of Black Atlanta commerce and culture',
      'Grandfather of Maynard Jackson, Atlanta\'s first Black mayor',
      'His oratory and organizing inspired a generation of Civil Rights leaders'
    ],
    audio: null
  },
  king_sr: {
    name:  'Rev. Martin Luther King Sr.',
    dates: '1899 – 1984',
    photo: 'images/king_sr.jpg',
    facts: [
      'Pastor of Ebenezer Baptist Church for 44 years',
      'Father of Dr. Martin Luther King Jr.',
      'Led the successful campaign to equalize teachers\' salaries in Atlanta in 1942',
      'Renamed himself and his eldest son after Protestant reformer Martin Luther',
      'Survived the assassination of his son (1968) and the murder of his wife Alberta at the church organ (1974)'
    ],
    audio: null
  },
  williams_ad: {
    name:  'Rev. Adam Daniel Williams',
    dates: '1863 – 1931',
    photo: null,
    facts: [
      'Born January 2, 1863, in Greene County, Georgia — the son of a Baptist preacher',
      'Served as pastor of Ebenezer Baptist Church from 1894 to 1931, growing its membership from 13 to over 750',
      'Co-founded the Atlanta chapter of the NAACP in 1909 and served as its first president',
      'Led one of Atlanta\'s first major civil rights campaigns, boycotting a bond issue that excluded Black schools in 1917',
      'Grandfather of Dr. Martin Luther King Jr. — his daughter Alberta married Rev. Martin Luther King Sr. in 1926'
    ],
    audio: null
  }
};

/* ================================================================
   TIMELINE INFO
   ================================================================ */
const timelineInfo = {
  1865: {
    title: 'Juneteenth — Freedom Arrives',
    body:  'On June 19, 1865, Union soldiers reached Galveston, Texas — two and a half years after the Emancipation Proclamation. For the estimated 250,000 enslaved people still held in Texas, this was liberation. South-View\'s founders were children of that generation, born into freedom and determined to build on it.',
    scene: 's01'
  },
  1886: {
    title: 'South-View Cemetery Founded',
    body:  'Six Black Atlanta businessmen — barred from burying their dead in white-only Westview Cemetery — pooled their resources and purchased land south of the city. On December 6, 1886, South-View Cemetery opened its gates, giving Atlanta\'s Black community a place of dignity and rest.',
    scene: 's01'
  },
  1905: {
    title: 'Herndon Builds an Empire',
    body:  'Alonzo Herndon, born enslaved in 1858, founded the Atlanta Mutual Insurance Association in 1905. By his death in 1927 it had grown into Atlanta Life Insurance Company — the largest Black-owned stock insurance firm in America. He is buried in the Historic Section of this cemetery.',
    scene: 's05'
  },
  1927: {
    title: 'Herndon Passes',
    body:  'Alonzo Herndon died on July 21, 1927, at age 69, having turned a $1.25 shoeshine cloth into a financial empire. His funeral drew thousands. The company he built survived the Depression, segregation, and decades of legal battles, and still operates from Atlanta today.',
    scene: 's05'
  },
  1961: {
    title: 'John Wesley Dobbs Passes',
    body:  'John Wesley Dobbs — "The Mayor of Auburn Avenue" — died on August 29, 1961, the same day W.E.B. Du Bois passed away in Ghana. Dobbs had registered more Black voters than anyone in Georgia history, and his daughter Mattiwilda was the first Black singer to star at Milan\'s La Scala opera house.',
    scene: 's09'
  },
  1984: {
    title: 'Rev. Martin Luther King Sr. Passes',
    body:  '"Daddy King" died November 11, 1984, having outlived his son Martin Jr. (assassinated, 1968) and his wife Alberta (shot at the church organ, 1974). He devoted his final years to forgiveness and reconciliation. He rests here with Alberta in the King Family Mausoleum.',
    scene: 's11'
  },
  2021: {
    title: 'Juneteenth Becomes a Federal Holiday',
    body:  'On June 17, 2021, President Biden signed legislation making June 19th a federal holiday — the first new federal holiday since Martin Luther King Jr. Day in 1983. South-View Cemetery, founded by those who built Atlanta\'s Black professional class from freedom\'s first generation, stands as living testimony.',
    scene: 's12'
  }
};

/* ================================================================
   SCENE DEFINITIONS — 12 curated stops
   NO in-panorama navigation hotspots — controlled by fixed HTML buttons
   ================================================================ */
const sceneDefs = [
  {
    id: 's01', title: 'Cemetery Entrance',
    file: 'scene_01.jpg', initialYaw: -10, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -10.8, yaw: -10, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'Founded 1886',
          body: 'South-View Cemetery opened December 6, 1886, established by six Black businessmen after Westview Cemetery refused to bury their dead. Today it is the oldest Black-owned cemetery still in continuous operation in Atlanta, with over 70,000 burials.'
        }
      }
    ]
  },
  {
    id: 's02', title: 'Main Drive',
    file: 'scene_03.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110
  },
  {
    id: 's03', title: 'Cedar Grove',
    file: 'scene_05.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 45, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'Cedar Grove',
          body: 'These ancient Southern red cedars were planted in the cemetery\'s earliest years and have stood witness to over a century of Atlanta\'s Black history. Cedar trees carry deep symbolic meaning — their evergreen boughs representing eternal life and remembrance.'
        }
      }
    ]
  },
  {
    id: 's04', title: 'Magnolia Walk',
    file: 'scene_10.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: -15, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'Magnolia Walk',
          body: 'The Southern magnolia is Georgia\'s iconic tree, its large white blooms a symbol of endurance and beauty. The magnolias lining this path were planted in the late 19th century — their roots intertwined with the history of Atlanta\'s first generation of free Black citizens.'
        }
      }
    ]
  },
  {
    id: 's05', title: 'Historic Section',
    file: 'scene_13.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -16.2, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'herndon'
      }
    ]
  },
  {
    id: 's06', title: 'Williams Plot',
    file: 'scene_16.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 10, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'williams_ad'
      }
    ]
  },
  {
    id: 's07', title: 'Interior Gardens',
    file: 'scene_19.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: -5, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'The Long Path',
          body: 'This central corridor of South-View has witnessed the funerals of businessmen, preachers, teachers, soldiers, and activists — the full spectrum of Black Atlanta\'s professional class. Walking it is to walk through 140 years of a community\'s joys and sorrows.'
        }
      }
    ]
  },
  {
    id: 's08', title: 'Memorial Overlook',
    file: 'scene_22.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'A View of Atlanta\'s History',
          body: 'From this rise you can look out over one of the most historically significant acres in the American South. The markers visible in every direction represent families who built institutions, fought for civil rights, and shaped the city that became the cradle of the American Civil Rights Movement.'
        }
      }
    ]
  },
  {
    id: 's09', title: 'Hilltop Memorial',
    file: 'scene_25.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -16.2, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'dobbs'
      }
    ]
  },
  {
    id: 's10', title: 'Chapel View',
    file: 'scene_28.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'The Memorial Chapel',
          body: 'South-View\'s chapel has hosted the final rites of some of Atlanta\'s most prominent citizens. Built to serve a community denied access to white funeral homes and churches, it became a gathering place for grieving families across Atlanta\'s Black neighborhoods for over a century.'
        }
      }
    ]
  },
  {
    id: 's11', title: 'King Family Mausoleum',
    file: 'king_memorial.jpg', initialYaw: 106, initialPitch: -10, initialHfov: 100,
    extra: [
      {
        type: 'info', pitch: -13.5, yaw: 106, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'king_sr'
      }
    ]
  },
  {
    id: 's12', title: 'Juneteenth Marker',
    file: 'scene_32.jpg', initialYaw: -163, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: 0, yaw: -163, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'June 19, 1865',
          body: 'On this date, enslaved people in Texas first heard they were free — two and a half years after the Emancipation Proclamation. South-View Cemetery, founded 21 years later by those who lived freedom\'s first generation, stands as testament to everything that generation built. Juneteenth became a federal holiday in 2021.'
        }
      }
    ]
  }
];

/* ================================================================
   PANNELLUM HOTSPOT CREATORS
   Called by Pannellum with (hotSpotDiv, args)
   ================================================================ */
function createInfoTooltip(div, args) {
  div.classList.add('hs-info');
  const label = document.createElement('span');
  label.className = 'hs-label';
  label.textContent = args.heading;
  div.appendChild(label);
  div.addEventListener('click', () => showInfoCard(args.heading, args.body));
}

function createPersonTooltip(div, personKey) {
  div.classList.add('hs-person');
  const p = people[personKey];
  const label = document.createElement('span');
  label.className = 'hs-label';
  label.textContent = p ? p.name : personKey;
  div.appendChild(label);
  div.addEventListener('click', () => showPersonCard(personKey));
}

/* ================================================================
   BUILD PANNELLUM CONFIG
   ================================================================ */
function buildConfig() {
  const scenes = {};
  sceneDefs.forEach(def => {
    scenes[def.id] = {
      title:    def.title,
      hfov:     def.initialHfov  || 110,
      pitch:    def.initialPitch || -5,
      yaw:      def.initialYaw   || 0,
      type:     'equirectangular',
      panorama: 'images/' + def.file,
      hotSpots: def.extra || []
    };
  });
  return {
    default: { firstScene: 's01', sceneFadeDuration: 800 },
    scenes
  };
}

/* ================================================================
   INIT
   ================================================================ */
let viewer;
let currentSceneIdx = 0;

window.addEventListener('DOMContentLoaded', () => {

  /* —— Loading screen —— */
  const fill = document.querySelector('.loader-bar-fill');
  let pct = 0;
  const loadTimer = setInterval(() => {
    pct += Math.random() * 15 + 5;
    if (pct >= 100) { pct = 100; clearInterval(loadTimer); }
    fill.style.width = pct + '%';
  }, 180);

  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    ls.style.transition = 'opacity 0.6s';
    ls.style.opacity = '0';
    setTimeout(() => {
      ls.style.display = 'none';
      document.getElementById('tour-wrapper').classList.remove('hidden');
    }, 600);
  }, 2000);

  /* —— Pannellum init —— */
  viewer = pannellum.viewer('panorama', buildConfig());

  viewer.on('scenechange', sceneId => {
    currentSceneIdx = sceneDefs.findIndex(d => d.id === sceneId);
    updateUI(sceneId);
  });

  updateUI('s01');

  /* —— Fixed nav buttons —— */
  document.getElementById('btn-back').addEventListener('click', () => {
    if (currentSceneIdx > 0) {
      currentSceneIdx--;
      const def = sceneDefs[currentSceneIdx];
      viewer.loadScene(def.id, def.initialPitch || -5, def.initialYaw || 0, def.initialHfov || 110);
    }
  });

  document.getElementById('btn-forward').addEventListener('click', () => {
    if (currentSceneIdx < sceneDefs.length - 1) {
      currentSceneIdx++;
      const def = sceneDefs[currentSceneIdx];
      viewer.loadScene(def.id, def.initialPitch || -5, def.initialYaw || 0, def.initialHfov || 110);
    }
  });

  /* —— Minimap dots —— */
  document.querySelectorAll('.map-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const sid = dot.dataset.scene;
      const idx = sceneDefs.findIndex(d => d.id === sid);
      if (idx < 0) return;
      currentSceneIdx = idx;
      const def = sceneDefs[idx];
      viewer.loadScene(def.id, def.initialPitch || -5, def.initialYaw || 0, def.initialHfov || 110);
    });
  });

  /* —— Timeline markers —— */
  document.querySelectorAll('.timeline-marker').forEach(marker => {
    marker.addEventListener('click', () => {
      const year = parseInt(marker.dataset.year);
      const info = timelineInfo[year];
      if (info) showTimelinePopup(year, info);
    });
  });

  document.getElementById('timeline-popup-close').addEventListener('click', () => {
    document.getElementById('timeline-popup').classList.add('hidden');
  });

  document.getElementById('timeline-popup-nav').addEventListener('click', () => {
    const sid = document.getElementById('timeline-popup-nav').dataset.scene;
    if (!sid) return;
    const idx = sceneDefs.findIndex(d => d.id === sid);
    if (idx < 0) return;
    currentSceneIdx = idx;
    const def = sceneDefs[idx];
    viewer.loadScene(def.id, def.initialPitch || -5, def.initialYaw || 0, def.initialHfov || 110);
    document.getElementById('timeline-popup').classList.add('hidden');
  });

  /* —— Person overlay close —— */
  document.querySelector('#person-overlay .close-btn').addEventListener('click', () => {
    document.getElementById('person-overlay').classList.add('hidden');
  });

  /* —— Info overlay close —— */
  document.querySelector('#info-overlay .close-btn').addEventListener('click', () => {
    document.getElementById('info-overlay').classList.add('hidden');
  });

  /* —— Narration button (placeholder) —— */
  document.getElementById('narration-btn').addEventListener('click', () => {
    console.log('Narration requested');
  });
});

/* ================================================================
   UPDATE UI
   ================================================================ */
function updateUI(sceneId) {
  const def = sceneDefs.find(d => d.id === sceneId);
  if (!def) return;

  document.getElementById('current-scene-label').textContent = def.title;

  const idx = sceneDefs.findIndex(d => d.id === sceneId);
  document.getElementById('scene-counter').textContent = `${idx + 1} of ${sceneDefs.length}`;

  const btnBack = document.getElementById('btn-back');
  const lblBack = document.getElementById('nav-label-back');
  if (idx > 0) {
    btnBack.disabled = false;
    btnBack.classList.remove('nav-btn-disabled');
    lblBack.textContent = sceneDefs[idx - 1].title;
  } else {
    btnBack.disabled = true;
    btnBack.classList.add('nav-btn-disabled');
    lblBack.textContent = 'Start of tour';
  }

  const btnFwd = document.getElementById('btn-forward');
  const lblFwd = document.getElementById('nav-label-fwd');
  if (idx < sceneDefs.length - 1) {
    btnFwd.disabled = false;
    btnFwd.classList.remove('nav-btn-disabled');
    lblFwd.textContent = sceneDefs[idx + 1].title;
  } else {
    btnFwd.disabled = true;
    btnFwd.classList.add('nav-btn-disabled');
    lblFwd.textContent = 'End of tour';
  }

  document.querySelectorAll('.map-dot').forEach(d => d.classList.remove('active'));
  const activeDot = document.querySelector(`.map-dot[data-scene="${sceneId}"]`);
  if (activeDot) activeDot.classList.add('active');
}

/* ================================================================
   OVERLAYS
   ================================================================ */
function showPersonCard(personKey) {
  const p = people[personKey];
  if (!p) return;

  const photoEl = document.getElementById('person-photo');
  photoEl.src = p.photo || '';
  photoEl.style.display = p.photo ? '' : 'none';

  document.getElementById('person-name').textContent  = p.name;
  document.getElementById('person-dates').textContent = p.dates;

  const factsEl = document.getElementById('person-facts');
  factsEl.innerHTML = p.facts.map(f => `<p class="fact-item">${f}</p>`).join('');

  document.getElementById('narration-btn').style.display = p.audio ? '' : 'none';
  document.getElementById('person-overlay').classList.remove('hidden');
}

function showInfoCard(heading, body) {
  document.getElementById('info-heading').textContent = heading;
  document.getElementById('info-body').textContent    = body;
  document.getElementById('info-overlay').classList.remove('hidden');
}

function showTimelinePopup(year, info) {
  document.getElementById('timeline-popup-year').textContent  = year;
  document.getElementById('timeline-popup-title').textContent = info.title;
  document.getElementById('timeline-popup-body').textContent  = info.body;

  const navBtn = document.getElementById('timeline-popup-nav');
  navBtn.dataset.scene = info.scene;
  const dest = sceneDefs.find(d => d.id === info.scene);
  document.getElementById('timeline-popup-nav-label').textContent =
    'Go to ' + (dest ? dest.title : 'Location');

  document.getElementById('timeline-popup').classList.remove('hidden');
}
