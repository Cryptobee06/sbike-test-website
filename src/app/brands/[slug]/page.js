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
      en: "Sportstech, a renowned German fitness equipment brand, has earned acclaim for merging functionality with innovation. Their flagship model, the Sportstech sWalk, combines advanced shock absorption, smart app integration, and space-saving design making it a top recommendation for quiet home treadmills and smart walking pad users.",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Lite Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/images/treadmills/sportstech-banner.webp",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Top-tier cushioning & shock absorption",
        "Quiet yet powerful motor ",
        "Smart app connectivity for tracking ",
        "Compact and foldable design",
        "Exceptional value in its class",
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        "Assembly may require extra effort",
        "Limited preset workout programs",
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
      en: "The Sportstech sWalk Lite stands out in the walking pad comparison with its superior cushioning, solid build, and thoughtful smart features. While it may lack some advanced presets, it excels in core areas essential for home fitness: comfort, performance, and smart integration.",
      de: "Das Sportstech ssWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
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
      en: "Citysports brings functionality and convenience to your home or office workout routine with the CS-WP6 Walking Pad. Built for quiet operation and compact storage, it’s a smart choice for users looking to stay active while working or managing tight spaces.",
      de: "Das Citysports CS-WP6 Walking Pad ist ein beliebter Vertreter im Bereich Under-DeskTreadmills, häufig in Walking Pad-Tests und Laufband-Kaufberatung genannt. Ideal für Homeoffice oder begrenzten Raum, punktet es mit kompakter Bauweise, klappbarer Unterbringung und einem attraktiven Preis-Leistungs-Verhältnis.",
    },

    bannerImage:
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/images/treadmills/nor-banner.jpg",

    pros: {
      en: ["Quiet motor", "Portable, thin profile", "Remote & LED display"],
      de: [
        "Geräuscharmer Betrieb",
        "Kompakte Maße ",
        "Bluetooth & Display ",
        "Guter Preis ",
      ],
    },
    cons: {
      en: [
        "Smaller deck size may limit stride for taller users",
        "Basic speed range only, no incline or advanced workout options",
      ],
      de: [
        "Ideal für Homeoffice & leises Training",
        "Perfekt für kleine Räume & Wohnbereiche",
        "Komfort & Motivation beim Training",
        "Top Budget-Option im Walkingpad-Test",
      ],
    },
    verdict: {
      en: "The Citysports CS-WP6 stands out as an affordable, fuss-free walking pad that fits small spaces without sacrificing quiet, reliable performance. It’s ideal for anyone looking to stay active inside, such as professionals working from home, light users, or first-time buyers.",
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
      en: "Kiddoza brings versatility and innovation to your fitness routine with their 2-in-1 foldable walking pad treadmill—perfect for home workouts, office use, or small-space living.",
      de: "kiddoza,  ist das optimale Walking Pad für Zuhause, das hochwertige Ausstattung zum fairen Preis bietet. Mit iFit-Kompatibilität, smarter Steuerung und starker Leistung ist es eine Top-Wahl für alle, die ein leises Laufband unter dem Schreibtisch suchen.",
    },

    bannerImage:
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/images/treadmills/proform-banner.webp",

    pros: {
      en: [
        "Versatile 2-in-1 (walk & run) option ",
        "Incline enhances calorie burn ",
        "Excellent cushioning system ",
        "Ready-to-use out of box",
      ],
      de: [
        "Starke Motorleistung",
        "Gefälle- und Steigungsfähigkeit",
        "Gutes Dämpfungssystem",
        "iFit-Integration enthalten",
        "Wettbewerbsfähige Preisgestaltung",
      ],
    },
    cons: {
      en: [
        "Maximum speed may be too limited for advanced runners",
        "Slightly higher price than basic models",
        "App features could be more robust",
      ],
      de: [
        "Kleinerer Touchscreen als Premium-Modelle",
        "Bauqualität nicht so robust wie kommerzielle Qualität",
        "Begrenzte Garantieabdeckung",
      ],
    },
    verdict: {
      en: "The Kiddoza Walking Pad Treadmill stands out as a top choice for users looking for a flexible, compact, and fitness-focused solution. Whether you are walking during video calls or upgrading to a jog, it offers convenience, effectiveness, and quality—all in one sleek machine.",
      de: "Das kiddoza Under desk Walkingpad findet eine ausgezeichnete Balance zwischen Features und Preis. Es bietet viele Premium-Fähigkeiten ohne den Premium-Preis und ist damit ideal für budgetbewusste Fitness-Enthusiasten.",
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
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun03.png",
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
      en: "The Superun Walking Pad blends innovation with convenience. Designed as a compact under-desk treadmill, it delivers solid performance and quiet operation perfect for home offices, small apartments, or busy workspaces.",
      de: "Superun ist bekannt für zuverlässige, gut gebaute Laufbänder, die sich auf Einfachheit und Haltbarkeit konzentrieren. Das B,A06-С AT repräsentiert ihr Engagement für Qualitätskonstruktion und benutzerfreundliches Design.",
    },

    bannerImage:
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/images/treadmills/horizon-banner.avif",

    pros: {
      en: [
        "Compact & foldable layout",
        "Efficient motor with solid load capacity",
        "Quiet performance—great for shared spaces",
        "Effective shock-absorbing cushion for safer workouts",
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
        "Narrow deck may feel tight for taller users",
        "Limited top speeds restrict advanced training options",
        "App features could be more intuitive or feature-rich",
      ],
      de: [
        "Keine Touchscreen-Steuerung",
        "Wenige vorgefertigte Programme",
        "Eingeschränkte Smart-Funktionalität",
      ],
    },
    verdict: {
      en: "The Superun Walking Pad stands out for its combination of portability, quiet strength, and minimal setup making it a solid fit for remote workers, fitness multitaskers, and compact living advocates.",
      de: "Das Superun B-A06-C steht im Vergleich für kompromisslose Stabilität. Ideal für alle, die ein Walking Pad für anspruchsvolle Nutzung suchen – benutzerfreundlich, solide verarbeitet und  mit Fokus auf das Wesentliche: Läuft ruhig, hält lange.",
    },
    rating: 4.5,
    // buyLink: 'https://superuntreadmill.com/products/superun%C2%AE-ba04-ultra-walking-pad-with-remote-control'
  },
  Urevo: {
    name: "Urevo",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/UREVO/ureo04.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo01.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo02.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo03.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo05.png",
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

    model: " SpaceWalk E1L",
    logo: "/images/brands/lifefitness-logo.png",
    description: {
      en: "Urevo offers stylish and functional walking pads designed for both home and office settings. Models like the SpaceWalk E1L and Strol 2E feature compact designs, quiet operation, and convenient app controls, ideal for users who want to integrate movement into their daily routine without sacrificing space or convenience.",
      de: "Urevo ist ein Premium-Fitnessgeräte-Hersteller mit jahrzehntelanger Erfahrung in kommerziellen Fitnessstudios. Das T5 Track Connect bringt kommerzielle Qualität in die Heimumgebung.",
    },

    bannerImage: "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/life-banner.jpg",
    pros: {
      en: [
        "Sleek, fold-flat build for compact spaces",
        "Ultra-quiet motor ideal for shared spaces",
        "Excellent shock absorption and joint comfort",
        "Intelligent control via app and remote ",
      ],
      de: [
        "Kommerzielle Verarbeitungsqualität",
        "Extrem leise & robust im Betrieb ",
        "Effiziente Dämpfung & Trainingsvielfalt ",
      ],
    },
    cons: {
      en: [
        "Short walking decks can feel tight for taller users",
        "Limited maximum speed; not suitable for serious running",
        "Premium models come at higher price points",
        "Some users report belt slip or early motor wear",
      ],
      de: [
        "Premium-Preisgestaltung",
        "Technisch größer & schwerer",
        "Lässt nur wenige Entertainment-Funktionen zu",
      ],
    },
    verdict: {
      en: "The Urevo walking pads deliver excellent value with their compact design, quiet performance, and smart controls. Perfect for home-office integration and daily walking, they offer strong cushioning and all-in-one convenience. Taller users or serious runners may want a more spacious or higher-performance option.",
      de: "Das Urevo Walking Pad Track Connect bringt die Qualität kommerzieller Laufbänder ins Home-Gym. Metall Schwere Konstruktion, hohe Belastbarkeit und clevere Technik machen es zu einem Top-Kandidaten für alle, die ein leistungsstarkes, leises Laufband für Zuhause suchen.",
    },
    rating: 4.5,
    // buyLink: 'https://www.urevo.com/collections/foldable-treadmill/products/urevo-foldi-3s-treadmill'
  },
  Copant: {
    name: "Copant",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0009.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0015.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0016.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0019.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/Untitled_design-removebg-preview.png",
    ],
    features: {
      en: [
        "Compact space-saving walking pad ",
        "Foldable & portable design for easy storage ",
        "Speed range approx. 1–6 km/h ",
        "2.5 HP motor for light walking",
        "LED display showing speed, time, distance & calories ",
        "Remote-control based operation ",
        "Built-in Bluetooth app support ",
        "Anti-slip walking belt surface ",
        "120–136 kg weight capacity",
        "Basic shock absorption layer ",
        "Low-noise motor for indoor use ",
        "Suitable for under-desk walking sessions ",
        "Shorter deck size ",
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
    model: "Raceable Walking Pad",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Copant Raceable Walking Pad is a slim walking pad designed primarily for light home and office walking sessions. It is suitable for users who want to add simple daily movement without needing a full treadmill. With a compact and foldable structure, it fits well in small spaces, but due to limited speed range and a shorter walking deck, it is not intended for jogging or advanced workouts. ",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Lite Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/product1brandbanner.jpg", // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Compact, easy to move and store ",
        "Quiet motor suitable for work environments",
        "Beginner-friendly design",
        "Ideal for slow walking and step tracking",
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        "Limited 6 km/h max speed restricts jogging or running",
        "No incline option",
        "Shorter and narrower belt- may feel tight for taller users ",
        "Basic cushioning; not suited for long workout sessions ",
        "No side handrails for support",
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    verdict: {
      en: "The Copant Raceable Walking Pad is a practical choice for users who want a simple walking solution for home or office use. It’s ideal for staying lightly active during work or casual daily movement like slow walks or step sessions. However, it remains best suited for short and low-intensity workouts. Users expecting features for running, incline training, or longer stride support may find it limited.",
      de: "Das Sportstech ssWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
    },
    rating: 3.8,
    buyLink: "",
  },
  Merach: {
    name: "Merach",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0044.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0045.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0037.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0048-removebg-preview.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0039-removebg-preview.png",
    ],
    features: {
      en: [
        "3-in-1 usage: Walking pad / light treadmill / under-desk mode ",
        "Foldable frame for easy storage ",
        "Speed range 1–6 km/h ",
        "2.75 HP motor ",
        "LED display for speed, distance, time & calories",
        "Mobile app connectivity support",
        "Quiet operation (~40 dB) ",
        "Shock-absorbing belt surface",
        "Weight capacity up to 120 kg",
        "Compact deck suitable for small spaces ",
        "Remote + manual control options ",
        "Built-in wheels for portability ",
        "Low-maintenance belt system",
        "Slim and lightweight body ",
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
    model: "T26B1 3-in-1 Treadmill ",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Merach T26B1 is a compact 3-in-1 treadmill designed for walking, light jogging, and under-desk movement. Built for home users who need flexibility and minimal space usage, it can be used flat like a walking pad or with handles for light treadmill workouts. While it offers good versatility for basic fitness, the limited speed range and smaller running area make it less suitable for intensive running or long-duration training sessions. ",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Lite Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/Merachbrandimg2.jpg",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Versatile 3-in-1 usage for different workout situations ",
        "Quiet motor ideal for home and shared environments ",
        "Easy to store and move thanks to compact design ",
        "Beginner-friendly setup ",
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        "Max 6 km/h speed restricts running capability ",
        "Shorter running surface may feel restrictive for taller users ",
        "No incline option to increase workout intensity ",
        "Limited stability for heavier workout sessions ",
        "Basic cushioning- not ideal for longer usage",
        "Display and controls feel minimal compared to full-size treadmills ",
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    verdict: {
      en: "The Merach T26B1 is a good choice for users who want a space-saving treadmill mainly for walking or light jogging at home. It works well for step-based indoor activity and everyday movement, especially in small apartments or office setups. However, users looking for higher speeds, incline workouts or extended comfort may find the machine limited for serious fitness training.",
      de: "Das Sportstech ssWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
    },
    rating: 3.7,
    buyLink: "",
  },
  Cursor: {
    name: "Cursor",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/81juYFfAB9L._AC_SL1500_-removebg-preview.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/curser-removebg-preview (1).png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/curser-removebg-preview.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/curserrr-removebg-preview.png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/Cursor-fitness-walking-pad-removebg-preview.png",
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
        "Dreifacher Dämpfungseffekt: 2-schichtige Platte, 7-schichtiger Gurt, Waben-Pads & Silikon-Dämpfer für gelenkschonendes Training",
        "Leiser 2,75-PS-Motor: bürstenlos, <45 dB, 3.500 Stunden Lebensdauer & energieeffizienter Betrieb",
        "Kompaktes Design (114×55×11 cm): leicht unter Bett/Sofa verstaubar; Rollen für einfaches Bewegen",
        "LED-Anzeige & 12 Programme: zeigt Zeit, Distanz, Kalorien & Geschwindigkeit; inklusive voreingestellter Trainingsmodi",
        "Bis zu 10 km/h Geschwindigkeit: geeignet für Walking & leichtes Jogging",
      ],
    },
    model: "Walking Pad",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cursor Walking Pad is a compact, foldable walking treadmill designed for home and office users who prefer light movement throughout the day. It focuses on simplicity, portability, and ease of use, making it suitable for beginners or those who want to stay active while working.",
      de: "Das CURSOR Walking Pad verbindet durchdachtes Design mit starker Leistung.Die 9 - % - Steigung macht das Training intensiver und realistischer,während die dreifache Dämpfung Laufkomfort auf Studio - Niveau bietet Der 2,75 - PS - Motor läuft leise und kraftvoll, wodurch sich das Gerät hervorragend für Wohnungen und Büros eignet Ein weiteres Highlight: Die hohen Maximalbelastung von 136 kg (Seite 3), wodurch das Gerät auch für schwerere Nutzer geeignet ist Die 114×55×11 cm Bauweise ermöglicht eine extrem platzsparende Nutzung.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/wmremove-transformed.png",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
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
      en: "The Cursor Walking Pad works well for light walking routines, especially indoors or during work hours. It’s best for users looking for a simple, compact solution without advanced workout expectations. Those who prefer versatility, longer sessions, or higher speed options may feel limited.",
      de: "Das CURSOR Walking Pad mit 9 % Steigung überzeugt mit starker Leistung, robuster Bauweise und vielseitigem Einsatz.Durch die Kombination aus Steigung, 10 km/h Top - Speed, extrem leisem Motor und dreifacher Dämpfung ist es eines der stärksten Walking Pads in seiner Preisklasse.",
    },
    rating: 3.8,
    buyLink: "",
  },
  Cazvian: {
    name: "Cazvian",
    images: [
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/cazianfinal.jpg",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/cazianfull (1).jpg",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/Cazviansideview.jpg",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/wmremove-transformed (1).png",
      "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/Untitled design (1).png",
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

    model: "Treadlite 2.0",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cazvian Treadlite 2.0 is a lightweight treadmill designed for home users who want straightforward daily walking and light cardio. It focuses on portability and simple functionality rather than heavy-duty performance. ",
      de: "Das Cazvian Walking Pad kombiniert ein kompaktes Design mit hoher Funktionalität und flexiblem Einsatzbereich. Mit 5 % Steigung, einem strömungsleisen Motor und einem stoßdämpfenden Laufgurt bietet es ein natürliches, gelenkschonendes Laufgefühl – ideal für Homeoffice, tägliche Schrittziele und leichte Fitness-Einheiten. Dank der sehr flachen Bauweise lässt sich das Gerät mühelos verstauen und passt perfekt in kleine Räume oder Büros.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "https://walkingpad-vergleich.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/flyerimagecazian (1).jpg", // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
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
    rating: 3.7,
    buyLink: "",
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
    };
  }

  return {
    title: `${brand.name} ${brand.model} Review - Expert Testing & Analysis`,
    description: brand.description[locale],
    keywords: `${brand.name}, ${brand.model}, Walkingpad review, fitness equipment test`,
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
