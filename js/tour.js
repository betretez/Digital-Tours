// =============================================
// SOUTH-VIEW CEMETERY DIGITAL TOUR — tour.js
// =============================================

// =====================
// Person Data Store
// =====================
const people = {
    dobbs: {
        name: 'John Wesley Dobbs',
        dates: '1882 – 1961',
        photo: 'https://placehold.co/200x200/1a1a1a/d4af37?text=JWD',
        facts: [
            'Known as the unofficial "Mayor of Auburn Avenue"',
            'Led voter registration drives that added 10,000+ Black voters in Atlanta',
            'Grand Master of the Prince Hall Masons of Georgia for 28 years',
            'Grandfather of Maynard Jackson, Atlanta\'s first Black mayor'
        ],
        narration: 'John Wesley Dobbs, born in 1882, was one of Atlanta\'s most influential civic leaders. Known as the unofficial Mayor of Auburn Avenue, he dedicated his life to expanding voting rights for African Americans, registering over 10,000 new Black voters. He served as Grand Master of the Prince Hall Masons for 28 years and was the grandfather of Maynard Jackson, who became Atlanta\'s first Black mayor.'
    },
    herndon: {
        name: 'Alonzo Herndon',
        dates: '1858 – 1927',
        photo: 'https://placehold.co/200x200/1a1a1a/d4af37?text=AH',
        facts: [
            'Born into slavery, became Atlanta\'s wealthiest Black citizen',
            'Founded Atlanta Life Insurance Company in 1905',
            'Owned the largest barbershop chain in the city',
            'His mansion is now the Herndon Home Museum'
        ],
        narration: 'Alonzo Herndon was born into slavery in 1858. Through remarkable determination, he became Atlanta\'s wealthiest Black citizen. In 1905, he founded the Atlanta Life Insurance Company, which grew to become one of the largest Black-owned businesses in the nation. He also owned the city\'s largest barbershop chain. His grand home is now preserved as the Herndon Home Museum.'
    },
    king_sr: {
        name: 'Martin Luther King Sr.',
        dates: '1899 – 1984',
        photo: 'https://placehold.co/200x200/1a1a1a/d4af37?text=MLK',
        facts: [
            'Pastor of Ebenezer Baptist Church for 44 years',
            'Father of Dr. Martin Luther King Jr.',
            'Early civil rights leader who fought against voter suppression',
            'Led a landmark voting rights march in Atlanta in 1936'
        ],
        narration: 'Martin Luther King Senior served as pastor of Ebenezer Baptist Church for 44 years. He was a pioneering civil rights leader in his own right, leading a landmark voting rights march in Atlanta in 1936. As the father of Dr. Martin Luther King Junior, his legacy of faith, courage, and justice passed directly to the next generation of the movement.'
    }
};

// =====================
// Current state
// =====================
let viewer = null;
let currentSpeech = null;
let currentScene = 'entrance';

// =====================
// Loading Screen
// =====================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.getElementById('tour-wrapper').classList.remove('hidden');
            initTour();
        }, 800);
    }, 2800); // Match the loading bar animation duration
});

