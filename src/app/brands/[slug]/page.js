import { notFound } from 'next/navigation';
import BrandOverview from '@/components/brands/BrandOverview';
import ProductDetails from '@/components/brands/ProductDetails';
import ProsAndCons from '@/components/brands/ProsAndCons';
import FinalVerdict from '@/components/brands/FinalVerdict';
import UserFeedback from '@/components/brands/UserFeedback';
const brandData = {
  'sportstech': {
    name: 'Sportstech',
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
      en: 'Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The sWalk Walkingpad represents their flagship model, combining advanced shock absorption technology with smart connectivity features.',
      de: 'Sportstech ist ein deutscher Fitnessgeräte-Hersteller, bekannt für innovative Heimfitness-Lösungen. Das sWalk Walkingpad repräsentiert ihr Flaggschiff-Modell und kombiniert fortschrittliche Stoßdämpfungstechnologie mit intelligenten Konnektivitätsfeatures.'
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: '/images/treadmills/sportstech-banner.webp',
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        'Excellent shock absorption system 111',
        'Powerful and quiet motor',
        'Smart app integration',
        'Foldable space-saving design',
        'Good value for money'
      ],
      de: [
        'Hervorragendes Stoßdämpfungssystem',
        'Leistungsstarker und leiser Motor',
        'Smart App-Integration',
        'Platzsparendes Klappdesign',
        'Gutes Preis-Leistungs-Verhältnis'
      ]
    },
    cons: {
      en: [
        'Assembly can be challenging',
        'Limited preset programs',
        'App interface could be improved'
      ],
      de: [
        'Aufbau kann anspruchsvoll sein',
        'Begrenzte voreingestellte Programme',
        'App-Interface könnte verbessert werden'
      ]
    },
    verdict: {
      en: 'The Sportstech sWalk delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.',
      de: 'Das Sportstech sWalk bietet außergewöhnlichen Wert mit seinem fortschrittlichen Dämpfungssystem und solider Bauqualität. Obwohl es einige Premium-Features fehlen mögen, glänzt es in den Grundlagen, die für Heimfitness am wichtigsten sind.'
    },
    rating: 4.9,
    buyLink: 'https://www.sportstech.de/laufband/swalk-grau'
  },
  'Citysports': {

    name: 'Citysports',
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
      en: 'Citysports is an American fitness equipment company renowned for interactive training technology. The CS-WP6 is their premium home Walkingpad featuring iFit integration and professional-grade construction.',
      de: 'Citysports ist ein amerikanisches Fitnessgeräte-Unternehmen, berühmt für interaktive Trainingstechnologie. Das CS-WP6 ist ihr Premium-HeimWalkingpad mit iFit-Integration und professioneller Konstruktion.'
    },

    bannerImage: '/images/treadmills/nor-banner.jpg',

    pros: {
      en: [
        'Powerful commercial-grade motor',
        'Large HD touchscreen display',
        'Decline capability for varied training',
        'Extensive iFit workout library',
        'Excellent build quality'
      ],
      de: [
        'Leistungsstarker Motor in kommerzieller Qualität',
        'Großes HD-Touchscreen-Display',
        'Gefälle-Funktion für abwechslungsreiches Training',
        'Umfangreiche iFit-Workout-Bibliothek',
        'Ausgezeichnete Bauqualität'
      ]
    },
    cons: {
      en: [
        'iFit subscription required for full features',
        'Higher price point',
        'Large footprint requires space'
      ],
      de: [
        'iFit-Abonnement für alle Features erforderlich',
        'Höherer Preispunkt',
        'Große Stellfläche benötigt Platz'
      ]
    },
    verdict: {
      en: 'The Citysports CS-WP6 is an excellent choice for serious runners who want gym-quality equipment at home. The iFit integration provides unmatched workout variety, though the subscription cost should be considered.',
      de: 'Das Citysports CS-WP6 ist eine ausgezeichnete Wahl für ernsthafte Läufer, die Studio-Qualität zu Hause wollen. Die iFit-Integration bietet unvergleichliche Workout-Vielfalt, obwohl die Abonnementkosten berücksichtigt werden sollten.'
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
      en: 'kiddoza, a kiddoza sister brand, focuses on providing premium features at accessible prices. The Under desk walking pad offers professional-grade performance with smart connectivity and iFit compatibility.',
      de: 'kiddoza, eine Schwestermarke von NordicTrack, konzentriert sich darauf, Premium-Features zu zugänglichen Preisen anzubieten. Das Under desk Walkingpad bietet professionelle Leistung mit intelligenter Konnektivität und iFit-Kompatibilität.'
    },

        bannerImage: '/images/treadmills/proform-banner.webp',


    pros: {
      en: [
        'Strong motor performance',
        'Decline and incline capability',
        'Good cushioning system',
        'iFit integration included',
        'Competitive pricing'
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
        'Smaller touchscreen than premium models',
        'Build quality not as robust as commercial grade',
        'Limited warranty coverage'
      ],
      de: [
        'Kleinerer Touchscreen als Premium-Modelle',
        'Bauqualität nicht so robust wie kommerzielle Qualität',
        'Begrenzte Garantieabdeckung'
      ]
    },
    verdict: {
      en: 'The kiddoza Under desk walking pad strikes an excellent balance between features and price. It provides many premium capabilities without the premium price tag, making it ideal for budget-conscious fitness enthusiasts.',
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
      en: 'Superun is known for reliable, well-built Walkingpads that focus on simplicity and durability. The B,A06-С AT represents their commitment to quality construction and user-friendly design.',
      de: 'Superun ist bekannt für zuverlässige, gut gebaute Laufbänder, die sich auf Einfachheit und Haltbarkeit konzentrieren. Das B,A06-С AT repräsentiert ihr Engagement für Qualitätskonstruktion und benutzerfreundliches Design.'
    },

        bannerImage: '/images/treadmills/horizon-banner.avif',


    pros: {
      en: [
        'Excellent build quality and reliability',
        'Smooth and quiet operation',
        'Good cushioning system',
        'Easy to use controls',
        'Strong warranty support'
      ],
      de: [
        'Ausgezeichnete Bauqualität und Zuverlässigkeit',
        'Glatter und leiser Betrieb',
        'Gutes Dämpfungssystem',
        'Einfach zu bedienende Steuerung',
        'Starke Garantieunterstützung'
      ]
    },
    cons: {
      en: [
        'Limited smart features',
        'No touchscreen display',
        'Fewer preset programs'
      ],
      de: [
        'Begrenzte Smart-Features',
        'Kein Touchscreen-Display',
        'Weniger voreingestellte Programme'
      ]
    },
    verdict: {
      en: 'The Superun B,A06-С AT excels in reliability and build quality. While it may lack some modern smart features, it delivers consistent performance and represents excellent value for those prioritizing durability.',
      de: 'Das Superun B,A06-С AT glänzt in Zuverlässigkeit und Bauqualität. Obwohl es einige moderne Smart-Features fehlen mögen, liefert es konsistente Leistung und repräsentiert ausgezeichneten Wert für diejenigen, die Haltbarkeit priorisieren.'
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
      en: 'Urevo is a premium fitness equipment manufacturer with decades of commercial gym experience. The T5 Track Connect brings commercial-grade quality to the home environment.',
      de: 'Urevo ist ein Premium-Fitnessgeräte-Hersteller mit jahrzehntelanger Erfahrung in kommerziellen Fitnessstudios. Das T5 Track Connect bringt kommerzielle Qualität in die Heimumgebung.'
    },

        bannerImage: '/images/treadmills/life-banner.jpg',
    pros: {
      en: [
        'Commercial-grade build quality',
        'Excellent shock absorption',
        'Whisper-quiet operation',
        'Superior warranty coverage',
        'Professional aesthetic'
      ],
      de: [
        'Bauqualität in kommerzieller Qualität',
        'Hervorragende Stoßdämpfung',
        'Flüsterleiser Betrieb',
        'Erstklassige Garantieabdeckung',
        'Professionelle Ästhetik'
      ]
    },
    cons: {
      en: [
        'Premium pricing',
        'Limited entertainment features',
        'Heavy and requires dedicated space'
      ],
      de: [
        'Premium-Preisgestaltung',
        'Begrenzte Entertainment-Features',
        'Schwer und benötigt dedizierten Platz'
      ]
    },
    verdict: {
      en: 'The Urevo SpaceWalk E1L Track Connect represents the pinnacle of home Walkingpad quality. While expensive, it offers unmatched durability and performance for serious fitness enthusiasts.',
      de: 'Das Urevo SpaceWalk E1L Track Connect repräsentiert den Höhepunkt der HeimWalkingpad-Qualität. Obwohl teuer, bietet es unvergleichliche Haltbarkeit und Leistung für ernsthafte Fitness-Enthusiasten.'
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