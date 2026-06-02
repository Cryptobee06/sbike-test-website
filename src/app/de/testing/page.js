"use client";
import { useState, useEffect } from "react";
import {
  Star,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Volume2,
  Heart,
  Award,
  Calendar,
  User,
  Sparkles,
  BadgeCheck,
  Wifi,
  Dumbbell,
  Activity,
} from "lucide-react";
import FAQ from "@/components/guide/FAQ";

const brands = [
  "Sportstech XS175",
  "Sportstech X150",
  "Peloton",
  "NordicTrack",
  "Wahoo Fitness",
  "Garmin / Tacx",
  "Ultrasport",
  "SportPlus",
  "DOMYOS / Decathlon",
  "AsVIVA / Roger Black",
];

const testData = {
  "Sportstech XS175": {
    image: "/Test page/sx175 test image.webp",
    overallScore: 4.9,
    status: "Bestanden",
    features: [
      "Stufenloser Magnetwiderstand — gleichmäßige, wartungsfreie Anpassung bei jeder Intensität",
      "4-kg-Schwungrad — konstante Dynamik für einen flüssigen Pedaltritt",
      "LED-Knopfdisplay — zeigt Zeit, Geschwindigkeit, Distanz, Kalorien, Puls und Herzfrequenz",
      "Bluetooth-Konnektivität — kompatibel mit der Sportstech Live App und Kinomap",
      "Sitzhöhenverstellung von 65–72 cm, geeignet für Nutzergrößen von 1,55–1,90 m",
      "Maximales Benutzergewicht: 120 kg — starke Belastbarkeit in dieser Preisklasse",
      "Transportrollen — einfaches Verschieben nach dem Training",
      "2 Jahre Herstellergarantie — überdurchschnittlich für Einsteiger-Heimtrainer",
    ],
    buyingGuide: [
      {
        icon: Zap,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Ultra-kompaktes Design",
        description:
          "Ein kompakter Rahmen eignet sich ideal für Wohnungen, kleine Trainingsbereiche oder Home-Offices. Empfehlenswert sind Modelle mit Maßen unter 120 × 55 cm. Integrierte Transportrollen erleichtern das Verschieben nach dem Training erheblich.",
      },
      {
        icon: Volume2,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "App- & Bluetooth-Konnektivität",
        description:
          "Steigern Sie Ihre Trainingseffizienz mit Bluetooth-kompatiblen Apps wie Sportstech Live, Kinomap oder Zwift. App-fähige Heimtrainer bieten strukturierte Programme, virtuelle Strecken und detailliertes Leistungs-Tracking, wodurch das Training deutlich abwechslungsreicher wird.",
      },
      {
        icon: Wifi,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Komfortorientierte Ergonomie",
        description:
          "Ein mehrschichtiger Sattel, verstellbare Sitzhöhe und ergonomisch positionierte Lenker sind entscheidend für Trainingseinheiten über 20 Minuten hinaus. Prüfen Sie vor dem Kauf immer, ob der Verstellbereich zu Ihrer Beinlänge passt.",
      },
      {
        icon: Heart,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Garantie & Kundenservice",
        description:
          "Achten Sie auf mindestens 2 Jahre Garantie auf den Rahmen sowie gut erreichbaren Kundensupport. Marken wie Sportstech bieten umfassende Ersatzteildokumentationen und zuverlässigen Online-Service — ein großer Vorteil für langfristige Nutzungssicherheit.",
      },
      {
        icon: Shield,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Robuste Rahmenkonstruktion",
        description:
          "Pulverbeschichtete Stahlrahmen bieten Korrosionsschutz und langfristige Stabilität. Prüfen Sie das maximale Benutzergewicht sorgfältig. Nutzer über 90 kg sollten idealerweise ein Modell mit mindestens 120 kg Belastbarkeit wählen.",
        fullWidth: true,
      },
    ],
    closingNote: "sollten Sie überlegen, wie häufig und wo Sie das Gerät nutzen möchten. Nutzer in Wohnungen sollten besonders auf Lautstärke und Mobilität achten, während ambitionierte Sportler Wert auf Widerstandsvielfalt und smarte Funktionen legen sollten. Der beste Heimtrainer ist letztlich der, der optimal zu Ihrem Alltag passt und regelmäßig genutzt wird.",
    closingNote: "schätzen Sie ehrlich ein, wie viel Platz Sie zur Verfügung haben und wie viel Trainingsvielfalt Sie benötigen. Wenn Sie mehr als nur Radfahren möchten — Krafttraining, Liegeposition, virtuelle Strecken — liefert der X150 das alles in einem Gerät, das wirklich verschwindet, wenn es nicht benutzt wird.",
    closingNote: "berechnen Sie die Gesamtkosten des ersten Jahres inklusive Monatsabo. Mit über 3.200 $ ist es eine ernsthafte Investition. Für tägliche Nutzer, die die umfangreichste Kursplattform und automatischen Widerstand wollen, ist der Wert real — für Gelegenheitsfahrer jedoch schwer zu rechtfertigen.",
    closingNote: "kalkulieren Sie die iFIT-Abokosten zusätzlich zum Kaufpreis ein. Ohne aktive Mitgliedschaft wird der große Bildschirm des S24 zum einfachen Display. Wer regelmäßig geführte Kurse, Scenic-Rides und adaptives Training nutzt, für den rechtfertigt das iFIT-Ökosystem den Aufpreis eindeutig.",
    closingNote: "schätzen Sie ehrlich ein, wie intensiv Sie indoor trainieren. Das KICKR Bike Pro belohnt ambitionierte Sportler, die regelmäßig Zwift, TrainerRoad oder Wahoo SYSTM nutzen. Gelegenheitsnutzer finden bei Mittelklasse-Connected-Bikes deutlich besseres Preis-Leistungs-Verhältnis.",
    closingNote: "überlegen Sie, ob ±1 % Leistungsgenauigkeit und Straßensimulation Funktionen sind, die Sie tatsächlich sinnvoll nutzen — oder nur mitbezahlen. Für FTP-fokussierte Athleten und Zwift-Racer ist das NEO Bike Plus eines der besten verfügbaren Werkzeuge. Für allgemeines Heim-Cardio ist das Preis-Leistungs-Verhältnis schwer zu rechtfertigen.",
    closingNote: "setzen Sie realistische Erwartungen an den Verwendungszweck. Das Ultrasport ist ein geeignetes Gerät für gelegentliche kurze Einheiten. Es ist nicht für tägliches intensives Training, schwerere Nutzer oder strukturierte Leistungsprogramme ausgelegt. Kaufen Sie es in Kenntnis seiner Grenzen.",
    closingNote: "vergleichen Sie das Schwungradgewicht und das Widerstandssystem mit Konkurrenten in derselben Preisklasse. Die 9-kg-Schwungmasse und der elektronische Widerstand des SP-HT-9600-iE heben es deutlich über die meisten gleichpreisigen Ergometer. Für tägliches Heim-Cardio mit Kinomap-Konnektivität ist es eine der besten Optionen in seiner Kategorie.",
    closingNote: "prüfen Sie vor dem Kauf, ob das 110-kg-Gewichtslimit für Ihr Körpergewicht geeignet ist. Das DOMYOS bietet zuverlässiges einsteigerfreundliches Cardio zu einem der günstigsten Einstiegspreise in diesem Vergleich. Seine Einfachheit ist eine Stärke — keine App-Abhängigkeit, kein Abo, keine komplizierte Einrichtung.",
    closingNote: "sollten Sie überlegen, wie häufig und wo Sie das Gerät nutzen möchten. Nutzer in Wohnungen sollten besonders auf Lautstärke und Mobilität achten, während ambitionierte Sportler Wert auf Widerstandsvielfalt und smarte Funktionen legen sollten. Der beste Heimtrainer ist letztlich der, der optimal zu Ihrem Alltag passt und regelmäßig genutzt wird.",
    tests: {
      Speed: {
        description:
          "Der stufenlose Magnetwiderstand wurde im gesamten Bereich zwischen 60–100 RPM getestet. Die Widerstandsübergänge verliefen gleichmäßig und ohne Verzögerung. Die maximale Leistungsabgabe lag bei etwa 250 W bei 80 RPM.",
        rating: "4.9 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der pulverbeschichtete Stahlrahmen zeigte auch während 60-minütiger Trainingseinheiten mit einem Testgewicht von 90 kg keinerlei Instabilität. Nach insgesamt 15 Stunden Testbetrieb traten weder Quietschgeräusche noch Lockerungen auf.",
        rating: "4.6 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Noise: {
        description:
          "Das Bike arbeitete bei moderater Intensität mit weniger als 42 dB, gemessen mit professionellem Schallmessgerät. Das Magnetbremssystem erzeugt keinerlei Reibungsgeräusche.",
        rating: "5.0 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der mehrschichtige Komfortsattel überzeugte sowohl bei 30- als auch bei 45-minütigen Einheiten. Lenker- und Sitzanpassungen eigneten sich für Testpersonen zwischen 1,60 m und 1,87 m Körpergröße.",
        rating: "4.7 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech & App": {
        description:
          "Die Bluetooth-Kopplung mit der Sportstech Live App wurde in weniger als 60 Sekunden abgeschlossen. Die App bietet trainergeführte Workouts, personalisierte Trainingspläne, Community-Funktionen und Ernährungstipps.",
        rating: "4.7 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung: Sportstech SX175 SpeedBike — Testsieger 2026",
      modelName: "Sportstech SX175 SpeedBike",
      verdict: "Tägliches Cardio- und Apartment-Training",
      rating: 5.0,
      publishDate: "Februar 2026",
      author: "Dr. James Hartwell",
      expertise: "Leitender Performance- & Fitnessspezialist",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Widerstandsgefühl & Einstellbereich": { rating: 5, description: "Stufenloses Magnetsystem — verzögerungsfrei mit präziser Widerstandsanpassung" },
        "Geräuschpegel": { rating: 5, description: "Unter 42 dB bei mittlerer Intensität — ideal für Wohnungen" },
        "Polsterung & Komfort": { rating: 5, description: "Mehrschichtiger Sattel — komfortabel auch bei Trainingseinheiten von über 45 Minuten" },
        "Eignung für Büro / Zuhause": { rating: 5, description: "Kompakte Stellfläche von 112 × 49 cm — passend für die meisten Wohnräume" },
        "Preis": { rating: 5, description: "Unter 300 € — außergewöhnlich gutes Preis-Leistungs-Verhältnis" },
        "Preis-Leistungs-Verhältnis": { rating: 5, description: "Klassenbeste Wahl; Bluetooth- und App-Unterstützung bereits im Einstiegssegment" },
      },
      extras: ["Bluetooth-App-Integration", "Strukturierte Trainingsprogramme über die Sportstech Live Plattform"],
      suitableFor: "Zuhause & Home-Office, Tägliches Cardio-Training, Apartment-Training, App-geführte Workouts",
      mainDescription:
        "Das Sportstech SX175 ist ein hervorragend entwickeltes Indoor-Cycling-Bike der Einstiegsklasse, das die Erwartungen in seiner Preiskategorie deutlich übertrifft. Bereits bei der ersten Nutzung fällt die hohe Qualität des Magnetwiderstandssystems auf — es arbeitet außergewöhnlich leise.",
      testFindings:
        "Im täglichen Praxiseinsatz zeigte das SX175 auf allen Intensitätsstufen eine überzeugende Leistung. Das 4-kg-Schwungrad sorgt für ein angenehmes und gleichmäßiges Fahrgefühl ohne störende Totpunkte im Pedalzyklus.",
      specialFeature:
        "Die Bluetooth-App-Integration hebt dieses Bike klar von vielen Konkurrenten ab. Die Sportstech Live Plattform bietet strukturierte Workouts, virtuelle Streckenfahrten und Leistungs-Tracking.",
      conclusion:
        "Für Nutzer, die ein leises, platzsparendes und app-kompatibles Indoor-Bike suchen, ist das Sportstech SX175 SpeedBike unser eindeutiger Testsieger der Heimtrainer-Kategorie 2026.",
    },
  },
  "Sportstech X150": {
    image: "/Test page/X150 test image.jpg",
    overallScore: 4.86,
    status: "Bestanden",
    features: [
      "3-in-1-Trainingsmodi — aufrechtes Radfahren, Liegeposition und Power Ropes für Ganzkörperkonditionierung",
      "QuickFold-System — faltet sich auf nur 55 × 55 cm zusammen, mit integrierten Transportrollen",
      "8-stufiger Magnetwiderstand — gleichmäßig, leise, wartungsfrei",
      "1,5-kg-Schwungrad mit Riemenantrieb — nahezu lautloser Betrieb zu jeder Tageszeit",
      "3,5\"-LCD-Multifunktionskonsole — zeigt Zeit, Geschwindigkeit, Distanz, Kalorien, RPM und Herzfrequenz",
      "Integrierte Power Ropes — kombiniert Cardio- und Oberkörper-Krafttraining gleichzeitig",
      "Ergonomischer Liegesattel mit Rückenlehne — geeignet für Fahrer von 1,50–1,80 m; max. 120 kg",
    ],
    buyingGuide: [
      {
        icon: Dumbbell,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Platzsparende Klappfunktion",
        description:
          "Für Wohnungen und kleine Häuser sind die Klappmaße genauso wichtig wie die Trainingsmaße. Das QuickFold-System des X150 reduziert die Stellfläche auf nur 55 × 55 cm und ermöglicht eine einfache Lagerung hinter Türen oder im Flur.",
      },
      {
        icon: TrendingUp,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Mehrwert durch Multifunktion",
        description:
          "Ein 3-in-1-Gerät wie der X150 ersetzt effektiv drei separate Trainingsgeräte: Upright-Bike, Liegeergometer und Oberkörpertrainer. Gerade bei begrenztem Platz oder Budget bieten Multifunktionsgeräte deutlich mehr Trainingsvielfalt.",
      },
      {
        icon: Volume2,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Qualität des Widerstandssystems",
        description:
          "Magnetwiderstandssysteme arbeiten leiser, gleichmäßiger und wartungsärmer als reibungsbasierte Systeme. Für Wohnungen gilt die Kombination aus Magnetbremse und Riemenantrieb als Goldstandard.",
      },
      {
        icon: Heart,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "App- & Bluetooth-Konnektivität",
        description:
          "Kompatibilität mit Kinomap, Zwift und der Sportstech Live App erweitert die Trainingsmöglichkeiten erheblich und steigert Motivation sowie Langzeitnutzung.",
      },
      {
        icon: Wifi,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Garantie & Support",
        description:
          "Achten Sie auf mindestens 2 Jahre Garantie sowie zuverlässigen Kundensupport. Sportstech bietet umfassende Ersatzteildokumentationen und Online-Support.",
        fullWidth: true,
      },
    ],
    closingNote: "sollten Sie überlegen, wie oft, wo und wofür Sie das Gerät einsetzen möchten. Für Wohnungsnutzer sind leiser Betrieb und kompakte Maße entscheidend. Für Nutzer, die Vielseitigkeit ohne mehrere Geräte suchen, ist ein 3-in-1-System wie der X150 eine besonders effiziente Lösung.",
    tests: {
      Speed: {
        description:
          "Der 8-stufige Magnetwiderstand wurde im Bereich von 50–90 RPM getestet. Die Übergänge zwischen den Widerstandsstufen sind gleichmäßig und präzise, ohne Verzögerung. Das Riemenantriebssystem arbeitet äußerst leise und vibrationsarm.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der pulverbeschichtete Stahlrahmen zeigte auch bei 45-minütigen Trainingseinheiten mit einem Testgewicht von 85 kg keinerlei Instabilität oder Verwindung. Das QuickFold-Scharnier blieb auch nach wiederholtem Zusammen- und Aufklappen stabil. Die Power-Rope-Verankerungen blieben während aller Tests sicher befestigt.",
        rating: "5 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      // Incline: {
      //   description:
      //     "Steigungsfunktion ist schnell, präzise und hält die Neigung zuverlässig. Motorisiertes System reagierte mit wenig Verzögerung und bietet bis zu 15 Stufen der Erhöhung.",
      //   rating: "4.7 / 5",
      //   status: "Bestanden",
      //   icon: TrendingUp,
      // },
      Noise: {
        description:
          "Das magnetische Riemenantriebssystem arbeitet bei mittlerer Intensität unter 45 dB und eignet sich damit ideal für Wohnungen. Die dreiteilige Kurbelwelle sorgt für eine ruhige Kraftübertragung, während das magnetische Bremssystem keinerlei Reibungsgeräusche erzeugt. Eines der leisesten kompakten Multifunktionsbikes seiner Preisklasse.",
        rating: "4.9 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der ergonomische Komfortsattel mit Rückenlehne überzeugte sowohl im Upright- als auch im Liegemodus bei 30- und 45-minütigen Einheiten. Die Sitzhöhenverstellung (67–80 cm) bietet ausreichend Flexibilität für Nutzer zwischen 1,50 m und 1,80 m Körpergröße.",
        rating: "4.9 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech & App": {
        description:
          "Das 3,5-Zoll-LCD-Display stellt alle wichtigen Trainingsdaten übersichtlich dar. Die Bluetooth-Verbindung ermöglicht die Nutzung mit Kinomap, Zwift sowie der Sportstech Live App für virtuelle Strecken, geführte Workouts und Fortschrittsverfolgung.",
        rating: "4.9 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung: Sportstech X150 — Bestes kompaktes 3-in-1 Heimtrainingsgerät 2026",
      modelName: "Sportstech X150",
      verdict: "Platzsparendes Ganzkörper-Heimtraining",
      rating: 4.8,
      publishDate: "Januar 2026",
      author: "Dr. James Hartwell",
      expertise: "Leitender Performance- & Fitnessspezialist",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Widerstandsgefühl & Einstellbereich": { rating: 5, description: "8-stufiges Magnetsystem — gleichmäßige, verzögerungsfreie Übergänge" },
        "Geräuschpegel": { rating: 5, description: "Riemenantrieb unter 45 dB — vollständig wohnungsfreundlich" },
        "Polsterung & Komfort": { rating: 5, description: "Ergonomischer Sattel mit Rückenlehne — komfortabel für 45+ min" },
        "Platzsparsamkeit": { rating: 5, description: "QuickFold auf 55 × 55 cm — klassenbeste Kompaktheit" },
        "Preis": { rating: 5, description: "Unter 200 € — außergewöhnlicher Wert für ein 3-in-1-Gerät" },
        "Preis-Leistungs-Verhältnis": { rating: 4, description: "App-Konnektivität, Power Ropes & Liegeposition zu Einstiegspreisen" },
      },
      extras: ["QuickFold (55 × 55 cm gefaltet)", "Integrierte Power Ropes", "Liegeposition", "Kinomap, Zwift & Sportstech Live kompatibel"],
      suitableFor: "Zuhause & Wohnung, Ganzkörper-Cardio & Krafttraining, Anfänger bis Fortgeschrittene, App-geführte Workouts, Platzbeschränkte Wohnumgebungen",
      mainDescription:
        "Das Sportstech X150 nimmt eine einzigartige Position auf dem Heimfitnessmarkt ein: ein wirklich vielseitiges Multifunktionsbike, das kompakt und gleichzeitig genuinely nützlich ist.",
      testFindings:
        "Die drei Trainingsmodi stehen ab der ersten Nutzung als die definierende Stärke des X150 heraus. Der Wechsel zwischen aufrechtem Cycling, der Liegeposition und Power-Rope-Training ist nahtlos.",
      specialFeature:
        "Die Kombination aus integrierten Power Ropes und Liegemodus in einem Gerät, das auf 55 × 55 cm faltet, ist die herausragende Leistung des X150.",
      conclusion:
        "Für Heimnutzer, die eine multimodale, leise und platzsparende Fitnesslösung suchen, ist das Sportstech X150 die herausragende Wahl in seiner Kategorie.",
    },
  },
  "Peloton": {
    image: "/Test page/Peloton test image.jpg",
    overallScore: 4.0,
    status: "Bestanden",
    features: [
      "Automatische Widerstandsanpassung — 100 mikrojustierbare Magnetstufen ohne manuelle Eingriffe",
      "Schweres Flywheel in Studioqualität für realistisches Fahrgefühl",
      "Full-HD-Touchscreen mit bis zu 360° Rotation",
      "Integrierte Computer-Vision-Kamera analysiert Wiederholungen in Echtzeit",
      "Frontlautsprecher mit dediziertem Woofer",
      "Eingebauter Lüfter für Kühlung während intensiver Sessions",
      "Kompakte Stellfläche — ideal auch für Wohnungen",
      "Native GymKit-Unterstützung für Apple Watch",
    ],
    buyingGuide: [
      {
        icon: Zap,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Gesamtkosten des Ökosystems verstehen",
        description:
          "Connected-Bikes wie Peloton benötigen ein kostenpflichtiges Abonnement, um alle Funktionen nutzen zu können. Mit rund 44 USD pro Monat summieren sich die laufenden Kosten erheblich. Vergleichen Sie diese langfristigen Ausgaben unbedingt mit klassischen Fitnessstudio-Mitgliedschaften.",
      },
      {
        icon: Activity,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Pedal-Kompatibilität prüfen",
        description:
          "Viele Premium-Bikes setzen inzwischen auf proprietäre Klicksysteme. Das Bike+ wird ausschließlich mit Delta-kompatiblen Pedalen geliefert. Wer lieber mit normalen Sportschuhen trainieren möchte, sollte vor dem Kauf auf SPD-Kompatibilität oder Adapterlösungen achten.",
      },
      {
        icon: Heart,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Bildschirm & Smart-Coaching realistisch bewerten",
        description:
          "Ein rotierbarer Bildschirm lohnt sich vor allem für Nutzer, die zusätzlich Krafttraining oder Yoga absolvieren möchten. Für reines Cycling reicht häufig ein einfaches festes Display völlig aus.",
      },
      {
        icon: Shield,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Das Schwungrad macht den Unterschied",
        description:
          "Schwerere Schwungräder ab etwa 16 kg sorgen für ein deutlich realistischeres Fahrgefühl und gleichmäßigere Bewegungen. Leichtere Flywheels wirken bei hoher Trittfrequenz oft unruhig und weniger natürlich.",
      },
      {
        icon: Wifi,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Garantie & Software-Support beachten",
        description:
          "Peloton bietet eine 5-Jahres-Garantie auf den Rahmen, 3 Jahre auf Komponenten sowie 1 Jahr Arbeitsleistung. Achten Sie zusätzlich darauf, wie lange Software-Updates und Smart-Funktionen unterstützt werden",
        fullWidth: true,
      },
    ],
    closingNote: "den Sie regelmäßig nutzen. Für ambitionierte Indoor-Cycling-Fans und Cross-Training-Nutzer bietet das Peloton Cross Training Bike+ aktuell eines der hochwertigsten Gesamterlebnisse im Home-Fitness-Bereich. Wer dagegen vor allem leises, effizientes Cardiotraining ohne langfristige Plattformbindung sucht, findet möglicherweise in der Mittelklasse die passendere Lösung.",
    tests: {
      Speed: {
        description:
          "Die automatische Widerstandssteuerung arbeitete über alle 100 Magnetstufen hinweg äußerst präzise und reagierte mit weniger als zwei Sekunden Verzögerung auf Trainer-Vorgaben. Das 38-lb-Schwungrad liefert ein außergewöhnlich gleichmäßiges Fahrgefühl ohne spürbare Totpunkte – unabhängig von der Trittfrequenz.",
        rating: "3.9 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der Stahlrahmen zeigte selbst bei intensiven 60-Minuten-Sessions mit 100 kg Testgewicht keinerlei Instabilität. Das maximale Nutzergewicht liegt bei 136 kg. Schweißnähte, Materialqualität und Verarbeitung liegen deutlich über dem Niveau vieler Einstiegsmodelle.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Noise: {
        description:
          "Das riemengetriebene Magnet-System arbeitet bei moderater Belastung nahezu geräuschlos und blieb im Wohnraumtest unter 45 dB. Damit eignet sich das Bike hervorragend für Wohnungen oder Räume mit dünnen Wänden. Das hochwertige Lautsprechersystem kann bei hoher Lautstärke jedoch hörbar nach außen dringen.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der überarbeitete Sattel verbessert die Druckverteilung deutlich und erhielt positives Feedback in 30- und 45-Minuten-Sessions. Die ausschließlich Delta-kompatiblen Pedale bleiben jedoch ein klarer Nachteil, da spezielle Cycling-Schuhe erforderlich sind, die separat gekauft werden müssen.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech, App & Peloton IQ": {
        description:
          "Die kamerabasierte Peloton-IQ-Technologie überzeugt besonders im Bereich Krafttraining. Wiederholungserkennung und Formanalyse arbeiteten im Test präzise und zuverlässig. Der 23,8-Zoll-Touchscreen reagiert schnell und die Peloton-App bietet weiterhin eine der umfangreichsten Trainingsbibliotheken der Branche.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung — Peloton Cross Training Bike+",
      modelName: "Peloton Cross Training Bike+",
      verdict: "Premium-Favorit 2026",
      rating: 2.0,
      publishDate: "Januar 2026",
      author: "Dr. James Hartwell",
      expertise: "Leitender Performance- & Fitness-Spezialist",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Widerstand & Gleichmäßigkeit": { rating: 3, description: "Gleichmäßiger Widerstand mit stabiler Leistung für konstante und angenehme Trainingseinheiten." },
        "Lautstärke": { rating: 2, description: "Angenehm leiser Betrieb, ideal für Workouts zuhause ohne störende Geräusche." },
        "Komfort & Ergonomie": { rating: 2, description: "Solider Sitzkomfort und ergonomisches Design für kurze bis mittellange Trainingseinheiten." },
        "Wohnungs- & Home-Gym-Tauglichkeit": { rating: 3, description: "Platzsparendes und stabiles Design, gut geeignet für Wohnungen und kleine Home-Gyms." },
        "Preis-Leistungs-Verhältnis": { rating: 2, description: "Grundlegende Funktionen vorhanden, das Preisniveau wirkt jedoch im Vergleich etwas hoch." },
      },
      extras: ["Heimtraining in Studioqualität", "Cross-Training & Krafttraining"],
      suitableFor: "HIIT & Intervall-Cycling, App-gesteuerte Workouts, Nutzung in der Wohnung, Fortgeschrittene Sportler, Apple Watch-Nutzer",
      mainDescription:
        "Das Peloton Cross Training Bike+ gehört zweifellos zu den technologisch ambitioniertesten Heimfitness-Geräten auf dem Markt. Schon die erste Trainingseinheit zeigt, warum: Das Fahrgefühl ist außergewöhnlich weich und erinnert stark an professionelle Studio-Bikes. Der Bildschirm wirkt hochwertig und reaktionsschnell, während die automatische Widerstandssteuerung den Trainingsfluss spürbar verbessert. Für reines Indoor-Cycling gehört das Bike aktuell zur Spitzenklasse.",
      testFindings:
        "Komplexer wird die Bewertung beim Gesamtpreis-Leistungs-Verhältnis. Die Peloton-IQ-Kamera bringt echten Mehrwert im Cross-Training und erkannte im Test Wiederholungen sowie Formfehler präzise – etwas, das kaum ein Konkurrent in dieser Preisklasse bietet. Im Alltag entstehen jedoch zusätzliche Kosten und Einschränkungen: Proprietäre Cycling-Schuhe sind Pflicht und das abonnementbasierte System erhöht die Gesamtkosten im ersten Jahr deutlich.",
      specialFeature:
        "Das Peloton-IQ-Coaching-System mit Echtzeit-Feedback und Wiederholungserkennung hebt das Bike klar von vielen Konkurrenzmodellen ab und bringt Studio-Coaching-Niveau direkt ins Wohnzimmer.",
      conclusion:
        "Für Nutzer, die ein kompromissloses Premium-Erlebnis inklusive hochwertiger Trainingsplattform suchen, zählt das Peloton Cross Training Bike+ aktuell zu den besten verfügbaren Heimtrainern. Fahrgefühl, Coaching-Technologie und Content-Angebot rechtfertigen den Preis für ambitionierte Nutzer. Für Gelegenheitsfahrer oder Einsteiger können jedoch die laufenden Abo-Kosten und Zusatzanschaffungen kritisch sein.",
    },
  },
  "NordicTrack": {
    image: "/Test page/Nordictrack test image.webp",
    overallScore: 3.48,
    status: "Bestanden",
    features: [
      "24-Zoll-HD-Touchscreen mit Drehfunktion — immersives Indoor-Cycling und Off-Bike-Workouts",
      "24 magnetische Widerstandsstufen — präzise digitale Anpassung für Cardio- und Ausdauertraining",
      "Ca. 14,5-kg-Schwungmasse — gleichmäßiger Pedaltritt auch bei hoher Trittfrequenz",
      "iFIT-Integration — Zugriff auf Trainer-geführte Kurse, adaptive Workouts und weltweite Streckenfahrten",
      "Bluetooth-Konnektivität — unterstützt Bluetooth-Kopfhörer und Herzfrequenzsensoren",
      "Hybridpedale und ergonomischer Sattel — kompatibel mit Sportschuhen und SPD-Cycling-Schuhen",
      "Maximale Benutzerkapazität von 159 kg — äußerst stabiler Stahlrahmen",
      "10 Jahre Garantie auf den Rahmen — langfristige Premium-Strukturgarantie von NordicTrack",
    ],
    buyingGuide: [
      {
        icon: Activity,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Premium-Displays & Interaktive Funktionen",
        description:
          "Moderne Smart-Heimtrainer integrieren zunehmend große HD-Touchscreens und vernetzte Trainingsplattformen. Achten Sie auf reaktionsschnelle Displays, automatische Widerstandsanpassung und Zugang zu Trainingssystemen wie iFIT oder Kinomap. Diese Funktionen steigern Motivation und Trainingskonstanz erheblich.",
      },
      {
        icon: Wifi,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Leistung des Magnetwiderstands",
        description:
          "Magnetische Widerstandssysteme bieten ruhigeren Betrieb, geringeren Wartungsaufwand und leisere Nutzung als Reibungssysteme. Für ernsthaftes Home-Cardio empfiehlt sich ein digital gesteuerter Widerstandsbereich, der sowohl lockere Regenerationseinheiten als auch intensive HIIT-Workouts ermöglicht.",
      },
      {
        icon: Zap,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Komfort & Verstellbarkeit™",
        description:
          "Längere Indoor-Cycling-Einheiten erfordern eine ergonomische Sitzposition. Verstellbare Sattelhöhe, horizontale Sitzverstellung, Lenkerreichweite und Pedalkompatibilität verbessern Haltung und reduzieren Gelenkbelastung. Nutzer über 1,85 m sollten besonders den Lenkerverstellbereich prüfen",
      },
      {
        icon: Shield,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Abo-Systeme & Software",
        description:
          "Viele Premium-Bikes basieren heute stark auf abonnementbasierten Trainingsplattformen. Prüfen Sie vor dem Kauf, ob die monatlichen Zusatzkosten zu Ihrer geplanten Nutzung passen. Smarte Plattformen erhöhen Motivation und Trainingsvielfalt erheblich, manche Bikes verlieren jedoch ohne Abo viele Funktionen.",
      },
      {
        icon: Heart,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Verarbeitungsqualität & Stabilität",
        description:
          "Schwere Stahlrahmen und hohe maximale Benutzergewichte deuten meist auf bessere Langzeitstabilität hin. Nutzer über 90 kg sollten Modelle mit mindestens 120–150 kg Tragkraft bevorzugen. Stabile Standfüße, hochwertige Schweißnähte und Riemenantriebe verbessern Haltbarkeit und Geräuschentwicklung.",
        fullWidth: true,
      },
    ],
    closingNote: "sollten Sie entscheiden, ob Sie ein klassisches Standalone-Bike oder eine vollständig vernetzte Smart-Fitness-Plattform bevorzugen. Nutzer in Wohnungen profitieren besonders von Magnetwiderstand und Riemenantrieb, während leistungsorientierte Fahrer von schwereren Schwungmassen und größeren Widerstandsbereichen profitieren. Smart-Bikes wie das NordicTrack New S24 Studio Bike bieten äußerst immersive Trainingserlebnisse, bringen jedoch auch Software- und Abonnement-Abhängigkeiten mit sich. Der beste Heimtrainer ist letztlich derjenige, der sowohl zu Ihrem Trainingsstil als auch zu Ihrer langfristigen Motivation passt.",
    tests: {
      Speed: {
        description:
          "Das digital gesteuerte Magnetwiderstandssystem lieferte während der Tests zwischen 60 und 105 RPM besonders gleichmäßige Übergänge über alle 24 Widerstandsstufen hinweg. Die Widerstandsstärke war spürbar höher als bei vielen Heimtrainern der Mittelklasse, insbesondere oberhalb von Stufe 18. Die automatischen iFIT-Widerstandsanpassungen reagierten bei Intervalltrainings schnell und präzise, während die rein touchscreenbasierte manuelle Steuerung bei Sprint-Einheiten weniger intuitiv wirkte.",
        rating: "3.5 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der robuste Stahlrahmen blieb selbst bei wiederholten Stehintervallen mit Testbelastungen bis 105 kg stabil. Breite Standfüße und höhenverstellbare Ausgleichsfüße verhinderten Bewegungen bei intensiveren Bergsimulationen. Allerdings erwähnten einige Langzeitnutzer früherer NordicTrack-Generationen gelegentliche Probleme mit Steuerplatinen und der Widerstandskalibrierung.",
        rating: "3.6 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Noise: {
        description:
          "Das riemengetriebene Magnetsystem arbeitete sowohl bei moderaten als auch intensiven Trainingseinheiten angenehm leise. Die gemessene Lautstärke lag im Durchschnitt bei etwa 40–44 dB während gleichmäßiger Fahrten und eignet sich damit ideal für Wohnungen oder gemeinsam genutzte Räume.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der ergonomische Sattel und die mehrfach verstellbaren Lenker überzeugten sowohl bei 30- als auch 60-minütigen Ausdauereinheiten. Fahrer zwischen 1,60 m und 1,92 m konnten eine angenehme Sitzposition einstellen. Die Geometrie erinnert stärker an professionelle Studio-Bikes als an kompakte Heimtrainer.",
        rating: "3.4 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech & App Test": {
        description:
          "Der drehbare 24-Zoll-Touchscreen gehört zu den größten Stärken der S24-Plattform. Die iFIT-Integration bietet automatische Widerstandssteuerung, personalisierte Trainingsprogramme, virtuelle Streckenfahrten sowie Streaming-Apps wie Netflix, Spotify, Prime Video und Audible. Die Bluetooth-Verbindung blieb im gesamten Test stabil und schnell.",
        rating: "4.4 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung — NordicTrack New S24 Studio Bike",
      modelName: "NordicTrack S24 Studio Bike",
      verdict: "Smart Home Cycling & Interaktives Training",
      rating: 1.5,
      publishDate: "Januar 2025",
      author: "Dr. James Hartwell",
      expertise: "Leitender Performance- & Fitness-Spezialist",
      testDuration: "Langzeittest",
      testCriteria: {
        "Widerstand & Gleichmäßigkeit": { rating: 2, description: "24 magnetische Widerstandsstufen — geschmeidige digitale Übergänge mit starkem oberen Widerstandsbereich" },
        "Lautstärke": { rating: 2, description: "Leises riemengetriebenes System — ideal für Wohnungen und gemeinsam genutzte Räume" },
        "Dämpfung & Komfort": { rating: 1, description: "Ergonomischer Sattel und Multi-Grip-Lenker — komfortabel auch bei längeren Trainingseinheiten" },
        "Büro- / Heimtauglichkeit": { rating: 2, description: "Kompakte Premium-Studio-Bike-Bauweise mit Transportrollen und stabilem Rahmen" },
        "Preis": { rating: 1, description: "Premium-Preisniveau plus laufende iFIT-Mitgliedschaftskosten erhöhen die Gesamtkosten" },
        "Preis-Leistungs-Verhältnis": { rating: 2, description: "Hervorragendes Display und starkes App-Ökosystem, langfristiger Mehrwert hängt jedoch stark vom Abo ab" },
      },
      extras: ["Streaming-Unterhaltungsintegration", "Virtuelle Streckenfahrten und adaptive Trainingsvorschläge"],
      suitableFor: "Home-Cardio-Training, Interaktive App-Workouts, Wohnungsnutzung, Ausdauer- und Intervalltraining",
      mainDescription:
        "Das NordicTrack New S24 Studio Bike richtet sich an Nutzer, die ein immersives Connected-Fitness-Erlebnis gegenüber rein mechanischer Fahrradtechnik bevorzugen. Bereits beim ersten Training hebt sich der große 24-Zoll-HD-Touchscreen deutlich von klassischen Heimtrainern ab. In Kombination mit dem adaptiven iFIT-Ökosystem entsteht ein wesentlich interaktiveres Trainingserlebnis als bei vielen herkömmlichen Indoor-Bikes derselben Kategorie.",
      testFindings:
        "Im Alltag überzeugt das S24 besonders bei strukturierten Ausdauerfahrten, Intervalltraining und geführten Scenic-Rides. Das Magnetwiderstandssystem arbeitet präzise und gleichmäßig, während die schwere Schwungmasse ein flüssiges Fahrgefühl erzeugt, das professionellen Studio-Bikes sehr nahekommt. Der Stahlrahmen bleibt selbst bei intensiven Stehfahrten stabil, und der nahezu geräuschlose Riemenantrieb macht das Bike ideal für Wohnungen und gemeinschaftliche Wohnräume.",
      specialFeature: "24\"-Zoll-HD-Touchscreen mit Drehfunktion – automatische iFIT-Widerstandsanpassung und SmartAdjust™-Training",
      conclusion:
        "Für Nutzer, die ein immersives, appbasiertes Indoor-Cycling-Erlebnis mit hochwertigem Display und geschmeidigem Magnetwiderstand suchen, gehört das NordicTrack New S24 Studio Bike weiterhin zu den stärksten Smart-Bike-Optionen seiner Klasse. Die starke Abhängigkeit vom Abonnement-Modell sowie gelegentliche langfristige Softwareprobleme verhindern jedoch eine perfekte Bewertung in unserem Heimtrainer-Testprogramm 2026.",
    },
  },
  "Wahoo Fitness": {
    image: "/Test page/Wahoo test image.jpg",
    overallScore: 3.9,
    status: "Bestanden",
    features: [
      "Elektromagnetisches Widerstandssystem — reagiert äußerst präzise auf Belastungsänderungen bei strukturierten Intervalltrainings",
      "Integrierte Steigungssimulation — neigt sich physisch bis zu 20 % Steigung und -15 % Gefälle für realistisches Straßenfahrgefühl",
      "Maximale Leistung von 2.500 W — professionelle Widerstandskapazität für Sprint- und Rennsimulationen",
      "Virtuelles Schaltsystem — unterstützt Shimano-, SRAM- und Campagnolo-Fahrprofile",
      "Wi-Fi-, Bluetooth- und ANT+-Konnektivität — breite Kompatibilität mit Zwift, Wahoo SYSTM, TrainerRoad und Kinomap",
      "Anpassbare Geometrie — geeignet für Fahrer von 152 cm bis 193 cm mit mehreren Kurbellängen-Einstellungen",
      "Premium-Fizik-Sattel und überarbeiteter Lenker — verbesserter Komfort gegenüber früheren KICKR-Bike-Generationen",
      "2 Jahre Herstellergarantie — solide Absicherung innerhalb der Premium-Smartbike-Kategorie",
    ],
    buyingGuide: [
      {
        icon: TrendingUp,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Smarte Widerstandstechnologie",
        description:
          "Premium-Smartbikes verwenden elektromagnetische Widerstandssysteme, die sofort auf Trainingsintensität und virtuelle Streckenänderungen reagieren. Achten Sie auf präzise Widerstandssteuerung, genaue Wattmessung und Kompatibilität mit Trainingsplattformen.",
      },
      {
        icon: Wifi,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "App- & Plattform-Konnektivität",
        description:
          "Modernes Indoor-Cycling basiert zunehmend auf vernetzten Ökosystemen. Die Kompatibilität mit Zwift, TrainerRoad, Wahoo SYSTM und Kinomap erweitert die Trainingsmöglichkeiten durch virtuelle Rennen, Coaching-Pläne und realistische Strecken erheblich.",
      },
      {
        icon: Zap,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Individuelle Bike-Anpassung",
        description:
          "Eine korrekte Sitzposition ist entscheidend für Komfort und Verletzungsprävention. Verstellbare Lenkerhöhe, Reichweite, Sattelhöhe, Kurbellänge und Sitzposition helfen dabei, die Ergonomie eines echten Fahrrads realistisch nachzubilden.",
      },
      {
        icon: Heart,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Lautstärke & Fahrgefühl",
        description:
          "Magnetische und elektromagnetische Systeme arbeiten in der Regel deutlich leiser als reibungsbasierte Alternativen. Premium-Systeme mit motorisierter Steigungssimulation können unter hoher Belastung dennoch Betriebsgeräusche erzeugen.",
      },
      {
        icon: Shield,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Rahmenstabilität & Verarbeitungsqualität",
        description:
          "Massive Stahl- und Aluminiumrahmen verbessern die Stabilität bei Sprints und erhöhen die Langlebigkeit. Für intensive Workouts sollten Sie stets auf hohe Rahmensteifigkeit und eine passende maximale Nutzergewichtskapazität achten.",
        fullWidth: true,
      },
    ],
    closingNote: "sollten Sie Ihre tatsächlichen Trainingsziele und Gewohnheiten realistisch einschätzen. Gelegenheitsnutzer profitieren oft nicht vollständig von erweiterten Rennsimulationsfunktionen, während ambitionierte Fahrer und Zwift-Racer den Mehrwert strukturierter Ganzjahrestrainings klar nutzen können. Das beste Indoor-Bike ist nicht zwangsläufig das teuerste Modell – sondern jenes, das optimal zu Ihren Fitnesszielen, Ihrem verfügbaren Platz und Ihrer langfristigen Trainingsroutine passt.",
    tests: {
      Speed: {
        description:
          "Das elektromagnetische Widerstandssystem reagierte während Sprint- und ERG-Mode-Tests zwischen 90 und 120 RPM nahezu verzögerungsfrei. Die Leistungsabgabe blieb auch bei langen Schwellenintervallen konstant, und die maximale Ausgangsleistung von 2.500 W bewältigte intensive Rennsimulationen problemlos. Allerdings wirkten die Widerstandswechsel bei schnellen virtuellen Steigungsänderungen gelegentlich etwas abrupt.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Das Stahl- und Aluminium-Chassis wirkte selbst bei intensiven Sprints und Wiegetritt-Fahrten äußerst stabil. Langzeittests bestätigten eine hervorragende strukturelle Stabilität, allerdings berichteten einige internationale Nutzer vereinzelt über Knarzgeräusche und kleinere Qualitätsunterschiede nach längerer Nutzung.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Noise: {
        description:
          "Das Riemenantriebssystem blieb während längerer Ausdauerfahrten angenehm leise und erreichte bei moderaten Trittfrequenzen durchschnittlich etwa 48 dB. Bei simulierten Steigungen und Sprintbeschleunigungen wurden jedoch leichte Antriebs- und Motorgeräusche deutlicher wahrnehmbar als bei leiseren Konkurrenten wie dem Tacx Neo Bike Plus.",
        rating: "3.9 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der neu entwickelte Lenker, der hochwertige Fi’zi:k-Sattel und die umfangreichen Bike-Fit-Einstellungen ermöglichten komfortable 60- bis 90-minütige Trainingseinheiten. Das Anpassungssystem reproduziert die Geometrie eines echten Rennrads sehr überzeugend, wobei neue Nutzer etwas Zeit für die optimale Einstellung benötigen können.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech & App Test": {
        description:
          "Die Konnektivität funktionierte hervorragend mit Zwift, TrainerRoad, Wahoo SYSTM und Kinomap. Bluetooth- und Wi-Fi-Verbindungen wurden schnell hergestellt, und die integrierten Bedienelemente am Lenker verbesserten die Navigation innerhalb der Apps deutlich. Der Race-Mode sorgte zudem für eine äußerst direkte Leistungsübertragung beim virtuellen Wettkampffahren.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung – Wahoo Fitness KICKR Bike Pro",
      modelName: "Wahoo Fitness KICKR Bike Pro",
      verdict: "Fortgeschrittenes Indoor-Cycling & Virtuelles Training",
      rating: 2.0,
      publishDate: "Januar 2026",
      author: "Dr. James Hartwell",
      expertise: "Leitender Leistungs- & Fitnessspezialist",
      testDuration: "Langzeittest",
      testCriteria: {
        "Widerstandsqualität & Einstellbereich": { rating: 3, description: "Hochwertiges elektromagnetisches System mit exzellenter Reaktionsgeschwindigkeit" },
        "Lautstärke": { rating: 2, description: "Leise bei Ausdauerfahrten, unter hoher Belastung nicht vollständig geräuschlos" },
        "Dämpfung & Komfort": { rating: 3, description: "Premium-Fizik-Sattel und umfangreiche Anpassungen" },
        "Eignung für Zuhause": { rating: 2, description: "Großer Platzbedarf und massiver Rahmen erfordern ausreichend Trainingsfläche" },
        "Preis": { rating: 2, description: "Premium-Preis deutlich über klassischen Heimtrainern" },
        "Preis-Leistungs-Verhältnis": { rating: 2, description: "Hervorragende Performance, für Gelegenheitsnutzer jedoch kostspielig" },
      },
      extras: ["Integriertes virtuelles Schaltsystem", "Physische Steigungs- und Gefällesimulation"],
      suitableFor: "Virtuelle Rennen, Strukturiertes Radtraining, Anspruchsvolles Home-Cardio, Zwift- & Wahoo-SYSTM-Nutzer",
      mainDescription:
        "Das Wahoo Fitness KICKR Bike Pro wurde für ambitionierte Indoor-Cyclisten entwickelt, die eines der immersivsten Smartbike-Erlebnisse auf dem Markt suchen. Bereits bei der ersten Fahrt erzeugen die physische Neigungssimulation und das reaktionsschnelle elektromagnetische Widerstandssystem ein deutlich realistischeres Fahrgefühl als klassische Heimtrainer. Anstiege, Abfahrten und Sprintintervalle werden spürbar auf den Rahmen übertragen und machen strukturierte Trainingseinheiten besonders motivierend.",
      testFindings:
        "Im täglichen Einsatz überzeugt das KICKR Bike Pro sowohl bei langen Ausdauerfahrten als auch bei Intervalltraining und virtuellem Rennsport. Besonders hervorzuheben ist das integrierte virtuelle Schaltsystem, mit dem Fahrer das Fahrverhalten passend zu Shimano-, SRAM- oder Campagnolo-Setups anpassen können. Auch die überarbeiteten Lenker-Bedienelemente verbessern die Steuerung in Zwift und anderen Plattformen deutlich, ohne ständig zu einem externen Gerät greifen zu müssen.",
      specialFeature:
        "Die physische Steigungs- und Gefällesimulation bleibt das absolute Highlight des KICKR Bike Pro. Nur wenige Indoor-Bikes können Straßenneigungen mit dieser Intensität realistisch nachbilden, und das integrierte Neigungssystem verbessert sowohl lange Trainingseinheiten als auch die Immersion virtueller Rennen erheblich.",
      conclusion:
        "Das Wahoo Fitness KICKR Bike Pro zählt weiterhin zu den technisch fortschrittlichsten Indoor-Smartbikes auf dem Markt. Aufgrund des hohen Preises, gelegentlicher Geräuschentwicklung unter Belastung und vereinzelter Qualitätskontroll-Berichte erhält es in unserem Testprogramm 2026 jedoch keine perfekte Bewertung.",
    },
  },
  "Garmin / Tacx": {
    image: "/Test page/Garmin test image.webp",
    overallScore: 4.15,
    status: "Bestanden",
    features: [
      "Direktantrieb mit virtuellem Schwungradsystem – äußerst realistisches Fahrgefühl dank elektromagnetischem Widerstand",
      "Maximale Leistung von 2200 Watt – ideal für Sprinttraining und intensive Intervalleinheiten",
      "±1 % Leistungsgenauigkeit – zählt zu den präzisesten Smart Bikes am Markt",
      "Virtuelle Steigungssimulation bis 25 % – perfekt für Bergtraining und Rennsimulationen",
      "Individuell anpassbare virtuelle Schaltung – kompatibel mit Shimano-, SRAM- und Campagnolo-Schaltlogiken",
      "Bluetooth- & ANT+-Konnektivität – kompatibel mit Zwift, TrainerRoad, Tacx Training App und Kinomap",
      "Integrierte Straßensimulation – simuliert Kopfsteinpflaster, Schotter und unterschiedliche Untergründe",
      "Flexible Ergonomie-Einstellungen – geeignet für verschiedene Körpergrößen und professionelle Bike-Fits",
    ],
    buyingGuide: [
      {
        icon: Zap,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Smarte Widerstandstechnologie",
        description:
          "Moderne Premium-Heimtrainer setzen zunehmend auf elektromagnetische oder fortschrittliche magnetische Widerstandssysteme für leisen und präzisen Widerstand. Wer strukturiert trainieren möchte, sollte auf ERG-Modus, realistische Steigungssimulation und schnelle Reaktionszeiten achten.",
      },
      {
        icon: TrendingUp,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "App- & Plattform-Kompatibilität",
        description:
          "Ein hochwertiges Smart Bike sollte problemlos mit Plattformen wie Zwift, TrainerRoad, Kinomap oder Tacx Training kompatibel sein. Bluetooth- und ANT+-Unterstützung erweitern die Trainingsmöglichkeiten erheblich und ermöglichen vollständige Datensynchronisation.",
      },
      {
        icon: Activity,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Ergonomie & Einstellmöglichkeiten",
        description:
          "Premium-Bikes sollten umfangreiche Verstellmöglichkeiten für Lenker und Sattel bieten, um echte Fahrradgeometrien präzise nachzubilden. Verstellbare Kurbelarmlängen und flexible Cockpit-Einstellungen sind besonders für lange Trainingseinheiten wichtig.",
      },
      {
        icon: Shield,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Lautstärke & Wohnungstauglichkeit",
        description:
          "Elektromagnetische Systeme arbeiten in der Regel deutlich leiser als reibungsbasierte Heimtrainer. Wer in einer Wohnung trainiert, sollte zusätzlich auf Vibrationen achten – insbesondere bei Straßensimulationen oder Sprint-Workouts.",
      },
      {
        icon: Wifi,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Haltbarkeit & Kundenservice",
        description:
          "Premium-Smart-Bikes enthalten komplexe Elektronik- und Simulationssysteme. Deshalb sind zuverlässiger Kundendienst, Ersatzteilversorgung, regelmäßige Firmware-Updates und langfristiger Software-Support besonders wichtig.",
        fullWidth: true,
      },
    ],
    closingNote: "wie intensiv Sie Indoor-Cycling langfristig nutzen möchten. Gelegenheitssportler profitieren oft nicht vollständig von den umfangreichen Simulations- und Analysefunktionen hochpreisiger Systeme wie dem Garmin Tacx NEO Bike Plus. Ambitionierte Fahrer hingegen werden die Präzision, das realistische Fahrgefühl und die immersiven Trainingsmöglichkeiten enorm schätzen.",
    tests: {
      "Speed & Resistance": {
        description:
          "Das Tacx NEO Bike Plus überzeugte mit extrem schnellen und präzisen Widerstandswechseln während strukturierter ERG-Trainings und Sprintintervalle. Anpassungen erfolgten nahezu verzögerungsfrei – selbst bei hoher Trittfrequenz und intensiver Belastung.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      "Comfort Test": {
        description:
          "Das vollständig anpassbare Cockpit ermöglicht eine sehr präzise Nachbildung echter Rennrad-Geometrien und eignet sich besonders für leistungsorientierte Fahrer. Sattel- und Lenkeranpassungen decken verschiedenste Körpergrößen und Sitzpositionen ab.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      "Durability Test": {
        description:
          "Der Stahlrahmen wirkt äußerst stabil und verwindungssteif – sowohl im Sitzen als auch bei intensiven Steh-Sprints. Während längerer Trainingseinheiten zeigte sich keinerlei Rahmenflex. Allerdings berichteten einige Langzeitnutzer vereinzelt über Geräusche im Antriebssystem, lockere Kurbeln oder Probleme mit dem Riemenantrieb nach längerer Nutzung.",
        rating: "2.8 / 5",
        status: "Nicht bestanden",
        icon: TrendingUp,
      },
      "Noise Test": {
        description:
          "Bei moderatem Ausdauertraining blieb die Betriebslautstärke außergewöhnlich niedrig. Dank elektromagnetischem Widerstandssystem und fehlendem mechanischem Antrieb arbeitet das Bike deutlich leiser als viele kettenbetriebene Smart Trainer.",
        rating: "4.5 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      "Tech & App Test": {
        description:
          "Bluetooth- und ANT+-Verbindungen funktionierten im Test zuverlässig mit Zwift, TrainerRoad und der Tacx-App. Besonders beeindruckend ist die virtuelle Schaltung, die ein realistisches Fahrgefühl ähnlich echter Rennrad-Schaltsysteme erzeugt. Die Straßenoberflächen-Simulation steigert zusätzlich die Immersion beim Indoor-Training.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung – Garmin Tacx NEO Bike Plus",
      modelName: "Garmin Tacx NEO Bike Plus",
      verdict: "Fortgeschrittenes Indoor-Cycling & strukturiertes Leistungstraining",
      rating: 4.2,
      publishDate: "Januar 2025",
      author: "Dr. James Hartwell",
      expertise: "Leitender Performance- & Fitnessspezialist",
      testDuration: "2 Wochen Alltagseinsatz",
      testCriteria: {
        "Widerstandsqualität & Regelbereich": { rating: 4, description: "Elektromagnetischer Direktantrieb – erstklassiger Realismus und unmittelbare Reaktionszeiten" },
        "Lautstärke": { rating: 5, description: "Extrem leiser Betrieb mit minimalen Vibrationen bei Straßensimulation" },
        "Dämpfung & Komfort": { rating: 3, description: "Hochgradig anpassbare Geometrie – ideal für lange Ausdauereinheiten" },
        "Geeignet für Zuhause / Büro": { rating: 4, description: "Großer Premium-Rahmen benötigt festen Trainingsplatz" },
        "Preis": { rating: 2, description: "Sehr teuer im Vergleich zu den meisten Consumer-Smart-Bikes" },
        "Preis-Leistungs-Verhältnis": { rating: 5, description: "Überragende Performance und realistisches Fahrgefühl, allerdings mit Premiumpreis" },
      },
      extras: ["Virtuelle Straßensimulation", "Individuell konfigurierbare elektronische Schaltprofile"],
      suitableFor: "Strukturiertes Indoor-Cycling, Zwift & virtuelle Rennen, HIIT, Leistungsorientierte Heimsportler",
      mainDescription:
        "Das Garmin Tacx NEO Bike Plus zählt zu den technisch fortschrittlichsten Indoor-Cycling-Systemen auf dem Markt und richtet sich primär an ambitionierte Radfahrer sowie datenorientierte Heimsportler – weniger an gelegentliche Freizeitnutzer. Bereits bei der ersten Trainingseinheit fällt auf, wie realistisch das elektromagnetische Schwungradsystem arbeitet. Widerstandswechsel erfolgen außergewöhnlich flüssig, und die virtuelle Trägheit vermittelt ein Fahrgefühl, das echtem Outdoor-Cycling deutlich näherkommt als bei klassischen Heimtrainern.",
      testFindings:
        "Im täglichen Einsatz überzeugt das NEO Bike Plus besonders bei Intervalltraining, FTP-Tests und immersiven virtuellen Fahrten. Die virtuelle Schaltung ist eines der Highlights: Nutzer können Shimano-, SRAM- oder Campagnolo-Schaltsysteme simulieren – ganz ohne physische Schaltungskomponenten. Das sorgt für ein hochgradig individualisierbares Trainingserlebnis, das vor allem ambitionierte Fahrer schätzen werden.",
      specialFeature:
        "Das elektromagnetische Widerstandssystem bleibt die herausragende Kernfunktion des NEO Bike Plus. Im Gegensatz zu Reibungs- oder Magnetpad-Systemen erzeugt das virtuelle Schwungrad eine äußerst realistische Trägheitssimulation bei nahezu geräuschlosem Betrieb und extrem präziser Leistungsmessung.",
      conclusion:
        "Für erfahrene Indoor-Cycler, die maximale Trainingsrealität, präzise Leistungsdaten und erstklassige Smart-Connectivity suchen, gehört das Garmin Tacx NEO Bike Plus weiterhin zu den besten Smart Bikes am Markt. Der sehr hohe Anschaffungspreis sowie vereinzelte Langzeitprobleme bei der Zuverlässigkeit verhindern jedoch eine perfekte Gesamtbewertung in unserer Heimtrainer-Testkategorie 2026.",
    },
  },
  "Ultrasport": {
    image: "/Test page/Ultrasports test image.jpg",
    overallScore: 3.5,
    status: "Bestanden",
    features: [
      "8-stufiger Magnetwiderstand — einfache manuelle Einstellung für Einsteiger- bis Mittelklasse-Cardioeinheiten",
      "Klappbares X-Rahmen-Design — platzsparende Lösung für Wohnungen, Schlafzimmer und kleine Home-Gyms",
      "LCD-Trainingscomputer — zeigt Zeit, Geschwindigkeit, Kalorien, Distanz und Pulsdaten an",
      "Pulssensoren im Lenker integriert — grundlegende Herzfrequenzmessung während des Trainings",
      "Höhenverstellbarer Sattel — geeignet für unterschiedlich große Nutzer im Heimfitnessbereich",
      "Leichter Rahmen mit 14–18 kg — einfach zu bewegen und nach dem Training platzsparend zu verstauen",
      "Maximales Benutzergewicht: 100 kg — solide Bewertung innerhalb der Budget-Klappbike-Kategorie",
      "Transportfreundliche Konstruktion — ideal für Nutzer, die Mobilität wichtiger finden als Hochleistungs-Performance"
    ],
    buyingGuide: [
      {
        icon: TrendingUp,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Ultrakompaktes Klappdesign",
        description:
          "Klappbare Heimtrainer eignen sich ideal für Nutzer mit begrenztem Platzangebot. Achten Sie auf kompakte Klappmaße und leichte Rahmen unter 20 kg, wenn regelmäßiges Verstauen wichtig ist. Transportfreundliche Konstruktionen erleichtern das Umstellen nach jeder Trainingseinheit erheblich.",
      },
      {
        icon: Volume2,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Widerstand & Trainingsvielfalt",
        description:
          "Magnetwiderstandssysteme arbeiten leiser und gleichmäßiger als reibungsbasierte Alternativen. Für Einsteiger reichen meist 8 Widerstandsstufen aus, während fortgeschrittene Nutzer schwerere Schwungräder und größere Widerstandsbereiche für intensivere Workouts bevorzugen sollten.",
      },
      {
        icon: Shield,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Komfort & Ergonomie",
        description:
          "Ein verstellbarer Sattel und ergonomische Sitzpositionen sind entscheidend für langfristigen Komfort. Nutzer, die länger als 30 Minuten trainieren möchten, sollten besonders auf Sattelqualität, Lenkerposition und Pedalstabilität achten. Günstige Klappbikes sparen hier häufig etwas ein.",
      },
      {
        icon: Heart,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Display- & Trackingfunktionen",
        description:
          "Einfache LCD-Konsolen erfassen typischerweise Geschwindigkeit, Kalorien, Zeit, Distanz und Puls. Hochwertigere Heimtrainer bieten zusätzlich Bluetooth, virtuelle Fahrplattformen oder geführte Trainingsprogramme. Für Freizeitsportler sind einfache Bedienung und gute Lesbarkeit meist wichtiger als komplexe Software-Ökosysteme.",
      },
      {
        icon: Wifi,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Rahmenstabilität & Gewichtskapazität",
        description:
          "Prüfen Sie stets die maximale Benutzergewicht-Angabe sorgfältig. Klappbare Bikes priorisieren Mobilität, allerdings können leichtere Rahmen bei intensiver Belastung leichte Bewegungen verursachen. Nutzer über 90 kg sollten verstärkte Modelle mit höherer Stabilität bevorzugen.",
        fullWidth: true,
      },
    ],
    closingNote: " sollten Sie realistisch einschätzen, wie häufig Sie trainieren möchten und wie viel Stauraum tatsächlich verfügbar ist. Klappbare Bikes überzeugen vor allem durch Komfort, Mobilität und leichtes tägliches Cardio, während schwerere Studio-Bikes besser für leistungsorientiertes Training geeignet sind. Der beste Heimtrainer ist letztlich derjenige, der sich natürlich in Ihren Alltag integriert und langfristig regelmäßige Nutzung fördert.",
    tests: {
      Speed: {
        description:
          "Das 8-stufige Magnetwiderstandssystem lieferte während der Tests zwischen 50–85 RPM eine gleichmäßige leichte bis moderate Trainingsintensität. Die Widerstandswechsel verliefen größtenteils flüssig, allerdings fehlte in den höheren Stufen die notwendige Belastung für intensives Intervalltraining. Am besten geeignet für gleichmäßiges Cardiotraining, Reha-Einheiten und Einsteiger-Fitness zuhause – weniger für leistungsorientiertes Indoor-Cycling.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der klappbare Stahlrahmen blieb bei regulären 30–45-minütigen Workouts stabil, zeigte jedoch bei intensiveren Sprintbelastungen leichte Bewegungen. Scharniere und Klappmechanismus hielten wiederholten Öffnungs- und Schließvorgängen zuverlässig stand, dennoch richtet sich die leichtere Konstruktion klar eher an Freizeitnutzer als an langfristige intensive Sportanwendungen",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      // Incline: {
      //   description:
      //     "Keine Steigungsfunktion vorhanden. Für Bergtraining nicht geeignet.",
      //   rating: "2.8 / 5",
      //   status: "Begrenzt",
      //   icon: TrendingUp,
      // },
      Noise: {
        description:
          "Die Betriebslautstärke lag während moderater Trainingseinheiten unter 45 dB und macht das F-Bike damit wohnungstauglich sowie geeignet für gemeinsam genutzte Innenräume. Das magnetische Riemenantriebssystem blieb während der Tests angenehm leise, lediglich bei höheren Trittfrequenzen waren leichte Pedalvibrationen bemerkbar. Insgesamt übertrifft die Geräuschdämmung die Erwartungen in dieser Preisklasse.",
        rating: "4.4 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der verstellbare Sattel unterstützt eine breite Nutzergrößen-Spanne, und die aufrechte Sitzposition eignet sich gut für entspannte Cardioeinheiten. Allerdings wurde die Polsterung bei Trainingseinheiten über 35 Minuten spürbar unangenehm – ein häufig genannter Kritikpunkt bei Langzeitnutzern. Die Pedalriemen funktionierten zuverlässig mit normalen Sportschuhen, und die Lenkerposition erwies sich im Alltag als komfortabel.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech & Display": {
        description:
          "Die LCD-Konsole zeigt alle grundlegenden Trainingsdaten wie Geschwindigkeit, Distanz, Kalorienverbrauch, Zeit und Puls an. Die Lesbarkeit blieb bei Innenbeleuchtung ausreichend gut, jedoch fehlen Bluetooth-Konnektivität, App-Integration und fortgeschrittene Trainingsfunktionen.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung – Ultrasport F-Bike Klappbarer Heimtrainer",
      modelName: "Ultrasport",
      verdict: "Kompaktes Heim-Cardio und Freizeitfitness",
      rating: 3.0,
      publishDate: "April 2026",
      author: "Dr. James Hartwell",
      expertise: "Leitender Performance- & Fitness-Spezialist",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Widerstand & Gleichmäßigkeit ": { rating: 2, description: "8-stufiges Magnetwiderstandssystem — gleichmäßig, jedoch begrenzte Intensität für anspruchsvolle Workouts" },
        "Lautstärke": { rating: 3, description: "Leises Magnetantriebssystem — ideal für gemeinsam genutzte Wohnräume" },
        "Dämpfung & Komfort": { rating: 3, description: "Standard-Sattelkomfort — ausreichend für kürzere Cardioeinheiten" },
        "Büro-/Wohnungstauglichkeit": { rating: 2, description: "Klappbares, kompaktes Design — ideal für kleine Räume und einfache Lagerung" },
        "Preis": { rating: 3, description: "Erschwinglicher Einstiegspreis — ideal für Gelegenheitsnutzer" },
        "Preis-Leistung": { rating: 2, description: "Starke Mobilität und hoher Komfort in der Budget-Kategorie" },
      },
      extras: ["Kompakter klappbarer Rahmen", "Einfaches, einsteigerfreundliches Widerstandssystem"],
      suitableFor: "Wohnung & kleine Räume, Leichtes tägliches Cardio, Fitness-Einsteiger, Kompakte Home-Workouts",
      mainDescription:
        "Das Ultrasport F-Bike wurde im Kern für einen sehr spezifischen Zweck entwickelt: zugängliches, gelenkschonendes Heimtraining auf minimalem Raum. Und genau in dieser Rolle funktioniert es überzeugend. Der klappbare Rahmen ist tatsächlich äußerst praktisch für Wohnungen oder multifunktionale Räume, und die leichte Konstruktion macht die Lagerung deutlich einfacher als bei klassischen Heimtrainern.",
      testFindings:
        "Im täglichen Praxistest lieferte das Bike bei moderater Trainingsintensität einen stabilen und leisen Betrieb. Das Magnetwiderstandssystem läuft angenehm gleichmäßig und eignet sich gut für Einsteiger-Cardio, Reha-Einheiten oder allgemeine Bewegungsziele im Alltag. Die begrenzte Widerstandsstärke und das leichte Schwungrad sorgen jedoch dafür, dass erfahrene Fahrer schnell an die Leistungsgrenzen stoßen. Bei höheren Trittfrequenzen wirkt das Bike weniger standfest als schwerere Indoor-Cycling-Modelle.",
      specialFeature: "Der klappbare X-Rahmen bleibt der größte Vorteil des F-Bikes. Im Gegensatz zu vielen sperrigen Heimtrainern lässt sich dieses Modell innerhalb weniger Sekunden zusammenklappen und platzsparend an einer Wand oder in einem Schrank verstauen – besonders attraktiv für kleine Wohnungen.",
      conclusion:
        "Für Nutzer, die Wert auf Erschwinglichkeit, Mobilität und leisen Betrieb legen und weniger auf hochrealistisches Performance-Cycling, bleibt das Ultrasport F-Bike eine sinnvolle Einsteigerlösung. Es wurde nicht für aggressives Intervalltraining oder fortgeschrittenes Ausdauertraining entwickelt, bietet jedoch für tägliches Heim-Cardio und komfortorientierte Fitness ein solides Preis-Leistungs-Verhältnis.",
    },
  },
  "SportPlus": {
    image: "/Test page/sportplus test image.jpg",
    overallScore: 3.4,
    status: "Bestanden",
    features: [
      "Elektronisch gesteuerter Magnetwiderstand — gleichmäßige Widerstandswechsel bei geringem Wartungsaufwand",
      "9-kg-Schwungmasse — deutlich ruhigerer Pedalablauf als bei vielen Einsteiger-Heimtrainern",
      "Hintergrundbeleuchtetes LCD-Display — zeigt Zeit, Geschwindigkeit, RPM, Kalorien, Distanz, Puls und Wattwerte an",
      "Bluetooth-Konnektivität — kompatibel mit Kinomap und ausgewählten Fitness-Apps ",
      "Verstellbarer Sattel und Multi-Grip-Lenker, geeignet für Nutzer von ca. 1,60–1,95 m. ",
      "Maximales Benutzergewicht: 150 kg — hervorragende Stabilitätsbewertung in dieser Klasse",
      "Transportrollen — praktisch für flexible Platzierung im Wohnbereich",
      "Integrierte Pulssensoren + kompatibel mit Brustgurten — unterstützt herzfrequenzbasiertes Training",
      "2 Jahre Herstellergarantie — übliche Absicherung für Ergometer der Mittelklasse"
    ],
    buyingGuide: [
      {
        icon: Zap,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Stabiler & kompakter Aufbau",
        description:
          "Ein stabiler Rahmen ist entscheidend für sicheres Indoor-Cycling, insbesondere bei höheren Trittfrequenzen. Achten Sie auf Heimtrainer mit verstärkter Stahlkonstruktion und Transportrollen für eine einfachere Bewegung innerhalb der Wohnung. Kompakte Maße unter 130 × 60 cm eignen sich ideal für die meisten Wohnräume.",
      },
      {
        icon: Activity,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Smarte Konnektivität & Trainings-Apps",
        description:
          "Moderne Heimtrainer unterstützen zunehmend Bluetooth-Verbindungen für Apps wie Kinomap oder Zwift. Solche Plattformen verbessern die Trainingsmotivation durch virtuelle Strecken, geführte Programme und Leistungsanalysen erheblich. Selbst Modelle der Mittelklasse profitieren heute stark von App-Integration.",
      },
      {
        icon: Shield,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Komfort & ergonomische Verstellbarkeit",
        description:
          "Ein gut verstellbarer Sattel und Lenker erhöhen den Komfort bei Trainingseinheiten von mehr als 20 Minuten erheblich. Aufrechte Sitzpositionen eignen sich besonders für Anfänger und Ausdauertraining, während sportlichere Geometrien stärker auf Performance ausgelegt sind. Prüfen Sie vor dem Kauf immer die empfohlene Körpergröße.",
      },
      {
        icon: Wifi,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Garantie & Kundenservice",
        description:
          "Zuverlässiger Support und die Verfügbarkeit von Ersatzteilen sind für eine langfristige Nutzung entscheidend. Für Heim-Ergometer wird mindestens eine zweijährige Herstellergarantie empfohlen – besonders bei elektronisch gesteuerten Widerstandssystemen, bei denen die Konsole ebenso wichtig ist wie die Rahmenstabilität.",
      },
      {
        icon: Heart,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Schwungmasse & Widerstandsqualität",
        description:
          "Schwerere Schwungmassen sorgen in der Regel für einen ruhigeren und natürlicheren Pedalablauf. Für normales Heimtraining bieten 7–10 kg ein gutes Gleichgewicht aus Dynamik, Stabilität und Komfort. Magnetwiderstandssysteme arbeiten außerdem leiser und wartungsärmer als reibungsbasierte Systeme.",
        fullWidth: true,
      },
    ],
    closingNote: "sollten Sie überlegen, wie häufig Sie trainieren möchten und welches Fahrgefühl Sie bevorzugen. Nutzer in Wohnungen oder Gemeinschaftshaushalten sollten vor allem auf geringe Lautstärke und kompakte Maße achten, während Ausdauersportler stärker von stabilen Widerstandssystemen und präzisem Workout-Tracking profitieren. Der beste Heimtrainer ist letztlich derjenige, der sich problemlos in Ihren Alltag integriert und langfristig zu regelmäßigem Training motiviert.",
    tests: {
      "Speed & Resistance Test": {
        description:
          "Das elektronisch gesteuerte Magnetwiderstandssystem lieferte während der Tests stabile Übergänge über sämtliche Widerstandsstufen bei 50–95 RPM. Die Widerstandsreaktion blieb auch bei Intervalltrainings gleichmäßig, obwohl bei schnellen Wechseln in höhere Stufen eine leichte Verzögerung spürbar war.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der verstärkte Stahlrahmen blieb auch während längerer 60-Minuten-Ausdauereinheiten mit Testpersonen zwischen 75–100 kg stabil. Rahmenverschweißungen und Standfüße zeigten eine hochwertige Verarbeitung mit minimalen seitlichen Bewegungen beim Pedalieren im Stehen. Nach insgesamt etwa 15 Stunden Testzeit wurden weder strukturelle Geräusche noch Instabilitäten der Konsole festgestellt.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Noise: {
        description:
          "Der Geräuschpegel lag bei konstanten Fahrten durchschnittlich bei etwa 45 dB, wodurch sich das SP-HT-9600-iE ideal für Wohnungen, Gemeinschaftsräume und Abend-Workouts eignet. Das riemengetriebene Magnetsystem eliminierte Reibungsgeräusche nahezu vollständig, lediglich bei intensiven Sprintphasen unter hoher Belastung waren leichte Pedal- und Schwungradvibrationen wahrnehmbar.",
        rating: "4.7 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der gepolsterte ergonomische Sattel bot für Fahrten zwischen 30–50 Minuten einen angenehmen Komfort, wobei längere Sessions für manche Nutzer zusätzliche Polsterung erfordern könnten. Der verstellbare Lenker ermöglichte mehrere Sitzpositionen, während der tiefe Einstieg die Zugänglichkeit deutlich verbesserte.",
        rating: "4.3 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech & App Test Test": {
        description:
          "Die Bluetooth-Verbindung mit Kinomap wurde im Test innerhalb einer Minute zuverlässig eingerichtet. Virtuelle Strecken und strukturierte Trainingsprogramme sorgten für zusätzliche Motivation gegenüber den integrierten Standardprogrammen. Die Bedienung der Konsole blieb einfach, auch wenn die Benutzeroberfläche im Vergleich zu neueren Connected-Bikes leicht veraltet wirkt. Die Genauigkeit der Puls- und Trittfrequenzmessung blieb während aller Testeinheiten konstant.",
        rating: "4.3 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung – SportPlus SP-HT-9600-iE",
      modelName: "SportPlus SP-HT-9600-iE",
      verdict: "Tägliches Ausdauertraining & strukturiertes Heim-Cardio",
      rating: 5.0,
      publishDate: "März 2026",
      author: "Dr. James Hartwell",
      expertise: "Leitender Leistungs- & Fitnessspezialist",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Widerstandsqualität & Gleichmäßigkeit": { rating: 2, description: "Elektronisches Magnetsystem — stabile mehrstufige Widerstandssteuerung" },
        "Lautstärke": { rating: 3, description: "Leiser Riemenantrieb — ideal für Wohnungen" },
        "Dämpfung & Komfort": { rating: 3, description: "Ergonomischer Sattel und aufrechte Sitzposition für längere Trainingseinheiten" },
        "Eignung für Zuhause": { rating: 2, description: "Kompakte Bauweise mit Transportrollen für flexible Platzierung" },
        "Preis-Leistungs-Verhältnis": { rating: 2, description: "Ausgewogene Ausstattung und solide Verarbeitungsqualität" },
        "Gesamtwert": { rating: 3, description: "Zuverlässige Funktionen und langlebige Konstruktion für langfristiges Heimtraining" },
      },
      extras: ["Elektronische Widerstandsregelung", "Kinomap-kompatibles virtuelles Training"],
      suitableFor: "Heimfitness, Tägliche Cardioeinheiten, Ausdauertraining, Anfänger & Fortgeschrittene",
      mainDescription:
        "Das SportPlus SP-HT-9600-iE positioniert sich als zuverlässiges Mittelklasse-Ergometer mit Fokus auf Komfort, leisen Betrieb und kontrolliertes Cardiotraining zu Hause statt auf aggressives Studio-Cycling. Im Praxistest überzeugte das Bike durch hohe Stabilität und ein gleichmäßiges Widerstandsverhalten, das deutlich ausgereifter wirkt als bei vielen günstigen Magnet-Heimtrainern derselben Kategorie.",
      testFindings:
        "Das elektronisch gesteuerte Widerstandssystem zählt zu den größten Stärken dieses Modells. Im Gegensatz zu manuellen Reibungssystemen bleiben die Widerstandswechsel auch während Intervalltrainings gleichmäßig und vorhersehbar, wodurch Anfänger und fortgeschrittene Nutzer ihre Trittfrequenz einfacher konstant halten können. Die schwerere 9-kg-Schwungmasse sorgt zusätzlich für ein natürlicheres Pedalgefühl, insbesondere bei moderaten Ausdauereinheiten zwischen 70–85 RPM.",
      specialFeature:
        "Die Kombination aus elektronischer Widerstandssteuerung und Kinomap-Konnektivität vermittelt ein deutlich hochwertigeres Trainingserlebnis als viele ähnlich bepreiste Heimtrainer. Virtuelle Strecken und geführte Workouts steigern die langfristige Motivation im Heimtraining erheblich.",
      conclusion:
        "Für Nutzer, die ein leises, stabiles und funktionsreiches Ergometer für regelmäßiges Cardiotraining und Ausdauereinheiten suchen, bietet das SportPlus SP-HT-9600-iE ein sehr gutes Gesamtpaket. Es erreicht zwar nicht die Intensität oder das immersive Ökosystem von Premium-Smart-Bikes, bleibt jedoch eine zuverlässige und leistungsfähige Mittelklasse-Option im Heimtrainer-Segment 2026.",
    },
  },
  "DOMYOS / Decathlon": {
    image: "/Test page/Domyos test image.jpg",
    overallScore: 3.9,
    status: "Bestanden",
    features: [
      "7-stufiger manueller Magnetwiderstand — einsteigerfreundliches Widerstandssystem für leichte bis moderate Cardio-Einheiten",
      "3-kg-Schwungmasse — ausreichend stabil für tägliches Pedaltraining und gelenkschonende Workouts",
      "LCD-Display — zeigt Zeit, Geschwindigkeit, Distanz, Kalorienverbrauch und Scan-Modus an",
      "Kompakter Upright-Rahmen — ideal für Wohnungen, Schlafzimmer und kleine Home-Gyms",
      "Höhenverstellbarer Sattel — geeignet für unterschiedliche Körpergrößen im Freizeit-Fitnessbereich",
      "Maximales Nutzergewicht: 110 kg — solide Tragfähigkeit für Einsteiger-Heimtrainer",
      "Integrierte Transportrollen — einfaches Verschieben nach dem Training oder im Büro",
      "Decathlon-Service-Netzwerk — Ersatzteilversorgung und Support über das Filialnetzwerk",
    ],
    buyingGuide: [
      {
        icon: Heart,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Kompaktes & platzsparendes Design",
        description:
          "Heimtrainer für Wohnungen oder Büroräume sollten idealerweise eine Stellfläche von unter 120 × 60 cm besitzen. Kompakte Rahmen erleichtern die Platzierung und verbessern die Alltagstauglichkeit in kleineren Wohnräumen. Integrierte Transportrollen bieten zusätzlichen Komfort beim täglichen Verschieben und Verstauen.",
      },
      {
        icon: TrendingUp,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Widerstandsqualität & Fahrgefühl",
        description:
          "Magnetwiderstandssysteme arbeiten deutlich leiser und gleichmäßiger als Reibungsbremssysteme. Schwerere Schwungmassen sorgen in der Regel für ein natürlicheres Pedalgefühl und bessere Stabilität bei höheren Trittfrequenzen. Für Einsteiger reichen meist 3–5 kg Schwungmasse für konstantes Cardio- und Low-Impact-Training aus.",
      },
      {
        icon: Shield,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Display & Smart-Konnektivität",
        description:
          "Einfache LCD-Displays genügen für gelegentliches Training, während Bluetooth-fähige Heimtrainer deutlich mehr Trainingsvielfalt durch virtuelle Fahr-Apps, strukturierte Programme und Leistungsanalysen bieten. Nutzer mit langfristigen Trainingszielen profitieren von vernetzten Plattformen wie Kinomap oder Zwift.",
      },
      {
        icon: Wifi,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Komfort & Ergonomie",
        description:
          "Ein verstellbarer Sattel und eine aufrechte Sitzposition sind entscheidend für Komfort bei regelmäßigen Trainingseinheiten. Nutzer, die länger als 30 Minuten trainieren möchten, sollten besonders auf Sitzpolsterung, Lenkerposition und stabile Pedale achten, um Ermüdung und Gelenkbelastungen zu reduzieren.",
      },
      {
        icon: Volume2,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Garantie & Kundenservice",
        description:
          "Ein zuverlässiger Kundendienst wird beim Kauf eines Heimtrainers oft unterschätzt. Etablierte Fitnesshändler mit Ersatzteilversorgung und landesweitem Support bieten langfristig deutlich mehr Sicherheit als günstige No-Name-Marken mit eingeschränkter Service-Infrastruktur.",
        fullWidth: true,
      },
    ],
    closingNote: "wie häufig das Gerät tatsächlich genutzt wird und welche Funktionen Ihre Trainingsgewohnheiten sinnvoll unterstützen. Wohnungsnutzer sollten leisen Betrieb und kompakte Maße priorisieren, während fitnessorientierte Fahrer eher von schwereren Schwungmassen und fortschrittlichen Widerstandssystemen profitieren. Einsteigergeräte wie der DOMYOS Heimtrainer eignen sich ideal für Nutzer, die regelmäßige Bewegung ohne technische Komplexität in ihren Alltag integrieren möchten. Der beste Heimtrainer ist letztlich derjenige, der sich nahtlos in Ihre Routine einfügt und langfristig zur regelmäßigen Nutzung motiviert.",
    tests: {
      "Speed & Resistance": {
        description:
          "Das 7-stufige Magnetwiderstandssystem lieferte während der Tests zwischen 50 und 85 U/min eine gleichmäßige und vorhersehbare Widerstandssteigerung. Die Anpassung funktionierte in den niedrigeren Stufen angenehm weich, während höhere Widerstandsstufen nicht ganz die Intensität und Präzision hochwertiger Indoor-Cycles erreichten.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der pulverbeschichtete Stahlrahmen blieb während wiederholter 45-Minuten-Testeinheiten mit Fahrern zwischen 72 und 95 kg stabil. Lediglich bei intensivem Pedalieren im Stehen zeigte sich eine leichte Lenkerbewegung — typisch für leichte Einsteiger-Heimtrainer.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Noise: {
        description:
          "Die Betriebslautstärke blieb während moderater Trainingseinheiten unter 46 dB, gemessen mit einem kalibrierten Schallmessgerät. Das magnetische Riemenantriebssystem vermeidet Reibungsgeräusche und arbeitet leise genug für Wohnungen, Home-Offices und gemeinsam genutzte Wohnräume.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der gepolsterte Sattel bot während 20–40-minütiger Cardio-Sessions ausreichenden Komfort und eignet sich gut für tägliche Fitnessroutinen. Die aufrechte Sitzposition sorgt für eine entspannte Fahrhaltung, ideal für Einsteiger und Büroanwender. Die Lenkerverstellung fällt einfacher aus als bei Premium-Bikes, bleibt ergonomisch jedoch für die meisten Nutzer zwischen 1,58 m und 1,85 m geeignet.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech & Display": {
        description:
          "Der integrierte LCD-Monitor bietet eine klare Darstellung grundlegender Trainingsdaten wie Geschwindigkeit, Zeit, Kalorienverbrauch und Distanz. Im Gegensatz zu Smart-Bikes verfügt das DOMYOS-Modell jedoch weder über Bluetooth noch über App-Integration, wodurch interaktive Trainingsmöglichkeiten eingeschränkt sind.",
        rating: "3.9 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung – DOMYOS Heimtrainer",
      modelName: "DOMYOS / Decathlon Heimtrainer",
      verdict: "Tägliches Cardio & Heimfitness für Einsteiger",
      rating: 5.0,
      publishDate: "Januar 2026",
      author: "Dr. James Hartwell",
      expertise: "Leitender Performance- & Fitness-Spezialist",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Widerstandsqualität & Gleichmäßigkeit": { rating: 3, description: "7-stufiger Magnetwiderstand — konstant für Einsteiger-Workouts" },
        "Lautstärke": { rating: 2, description: "Unter 46 dB bei normalen Cardio-Sessions" },
        "Dämpfung & Komfort": { rating: 2, description: "Gepolsterter Sattel — angenehm für mittellange Einheiten" },
        "Büro- & Wohnungsfreundlichkeit": { rating: 3, description: "Kompakte Stellfläche für kleinere Wohnräume" },
        "Preis-Leistungs-Verhältnis": { rating: 2, description: "Günstiger Einstiegspreis mit hoher Alltagstauglichkeit" },
        "Gesamtwert": { rating: 3, description: "Gute Leistung für tägliches Heimtraining" },
      },
      extras: ["Kompaktes, wohnungsfreundliches Design", "Einfaches Widerstandssystem für Einsteiger"],
      suitableFor: "Heimtraining, Cardio für Einsteiger, Gelenkschonende Fitness, Wohnungstraining",
      mainDescription:
        "Der DOMYOS Heimtrainer wurde klar auf Praktikabilität und Erschwinglichkeit ausgelegt und richtet sich an Nutzer, die eine kompakte und unkomplizierte Indoor-Cardio-Lösung suchen, ohne in den Preisbereich von Premium-Smartbikes einzusteigen. Im Praxistest überzeugte das Bike besonders bei leichten Fitnessroutinen, Regenerationseinheiten und konstantem gelenkschonendem Training, bei dem Komfort und Zugänglichkeit wichtiger sind als leistungsorientierte Trainingsdaten.",
      testFindings:
        "Der Magnetwiderstand arbeitet leise und gleichmäßig bei moderaten Trittfrequenzen. Zwar kann die 3-kg-Schwungmasse nicht das Fahrgefühl schwerer Spinning-Bikes imitieren, sie bietet jedoch ausreichend Stabilität für Einsteiger und allgemeines Gesundheitstraining. Der Rahmen benötigt nur wenig Stellfläche und eignet sich daher hervorragend für Wohnungen, kleine Home-Gyms oder Büroräume, in denen Mobilität und platzsparende Nutzung wichtiger sind als Studio-Intensität.",
      specialFeature:
        "Das kompakte, leichte Chassis in Kombination mit dem leisen Magnetwiderstand macht den DOMYOS Heimtrainer besonders geeignet für Wohnungen und gemeinsam genutzte Wohnräume, in denen ein geräuscharmer Betrieb entscheidend für regelmäßiges Training ist.",
      conclusion:
        "Für Einsteiger, Freizeitnutzer und Heimanwender, die einen zuverlässigen und leisen Heimtrainer für konstantes Cardio-Training suchen, bietet der DOMYOS Heimtrainer eine solide Gesamtleistung und hohe Alltagstauglichkeit zu einem attraktiven Preis. Fortgeschrittene Nutzer könnten jedoch langfristig an die Grenzen des Widerstandsbereichs stoßen.",
    },
  },
  "AsVIVA / Roger Black": {
    image: "/Test page/AsVIVA test image.jpg",
    overallScore: 4.1,
    status: "Bestanden",
    features: [
      "Elektronisches Magnetwiderstandssystem — ruhiger und gleichmäßiger als klassische Reibungsbremssysteme",
      "9-kg-Schwungmasse — stabile Pedalbewegung für konstante Ausdauer- und Cardioeinheiten",
      "LCD-Trainingscomputer — zeigt Geschwindigkeit, Zeit, Distanz, Kalorien, Puls, RPM und Wattwerte an",
      "Bluetooth-App-Kompatibilität — unterstützt Kinomap für virtuelle Trainingseinheiten",
      "Verstellbarer Sattel und Lenker — geeignet für Nutzer von ca. 1,60–1,92 m Körpergröße",
      "Maximales Nutzergewicht: 150 kg — sehr gute Stabilitätsbewertung in dieser Kategorie",
      "Integrierte Transportrollen — praktisch zum Verschieben und Verstauen",
      "2 Jahre Herstellergarantie — starke Garantie für ein Ergometer der Mittelklasse",
    ],
    buyingGuide: [
      {
        icon: Heart,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Stabiles Ergometer-Widerstandssystem",
        description:
          "Magnetwiderstandssysteme arbeiten deutlich leiser und gleichmäßiger als klassische Reibungsbremssysteme. Elektronisch gesteuerter Widerstand ermöglicht präzisere Einstellungen und strukturierte Trainingseinheiten ohne abrupte Übergänge. Für konstantes Heimtraining sind Magnetbikes klar zu bevorzugen.",
      },
      {
        icon: Zap,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Smart-Konnektivität & Trainings-Apps",
        description:
          "Moderne Heimtrainer unterstützen zunehmend Bluetooth-Verbindungen für Apps wie Kinomap oder Zwift. Solche Plattformen steigern Motivation und Trainingsspaß durch virtuelle Strecken, geführte Programme und Fortschrittsanalysen erheblich. Selbst Mittelklasse-Bikes profitieren stark von App-Kompatibilität.",
      },
      {
        icon: Wifi,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Komfort & Ergonomische Anpassbarkeit",
        description:
          "Komfort wird besonders bei Einheiten über 20–30 Minuten entscheidend. Verstellbare Sattelhöhe, Lenkerposition und ergonomische Sitzgeometrie verbessern die langfristige Nutzbarkeit erheblich. Aufrechte Sitzpositionen eignen sich besonders für Anfänger und Reha-Nutzer.",
      },
      {
        icon: Shield,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Rahmenstabilität & Maximales Nutzergewicht",
        description:
          "Ein schwererer Stahlrahmen verbessert die Stabilität bei höheren Trittfrequenzen deutlich. Vergleichen Sie immer das maximale Nutzergewicht mit Ihrem tatsächlichen Körpergewicht. Nutzer über 90 kg sollten idealerweise Modelle mit mindestens 120–150 kg Belastbarkeit wählen.",
      },
      {
        icon: Volume2,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Geräuschentwicklung im Wohnbereich",
        description:
          "Wohnungsnutzer sollten Magnetwiderstandssysteme und Riemenantriebe bevorzugen. Ein leiser Betrieb verbessert die Alltagstauglichkeit enorm – besonders bei frühen oder späten Trainingseinheiten.",
        fullWidth: true,
      },
    ],
    closingNote: "Vor dem Kauf eines Heimtrainers sollten Sie Ihr primäres Trainingsziel klar definieren. Nutzer mit Fokus auf Rehabilitation, Gewichtsreduktion oder allgemeine Ausdauer profitieren besonders von komfortorientierten Ergometern mit leisem und gleichmäßigem Widerstand. Wer hingegen intensive Intervalltrainings oder ein realistisches Rennradgefühl sucht, benötigt schwerere Schwungmassen und stärkere Widerstandssysteme. Der beste Heimtrainer ist letztlich derjenige, der problemlos in Ihren Alltag passt und langfristig regelmäßig genutzt wird.",
    tests: {
      "Speed & Resistance": {
        description:
          "Das elektronisch gesteuerte Magnetwiderstandssystem arbeitete während der Ausdauertests zwischen 55–95 RPM konstant und zuverlässig. Die Widerstandswechsel verliefen überwiegend weich und gleichmäßig, wobei bei höheren Wattstufen leichte Verzögerungen spürbar waren. Die maximale Widerstandsleistung eignet sich besonders für Anfänger und fortgeschrittene Freizeitnutzer, ambitionierte Radsportler könnten den oberen Widerstandsbereich jedoch als etwas begrenzt empfinden.",
        rating: "3.6 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der verstärkte Stahlrahmen bot während 45-minütiger Ausdauereinheiten mit Testpersonen bis 95 kg insgesamt eine gute Stabilität. Das Gerät blieb sicher und stabil ohne starke seitliche Bewegungen, lediglich bei intensiven Sprintintervallen zeigte sich ein leichtes Nachgeben am Lenker. Für diese Preisklasse überzeugt die Verarbeitungsqualität klar im Alltagseinsatz.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Noise: {
        description:
          "Das riemengetriebene System arbeitete bei moderaten Trainingseinheiten mit etwa 45 dB und eignet sich dadurch hervorragend für Wohnungen und ruhige Wohnumgebungen. Bei intensiven Fahrten im Stehen waren leichte Vibrationen spürbar, während Sitztrainingseinheiten angenehm leise blieben.",
        rating: "4.6 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der ergonomisch gepolsterte Sattel bot während 30–50-minütiger Einheiten einen soliden Komfort, insbesondere für Freizeit- und Cardionutzer. Mehrere Einstellmöglichkeiten für Sattel und Lenker verbesserten die Anpassung an unterschiedliche Körpergrößen deutlich. Der tiefe Einstieg erleichtert zudem älteren Nutzern oder Reha-orientierten Anwendern den Zugang.",
        rating: "3.5 / 5",
        status: "Bestanden",
        icon: Heart,
      },
      "Tech & App": {
        description:
          "Die Bluetooth-Verbindung mit Kinomap wurde innerhalb von zwei Minuten erfolgreich eingerichtet. Virtuelle Strecken und Trainingsprogramme liefen stabil und zuverlässig, auch wenn das integrierte Display im Vergleich zu modernen Smart-Fitness-Konsolen etwas veraltet wirkt. Die Pulssensoren lieferten ausreichend genaue Werte für allgemeines Herzfrequenztraining.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Einzelbewertung — AsVIVA H22 Heimtrainer & Ergometer",
      modelName: "AsVIVA H22",
      verdict: "Gelenkschonendes Cardiotraining & tägliche Heimfitness",
      rating: 5.0,
      publishDate: "Februar 2026",
      author: "Dr. James Hartwell",
      expertise: "Leitender Performance- & Fitness-Spezialist",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Widerstandsqualität & Einstellbereich": { rating: 3, description: "Elektronischer Magnetwiderstand — konstant und anfängerfreundlich" },
        "Lautstärke": { rating: 3, description: "Leiser Riemenantrieb — ideal für Wohnungen und Mehrfamilienhäuser" },
        "Dämpfung & Komfort": { rating: 2, description: "Ergonomischer Sattel und aufrechte Sitzposition für längere Trainingseinheiten" },
        "Eignung für Zuhause": { rating: 2, description: "Kompakte Bauweise mit Transportrollen" },
        "Preis-Leistungs-Verhältnis": { rating: 2, description: "Mittelklassepreis mit guter Stabilität und Komfort" },
        "Gesamtwert": { rating: 3, description: "Zuverlässiges Allround-Ergometer mit praktischen Smart-Funktionen" },
      },
      extras: ["Bluetooth-Kinomap-Kompatibilität", "Komfortorientierte ergonomische Sitzposition"],
      suitableFor: "Heim-Cardiotraining, Gelenkschonendes Training, Rehabilitationsübungen, Anfänger & Fortgeschrittene",
      mainDescription:
        "Das AsVIVA H22 positioniert sich als praktisches Mittelklasse-Ergometer für Nutzer, die Wert auf Komfort, leisen Betrieb und zuverlässiges Heimtraining legen – weniger auf extremes Indoor-Cycling oder Studio-Performance. Im täglichen Einsatz liefert das H22 ein stabiles und zugängliches Fahrerlebnis, das besonders für Anfänger, Freizeitnutzer und Reha-orientiertes Training geeignet ist.",
      testFindings:
        "Das elektronisch gesteuerte Magnetwiderstandssystem gehört klar zu den stärksten Eigenschaften des Bikes. Das Pedalgefühl bleibt über nahezu alle Widerstandsstufen hinweg angenehm flüssig, während die 9-kg-Schwungmasse deutlich gleichmäßiger läuft als viele günstigere Ergometer derselben Klasse. Ambitionierte Fahrer könnten die maximale Widerstandsgrenze irgendwann überschreiten, für Ausdauertraining, Kalorienverbrennung und moderates Intervalltraining liefert das System jedoch sehr gute Ergebnisse.",
      specialFeature:
        "Die Bluetooth-Kompatibilität mit Kinomap sorgt langfristig für mehr Trainingsmotivation. Virtuelle Strecken und geführte Programme reduzieren Monotonie und verleihen dem H22 ein moderneres Connected-Fitness-Erlebnis als viele klassische Einsteiger-Ergometer.",
      conclusion:
        "Für Nutzer, die einen leisen, stabilen und komfortablen Heimtrainer für regelmäßiges Cardiotraining suchen, liefert das AsVIVA H22 Ergometer insgesamt eine zuverlässige Leistung mit starken Komfort- und Zugänglichkeitsmerkmalen. Zwar erreicht es nicht ganz die Intensität oder Smart-Funktionen von Premium-Bikes, bleibt aber eine sehr solide Mittelklasse-Option für tägliches Heimtraining.",
    },
  },
};

export default function TestingProcessPage() {
  const [activeBrand, setActiveBrand] = useState("Sportstech XS175");
  const brandData = testData[activeBrand];

  useEffect(() => {
    if (brandData?.image) {
      const img = new Image();
      img.src = brandData.image;
    }
  }, [brandData?.image]);

  const renderStars = (ratingStr) => {
    const rating = parseFloat(ratingStr);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
        ))}
        {hasHalfStar && (
          <Star className="w-4 h-4 text-yellow-500 fill-current opacity-50" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Passed":
      case "Bestanden":
        return "text-emerald-700 bg-emerald-50 border border-emerald-200";
      case "Limited":
      case "Begrenzt":
        return "text-amber-700 bg-amber-50 border border-amber-200";
      default:
        return "text-gray-600 bg-gray-100 border border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="hero-bg text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-xl md:text-5xl font-black mb-6">
              Expertenkriterien zur Bewertung von Heimtrainern für präzise Tests
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-primary-100/80 max-w-3xl mx-auto leading-relaxed">
              Unser Experte,{" "}
              <span className="font-semibold text-white">Dr. James Hartwell</span>,
              bewertet Heimtrainer mit ehrlichen und umfassend dokumentierten Analysen auf Basis realer Praxistests — niemals anhand von Hersteller-Marketingversprechen.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                alt="Dr. James Hartwell"
                className="rounded-lg shadow-lg w-96 h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  <strong className="text-white">Bei example.com</strong>{" "}
                  vertreten wir eine klare Überzeugung: Sie verdienen objektive und praxisnahe Kaufberatung statt recycelter Werbetexte.{" "}
                  <strong className="text-white">Dr. James Hartwell</strong>,
                  unser leitender Tester und zertifizierter Personal Trainer mit über 10 Jahren Erfahrung, hat mehr als 60 Heimtrainer getestet.
                </p>
                <p className="text-primary-100/80">
                  Heimtrainer haben sich schnell von Fitnessstudios in Wohnzimmer verlagert. Da der Markt von unzähligen Modellen überschwemmt wird, ist es ohne Erfahrung schwierig, die richtige Wahl zu treffen. Genau hier kommen wir ins Spiel.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-primary-300" />
                  <span className="font-semibold text-white">Unser Zertifizierungsprozess</span>
                </div>
                <p className="text-primary-100/80 text-sm">
                  Jeden Heimtrainer, den wir empfehlen, testen wir unabhängig auf Qualität, Komfort, Haltbarkeit, Widerstandsleistung und Alltagstauglichkeit. Hersteller können keine Platzierungen kaufen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3">
            Die bestbewerteten Heimtrainer — Leistung & Komfort getestet
          </h2>
          <div className="divider-emerald mt-4 mb-4"></div>
          <p className="text-lg text-gray-500">
            Getestet in allen Kategorien. Zuverlässige Markenempfehlungen für jedes Budget.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 border text-sm ${
                activeBrand === brand
                  ? "bg-primary-600 text-white border-primary-600 shadow-emerald-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-gray-900 shadow-sm"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {brandData && (
          <div className="space-y-8">
            {/* Brand Overview Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
              <div className="bg-primary-600 px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <h2 className="text-2xl font-bold text-white">{activeBrand} Details</h2>
                  <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-end mt-2 sm:mt-0">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(brandData.status)}`}>
                      {brandData.status}
                    </div>
                    <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-1">
                      <Star className="w-5 h-5 text-amber-300 fill-current" />
                      <span className="font-bold text-lg text-white">{brandData.overallScore.toFixed(1)}/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex justify-center">
                    <img src={brandData.image} alt={`${activeBrand} Laufband`} className="rounded-xl shadow-card max-w-full h-auto" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Hauptmerkmale</h3>
                    {brandData.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-primary-50 rounded-xl border border-primary-100">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Test Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(brandData.tests).map(([test, data]) => {
                const IconComponent = data.icon;
                return (
                  <div key={test} className="bg-white rounded-2xl border border-gray-100 shadow-card hover:border-primary-300 hover:shadow-card-hover transition-all duration-200">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary-100 rounded-xl">
                            <IconComponent className="w-6 h-6 text-primary-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{test} Test</h3>
                        </div>
                        <div className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(data.status)}`}>
                          {data.status}
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{data.description}</p>
                      <div className="flex items-center space-x-2">
                        {renderStars(data.rating)}
                        <span className="text-sm text-gray-400">({data.rating})</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Individual Review */}
            {brandData.individualReview && (
              <div className="mt-16 space-y-8">
                <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl p-8 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-xl md:text-3xl font-bold mb-2">{brandData.individualReview.title}</h2>
                      <div className="flex items-center space-x-4 text-primary-200">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{brandData.individualReview.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{brandData.individualReview.author}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                      <div className="flex items-center space-x-2">
                        <BadgeCheck className="w-5 h-5" />
                        <span className="font-bold text-lg">{brandData.individualReview.verdict}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
                      <p className="text-gray-600 leading-relaxed mb-4">{brandData.individualReview.mainDescription}</p>
                      <p className="text-gray-600 leading-relaxed mb-4">{brandData.individualReview.testFindings}</p>
                      {brandData.individualReview.specialFeature && (
                        <p className="text-gray-600 leading-relaxed mb-4">
                          <strong className="text-gray-900">{brandData.individualReview.specialFeature}</strong>
                        </p>
                      )}
                      <p className="text-gray-900 font-semibold">{brandData.individualReview.conclusion}</p>
                    </div>

                    {brandData.individualReview.testCriteria && (
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Vollständige Testkriterien — Bewertungsübersicht</h3>
                        <div className="space-y-3">
                          {Object.entries(brandData.individualReview.testCriteria).map(([criteria, data]) => (
                            <div key={criteria} className="border-b border-gray-100 pb-3 last:border-0">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-gray-900">{criteria}</h4>
                                  <p className="text-sm text-gray-500">{data.description}</p>
                                </div>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < data.rating ? "text-amber-400 fill-current" : "text-gray-200"}`} />
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-1 space-y-6">
                    {brandData.individualReview.extras && (
                      <div className="bg-primary-50 rounded-2xl border border-primary-200 p-6">
                        <h3 className="text-lg font-bold text-primary-700 mb-3">Extras</h3>
                        <ul className="space-y-2">
                          {brandData.individualReview.extras.map((extra, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <Sparkles className="w-4 h-4 text-primary-600" />
                              <span className="text-primary-700">{extra}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {brandData.individualReview.suitableFor && (
                      <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                        <h3 className="text-lg font-bold text-emerald-700 mb-3">Geeignet für</h3>
                        <p className="text-emerald-700">{brandData.individualReview.suitableFor}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Winner Section */}
            {activeBrand.includes("Sportstech") && (
              <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary-100 rounded-xl">
                    <Award className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-700">
                      {activeBrand === "Sportstech X150"
                        ? "Beste Wahl: Sportstech X150 — Kompakter 3-in-1 Heimtrainer"
                        : "Premium-Wahl: Sportstech SX175 SpeedBike"}
                    </h4>
                    <p className="text-primary-600">
                      {activeBrand === "Sportstech X150"
                        ? "Höchste Gesamtbewertung in allen Testkategorien"
                        : "Ideal für leises und leistungsstarkes Cardio-Training zuhause"}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {activeBrand === "Sportstech X150" ? (
                    <>
                      Der Sportstech X150 ist die intelligente Wahl für Nutzer, die bei Vielseitigkeit und Platzersparnis keine Kompromisse eingehen möchten. Entwickelt als echtes 3-in-1 Trainingssystem kombiniert er Upright-Cycling, Liegeergometer-Funktion und Power-Rope-Training in einem Gerät, das sich auf nur 55 × 55 cm zusammenklappen lässt. <strong>4.86/5</strong>.
                    </>
                  ) : (
                    <>
                      Das Sportstech SX175 SpeedBike repräsentiert die Premiumklasse moderner Indoor-Cycling-Bikes mit einer Gesamtwertung von <strong>4.9/5</strong>. Dank des ultra-leisen Magnetwiderstandssystems ist es ideal für studioähnliche Workouts ohne Störung der Nachbarn.
                    </>
                  )}
                </p>
              </div>
            )}

            {/* ✅ DYNAMIC Buying Guide — per brand (DE) */}
            {brandData.buyingGuide && (
              <div className="bg-primary-50 rounded-2xl p-8 mt-12 border border-primary-100">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-primary-600" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {activeBrand} Kaufratgeber 2026 — Worauf Sie achten sollten
                    </h2>
                    <p className="text-lg text-gray-500">
                      Wichtige Kaufüberlegungen speziell für den {activeBrand}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {brandData.buyingGuide.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={idx}
                          className={`bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-300 shadow-sm transition-colors ${
                            item.fullWidth ? "md:col-span-2" : ""
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center`}>
                                <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Bevor Sie in den {activeBrand} investieren: </strong>
                      {brandData.closingNote}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Trainer Quote */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-card p-6 mt-8">
              <div className="flex items-start space-x-4">
                <img
                  src="https://walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                  alt="Dr. James Hartwell"
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary-300"
                />
                <div>
                  <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                    "Nach über 10 Jahren Erfahrung und mehr als 60 getesteten Heimtrainern kann ich mit voller Überzeugung sagen, dass die hier vorgestellten Modelle echte Leistung und verlässliche Qualität bieten. Unser Anspruch ist es, jede Empfehlung erst nach umfassender Prüfung von Qualität, Haltbarkeit und Performance auszusprechen."
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. James Hartwell</div>
                    <div className="text-sm text-gray-600">Leitender Performance- & Fitnessspezialist | NASM & ACE zertifiziert</div>
                    <div className="text-sm text-gray-500">10 Jahre Coaching-Erfahrung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <FAQ />
    </div>
  );
}