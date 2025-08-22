import { notFound } from 'next/navigation';
import BrandOverview from '@/components/brands/BrandOverview';
import ProductDetails from '@/components/brands/ProductDetails';
import ProsAndCons from '@/components/brands/ProsAndCons';
import FinalVerdict from '@/components/brands/FinalVerdict';
import UserFeedback from '@/components/brands/UserFeedback';
const brandData = {
  'sportstech': {
    name: 'sportstech',
    images: [
      '/sporstech/100-Sportstech-Laufband-sTreadPro (1).jpg',
      '/sporstech/create (1).jpeg',
      '/sporstech/create (2).jpeg',
      '/sporstech/create (3).jpeg',
      '/sporstech/create.jpeg',
    ],
    features: {
      en: [
        'App: Sportstech Live',
        'Display: 21.5"',
        'Color: black',
        'Dimensions: 182 x 87.5 x 177 cm',
        'User weight: up to 150 kg',
        'Speed up to 20 km/h',
       ' 15 gradient levels up to a maximum of 15%',
       ' 7 colors LEDs according to speed or pulse',
        'rotatable 21.5" touch display',
        'Folding function and transport wheels'
      ],
      de: [
        'App: Sportstech Live',
        'Display: 21,5"',
        'Farbe: Schwarz',
        'Maße: 182 x 87,5 x 177 cm',
        'Benutzergewicht: bis zu 150 kg',
        'Geschwindigkeit: bis zu 20 km/h',
        '15 Steigungsstufen bis maximal 15 %',
        '7-farbige LEDs je nach Geschwindigkeit oder Puls',
        'Drehbares 21,5"-Touchdisplay',
        'Klappfunktion und Transportrollen'
      ]
    },
     
    
    // name: 'Sportstech',
    model: 'sWalk',
    logo: '/images/brands/treadmill1.jpg',
    description: {
      en: 'Sportstech, a renowned German fitness equipment brand, has earned acclaim for merging functionality with innovation. Their flagship model, the Sportstech sWalk, combines advanced shock absorption, smart app integration, and space-saving design making it a top recommendation for quiet home treadmills and smart walking pad users.',
      de: 'Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.'
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: '/images/treadmills/sportstech-banner.webp',
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        'Top-tier cushioning & shock absorption',
        'Quiet yet powerful motor ',
        'Smart app connectivity for tracking ',
        'Compact and foldable design',
        'Exceptional value in its class'
      ],
      de: [
        'Leiser Motor & Stoßdämpfung',
        'Smarte App-Integration ',
        'Klappbar & mobil ',
        'LED & Steigung ',
      ]
    },
    cons: {
      en: [
        'Assembly may require extra effort',
        'Limited preset workout programs',
        'App interface could be improved'
      ],
      de: [
        'Verarbeitungsqualität variabel',
        'Bluetooth-Verbindung instabil',
        'Manuelle Steigung wenig komfortabel',
        'Kundenservice nicht immer agil'
      ]
    },
    verdict: {
      en: 'The Sportstech sWalk stands out in the walking pad comparison with its superior cushioning, solid build, and thoughtful smart features. While it may lack some advanced presets, it excels in core areas essential for home fitness: comfort, performance, and smart integration.',
      de: 'Das Sportstech sWalk Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.'
    },
    rating: 4.9,
    buyLink: 'https://www.sportstech.de/laufband/swalk-grau'
  },
  'Citysports': {

    name: 'citysports',
    images: [
      '/CITYSPORTS/city04.png',
      '/CITYSPORTS/city03.png',
      '/CITYSPORTS/city01.png',
      '/CITYSPORTS/city02.png',
      '/CITYSPORTS/city05.png',
    ],
    features: {
      en: [
        'Intelligent LED Console',
      'Folding Design',
      'Cushioning System',
      'Powerful Motor',
      'Spacious Belt',
      'Powerful motor 440W',
      'Speed range: 1-8KM/H',
     ' With safety handrail',
      'Lower Maintenance'

      ],
      de: [
       'Intelligente LED-Konsole',
  'Klappbares Design',
  'Dämpfungssystem',
  'Leistungsstarker Motor',
  'Geräumige Lauffläche',
  'Leistungsstarker Motor mit 440 W',
  'Geschwindigkeitsbereich: 1–8 km/h',
  'Mit Sicherheits-Handlauf',
  'Wartungsarm'
      ]
    },

    model: 'CS-WP6',
    logo: '/images/brands/nordictrack-logo.png',
    description: {
      en: 'Citysports brings functionality and convenience to your home or office workout routine with the CS-WP6 Walking Pad. Built for quiet operation and compact storage, it’s a smart choice for users looking to stay active while working or managing tight spaces.',
      de: 'Das Citysports CS-WP6 Walking Pad ist ein beliebter Vertreter im Bereich Under-DeskTreadmills, häufig in Walking Pad-Tests und Laufband-Kaufberatung genannt. Ideal für Homeoffice oder begrenzten Raum, punktet es mit kompakter Bauweise, klappbarer Unterbringung und einem attraktiven Preis-Leistungs-Verhältnis.'
    },

    bannerImage: '/images/treadmills/nor-banner.jpg',

    pros: {
      en: [
        'Quiet motor',
        'Portable, thin profile',
        'Remote & LED display',
      ],
      de: [
        'Geräuscharmer Betrieb',
        'Kompakte Maße ',
        'Bluetooth & Display ',
        'Guter Preis ',
      ]
    },
    cons: {
      en: [
        'Smaller deck size may limit stride for taller users',
        'Basic speed range only, no incline or advanced workout options',
      ],
      de: [
        'Ideal für Homeoffice & leises Training',
        'Perfekt für kleine Räume & Wohnbereiche',
        'Komfort & Motivation beim Training',
        'Top Budget-Option im Walkingpad-Test'
      ]
    },
    verdict: {
      en: 'The Citysports CS-WP6 stands out as an affordable, fuss-free walking pad that fits small spaces without sacrificing quiet, reliable performance. It’s ideal for anyone looking to stay active inside, such as professionals working from home, light users, or first-time buyers.',
      de: 'Das Citysports CS-WP6 bietet als Under-Desk Walkingpad eine praktische und günstige Einstiegslösung für tägliche Bewegung. Es überzeugt durch leisen Betrieb, einfache Bedienbarkeit und transportfreundliches Design. Wer gelegentlich und platzsparend trainieren will, findet hier eine solide Lösung – auch wenn Profis oder intensivere Nutzer ggf. ein Laufband mit längerer Lauffläche oder mehr Speed bevorzugen.'
    },
    rating: 4.5,
    // buyLink: 'https://www.city-sports.eu/collections/treadmill/products/citysports-under-desk-treadmill-citysports-laufband-citysports-treadmill-citysports-tapis-roulant-citysports-tapis-de-course?spm=..collection_c6816f06-4986-4263-97d0-4377c49999a8.collection_detail_1.9&spm_prev=..index.header_1.1'

  },
  'kiddoza': {

    name: 'kiddoza',
    images: [
      '/Kiddoza/kiddoza05.png',
      '/Kiddoza/kiddoza04.png',
      '/Kiddoza/kiddoza01.png',
      '/Kiddoza/kiddoza02.png',
      '/Kiddoza/kiddoza03.png',
  

    ],
    features: {
      en: [
        '4% Incline for better fat burning',
        '2.5 HP quiet and powerful motor',
        'Supports up to 120 kg weight',
        'Advanced shock absorption system',
        '8 silicone + 2 cushions + 5-layer anti-slip belt',
        'LCD display shows distance, speed, time, calories',
        'Dual control: remote + mobile app',
        'Compact & lightweight (20 kg)',
        'Easy to store under sofa/bed/desk',
        'No assembly needed – ready to use',
        '2-in-1 walking and jogging mode',
        'Speed range: 1–6 km/h',
        '1-year warranty with lifetime tech support'

      ],
      de: [
        '4 % Steigung für bessere Fettverbrennung',
  'Leiser und leistungsstarker 2,5-PS-Motor',
  'Tragkraft bis zu 120 kg',
  'Fortschrittliches Stoßdämpfungssystem',
  '8 Silikonpads + 2 Dämpfer + 5-lagiges Anti-Rutsch-Walkingpad',
  'LCD-Display zeigt Distanz, Geschwindigkeit, Zeit und Kalorien',
  'Duale Steuerung: Fernbedienung + Mobile App',
  'Kompakt & leicht (20 kg)',
  'Einfach unter Sofa/Bett/Schreibtisch verstaubar',
  'Keine Montage nötig – sofort einsatzbereit',
  '2-in-1 Geh- und Joggingmodus',
  'Geschwindigkeitsbereich: 1–6 km/h',
  '1 Jahr Garantie mit lebenslangem technischen Support'
      ]
    },
    model: 'Under desk walking pad',
    logo: '/images/brands/proform-logo.png',
    description: {
      en: 'Kiddoza brings versatility and innovation to your fitness routine with their 2-in-1 foldable walking pad treadmill—perfect for home workouts, office use, or small-space living.',
      de: 'kiddoza,  ist das optimale Walking Pad für Zuhause, das hochwertige Ausstattung zum fairen Preis bietet. Mit iFit-Kompatibilität, smarter Steuerung und starker Leistung ist es eine Top-Wahl für alle, die ein leises Laufband unter dem Schreibtisch suchen.'
    },

        bannerImage: '/images/treadmills/proform-banner.webp',


    pros: {
      en: [
        'Versatile 2-in-1 (walk & run) option ',
        'Incline enhances calorie burn ',
        'Excellent cushioning system ',
        'Ready-to-use out of box',
      ],
      de: [
        'Starke Motorleistung',
        'Gefälle- und Steigungsfähigkeit',
        'Gutes Dämpfungssystem',
        'iFit-Integration enthalten',
        'Wettbewerbsfähige Preisgestaltung'
      ]
    },
    cons: {
      en: [
        'Maximum speed may be too limited for advanced runners',
        'Slightly higher price than basic models',
        'App features could be more robust'
      ],
      de: [
        'Kleinerer Touchscreen als Premium-Modelle',
        'Bauqualität nicht so robust wie kommerzielle Qualität',
        'Begrenzte Garantieabdeckung'
      ]
    },
    verdict: {
      en: 'The Kiddoza Walking Pad Treadmill stands out as a top choice for users looking for a flexible, compact, and fitness-focused solution. Whether you are walking during video calls or upgrading to a jog, it offers convenience, effectiveness, and quality—all in one sleek machine.',
      de: 'Das kiddoza Under desk Walkingpad findet eine ausgezeichnete Balance zwischen Features und Preis. Es bietet viele Premium-Fähigkeiten ohne den Premium-Preis und ist damit ideal für budgetbewusste Fitness-Enthusiasten.'
    },
    rating: 4.6,
    // buyLink: 'https://www.hometreadmills.uk/products/under-desk-treadmill-2-5hp-incline-running-machine'
  },
  'Superun': {
    name: 'Superun',
  images: [
    '/Superun Raceable Walking Pad/superun04.png',
    '/Superun Raceable Walking Pad/superun05.png',
    '/Superun Raceable Walking Pad/superun01.png',
    '/Superun Raceable Walking Pad/superun02.png',
    '/Superun Raceable Walking Pad/superun03.png',

  ],
  features: {
    en: [
      'Foldable Design with Built-in Wheels',
      'Manual Incline Adjustment (0% – 6%)',
      'Supports up to 350 lbs weight capacity',
      'Brushless Motor with 3 HP Power',
      'Speed Range: 0.6 – 10 MPH',
      'Compatible with PitPat App (iOS & Android)',
      'Space-saving Design for Small Areas',
      'Tracks Distance, Speed, Time, and Calories',
      'Includes Phone Holder and Security Lock',
      'Durable Alloy Steel Frame',
      'Lightweight (86 lbs)',
      'Package Includes Tools and Lubricant'

    ],
    de: [
        'Klappbares Design mit integrierten Rollen',
      'Manuelle Steigungsverstellung (0 % – 6 %)',
      'Tragfähigkeit bis zu 160 kg',
      'Bürstenloser Motor mit 3 PS Leistung',
      'Geschwindigkeitsbereich: 1 – 16 km/h',
      'Kompatibel mit der PitPat-App (iOS & Android)',
      'Platzsparendes Design für kleine Räume',
      'Erfasst Distanz, Geschwindigkeit, Zeit und Kalorien',
      'Mit Handyhalterung und Sicherheitsverschluss',
      'Robuster Rahmen aus legiertem Stahl',
      'Leichtgewicht (39 kg)',
      'Lieferumfang: Werkzeug und Schmiermittel enthalten'
    ]
  },

    model: 'B,A06-С',
    logo: '/images/brands/horizon-logo.png',
    description: {
      en: 'The Superun Walking Pad blends innovation with convenience. Designed as a compact under-desk treadmill, it delivers solid performance and quiet operation perfect for home offices, small apartments, or busy workspaces.',
      de: 'Superun ist bekannt für zuverlässige, gut gebaute Laufbänder, die sich auf Einfachheit und Haltbarkeit konzentrieren. Das B,A06-С AT repräsentiert ihr Engagement für Qualitätskonstruktion und benutzerfreundliches Design.'
    },

        bannerImage: '/images/treadmills/horizon-banner.avif',


    pros: {
      en: [
        'Compact & foldable layout',
        'Efficient motor with solid load capacity',
        'Quiet performance—great for shared spaces',
        'Effective shock-absorbing cushion for safer workouts',
      ],
      de: [
        'Hervorragende Verarbeitungsqualität',
        'Ruhiger und stabiler Lauf ',
        'Effektive Dämpfung',
        'Lange Garantie',
      ]
    },
    cons: {
      en: [
        'Narrow deck may feel tight for taller users',
        'Limited top speeds restrict advanced training options',
        'App features could be more intuitive or feature-rich'
      ],
      de: [
        'Keine Touchscreen-Steuerung',
        'Wenige vorgefertigte Programme',
        'Eingeschränkte Smart-Funktionalität'
      ]
    },
    verdict: {
      en: 'The Superun Walking Pad stands out for its combination of portability, quiet strength, and minimal setup making it a solid fit for remote workers, fitness multitaskers, and compact living advocates.',
      de: 'Das Superun B-A06-C steht im Vergleich für kompromisslose Stabilität. Ideal für alle, die ein Walking Pad für anspruchsvolle Nutzung suchen – benutzerfreundlich, solide verarbeitet und  mit Fokus auf das Wesentliche: Läuft ruhig, hält lange.'
    },
    rating: 4.5,
    // buyLink: 'https://superuntreadmill.com/products/superun%C2%AE-ba04-ultra-walking-pad-with-remote-control'
  },
  'Urevo': {
    name: 'Urevo',
    images: [
      '/UREVO/ureo04.png',
      '/UREVO/ureo03.png', 
      '/UREVO/ureo01.png',
      '/UREVO/ureo02.png',
      '/UREVO/ureo05.png',
    ],
    features:{
      en: [
        'Compact Design with Larger Running Deck',
    '30% Increased Workout Space',
    'Ultra-Quiet Brushless Motor',
    '30% Noise Reduction',
    'Energy-Saving Motor (15% less consumption)',
    '14% Auto Incline with MegaLift Technology',
    '40% More Efficient Fat Burning',
    '8-Point Shock Absorption System',
    'Reduces Knee Impact by 30%',
    'Smart UREVO App Integration',
    'Outdoor Running Simulation',
    'Auto Incline Adjustment via App',
    'Custom Fitness Goals & Data Tracking',
    'Multiple Workout Modes with Free Resources'
      ],
      de: [
        'Kompaktes Design mit größerer Lauffläche',
        '30 % mehr Trainingsfläche',
        'Ultraleiser bürstenloser Motor',
        '30 % Geräuschreduzierung',
        'Energiesparender Motor (15 % weniger Verbrauch)',
        '14 % automatische Steigung mit MegaLift-Technologie',
        '40 % effizientere Fettverbrennung',
        '8-Punkt-Stoßdämpfungssystem',
        'Reduziert die Kniebelastung um 30 %',
        'Integration mit der smarten UREVO-App',
        'Simulation von Outdoor-Läufen',
        'Automatische Steigungsanpassung über App',
        'Individuelle Fitnessziele & Datenverfolgung',
        'Mehrere Trainingsmodi mit kostenlosen Inhalten'
      ]
    }, 

    model: ' SpaceWalk E1L',
    logo: '/images/brands/lifefitness-logo.png',
    description: {
      en: 'Urevo offers stylish and functional walking pads designed for both home and office settings. Models like the SpaceWalk E1L and Strol 2E feature compact designs, quiet operation, and convenient app controls, ideal for users who want to integrate movement into their daily routine without sacrificing space or convenience.',
      de: 'Urevo ist ein Premium-Fitnessgeräte-Hersteller mit jahrzehntelanger Erfahrung in kommerziellen Fitnessstudios. Das T5 Track Connect bringt kommerzielle Qualität in die Heimumgebung.'
    },

        bannerImage: '/images/treadmills/life-banner.jpg',
    pros: {
      en: [
        'Sleek, fold-flat build for compact spaces',
        'Ultra-quiet motor ideal for shared spaces',
        'Excellent shock absorption and joint comfort',
        'Intelligent control via app and remote ',
      ],
      de: [
        'Kommerzielle Verarbeitungsqualität',
        'Extrem leise & robust im Betrieb ',
        'Effiziente Dämpfung & Trainingsvielfalt ',
      ]
    },
    cons: {
      en: [
        'Short walking decks can feel tight for taller users',
        'Limited maximum speed; not suitable for serious running',
        'Premium models come at higher price points',
        'Some users report belt slip or early motor wear'
      ],
      de: [
        'Premium-Preisgestaltung',
        'Technisch größer & schwerer',
        'Lässt nur wenige Entertainment-Funktionen zu'
      ]
    },
    verdict: {
      en: 'The Urevo walking pads deliver excellent value with their compact design, quiet performance, and smart controls. Perfect for home-office integration and daily walking, they offer strong cushioning and all-in-one convenience. Taller users or serious runners may want a more spacious or higher-performance option.',
      de: 'Das Urevo Walking Pad Track Connect bringt die Qualität kommerzieller Laufbänder ins Home-Gym. Metall Schwere Konstruktion, hohe Belastbarkeit und clevere Technik machen es zu einem Top-Kandidaten für alle, die ein leistungsstarkes, leises Laufband für Zuhause suchen.'
    },
    rating: 4.5,
    // buyLink: 'https://www.urevo.com/collections/foldable-treadmill/products/urevo-foldi-3s-treadmill'
  }
};

export async function generateStaticParams() {
  const slugs = Object.keys(brandData);
  
  return slugs.map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const locale = 'en';
  const brand = brandData[slug];
  
  if (!brand) {
    return {
      title: 'Brand Not Found',
      description: 'The requested brand page could not be found.'
    };
  }
  
  return {
    title: `${brand.name} ${brand.model} Review - Expert Testing & Analysis`,
    description: brand.description[locale],
    keywords: `${brand.name}, ${brand.model}, Walkingpad review, fitness equipment test`,
  };
}

export default function BrandPage({ params }) {
  const { slug } = params;
  const brand = brandData[slug];
  
  if (!brand) {
    notFound();
  }
  
  return (
    <div className="min-h-screen">
      <BrandOverview brand={brand} />
      <ProductDetails brand={brand} />
      <ProsAndCons brand={brand} />
      <FinalVerdict brand={brand} />
      <UserFeedback brand={brand} />
    </div>
  );
}