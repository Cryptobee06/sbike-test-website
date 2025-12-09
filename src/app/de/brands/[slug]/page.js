import { notFound } from "next/navigation";
import BrandOverview from "@/components/brands/BrandOverview";
import ProductDetails from "@/components/brands/ProductDetails";
import ProsAndCons from "@/components/brands/ProsAndCons";
import FinalVerdict from "@/components/brands/FinalVerdict";
import UserFeedback from "@/components/brands/UserFeedback";

const brandData = {
  sportstech: {
    name: "Sportstech",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/sporstech/100-Sportstech-Laufband-sTreadPro+(1).jpg",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/sporstech/create+(1).jpeg",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/sporstech/create+(2).jpeg",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/sporstech/create+(3).jpeg",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/sporstech/create.jpeg",
    ],
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor and landscape workout videos in the app",
      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "sWalk Lite",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Lite Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/images/treadmills/sportstech-banner.webp",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Excellent shock absorption system 111",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration  ",
        "Klappbar & mobil  ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das Sportstech sWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer,ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
    },
    rating: 4.9,
    buyLink: "https://www.sportstech.de/laufband/swalk-lite",
  },
  Citysports: {
    name: "Citysports",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/CITYSPORTS/city04.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/CITYSPORTS/city03.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/CITYSPORTS/city01.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/CITYSPORTS/city02.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/CITYSPORTS/city05.png",
    ],
    features: {
      en: [
        "Intelligent LED Console",
        "Folding Design",
        "Cushioning System",
        "Powerful Motor",
        "Spacious Belt",
        "Powerful motor 440W",
        "Speed range: 1-8KM/H",
        " With safety handrail",
        "Lower Maintenance",
      ],
      de: [
        "Intelligente LED-Konsole",
        "Klappbares Design",
        "Dämpfungssystem",
        "Leistungsstarker Motor",
        "Geräumige Lauffläche",
        "Leistungsstarker Motor mit 440 W",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "Mit Sicherheits-Handlauf",
        "Wartungsarm",
      ],
    },

    model: "CS-WP6",
    logo: "/images/brands/nordictrack-logo.png",
    description: {
      en: "Citysports is an American fitness equipment company renowned for interactive training technology. The Commercial 1750 is their premium home treadmill featuring iFit integration and professional-grade construction.",
      de: "Das Citysports CS-WP6 bietet als Under-Desk Walkingpad eine praktische und günstige Einstiegslösung für tägliche Bewegung. Es überzeugt durch leisen Betrieb, einfache Bedienbarkeit und transportfreundliches Design. Wer gelegentlich und platzsparend trainieren will, findet hier eine solide Lösung – auch wenn Profis oder intensivere Nutzer ggf. ein Laufband mit längerer Lauffläche oder mehr Speed bevorzugen.",
    },

    bannerImage:
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/images/treadmills/nor-banner.jpg",

    pros: {
      en: [
        "Powerful commercial-grade motor",
        "Large HD touchscreen display",
        "Decline capability for varied training",
        "Extensive iFit workout library",
        "Excellent build quality",
      ],
      de: [
        "Geräuscharmer Betrieb",
        "Kompakte Maße ",
        "Bluetooth & Display ",
        "Guter Preis ",
      ],
    },
    cons: {
      en: [
        "iFit subscription required for full features",
        "Higher price point",
        "Large footprint requires space",
      ],
      de: [
        "Ideal für Homeoffice & leises Training",
        "Perfekt für kleine Räume & Wohnbereiche",
        "Komfort & Motivation beim Training",
        "Top Budget-Option im Walkingpad-Test",
      ],
    },
    verdict: {
      en: "The Citysports Walking Pad is an excellent choice for serious runners who want gym-quality equipment at home. The iFit integration provides unmatched workout variety, though the subscription cost should be considered.",
      de: "Das Citysports CS-WP6 bietet als Under-Desk Walkingpad eine praktische und günstige Einstiegslösung für tägliche Bewegung. Es überzeugt durch leisen Betrieb, einfache Bedienbarkeit und transportfreundliches Design. Wer gelegentlich und platzsparend trainieren will, findet hier eine solide Lösung – auch wenn Profis oder intensivere Nutzer ggf. ein Laufband mit längerer Lauffläche oder mehr Speed bevorzugen.",
    },
    rating: 4.5,
    // buyLink: 'https://www.city-sports.eu/collections/treadmill/products/citysports-under-desk-treadmill-citysports-laufband-citysports-treadmill-citysports-tapis-roulant-citysports-tapis-de-course?spm=..collection_c6816f06-4986-4263-97d0-4377c49999a8.collection_detail_1.9&spm_prev=..index.header_1.1'
  },
  kiddoza: {
    name: "Kiddoza",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza05.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza04.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza01.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza02.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza03.png",
    ],
    features: {
      en: [
        "4% Incline for better fat burning",
        "2.5 HP quiet and powerful motor",
        "Supports up to 120 kg weight",
        "Advanced shock absorption system",
        "8 silicone + 2 cushions + 5-layer anti-slip belt",
        "LCD display shows distance, speed, time, calories",
        "Dual control: remote + mobile app",
        "Compact & lightweight (20 kg)",
        "Easy to store under sofa/bed/desk",
        "No assembly needed – ready to use",
        "2-in-1 walking and jogging mode",
        "Speed range: 1–6 km/h",
        "1-year warranty with lifetime tech support",
      ],
      de: [
        "4 % Steigung für bessere Fettverbrennung",
        "Leiser und leistungsstarker 2,5-PS-Motor",
        "Tragkraft bis zu 120 kg",
        "Fortschrittliches Stoßdämpfungssystem",
        "8 Silikonpads + 2 Dämpfer + 5-lagiges Anti-Rutsch-Walkingpad",
        "LCD-Display zeigt Distanz, Geschwindigkeit, Zeit und Kalorien",
        "Duale Steuerung: Fernbedienung + Mobile App",
        "Kompakt & leicht (20 kg)",
        "Einfach unter Sofa/Bett/Schreibtisch verstaubar",
        "Keine Montage nötig – sofort einsatzbereit",
        "2-in-1 Geh- und Joggingmodus",
        "Geschwindigkeitsbereich: 1–6 km/h",
        "1 Jahr Garantie mit lebenslangem technischen Support",
      ],
    },
    model: "Under desk walking pad",
    logo: "/images/brands/proform-logo.png",
    description: {
      en: "Kiddoza,  focuses on providing premium features at accessible prices. The Pro 2000 offers professional-grade performance with smart connectivity and iFit compatibility.",
      de: "Das Kiddoza Under desk walking pad, ist das optimale Walking Pad für Zuhause, das hochwertige Ausstattung zum fairen Preis bietet. Mit iFit-Kompatibilität, smarter Steuerung und starker Leistung ist es eine Top-Wahl für alle, die ein leises Laufband unter dem Schreibtisch suchen.",
    },

    bannerImage:
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/images/treadmills/proform-banner.webp",

    pros: {
      en: [
        "Strong motor performance",
        "Decline and incline capability",
        "Good cushioning system",
        "iFit integration included",
        "Competitive pricing",
      ],
      de: [
        "Leistungsstarker, leiser Motor",
        "Steigungsfunktion & gute Dämpfung",
        "iFit-Integration inklusive",
      ],
    },
    cons: {
      en: [
        "Smaller touchscreen than premium models",
        "Build quality not as robust as commercial grade",
        "Limited warranty coverage",
      ],
      de: [
        "Kleiner Touchscreen im Vergleich zu Premium-Modellen",
        "Verarbeitung nicht auf kommerziellem Niveau",
        "Eingeschränkte Garantie",
      ],
    },
    verdict: {
      en: "The kiddoza Walking Pad strikes an excellent balance between features and price. It provides many premium capabilities without the premium price tag, making it ideal for budget-conscious fitness enthusiasts.",
      de: "Das Kiddoza Under-Desk Walking Pad bietet ein beeindruckendes Preis-Leistungs-Verhältnis. Es kombiniert Walking-Pad-Essentials wie Neigungsfunktion,App-Anbindung und Kompaktheit – perfekt für alle, die nach einem qualitativ hochwertigen,budgetfreundlichen Walking Pad für das Home-Gym suchen.",
    },
    rating: 4.6,
    // buyLink: 'https://www.hometreadmills.uk/products/under-desk-treadmill-2-5hp-incline-running-machine'
  },
  Superun: {
    name: "Superun",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun04.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun05.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun01.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun02.png",
      "",
    ],
    features: {
      en: [
        "Foldable Design with Built-in Wheels",
        "Manual Incline Adjustment (0% – 6%)",
        "Supports up to 350 lbs weight capacity",
        "Brushless Motor with 3 HP Power",
        "Speed Range: 0.6 – 10 MPH",
        "Compatible with PitPat App (iOS & Android)",
        "Space-saving Design for Small Areas",
        "Tracks Distance, Speed, Time, and Calories",
        "Includes Phone Holder and Security Lock",
        "Durable Alloy Steel Frame",
        "Lightweight (86 lbs)",
        "Package Includes Tools and Lubricant",
      ],
      de: [
        "Klappbares Design mit integrierten Rollen",
        "Manuelle Steigungsverstellung (0 % – 6 %)",
        "Tragfähigkeit bis zu 160 kg",
        "Bürstenloser Motor mit 3 PS Leistung",
        "Geschwindigkeitsbereich: 1 – 16 km/h",
        "Kompatibel mit der PitPat-App (iOS & Android)",
        "Platzsparendes Design für kleine Räume",
        "Erfasst Distanz, Geschwindigkeit, Zeit und Kalorien",
        "Mit Handyhalterung und Sicherheitsverschluss",
        "Robuster Rahmen aus legiertem Stahl",
        "Leichtgewicht (39 kg)",
        "Lieferumfang: Werkzeug und Schmiermittel enthalten",
      ],
    },

    model: "B,A06-С",
    logo: "/images/brands/horizon-logo.png",
    description: {
      en: "Superun is known for reliable, well-built treadmills that focus on simplicity and durability. The 7.8 AT represents their commitment to quality construction and user-friendly design.",
      de: "Superun ist bekannt für zuverlässige, gut gebaute Laufbänder, die sich auf Einfachheit und Haltbarkeit konzentrieren. Das 7.8 AT repräsentiert ihr Engagement für Qualitätskonstruktion und benutzerfreundliches Design.",
    },

    bannerImage:
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/images/treadmills/horizon-banner.avif",

    pros: {
      en: [
        "Excellent build quality and reliability",
        "Smooth and quiet operation",
        "Good cushioning system",
        "Easy to use controls",
        "Strong warranty support",
      ],
      de: [
        "Hervorragende Verarbeitungsqualität",
        "Ruhiger und stabiler Lauf ",
        "Effektive Dämpfung",
        "Lange Garantie",
      ],
    },
    cons: {
      en: [
        "Limited smart features",
        "No touchscreen display",
        "Fewer preset programs",
      ],
      de: [
        "Keine Touchscreen-Steuerung",
        "Wenige vorgefertigte Programme",
        "Eingeschränkte Smart-Funktionalität",
      ],
    },
    verdict: {
      en: "The Superun Walking Pad excels in reliability and build quality. While it may lack some modern smart features, it delivers consistent performance and represents excellent value for those prioritizing durability.",
      de: "Das Superun B-A06-C überzeugt im Walking Pad Vergleich mit zuverlässiger Technik,hochwertiger Verarbeitung und klarer Benutzerführung. Es ist eine ausgezeichnete Wahl für Fitness-Nutzer, die ein langlebiges, geräuscharmes Gerät ohne überflüssigen Schnickschnack suchen.",
    },
    rating: 4.5,
    // buyLink: 'https://superuntreadmill.com/products/superun%C2%AE-ba04-ultra-walking-pad-with-remote-control'
  },
  Urevo: {
    name: "Urevo",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/UREVO/ureo04.png",
      "/UREVO/ureo03.png",
      "/UREVO/ureo01.png",
      "/UREVO/ureo02.png",
      "/UREVO/ureo05.png",
    ],
    features: {
      en: [
        "Compact Design with Larger Running Deck",
        "30% Increased Workout Space",
        "Ultra-Quiet Brushless Motor",
        "30% Noise Reduction",
        "Energy-Saving Motor (15% less consumption)",
        "14% Auto Incline with MegaLift Technology",
        "40% More Efficient Fat Burning",
        "8-Point Shock Absorption System",
        "Reduces Knee Impact by 30%",
        "Smart UREVO App Integration",
        "Outdoor Running Simulation",
        "Auto Incline Adjustment via App",
        "Custom Fitness Goals & Data Tracking",
        "Multiple Workout Modes with Free Resources",
      ],
      de: [
        "Kompaktes Design mit größerer Lauffläche",
        "30 % mehr Trainingsfläche",
        "Ultraleiser bürstenloser Motor",
        "30 % Geräuschreduzierung",
        "Energiesparender Motor (15 % weniger Verbrauch)",
        "14 % automatische Steigung mit MegaLift-Technologie",
        "40 % effizientere Fettverbrennung",
        "8-Punkt-Stoßdämpfungssystem",
        "Reduziert die Kniebelastung um 30 %",
        "Integration mit der smarten UREVO-App",
        "Simulation von Outdoor-Läufen",
        "Automatische Steigungsanpassung über App",
        "Individuelle Fitnessziele & Datenverfolgung",
        "Mehrere Trainingsmodi mit kostenlosen Inhalten",
      ],
    },

    model: "SpaceWalk E1L",
    logo: "/images/brands/lifefitness-logo.png",
    description: {
      en: "Urevo is a premium fitness equipment manufacturer with decades of commercial gym experience. The T5 Track Connect brings commercial-grade quality to the home environment.",
      de: "Urevo ist ein Premium-Fitnessgeräte-Hersteller mit jahrzehntelanger Erfahrung in kommerziellen Fitnessstudios. Das T5 Track Connect bringt kommerzielle Qualität in die Heimumgebung.",
    },

    bannerImage: "/images/treadmills/life-banner.jpg",
    pros: {
      en: [
        "Commercial-grade build quality",
        "Excellent shock absorption",
        "Whisper-quiet operation",
        "Superior warranty coverage",
        "Professional aesthetic",
      ],
      de: [
        "Bauqualität in kommerzieller Qualität",
        "Hervorragende Stoßdämpfung",
        "Flüsterleiser Betrieb",
        "Erstklassige Garantieabdeckung",
        "Professionelle Ästhetik",
      ],
    },
    cons: {
      en: [
        "Premium pricing",
        "Limited entertainment features",
        "Heavy and requires dedicated space",
      ],
      de: [
        "Premium-Preisgestaltung",
        "Begrenzte Entertainment-Features",
        "Schwer und benötigt dedizierten Platz",
      ],
    },
    verdict: {
      en: "The Urevo Walking Pad Track Connect represents the pinnacle of home treadmill quality. While expensive, it offers unmatched durability and performance for serious fitness enthusiasts.",
      de: "Urevo Track Connect (SpaceWalk E1L) belegt einen Spitzenplatz im Walkingpad Vergleich für hochwertige Home-Laufbänder. Mit einer Bewertung von 4,5/5 überzeugt es durch hervorragende Verarbeitung, Trainingstiefe und Komfort – ideal für Fitnessenthusiasten mit hohen Ansprüchen.",
    },
    rating: 4.5,
    // buyLink: 'https://www.urevo.com/collections/foldable-treadmill/products/urevo-foldi-3s-treadmill'
  },
  Copant: {
    name: "Copant",
    images: [
      "/Product1/IMG_0009.png",
      "/Product1/IMG_0015.png",
      "/Product1/IMG_0016.png",
      "/Product1/IMG_0019.png",
      "/Product1/Untitled_design-removebg-preview.png",
    ],

    // ⭐ FIXED: Full 15 features (EN) & all 7 features (DE)
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor & landscape workout videos in the app",
      ],

      de: [
        "2,5-HP-Motor & 6 km/h: kräftiger Motor für Walking-Workouts bis 6 km/h",
        "136 kg Traglast & langlebiger Stahlrahmen",
        "App  und Fernbedienung: Steuerung via Smartphone App und integrierter LCD Anzeige; inklusive Fernbedienung ",
        "AI Training & Kurse: Smarte Begleitung, professionelle Trainingsprogramme und Fortschrittsanalyse ",
        "Multiplayer Rennen & Community: Online Rennen gegen andere Nutzer für zusätzliche Motivation ",
        "Antirutsch  und Stoßdämpfungsfläche: schont Gelenke und sorgt für sicheren Stand",
        "Leicht & mobil: kompakte Abmessungen (90 cm Länge) mit Rollen; leiser Betrieb unter 55 dB ",
      ],
    },

    model: "Raceable Walking Pad",
    logo: "/images/brands/treadmill1.jpg",

    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Das Copant Raceable Walking Pad ist ein interaktives Walkingpad mit App-Anbindung und KI-Unterstützung.Es kombiniert einen leisen 2,5-PS-Motor mit bis zu 6 km/h Geschwindigkeit und trägt Nutzer bis 136 kg. Mit Features wie AI-Training, Multiplayer-Rennen und Wearable-Kompatibilität richtet es sich an tech-affine Nutzer, die beim Home-Workout Spaß und Abwechslung suchen",
    },

    bannerImage: "/Product1/product1brandbanner.jpg",

    pros: {
      en: [
        "Excellent shock absorption system",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        "Leiser Betrieb (<55 dB)",
        "AI-Coaching & Trainingskurse",
        "Multiplayer-Rennen & soziale Motivation",
        "Robuster Stahlrahmen & hohe Traglast",
        "Komfortable, stoßdämpfende Lauffläche",
        "App- und Fernbedienung für intuitive Steuerung",
      ],
    },

    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        "Nur für Technik-Fans & soziale Workouts",
        "Nur für kleine Räume & Homeoffice",
        "App-Abhängigkeit für viele Funktionen",
        "Begrenzte Höchstgeschwindigkeit (6 km/h)"
      ],
    },

    verdict: {
      en: "The Copant delivers exceptional features with AI coaching, multiplayer races, and quiet motor performance.",
      de: "Das Copant Raceable Walking Pad vereint klassische Walkingpad-Funktionen mit modernem AI-Coaching und Online-Racing. Der 2,5-PS-Motor, die App-Steuerung und die gelenkschonende Lauffläche bieten ein komfortables Training für Nutzer bis 136 kg.Besonders überzeugend sind die interaktiven Funktionen: professionelle Trainingskurse,KI-Begleitung und Multiplayer-Rennen sorgen für Abwechslung und Motivation.Wer schnellere Laufgeschwindigkeiten sucht oder sich nicht mit Apps beschäftigen möchte,wird durch das begrenzte Tempo und die App-Abhängigkeit jedoch eingeschränkt",
    },

    rating: 4.5,
  },
  Merach: {
    name: "Merach",
    images: [
      "/Merach/IMG_0044.png",
      "/Merach/IMG_0045.png",
      "/Merach/IMG_0037.png",
      "/Merach/IMG_0048-removebg-preview.png",
      "/Merach/IMG_0039-removebg-preview.png",
    ],
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor and landscape workout videos in the app",
      ],
      de: [
        "3-in-1-Modus: Work-, Walking- und Jogging-Modus für 0,6–3,8 mph (≈1– 6 km/h)",
        "Leiser 2,75-HP-Motor mit Doppel-Turbinen-Design (<40 dB)",
        "120 kg Traglast dank integrierter Druckguss-Stahlkonstruktion",
        "Magnetische Fernbedienung & LED-Anzeige für einfache Steuerung",
        " 5-lagiger, gedämpfter Laufgurt für gelenkschonendes Training",
        "Kompakte Maße (116 × 47,6 × 13 cm) & nur 18 kg mit Transportrollen",
        "App-Integration (MERACH, Kinomap, Zwift, Apple Health, Google Fit)",
      ],
    },

    // name: 'Sportstech',
    model: "T26B1 3-in-1 Treadmill",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Das Merach T26B1 ist ein kompaktes 3-in-1-Walkingpad mit robustem Stahlrahmen und flüsterleisem 2,75-HP-Motor. Es eignet sich ideal für Homeoffice und Wohnräume: Mit 1–6 km/h Höchstgeschwindigkeit, 120 kg Traglast und einem Gewicht von nur ca. 18 kg lässt es sich platzsparend verstauen und sorgt für ungestörte Bewegung.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Merach/Merachbrandimg2.jpg",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Excellent shock absorption system 111",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        "Flüsterleiser Betrieb",
        "Variable Geschwindigkeiten  ",
        "Robuster Stahlrahmenu",
        "Komfortabler Laufgurt ",
        "Platzsparendes Design",
        "Einfache Bedienungu",
      ],
    },
    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        "Nur für Homeoffice & leises Training",
        "Nur für kleine Räume & enge Wohnbereiche",
        "App-gestützte Motivation notwendig",
        "Begrenzte Höchstgeschwindigkeit (6 km/h)",
      ],
    },
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das Merach T26B1 bietet ein leises und platzsparendes Laufband-Erlebnis für den Alltag.Der stabile Stahlrahmen, die flexible 3-in-1-Nutzung und die komfortable Bedienung machen es zur optimalen Wahl für das Homeoffice oder kleine Wohnungen.Ambitionierte Läufer, die höhere Geschwindigkeiten oder längere Laufflächen benötigen,sollten sich allerdings nach größeren Modellen umsehen",
    },
    rating: 4.6,
    // buyLink: ''
  },
  Cursor: {
    name: "Cursor",
    images: [
      "/Cursor/81juYFfAB9L._AC_SL1500_-removebg-preview.png",
      "/Cursor/curser-removebg-preview (1).png",
      "/Cursor/curser-removebg-preview.png",
      "/Cursor/curserrr-removebg-preview.png",
      "/Cursor/Cursor-fitness-walking-pad-removebg-preview.png",
    ],
    features: {
      en: [
        "Slim, space-saving foldable frame",
        "Quiet motor suitable for office environments",
        "LED display for time, steps, speed, and calories",
        "Remote-control operation",
        "Walking-friendly speed range",
        "Anti-slip belt surface",
        "Easy transportation wheels",
        "Minimal assembly required",
        "Safety auto-stop feature",
        "App-free operation",
        "Lightweight build",
        "Easy to store under desks or sofas",
        "Basic tracking metrics",
      ],
      de: [
        "9 % manuelle Steigung: simuliert realistisches Berglaufgefühl; erhöht Kalorienverbrauch bis zu 60 %",
        "Dreifacher Dämpfungseffekt: 2-schichtige Platte, 7-schichtiger Gurt,4 Waben-Pads & 8 Silikon-Dämpfer für gelenkschonendes Training",
        "Leiser 2,75-PS-Motor: bürstenlos Motor (1865 W), <45 dB, 3.500 Stunden Lebensdauer & energieeffizienter Betrieb",
        "Kompaktes Design (114×55×11 cm): leicht unter Bett/Sofa verstaubar; Rollen für einfaches Bewegen",
        "LED-Anzeige & 12 Programme: zeigt Zeit, Distanz, Kalorien & Geschwindigkeit; inklusive voreingestellter Trainingsmodi",
        "Bis zu 10 km/h Geschwindigkeit: geeignet für Walking & leichtes Jogging",
      ],
    },

    // name: 'Sportstech',
    model: "Walking Pad",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cursor Walking Pad is a compact, foldable walking treadmill designed for home and office users who prefer light movement throughout the day. It focuses on simplicity, portability, and ease of use, making it suitable for beginners or those who want to stay active while working.",
      de: "Das CURSOR Walking Pad steht für durchdachtes Home-Fitness-Design und starke Performance. Mit Features wie der 9-%-Steigung, der hochwertigen Dreifach-Dämpfung und dem leisen 2,75-PS-Motor eignet es sich ideal für Wohnungen und Büros. Dank einer Tragkraft von 136 kg und der kompakten 114×55×11-cm-Bauweise zählt das Gerät zu den vielseitigsten und platzsparendsten Modellen im Walking-Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Cursor/wmremove-transformed.png",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Very compact and easy to store",
        "Quiet operation — doesn’t disturb others",
        "Beginner-friendly and simple to use",
      ],
      de: [
        "9 % Steigung für stark erhöhten Trainingsreiz",
        "2,75 - PS - bürstenloser Motor (<45 dB)",
        "Dreifache Dämpfung (7 - lagiger Belt, Silikon, Gummi - Pads)",
        "Bis 10 km/h – ideal zum Walken & Joggen",
        "Hohe Belastbarkeit: 136 kg",
        " Sehr flaches Design (11 cm Höhe)",
        "12 vorinstallierte Programme",
        "Kein Aufbau nötig (kommt montiert)",
        "Leicht zu verstauen dank Rollen",
      ],
    },
    cons: {
      en: [
        "Limited speed range — not suitable for jogging",
        "Cushioning is minimal for longer walks",
        "Display features are quite basic",
        "Belt length may feel short for taller users",
      ],
      de: [
        "Steigung muss manuell eingestellt werden",
        "Lauffläche etwas kürzer als bei großen Studiogeräten",
        "Kein App-Tracking",
        "Die Steigungseinstellung benötigt Werkzeug",
        "Für sehr große Schritte beim schnellen Gehen etwas kurz",
        "Motor bei höherem Tempo nicht immer gleichmäßig",
        "Nutzer berichten über Verziehen des Laufbands bei schnellerem Tempo",
        "Bei intensiver Nutzung spürbar lauter als angegeben",
      ],
    },
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das CURSOR Walking Pad bietet eine solide Performance für leichtes bis moderates Training und punktet vor allem mit seiner 9-%-Steigung und der hohen Tragkraft. Für Nutzer, die ein flaches, preiswertes Walking Pad für regelmäßiges Walken oder gelegentliches Joggen suchen, ist es eine gute Wahl. Allerdings zeigt das Gerät Schwächen bei der Steigungsverstellung, der kurzen Lauffläche und der Stabilität bei höherem Tempo, weshalb es für anspruchsvollere Läufer weniger geeignet ist.",
    },
    rating: 3.9,
    // buyLink: ''
  },
  Cazvian: {
    name: "Cazvian",
    images: [
      "/Cazvian/cazianfinal.jpg",
      "/Cazvian/cazianfull (1).jpg",
      "/Cazvian/Cazviansideview.jpg",
      "/Cazvian/wmremove-transformed (1).png",
      "/Cazvian/Untitled design (1).png",
    ],
    features: {
      en: [
        "User-friendly control panel",
        "Compact footprint",
        "Suitable for light daily walking",
        "Low-noise motor",
        "Basic speed adjustment",
        "Basic calorie & distance tracking",
        "Shock-reducing walking surface",
        "Transport wheels for mobility",
        "Foldable handle (in some versions)",
        "Easy setup",
        "Simple maintenance",
        "Energy-efficient motor",
        "Smooth belt movement",
      ],
      de: [
        "Manuelle 5-%-Steigung für intensiveres Walking; mechanisch einstellbar und nicht während des Trainings veränderbar.",
        "Leiser Motor für 1–6 km/h mit stabilem Stahlrahmen für ruhigen Betrieb und hohe Langlebigkeit.",
        "5-lagiger rutschfester Laufgurt mit Stoßdämpfung, 38×90-cm Fläche und 6-cm Sicherheitsrändern.",
        "LED-Anzeige und zuverlässige Fernbedienung; minimalistische Ausstattung ohne Programme oder App.",
        " Extrem kompakt mit 16 kg und 10,5 cm Höhe; Platzsparend, aber weniger stabil und mit kürzerer Lauffläche.",
      ],
    },

    // name: 'Sportstech',
    model: "– Walking Pad für Zuhause & Büro",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cazvian Treadlite 2.0 is a lightweight treadmill designed for home users who want straightforward daily walking and light cardio. It focuses on portability and simple functionality rather than heavy-duty performance.",
      de: "Das Cazvian Walking Pad kombiniert ein kompaktes Design mit hoher Funktionalität und flexiblem Einsatzbereich. Mit 5 % Steigung, einem strömungsleisen Motor und einem stoßdämpfenden Laufgurt bietet es ein natürliches, gelenkschonendes Laufgefühl – ideal für Homeoffice, tägliche Schrittziele und leichte Fitness-Einheiten. Dank der sehr flachen Bauweise lässt sich das Gerät mühelos verstauen und passt perfekt in kleine Räume oder Büros.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Cazvian/flyerimagecazian (1).jpg",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Lightweight and easy to move around",
        "Good for beginners",
        "Quiet and minimalistic design",
      ],
      de: [
        "Sehr kompaktes, flaches Design",
        "Geringes Gewicht (16,25 kg)",
        "Einfache Bedienung per Fernbedienung",
        "5-%-Steigung für leicht erhöhten Trainingsreiz",
        "Gute Geräuschwerte für Homeoffice",
        "Sofort einsatzbereit ohne Montage",
      ],
    },
    cons: {
      en: [
        "Low max speed not suitable for fitness enthusiasts",
        "Display and features are quite basic",
        "Cushioning support could be improved",
      ],
      de: [
        "Steigung nur manuell und nicht während des Trainings verstellbar",
        "Lauffläche relativ kurz (38×90 cm) für größere Personen",
        "Kein Joggen möglich (max. 6 km/h)",
        "Keine App-Integration oder Trainingsprogramme",
        "Etwas einfacher Motor, der bei höherer Last spürbar wird",
        "Materialqualität wirkt eher auf Einsteiger-Niveau",
      ],
    },
    verdict: {
      en: "The Cazvian Treadlite 2.0 performs well for short, simple workouts. It’s suitable for users who prefer occasional walking but may feel too limited for those looking for long-duration training, higher speeds, or more versatile workout features.",
      de: "Das Cazvian Walking Pad ist eine gute Lösung für leichte, alltägliche Bewegung im Homeoffice — besonders für Nutzer, die ein leichtes, flaches, unkompliziertes Gerät suchen.Es ist ideal für Walking-Sessions bis 6 km/h und kurze Nutzungseinheiten.Weniger geeignet ist es für größere Personen, intensives Training oder Nutzer, die ein sehr stabiles und komfortables Laufgefühl erwarten",
    },
    rating: 4.1,
    // buyLink: ''
  },
};

export async function generateStaticParams() {
  const slugs = Object.keys(brandData);

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const locale = "en";
  const brand = brandData[slug];

  if (!brand) {
    return {
      title: "Brand Not Found",
      description: "The requested brand page could not be found.",
      icons: {
        icon: "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/fav-icon.png",
      },
    };
  }

  return {
    title: `${brand.name} ${brand.model} Review - Expert Testing & Analysis`,
    description: brand.description[locale],
    keywords: `${brand.name}, ${brand.model}, treadmill review, fitness equipment test`,
    icons: {
      icon: "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/fav-icon.png",
    },
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