// =====================
// Init Pannellum Tour
// =====================
function initTour() {
    viewer = pannellum.viewer('panorama', {
        default: {
            firstScene: 'entrance',
            autoLoad: true,
            sceneFadeDuration: 1000,
            compass: false,
            showControls: false,
            mouseZoom: true,
            draggable: true,
        },

        scenes: {
            entrance: {
                title: 'Cemetery Entrance',
                hfov: 110,
                pitch: -5,
                yaw: 0,
                type: 'equirectangular',
                panorama: 'images/equirect_001.jpg',
                hotSpots: [
                    {
                        pitch: -8,
                        yaw: 10,
                        type: 'scene',
                        text: 'Walk into Cemetery',
                        sceneId: 'main_path'
                    },
                    {
                        pitch: 2,
                        yaw: -60,
                        type: 'info',
                        text: 'South-View Cemetery',
                        createTooltipFunc: infoHotspot,
                        createTooltipArgs: {
                            title: 'South-View Cemetery',
                            body: 'Founded in 1886 by Black community leaders, South-View Cemetery is one of the oldest African American cemeteries in Atlanta. It serves as the final resting place for many prominent figures in civil rights history.'
                        }
                    },
                ]
            },

            main_path: {
                title: 'Cemetery Path',
                hfov: 110,
                pitch: -5,
                yaw: 0,
                type: 'equirectangular',
                panorama: 'images/equirect_003.jpg',
                hotSpots: [
                    {
                        pitch: -8,
                        yaw: 175,
                        type: 'scene',
                        text: 'Back to Entrance',
                        sceneId: 'entrance'
                    },
                    {
                        pitch: -8,
                        yaw: 0,
                        type: 'scene',
                        text: 'Continue to Historic Section',
                        sceneId: 'historic_section'
                    },
                    {
                        pitch: -3,
                        yaw: -60,
                        type: 'info',
                        text: 'John Wesley Dobbs',
                        createTooltipFunc: personHotspot,
                        createTooltipArgs: { personId: 'dobbs' }
                    },
                    {
                        pitch: 2,
                        yaw: 80,
                        type: 'info',
                        text: 'About the Grounds',
                        createTooltipFunc: infoHotspot,
                        createTooltipArgs: {
                            title: 'The Grounds',
                            body: 'South-View spans over 88 acres across two sites. The cemetery was established as a dignified resting place for Atlanta\'s Black community during the era of segregation, when Black residents were denied access to the city\'s white cemeteries.'
                        }
                    }
                ]
            },

            historic_section: {
                title: 'Historic Section',
                hfov: 110,
                pitch: -5,
                yaw: 0,
                type: 'equirectangular',
                panorama: 'images/equirect_006.jpg',
                hotSpots: [
                    {
                        pitch: -8,
                        yaw: 175,
                        type: 'scene',
                        text: 'Back to Path',
                        sceneId: 'main_path'
                    },
                    {
                        pitch: -8,
                        yaw: 0,
                        type: 'scene',
                        text: 'Deeper into Historic Area',
                        sceneId: 'ancient_area'
                    },
                    {
                        pitch: 2,
                        yaw: -60,
                        type: 'info',
                        text: 'Alonzo Herndon',
                        createTooltipFunc: personHotspot,
                        createTooltipArgs: { personId: 'herndon' }
                    },
                    {
                        pitch: 3,
                        yaw: 60,
                        type: 'info',
                        text: 'Historic Burials',
                        createTooltipFunc: infoHotspot,
                        createTooltipArgs: {
                            title: 'Historic Burials',
                            body: 'This section contains graves dating back to the late 1800s. Many markers belong to formerly enslaved individuals and the first generation of free Black Atlantans who built businesses, churches, and civic institutions.'
                        }
                    }
                ]
            },

            ancient_area: {
                title: 'Older Burial Ground',
                hfov: 110,
                pitch: -5,
                yaw: 0,
                type: 'equirectangular',
                panorama: 'images/equirect_007.jpg',
                hotSpots: [
                    {
                        pitch: -8,
                        yaw: 175,
                        type: 'scene',
                        text: 'Back to Historic Section',
                        sceneId: 'historic_section'
                    },
                    {
                        pitch: -8,
                        yaw: 0,
                        type: 'scene',
                        text: 'Walk to Monument Row',
                        sceneId: 'monument_row'
                    },
                    {
                        pitch: 5,
                        yaw: 30,
                        type: 'info',
                        text: 'Early Headstones',
                        createTooltipFunc: infoHotspot,
                        createTooltipArgs: {
                            title: 'Early Headstones',
                            body: 'These weathered stones mark some of the earliest burials at South-View. The modest markers reflect the material circumstances of the community at the time — their presence here is a testament to survival and remembrance.'
                        }
                    }
                ]
            },

            monument_row: {
                title: 'Marble Monument Row',
                hfov: 110,
                pitch: -5,
                yaw: 0,
                type: 'equirectangular',
                panorama: 'images/equirect_009.jpg',
                hotSpots: [
                    {
                        pitch: -8,
                        yaw: 175,
                        type: 'scene',
                        text: 'Back to Older Burial Ground',
                        sceneId: 'ancient_area'
                    },
                    {
                        pitch: -8,
                        yaw: 0,
                        type: 'scene',
                        text: 'King Family Memorial',
                        sceneId: 'king_memorial'
                    },
                    {
                        pitch: 2,
                        yaw: 90,
                        type: 'info',
                        text: 'Notable Monuments',
                        createTooltipFunc: infoHotspot,
                        createTooltipArgs: {
                            title: 'Marble Mausolea',
                            body: 'These grand marble structures mark the resting places of prominent Atlanta families. By the early 20th century, successful Black business owners and civic leaders commissioned elaborate monuments as enduring symbols of their community\'s achievement and dignity.'
                        }
                    }
                ]
            },

            king_memorial: {
                title: 'King Family Memorial',
                hfov: 110,
                pitch: -5,
                yaw: 0,
                type: 'equirectangular',
                panorama: 'images/equirect_010.jpg',
                hotSpots: [
                    {
                        pitch: -8,
                        yaw: 175,
                        type: 'scene',
                        text: 'Back to Monument Row',
                        sceneId: 'monument_row'
                    },
                    {
                        pitch: 0,
                        yaw: 30,
                        type: 'info',
                        text: 'Martin Luther King Sr.',
                        createTooltipFunc: personHotspot,
                        createTooltipArgs: { personId: 'king_sr' }
                    },
                    {
                        pitch: 5,
                        yaw: -40,
                        type: 'info',
                        text: 'King Family',
                        createTooltipFunc: infoHotspot,
                        createTooltipArgs: {
                            title: 'The King Family',
                            body: 'The King family monument stands as one of the most visited sites at South-View. Martin Luther King Sr., known as "Daddy King," is interred here along with other family members. His legacy of faith and justice laid the foundation for the civil rights movement.'
                        }
                    }
                ]
            }
        }
    });

    // Listen for scene changes
    viewer.on('scenechange', onSceneChange);
    updateMinimap('entrance');
}

