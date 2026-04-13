'use strict';

/* ================================================================
   PEOPLE
   ================================================================ */
const people = {
  herndon: {
    name:  'Alonzo Franklin Herndon',
    dates: '1858 – 1927',
    photo: 'images/herndon.jpg',
    infographic: 'Images_SVC/Screenshot%202026-04-06%20at%2010.00.22%E2%80%AFAM.png',
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
    name:  'John Wesley Dobbs & Family',
    dates: '1882 – 1961',
    photo: 'images/dobbs.jpg',
    facts: [
      'Often called "The Mayor of Auburn Avenue," Dobbs coined the term "Sweet Auburn" for the thriving Black business and civic corridor',
      'Grand Master of Georgia\'s Prince Hall Masons; the broken column on his gravesite signifies he held that office until death',
      'Founded the Atlanta Civic and Political League, the Atlanta Negro Voters League, and the Georgia Voters League in the 1930s–40s',
      'Led a voter-registration drive in the 1940s now recognized as the birth of Atlanta\'s modern Civil Rights Era',
      'Was instrumental in desegregating the Atlanta Police Department in 1948, when eight Black officers joined the force — though they could only patrol Black neighborhoods on foot and were required to use the Butler Street YMCA as their precinct',
      'Grandfather of Maynard Jackson, Atlanta\'s first Black mayor'
    ],
    audio: null
  },
  king_sr: {
    name:  'Rev. & Mrs. Martin Luther King Sr.',
    dates: '1899 – 1984',
    photo: 'images/king_sr.jpg',
    facts: [
      'Pastor of Ebenezer Baptist Church for 44 years; involved in the Atlanta Civic and Political League and the NAACP',
      'Led a voting-rights march on Atlanta City Hall in 1936 and advocated successfully for equalization of teacher pay',
      'Served on the boards of Atlanta University and Morehouse College',
      'His wife Alberta Williams King started the Ebenezer choir while her father A. D. Williams was pastor; she was killed by a gunman as she played "The Lord\'s Prayer" during Sunday worship at Ebenezer',
      'Alberta\'s remains rest on the same side of the crypt where their son Dr. Martin Luther King Jr. was first placed after his assassination in 1968',
      'Parents of Dr. Martin Luther King Jr.'
    ],
    audio: null
  },
  williams_ad: {
    name:  'Rev. A. D. & Jennie Williams',
    dates: 'A.D. 1863 – 1931 · Jennie 1873 – 1941',
    photo: null,
    facts: [
      'Adam Daniel Williams was the second pastor of Ebenezer Baptist Church; in his first year he grew the congregation from a handful of members to more than 60',
      'Developed Ebenezer as both a religious institution and a center for political and community activity; received his doctor of divinity from Morehouse College',
      'Helped establish the Atlanta branch of the NAACP in 1917 and later served as its president',
      'Jennie Celeste Parks Williams was deeply involved in all aspects of Ebenezer and led the church\'s missionary society',
      'Their daughter, Alberta Williams King, was the mother of Dr. Martin Luther King Jr.',
      'Maternal grandparents of Dr. Martin Luther King Jr.'
    ],
    audio: null
  },
  pitts: {
    name:  'Clara Maxwell Cater Pitts',
    dates: null,
    photo: null,
    facts: [
      'Served as superintendent of the Carrie Steele Orphans Home, modernizing its operations and relocating the facility to Roy Street in southwest Atlanta',
      'Secured funding for the home through the Atlanta Community Chest — later the United Way',
      'In 1950 the orphanage was renamed the Carrie Steele Pitts Home in her honor',
      'An Atlanta Public School was also named in her honor'
    ],
    audio: null
  },
  amos: {
    name:  'Moses Amos',
    dates: null,
    photo: null,
    facts: [
      'In June 1911 passed the Georgia State pharmacy exam and became the first African American granted a druggist license by the Georgia State Board of Pharmacy',
      'Worked at the Huss Pharmacy on Peachtree Street early in his career, then became proprietor of the Gate City Drug Store on Auburn Avenue',
      'In 1914 opened a new Gate City Drugstore in the Odd Fellows Building and hired the first African American woman to work in a public place in Atlanta',
      'Employed nine young African American men who went on to earn college degrees and establish careers in pharmacy, medicine, and dentistry'
    ],
    audio: null
  },
  pace: {
    name:  'Dinah Watts Pace',
    dates: '1833 – 1930',
    photo: null,
    infographic: 'Images_SVC/Screenshot%202026-04-06%20at%2010.00.42%E2%80%AFAM.png',
    facts: [
      'Born enslaved in Athens, Georgia in 1833; as a teenager started a Sunday School in the Summer Hill neighborhood that grew into the Reed Street Baptist Church (today Paradise Missionary Baptist Church)',
      'Graduated from Atlanta University with a teaching certificate and taught in Covington, Georgia',
      'Founded one of the first orphanages for African American children in Georgia — the Covington Colored Orphans Home; Wellesley College students were regular contributors',
      'The orphanage operated until 1930 when Pace was fatally burned in an open fireplace accident'
    ],
    audio: null
  },
  adrienne_herndon: {
    name:  'Adrienne Herndon',
    dates: null,
    photo: null,
    facts: [
      'Graduated from Atlanta University and became one of the first African American faculty members at her alma mater, teaching elocution and staging Shakespearean productions',
      'Made her professional acting debut in Boston in 1904 under the stage name Anne Du Bignon',
      'Graduated from the School of Dramatic Arts in New York City in 1908',
      'Designed Diamond Hill — the Herndon family\'s two-story, fifteen-room mansion in Atlanta',
      'Wife of Alonzo Franklin Herndon'
    ],
    audio: null
  },
  wilder: {
    name:  'George "Union" Wilder',
    dates: null,
    photo: null,
    facts: [
      'Union Army veteran who settled in the Brownsville community of Atlanta after the Civil War',
      'Killed on September 22, 1906, during the Atlanta Race Massacre while defending his home with a muzzle-loaded musket against a white mob',
      'His stand in Brownsville is credited with slowing the rioters and helping stem their momentum',
      'The massacre officially acknowledged the deaths of 12 African Americans and 2 white men, though the true toll was likely higher'
    ],
    audio: null
  },
  westmoreland: {
    name:  'First Lt. Walter Westmoreland',
    dates: null,
    photo: null,
    facts: [
      'Graduated from Morehouse College and earned a master\'s degree from Atlanta University',
      'As a Tuskegee Airman, flew with the 332nd Fighter Squadron of the 302nd Group during World War II',
      'The 332nd painted the tails of their aircraft solid red, earning the nickname "Red Tail Flyers"',
      'His plane was shot down on October 13, 1944, while returning from an escort mission to Blechhammer, Germany'
    ],
    audio: null
  },
  henry_aaron: {
    name:  'Henry "Hank" Aaron',
    dates: '1934 – 2021',
    photo: null,
    facts: [
      'Surpassed Babe Ruth\'s career home run record despite enduring racial insults and death threats throughout his pursuit of the record',
      'Became the first Black American to hold a senior management position in baseball as a front office executive with the Atlanta Braves',
      'Used his Hall of Fame career as a platform to champion civil rights; served as a director on the board of the NAACP',
      'Awarded the Presidential Medal of Freedom by President George W. Bush for his philanthropy and humanitarian work',
      'Received the Thurgood Marshall Lifetime Achievement Award from the NAACP Legal Defense Fund',
      'Inducted into the International Civil Rights Walk of Fame at the Martin Luther King Jr. National Historic Park'
    ],
    audio: null
  },
  horace_mann_bond: {
    name:  'Horace Mann Bond',
    dates: '1904 – 1972',
    photo: null,
    infographic: 'Images_SVC/Screenshot%202026-04-06%20at%2011.17.20%E2%80%AFAM.png',
    facts: [
      'One of the first African Americans to earn a PhD in education',
      'President of Lincoln University and Fort Valley State University',
      'Dean of the School of Education at Atlanta University',
      'His research helped support Brown v. Board of Education, overturning "separate but equal"',
      'Father of civil rights leader and Georgia legislator Julian Bond'
    ],
    audio: null
  },
  julian_bond: {
    name:  'Julian Bond',
    dates: '1940 – 2015',
    photo: null,
    facts: [
      'Civil rights leader, politician, and scholar; his activism began as a student at Morehouse College',
      'Among the first leaders of SNCC (Student Nonviolent Coordinating Committee), organizing picket lines, sit-ins, and boycotts',
      'Elected to the Georgia House of Representatives in 1965 but was barred from his seat due to his outspoken opposition to the Vietnam War; won the right to serve through a 1967 U.S. Supreme Court ruling',
      'Served in both the Georgia House and Senate',
      'First president of the Southern Poverty Law Center; also served as president of the Atlanta NAACP chapter and later as chairman of the national NAACP'
    ],
    audio: null
  },
  john_lewis: {
    name:  'Congressman John Lewis',
    dates: '1940 – 2020',
    photo: null,
    facts: [
      'Served in the U.S. House of Representatives for Georgia\'s 5th congressional district from 1987 until his death in 2020',
      'Participated in the 1960 Nashville sit-ins and the Freedom Rides',
      'Served as chairman of the Student Nonviolent Coordinating Committee (SNCC) from 1963 to 1966',
      'One of the "Big Six" organizers of the 1963 March on Washington',
      'Widely regarded as the conscience of the U.S. Congress and a tireless champion of voting rights and nonviolent protest'
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
  1894: {
    title: 'Rev. A. D. Williams Leads Ebenezer',
    body:  'Adam Daniel Williams became pastor of Ebenezer Baptist Church in 1894, growing its congregation from just a handful of members to more than 750. He built Ebenezer into a center of political and community life, co-founded the Atlanta NAACP in 1917, and served as its first president. His daughter Alberta was the mother of Dr. Martin Luther King Jr. Rev. Williams and his wife Jennie are buried here at South-View.',
    scene: 's16'
  },
  1904: {
    title: 'Adrienne Herndon Makes Her Stage Debut',
    body:  'In 1904, Adrienne McNeil Herndon made her professional acting debut in Boston under the stage name Anne Du Bignon — one of the first African American women to pursue a professional stage career. A professor at Atlanta University, she taught elocution and staged Shakespearean productions. She later graduated from the School of Dramatic Arts in New York City (1908) and designed the Herndon family mansion, Diamond Hill. She is buried here at South-View.',
    scene: 's12'
  },
  1905: {
    title: 'Herndon Builds an Empire',
    body:  'Alonzo Herndon, born enslaved in 1858, founded the Atlanta Mutual Insurance Association in 1905. By his death in 1927 it had grown into Atlanta Life Insurance Company — the largest Black-owned stock insurance firm in America. He is buried here at South-View.',
    scene: 's13'
  },
  1906: {
    title: 'Atlanta Race Massacre',
    body:  'On September 22–24, 1906, white mobs tore through Atlanta\'s Black neighborhoods, killing residents, burning businesses, and attacking anyone in their path. Union Army veteran George "Union" Wilder, buried here at South-View, was killed defending his home in Brownsville with a muzzle-loaded musket. His stand is credited with helping slow the rioters. At least 12 Black Atlantans were killed.',
    scene: 's15'
  },
  1911: {
    title: 'Moses Amos — First Licensed Black Pharmacist in Georgia',
    body:  'In June 1911, Moses Amos passed the Georgia State pharmacy exam and became the first African American granted a druggist license by the Georgia State Board of Pharmacy. He went on to open the Gate City Drug Store on Auburn Avenue — hiring the first African American woman to work in a public place in Atlanta and mentoring nine young Black men who became professionals in pharmacy, medicine, and dentistry. He is buried here at South-View.',
    scene: 's07'
  },
  1927: {
    title: 'Herndon Passes',
    body:  'Alonzo Herndon died on July 21, 1927, at age 69, having turned a $1.25 shoeshine cloth into a financial empire. His funeral drew thousands. The company he built survived the Depression, segregation, and decades of legal battles, and still operates from Atlanta today.',
    scene: 's13'
  },
  1944: {
    title: 'Tuskegee Airman Shot Down',
    body:  'On October 13, 1944, First Lieutenant Walter Westmoreland — a Morehouse College graduate and member of the 332nd Fighter Squadron — was shot down while returning from an escort mission to Blechhammer, Germany. He and his fellow "Red Tail Flyers" proved that Black pilots could fly and fight with excellence in the face of a segregated military and a skeptical nation.',
    scene: 's11'
  },
  1948: {
    title: 'John Wesley Dobbs Desegregates Atlanta\'s Police',
    body:  'Through the Atlanta Civic and Political League and years of voter-registration work, John Wesley Dobbs helped win a historic breakthrough in 1948: eight Black officers joined the Atlanta Police Department. They were required to use the Butler Street YMCA as their precinct, could not wear uniforms to and from work, and were only permitted to patrol Black neighborhoods on foot — but the door had been opened. "The Mayor of Auburn Avenue" is buried here at South-View.',
    scene: 's02'
  },
  1950: {
    title: 'Carrie Steele Pitts Home — Named in Her Honor',
    body:  'In 1950, the Carrie Steele Orphans Home was renamed the Carrie Steele Pitts Home in recognition of superintendent Clara Maxwell Cater Pitts, who had modernized the facility, secured United Way funding, and relocated the home to Roy Street in southwest Atlanta. An Atlanta Public School also bears her name. She is buried here at South-View.',
    scene: 's04'
  },
  1961: {
    title: 'South-View\'s 75th Anniversary & The Angel Monument',
    body:  'In 1961, on the 75th anniversary of its founding, South-View dedicated the Angel monument. The front lists the names of the six founders — all born enslaved — who chartered the cemetery in 1886. The back is a who\'s who of Black Atlanta, representing a community that had built institutions, registered voters, and shaped a city from freedom\'s first generation. South-View has never been segregated — over 90,000 souls of all races and faiths rest on these grounds.',
    scene: 's02'
  },
  1963: {
    title: 'March on Washington',
    body:  'On August 28, 1963, more than 250,000 people gathered at the Lincoln Memorial. John Lewis — then chairman of SNCC and one of the "Big Six" organizers — delivered one of the day\'s most passionate speeches. Julian Bond, also organizing through SNCC, helped mobilize a generation of student activists. Both men are buried here at South-View.',
    scene: 's30'
  },
  1974: {
    title: 'Henry Aaron Breaks the Record',
    body:  'On April 8, 1974, Hank Aaron hit his 715th career home run, surpassing Babe Ruth\'s long-standing record despite years of racial hatred, death threats, and hate mail. Aaron used his Hall of Fame career as a platform for civil rights, served on the NAACP board, and received the Presidential Medal of Freedom. He rests here at South-View.',
    scene: 's27'
  },
  1984: {
    title: 'Rev. Martin Luther King Sr. Passes',
    body:  '"Daddy King" died November 11, 1984, having outlived his son Martin Jr. (assassinated, 1968) and his wife Alberta (shot at the church organ, 1974). He devoted his final years to forgiveness and reconciliation. He rests here with Alberta in the King Family Mausoleum.',
    scene: 's26'
  },
  2015: {
    title: 'Julian Bond Passes',
    body:  'Julian Bond — Civil Rights leader, SNCC co-founder, Georgia legislator, and longtime chairman of the NAACP — died on August 15, 2015. His activism began as a Morehouse student, and he spent his life organizing, litigating, and legislating for equality. He is buried here at South-View.',
    scene: 's30'
  },
  2018: {
    title: 'Bench by the Road — 50 Years After Dr. King',
    body:  'In 2018, on the 50th anniversary of the burial of Dr. Martin Luther King Jr. at South-View, the Toni Morrison Society installed a Bench by the Road plaque here to honor his legacy of nonviolence in the pursuit of social justice. The project recognizes South-View as a site of dignity and equality for African Americans for more than a century.',
    scene: 's32'
  },
  2021: {
    title: 'Juneteenth Becomes a Federal Holiday',
    body:  'On June 17, 2021, President Biden signed legislation making June 19th a federal holiday — the first new federal holiday since Martin Luther King Jr. Day in 1983. South-View Cemetery, founded by those who built Atlanta\'s Black professional class from freedom\'s first generation, stands as living testimony.',
    scene: 's01'
  }
};

/* ================================================================
   SCENE DEFINITIONS — 32 stops, one per image in sequential order
   NO in-panorama navigation hotspots — controlled by fixed HTML buttons
   ================================================================ */
const sceneDefs = [
  /* 01 */ {
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
      },
      {
        type: 'info', pitch: -8, yaw: 10, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'The Angel — Dedicated 1961',
          body: 'Dedicated in 1961 at South-View\'s 75th anniversary, this monument\'s front lists the six founders — all born enslaved — who chartered the cemetery in 1886. The back is a who\'s who of Black Atlanta. South-View has never been segregated; people of all races and religions rest on these grounds. Over 90,000 souls are currently buried here.'
        }
      }
    ]
  },
  /* 02 */ {
    id: 's02', title: 'The Angel Monument',
    file: 'scene_02.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -12, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'dobbs'
      }
    ]
  },
  /* 03 */ { id: 's03', title: 'Main Drive',           file: 'scene_03.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 04 */ {
    id: 's04', title: 'Entry Path',
    file: 'scene_04.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'pitts'
      }
    ]
  },
  /* 05 */ {
    id: 's05', title: 'Cedar Grove',
    file: 'scene_05.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'Cedar Grove',
          body: 'These ancient Southern red cedars were planted in the cemetery\'s earliest years and have stood witness to over a century of Atlanta\'s Black history. Cedar trees carry deep symbolic meaning — their evergreen boughs representing eternal life and remembrance.'
        }
      }
    ]
  },
  /* 06 */ { id: 's06', title: 'North Walk',          file: 'scene_06.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 07 */ {
    id: 's07', title: 'Moses Amos',
    file: 'scene_07.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'amos'
      }
    ]
  },
  /* 08 */ {
    id: 's08', title: 'Oak Alley',
    file: 'scene_08.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110
  },
  /* 09 */ {
    id: 's09', title: 'Dinah Watts Pace',
    file: 'scene_09.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'pace'
      }
    ]
  },
  /* 10 */ {
    id: 's10', title: 'Magnolia Walk',
    file: 'scene_10.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'Magnolia Walk',
          body: 'The Southern magnolia is Georgia\'s iconic tree, its large white blooms a symbol of endurance and beauty. The magnolias lining this path were planted in the late 19th century — their roots intertwined with the history of Atlanta\'s first generation of free Black citizens.'
        }
      }
    ]
  },
  /* 11 */ {
    id: 's11', title: 'Walter Westmoreland',
    file: 'scene_11.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -28, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'westmoreland'
      }
    ]
  },
  /* 12 */ {
    id: 's12', title: 'Adrienne Herndon',
    file: 'scene_12.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -30, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'adrienne_herndon'
      }
    ]
  },
  /* 13 */ {
    id: 's13', title: 'Alonzo Herndon',
    file: 'scene_13.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -16.2, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'herndon'
      }
    ]
  },
  /* 14 */ { id: 's14', title: 'Heritage Walk',        file: 'scene_14.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 15 */ {
    id: 's15', title: 'George "Union" Wilder',
    file: 'scene_15.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'wilder'
      }
    ]
  },
  /* 16 */ {
    id: 's16', title: 'Williams Plot',
    file: 'scene_16.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'williams_ad'
      }
    ]
  },
  /* 17 */ { id: 's17', title: 'Garden View',          file: 'scene_17.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 18 */ { id: 's18', title: 'Reflections Path',    file: 'scene_18.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 19 */ {
    id: 's19', title: 'Interior Gardens',
    file: 'scene_19.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'The Long Path',
          body: 'This central corridor of South-View has witnessed the funerals of businessmen, preachers, teachers, soldiers, and activists — the full spectrum of Black Atlanta\'s professional class. Walking it is to walk through 140 years of a community\'s joys and sorrows.'
        }
      }
    ]
  },
  /* 20 */ {
    id: 's20', title: 'West Walk',
    file: 'scene_20.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110
  },
  /* 21 */ { id: 's21', title: 'Shaded Grounds',      file: 'scene_21.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 22 */ {
    id: 's22', title: 'Memorial Overlook',
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
  /* 23 */ { id: 's23', title: 'West Grounds',        file: 'scene_23.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 24 */ { id: 's24', title: 'Heritage Section',    file: 'scene_24.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 25 */ { id: 's25', title: 'Hilltop Memorial',     file: 'scene_25.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 26 */ {
    id: 's26', title: 'King Family Mausoleum',
    file: 'scene_26.jpg', initialYaw: -30, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: -30, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'king_sr'
      }
    ]
  },
  /* 27 */ {
    id: 's27', title: 'Henry Aaron',
    file: 'scene_27.jpg', initialYaw: -30, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: -30, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'henry_aaron'
      }
    ]
  },
  /* 28 */ {
    id: 's28', title: 'Chapel View',
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
  /* 29 */ { id: 's29', title: 'Chapel Grounds',       file: 'scene_29.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 30 */ {
    id: 's30', title: 'Julian Bond',
    file: 'scene_31.jpg', initialYaw: 180, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 180, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'julian_bond'
      },
      {
        type: 'info', pitch: -8, yaw: 195, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'horace_mann_bond'
      }
    ]
  },
  /* 31 */ { id: 's31', title: 'Final Rest',           file: 'scene_30.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 32 */ {
    id: 's32', title: 'Bench by the Road',
    file: 'scene_32.jpg', initialYaw: 135, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -10, yaw: 135, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'Bench by the Side of the Road',
          body: 'Installed in 2018 on the 50th anniversary of Dr. King\'s burial, this bench and plaque are part of the Toni Morrison Society\'s memorial history initiative. It honors Dr. King\'s legacy of nonviolent pursuit of social justice and recognizes South-View as a site of dignity and equality for African Americans for more than 100 years.'
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
      const splash = document.getElementById('splash-screen');
      splash.classList.remove('hidden');
      splash.style.animation = 'splashIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards';
    }, 600);
  }, 2000);

  document.getElementById('btn-start-tour').addEventListener('click', () => {
    const splash = document.getElementById('splash-screen');
    splash.style.transition = 'opacity 0.5s';
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
      document.getElementById('tour-wrapper').classList.remove('hidden');
    }, 500);
  });

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

  /* —— Image overlay close —— */
  document.getElementById('image-overlay-close').addEventListener('click', () => {
    document.getElementById('image-overlay').classList.add('hidden');
  });
  document.getElementById('image-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) document.getElementById('image-overlay').classList.add('hidden');
  });

  /* —— Narration button (placeholder) —— */
  document.getElementById('narration-btn').addEventListener('click', () => {
    console.log('Narration requested');
  });

  document.getElementById('infographic-btn').addEventListener('click', () => {
    const btn = document.getElementById('infographic-btn');
    if (!btn.dataset.src) return;
    document.getElementById('person-overlay').classList.add('hidden');
    showInfographic(btn.dataset.src);
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
  const infographicBtn = document.getElementById('infographic-btn');
  infographicBtn.style.display = p.infographic ? '' : 'none';
  infographicBtn.dataset.src = p.infographic || '';
  document.getElementById('person-overlay').classList.remove('hidden');
}

function showInfographic(src) {
  if (!src) return;
  document.getElementById('infographic-img').src = src;
  document.getElementById('image-overlay').classList.remove('hidden');
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
