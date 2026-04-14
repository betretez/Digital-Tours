'use strict';

/* ================================================================
   PEOPLE
   ================================================================ */
const people = {
  herndon: {
    photo: 'hotspot_images/Alonzo Herndon.jpg',
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
    photo: 'hotspot_images/John Wesley Dobbs.jpg',
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
    photo: 'hotspot_images/Martin Luther King Sr..jpeg',
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
    photo: 'hotspot_images/Dinah Watts Pace.jpg',
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
    photo: 'hotspot_images/Horace Mann Bond.jpg',
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
  benjamin_mays: {
    name:  'Benjamin E. Mays',
    dates: '1894 – 1984',
    photo: 'hotspot_images/Benjamin E. Mays.webp',
    facts: [
      'Transformative president of Morehouse College from 1940 to 1967, shaping it into a premier institution for Black leadership',
      'Mentor and spiritual father to Dr. Martin Luther King Jr., who called him "the greatest teacher I ever had"',
      'Served as president of the Atlanta Board of Education from 1969 to 1981, overseeing desegregation and championing equity in public schools',
      'Author of twelve books and a nationally syndicated newspaper column read by millions',
      'His wife Sadie Gray Mays was a pioneering social worker and partner in community uplift throughout his career'
    ],
    audio: null
  },
  robert_grant: {
    name:  'Robert Grant',
    dates: null,
    photo: 'hotspot_images/Robert Grant.avif',
    facts: [
      'Skilled blacksmith and drayman in post-Civil War Atlanta, representing the vital role of Black labor in rebuilding the city',
      'Founded Zion Hill Baptist Church, embodying the intersection of labor and spiritual leadership during Reconstruction',
      'His life reflects the foundational role of the Black church in fostering community resilience and organizing African American life',
      'A testament to the first generation of freed people who built lasting institutions from the ground up'
    ],
    audio: null
  },
  crogman: {
    name:  'William H. Crogman',
    photo: 'hotspot_images/William H. Crogman.webp',
    facts: [
      'Born in Saint Martin in the Caribbean; came to the United States and became one of the foremost classical scholars of his era',
      'Served as president of Clark University (now Clark Atlanta University) from 1903 to 1910 — one of the first African Americans to lead an Atlanta University System institution',
      'Distinguished professor of classical languages and literature, known for rigorous academic standards and deep commitment to character development',
      'Champion of educational excellence for the Black community during the Reconstruction and Jim Crow eras',
      'His visionary institutional leadership fostered lasting educational progress and civic growth across the South'
    ],
    audio: null
  },
  graham_jackson: {
    name:  'Graham W. Jackson Sr.',
    dates: '1903 – 1983',
    photo: 'hotspot_images/Graham W. Jackson Sr..jpg',
    facts: [
      'Legendary Atlanta musician whose accordion performance of "Going Home" at President Franklin D. Roosevelt\'s funeral in 1945 became one of the most iconic images of American grief',
      'Served as a personal friend and musician to President Roosevelt, performing regularly at Warm Springs, Georgia',
      'Trailblazer in a segregated era, earning national acclaim for his artistic excellence and cultural influence',
      'His career highlighted the profound impact of Atlanta\'s Black community on American culture and public life',
      'Recipient of widespread recognition for his contributions to music and his role as a cultural ambassador'
    ],
    audio: null
  },
  grace_hamilton: {
    name:  'Grace Towns Hamilton',
    dates: '1907 – 1992',
    photo: 'hotspot_images/Grace Towns Hamilton.jpg',
    facts: [
      'First Black woman elected to the Georgia General Assembly, serving in the state House of Representatives from 1965 to 1984',
      'Broke both racial and gender barriers in Georgia public office, creating space for greater representation in state politics',
      'Led the Atlanta Urban League for nearly two decades, championing education reform, social justice, and equal opportunity',
      'Advocated tirelessly for marginalized communities throughout a career spanning civic, political, and legislative arenas',
      'Her legacy represents persistence, public service, and community advocacy in the face of systemic exclusion'
    ],
    audio: null
  },
  bazoline_usher: {
    name:  'Bazoline E. Usher',
    dates: '1885 – 1966',
    photo: 'hotspot_images/Bazoline E. Usher.jpg',
    facts: [
      'Dedicated 40 years to Atlanta Public Schools, breaking barriers for African American students and faculty throughout a segregated system',
      'First African American to hold an office in Atlanta City Hall, marking a historic milestone in the city\'s civic history',
      'Expanded educational opportunity for Black students in the segregated South through tireless advocacy and institutional leadership',
      'Her career shaped the trajectory of Black education in Atlanta and served as a model of perseverance and public service'
    ],
    audio: null
  },
  annie_mcpheeters: {
    name:  'Annie L. McPheeters',
    dates: '1902 – 1994',
    photo: 'hotspot_images/Annie L. McPheeters.webp',
    facts: [
      'Pioneering librarian who spent decades championing literacy and access to knowledge for Atlanta\'s Black community',
      'Fought to desegregate Atlanta\'s public library system, helping open equal access to information for African American residents',
      'Dedicated to preserving African American history and culture through her work in public libraries',
      'Her advocacy helped transform Atlanta\'s libraries into inclusive institutions serving all citizens regardless of race'
    ],
    audio: null
  },
  carolyn_yancey: {
    name:  'Carolyn Dunbar Yancey',
    dates: null,
    photo: 'hotspot_images/Carolyn Dunbar Yancey.jpg',
    facts: [
      'Celebrated teacher and education executive who dedicated her career to expanding opportunity in Atlanta\'s public schools',
      'Served on the Atlanta Board of Education for 16 years, shaping policy and advocating for students across the city',
      'First African American woman appointed to the Georgia University System Board of Regents, breaking a historic barrier in higher education governance',
      'Her career bridged classroom teaching and institutional leadership, leaving a lasting mark on education in Georgia'
    ],
    audio: null
  },
  john_lewis: {
    name:  'Congressman John Lewis',
    dates: '1940 – 2020',
    photo: 'hotspot_images/John Lewis.webp',
    facts: [
      'Key leader in the Civil Rights Movement and longtime U.S. Representative for Georgia\'s 5th Congressional District',
      'Participated in the 1960 Nashville sit-ins and the Freedom Rides',
      'Served as chairman of the Student Nonviolent Coordinating Committee (SNCC) from 1963 to 1966',
      'One of the "Big Six" organizers of the 1963 March on Washington',
      'Known for his unwavering commitment to justice and democratic participation until his death in 2020'
    ],
    audio: null
  },
  lillian_lewis: {
    name:  'Lillian Miles Lewis',
    dates: null,
    photo: 'hotspot_images/Lillian Miles Lewis.jpg',
    facts: [
      'Educator and political figure who made a lasting impact on Atlanta\'s schools through her work at Clark Atlanta University',
      'Supported her husband Congressman John Lewis\'s career while pursuing her own distinguished path in education',
      'Dedicated to empowering students and strengthening Atlanta\'s academic institutions throughout her career'
    ],
    audio: null
  },
  freddye_henderson: {
    name:  'Freddye Scarborough Henderson',
    dates: null,
    photo: 'hotspot_images/Freddye Henderson.jpg',
    facts: [
      'First African American to study Fashion Merchandising at her school, breaking a racial barrier in design education',
      'Co-founded a national organization for African American fashion designers, expanding professional networks and visibility in the industry',
      'Produced a landmark fashion show for African American people in 1953, elevating Black designers and models on a public stage',
      'Her pioneering career helped open doors in the fashion industry for generations of African American creatives'
    ],
    audio: null
  },
  jean_young: {
    name:  'Jean Childs Young',
    dates: '1933 – 1994',
    photo: 'hotspot_images/Jean Childs Young.jpg',
    facts: [
      'Education leader and children\'s rights advocate who dedicated her career to expanding opportunity for young people',
      'Built early childhood curriculum for Atlanta Public Schools, shaping foundational education for thousands of students',
      'Appointed by President Jimmy Carter to chair the 1979 International Year of the Child, bringing global attention to children\'s welfare',
      'Wife of Atlanta Mayor and UN Ambassador Andrew Young; a civic leader in her own right throughout the Civil Rights era and beyond'
    ],
    audio: null
  },
  carrie_steele_logan: {
    name:  'Carrie Steele Logan',
    dates: '1829 – 1900',
    photo: 'hotspot_images/Carrie Steele Logan.avif',
    facts: [
      'Formerly enslaved woman who founded the Carrie Steele-Pitts Home in Atlanta — the oldest African American orphanage in America still in operation',
      'Raised funds to establish the orphanage by writing and selling her autobiography and appealing to the community',
      'Dedicated her life to sheltering and caring for abandoned Black children in post-Civil War Atlanta',
      'Her legacy of compassion and determination continues through the institution she built more than 140 years ago'
    ],
    audio: null
  },
  ludie_andrews: {
    name:  'Ludie Clay Andrews',
    dates: null,
    photo: 'hotspot_images/Ludie Clay Andrews.jpg',
    facts: [
      'First African American registered nurse in the state of Georgia, breaking a racial barrier in the healthcare system',
      'Decades of leadership at Spelman College\'s MacVicar Hospital helped shape standards of care for Black patients in the South',
      'Trained and mentored generations of Black healthcare providers, expanding the pipeline for African American medical professionals',
      'Her pioneering career laid the groundwork for equitable healthcare access in Georgia and across the region'
    ],
    audio: null
  },
  geneva_haugabrooks: {
    name:  'Geneva Moton Haugabrooks',
    dates: null,
    photo: 'hotspot_images/Geneva Moton Haugabrooks.jpg',
    facts: [
      'Nicknamed "Mama Haugabrooks," she was the first and only Black woman to open a funeral home in Atlanta at the time',
      'A trailblazer for female entrepreneurs in a male-dominated industry during an era of racial and gender exclusion',
      'Her funeral home served Atlanta\'s Black community with dignity during a time when Black families had few options',
      'Her legacy represents both entrepreneurial courage and deep commitment to community care'
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
    title: 'William H. Crogman Leads Clark University',
    body:  'William H. Crogman, born in the Caribbean and one of the foremost classical scholars of his era, joined Clark University in Atlanta where he would eventually serve as president from 1903 to 1910 — one of the first African Americans to lead an Atlanta University System institution. A champion of rigorous education and character development, his career shaped generations of Black students in the South. He is buried here at South-View.',
    scene: 's14'
  },
  1904: {
    title: 'Ludie Clay Andrews — Georgia\'s First Black Registered Nurse',
    body:  'Ludie Clay Andrews became the first African American registered nurse in the state of Georgia, breaking a racial barrier in healthcare. Her decades of leadership at Spelman College\'s MacVicar Hospital shaped standards of care for Black patients and trained generations of Black healthcare providers. Her pioneering career laid the groundwork for equitable healthcare access across the South. She is buried here at South-View.',
    scene: 's05'
  },
  1905: {
    title: 'Herndon Builds an Empire',
    body:  'Alonzo Herndon, born enslaved in 1858, founded the Atlanta Mutual Insurance Association in 1905. By his death in 1927 it had grown into Atlanta Life Insurance Company — the largest Black-owned stock insurance firm in America. He is buried here at South-View.',
    scene: 's13'
  },
  1906: {
    title: 'Robert Grant Founds Zion Hill Baptist Church',
    body:  'Robert Grant, a skilled blacksmith and drayman in post-Civil War Atlanta, founded Zion Hill Baptist Church — embodying the vital intersection of Black labor and spiritual leadership during Reconstruction. His life stands as a testament to the foundational role of the Black church in fostering community resilience and organizing African American life in Atlanta\'s earliest years of freedom. He is buried here at South-View.',
    scene: 's01'
  },
  1911: {
    title: 'Bazoline E. Usher Begins Her Career in Atlanta Schools',
    body:  'Bazoline E. Usher dedicated 40 years to Atlanta Public Schools, breaking barriers for African American students and faculty throughout a segregated system. She became the first African American to hold an office in Atlanta City Hall, marking a historic milestone in the city\'s civic history. Her advocacy expanded educational opportunity for Black students across the South. She is buried here at South-View.',
    scene: 's20'
  },
  1927: {
    title: 'Herndon Passes',
    body:  'Alonzo Herndon died on July 21, 1927, at age 69, having turned a $1.25 shoeshine cloth into a financial empire. His funeral drew thousands. The company he built survived the Depression, segregation, and decades of legal battles, and still operates from Atlanta today.',
    scene: 's13'
  },
  1944: {
    title: 'Graham W. Jackson Sr. — Music at the White House',
    body:  'Graham W. Jackson Sr., legendary Atlanta musician and personal friend of President Franklin D. Roosevelt, had performed regularly at Warm Springs, Georgia throughout the 1930s and 40s. His accordion performance of "Going Home" at Roosevelt\'s funeral in 1945 became one of the most iconic images of American grief. His career highlighted the profound cultural influence of Atlanta\'s Black community on national life. He is buried here at South-View.',
    scene: 's29'
  },
  1948: {
    title: 'John Wesley Dobbs Desegregates Atlanta\'s Police',
    body:  'Through the Atlanta Civic and Political League and years of voter-registration work, John Wesley Dobbs helped win a historic breakthrough in 1948: eight Black officers joined the Atlanta Police Department. They were required to use the Butler Street YMCA as their precinct, could not wear uniforms to and from work, and were only permitted to patrol Black neighborhoods on foot — but the door had been opened. "The Mayor of Auburn Avenue" is buried here at South-View.',
    scene: 's02'
  },
  1950: {
    title: 'Carrie Steele Logan\'s Orphanage Endures',
    body:  'The Carrie Steele-Pitts Home, founded by formerly enslaved Carrie Steele Logan in the late 19th century, continued to serve Atlanta\'s most vulnerable children into the mid-20th century — becoming the oldest African American orphanage in America still in operation. Logan raised its founding funds by writing and selling her autobiography. Her legacy of compassion and determination lives on in the institution she built. She is buried here at South-View.',
    scene: 's04'
  },
  1961: {
    title: 'South-View\'s 75th Anniversary & The Angel Monument',
    body:  'In 1961, on the 75th anniversary of its founding, South-View dedicated the Angel monument. The front lists the names of the six founders — all born enslaved — who chartered the cemetery in 1886. The back is a who\'s who of Black Atlanta, representing a community that had built institutions, registered voters, and shaped a city from freedom\'s first generation. South-View has never been segregated — over 90,000 souls of all races and faiths rest on these grounds.',
    scene: 's02'
  },
  1963: {
    title: 'March on Washington',
    body:  'On August 28, 1963, more than 250,000 people gathered at the Lincoln Memorial. John Lewis — then chairman of SNCC and one of the "Big Six" organizers — delivered one of the day\'s most passionate speeches, calling for justice and democratic participation. He is buried here at South-View alongside his wife Lillian Miles Lewis.',
    scene: 's31'
  },
  1974: {
    title: 'Grace Towns Hamilton Serves in the Georgia General Assembly',
    body:  'Grace Towns Hamilton, the first Black woman elected to the Georgia General Assembly, served in the state House of Representatives from 1965 to 1984 — breaking both racial and gender barriers in Georgia public office. She previously led the Atlanta Urban League for nearly two decades, championing education reform and equal opportunity. Her legacy represents persistence and community advocacy in the face of systemic exclusion. She is buried here at South-View.',
    scene: 's29'
  },
  1984: {
    title: 'Rev. Martin Luther King Sr. Passes',
    body:  '"Daddy King" died November 11, 1984, having outlived his son Martin Jr. (assassinated, 1968) and his wife Alberta (shot at the church organ, 1974). He devoted his final years to forgiveness and reconciliation. He rests here with Alberta in the King Family Mausoleum.',
    scene: 's26'
  },
  2015: {
    title: 'John Lewis — A Life of Good Trouble',
    body:  'Congressman John Lewis, a towering figure of the Civil Rights Movement and Georgia\'s 5th Congressional District representative for over three decades, died on July 17, 2020. Known for his unwavering commitment to justice and democratic participation, he often urged people to make "good trouble." His wife Lillian Miles Lewis, an educator and civic partner, preceded him. Both rest here at South-View.',
    scene: 's31'
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
      },
      {
        type: 'info', pitch: -8, yaw: -25, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'robert_grant'
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
    id: 's04', title: 'Carrie Steele Logan',
    file: 'scene_04.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -5, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'carrie_steele_logan'
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
      },
      {
        type: 'info', pitch: -12, yaw: 10, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'ludie_andrews'
      }
    ]
  },
  /* 06 */ { id: 's06', title: 'North Walk',          file: 'scene_06.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 07 */ { id: 's07', title: 'Section 7',          file: 'scene_07.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
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
  /* 11 */ { id: 's11', title: 'Section 11',         file: 'scene_11.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 12 */ { id: 's12', title: 'Section 12',         file: 'scene_12.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
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
  /* 14 */ {
    id: 's14', title: 'William H. Crogman',
    file: 'scene_14.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -32, yaw: 50, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'crogman'
      }
    ]
  },
  /* 15 */ {
    id: 's15', title: 'Geneva Moton Haugabrooks',
    file: 'scene_15.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -5, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'geneva_haugabrooks'
      }
    ]
  },
  /* 16 */ { id: 's16', title: 'Section 16',         file: 'scene_16.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
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
    id: 's20', title: 'Bazoline E. Usher',
    file: 'scene_20.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -3, yaw: 10, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'bazoline_usher'
      }
    ]
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
  /* 24 */ {
    id: 's24', title: 'Annie L. McPheeters',
    file: 'scene_24.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -7, yaw: -20, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'annie_mcpheeters'
      }
    ]
  },
  /* 25 */ { id: 's25', title: 'Hilltop Memorial',     file: 'scene_25.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110 },
  /* 26 */ {
    id: 's26', title: 'King Family Mausoleum',
    file: 'scene_26.jpg', initialYaw: -30, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: -30, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'king_sr'
      },
      {
        type: 'info', pitch: -8, yaw: -15, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'benjamin_mays'
      }
    ]
  },
  /* 27 */ { id: 's27', title: 'Section 27',         file: 'scene_27.jpg', initialYaw: -30, initialPitch: -5, initialHfov: 110 },
  /* 28 */ {
    id: 's28', title: 'Carolyn Dunbar Yancey',
    file: 'scene_28.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 0, cssClass: 'hs-info',
        createTooltipFunc: createInfoTooltip,
        createTooltipArgs: {
          heading: 'The Memorial Chapel',
          body: 'South-View\'s chapel has hosted the final rites of some of Atlanta\'s most prominent citizens. Built to serve a community denied access to white funeral homes and churches, it became a gathering place for grieving families across Atlanta\'s Black neighborhoods for over a century.'
        }
      },
      {
        type: 'info', pitch: -15, yaw: 180, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'carolyn_yancey'
      }
    ]
  },
  /* 29 */ {
    id: 's29', title: 'Graham W. Jackson Sr. & Grace Towns Hamilton',
    file: 'scene_29.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -15, yaw: -20, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'graham_jackson'
      },
      {
        type: 'info', pitch: -15, yaw: 0, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'grace_hamilton'
      }
    ]
  },
  /* 30 */ {
    id: 's30', title: 'Horace Mann Bond',
    file: 'scene_31.jpg', initialYaw: 180, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 195, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'horace_mann_bond'
      }
    ]
  },
  /* 31 */ {
    id: 's31', title: 'John Lewis & Lillian Miles Lewis',
    file: 'scene_30.jpg', initialYaw: 0, initialPitch: -5, initialHfov: 110,
    extra: [
      {
        type: 'info', pitch: -8, yaw: 130, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'john_lewis'
      },
      {
        type: 'info', pitch: -8, yaw: 150, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'lillian_lewis'
      }
    ]
  },
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
      },
      {
        type: 'info', pitch: 5, yaw: 155, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'freddye_henderson'
      },
      {
        type: 'info', pitch: 5, yaw: 175, cssClass: 'hs-person',
        createTooltipFunc: createPersonTooltip,
        createTooltipArgs: 'jean_young'
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

  if (p.infographic) {
    document.getElementById('infographic-img').src = p.infographic;
    document.getElementById('image-overlay').classList.remove('hidden');
    return;
  }

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