// =====================
// Scene Change Handler
// =====================
function onSceneChange(sceneId) {
    currentScene = sceneId;
    updateMinimap(sceneId);
    updateSceneLabel(sceneId);
}

function updateSceneLabel(sceneId) {
    const labels = {
        entrance: 'Cemetery Entrance',
        main_path: 'Cemetery Path',
        historic_section: 'Historic Section',
        ancient_area: 'Older Burial Ground',
        monument_row: 'Marble Monument Row',
        king_memorial: 'King Family Memorial'
    };
    const label = document.getElementById('current-scene-label');
    label.style.opacity = 0;
    setTimeout(() => {
        label.textContent = labels[sceneId] || sceneId;
        label.style.opacity = 1;
    }, 300);
}

// =====================
// Mini-map
// =====================
function updateMinimap(activeScene) {
    document.querySelectorAll('.map-dot').forEach(dot => {
        dot.classList.toggle('active', dot.dataset.scene === activeScene);
    });
}

// Minimap click navigation
document.querySelectorAll('.map-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const sceneId = dot.dataset.scene;
        if (viewer && sceneId !== currentScene) {
            viewer.loadScene(sceneId);
        }
    });
});

// =====================
// Timeline Interaction
// =====================
document.querySelectorAll('.timeline-marker').forEach(marker => {
    marker.addEventListener('click', () => {
        // Highlight the clicked marker
        document.querySelectorAll('.timeline-marker').forEach(m => m.classList.remove('active'));
        marker.classList.add('active');

        // Map timeline events to people/scenes
        const year = marker.dataset.year;
        const yearToAction = {
            '1886': () => { if (viewer) viewer.loadScene('entrance'); viewer && updateMinimap('entrance'); },
            '1899': () => showPerson('king_sr'),
            '1905': () => showPerson('herndon'),
            '1927': () => showPerson('herndon'),
            '1961': () => showPerson('dobbs'),
            '1984': () => showPerson('king_sr'),
        };

        if (yearToAction[year]) yearToAction[year]();
    });
});

// =====================
// Hotspot Functions
// =====================

// Person hotspot — opens glass overlay
function personHotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('pnlm-pointer');
    hotSpotDiv.addEventListener('click', () => showPerson(args.personId));
}

// Info hotspot — toggle tooltip
function infoHotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('pnlm-pointer');
    hotSpotDiv.addEventListener('click', function () {
        const existing = hotSpotDiv.querySelector('.custom-tooltip');
        if (existing) {
            existing.remove();
            return;
        }
        const wrapper = document.createElement('div');
        wrapper.classList.add('custom-tooltip');
        wrapper.innerHTML = `<h3>${args.title}</h3><p>${args.body}</p>`;
        hotSpotDiv.appendChild(wrapper);
        wrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            wrapper.remove();
        });
    });
}

// =====================
// Person Overlay
// =====================
function showPerson(personId) {
    const person = people[personId];
    if (!person) return;

    // Stop any ongoing narration
    stopNarration();

    // Populate card
    document.getElementById('person-photo').src = person.photo;
    document.getElementById('person-name').textContent = person.name;
    document.getElementById('person-dates').textContent = person.dates;
    document.getElementById('person-facts').innerHTML =
        person.facts.map(f => `<p>${f}</p>`).join('');

    // Store current person for narration
    document.getElementById('narration-btn').dataset.personId = personId;

    // Show overlay
    const overlay = document.getElementById('person-overlay');
    overlay.classList.remove('hidden');

    // Intensify blur after a brief moment
    requestAnimationFrame(() => {
        setTimeout(() => overlay.classList.add('active-blur'), 50);
    });
}

function closePerson() {
    stopNarration();
    const overlay = document.getElementById('person-overlay');
    overlay.classList.remove('active-blur');
    setTimeout(() => overlay.classList.add('hidden'), 400);
}

// Close button
document.querySelector('.close-btn').addEventListener('click', closePerson);

// Click outside card to close
document.getElementById('person-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closePerson();
});

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePerson();
});

// =====================
// Audio Narration (Web Speech API)
// =====================
const narrationBtn = document.getElementById('narration-btn');

narrationBtn.addEventListener('click', () => {
    if (currentSpeech && speechSynthesis.speaking) {
        stopNarration();
        return;
    }

    const personId = narrationBtn.dataset.personId;
    const person = people[personId];
    if (!person || !person.narration) return;

    const utterance = new SpeechSynthesisUtterance(person.narration);
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to pick a good voice
    const voices = speechSynthesis.getVoices();
    const preferred = voices.find(v =>
        v.name.includes('Google') && v.lang.startsWith('en')
    ) || voices.find(v => v.lang.startsWith('en'));
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => {
        narrationBtn.classList.add('playing');
        narrationBtn.querySelector('span').textContent = 'Playing...';
    };

    utterance.onend = () => {
        narrationBtn.classList.remove('playing');
        narrationBtn.querySelector('span').textContent = 'Listen';
        currentSpeech = null;
    };

    utterance.onerror = () => {
        narrationBtn.classList.remove('playing');
        narrationBtn.querySelector('span').textContent = 'Listen';
        currentSpeech = null;
    };

    currentSpeech = utterance;
    speechSynthesis.speak(utterance);
});

function stopNarration() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    narrationBtn.classList.remove('playing');
    narrationBtn.querySelector('span').textContent = 'Listen';
    currentSpeech = null;
}

// Preload voices (some browsers need this)
speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();