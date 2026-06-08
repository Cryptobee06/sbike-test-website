"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { useLocale } from "@/contexts/LanguageContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Award } from "lucide-react";
import GermanGradeLegend from "@/components/ratings/GermanGradeLegend";
import { getGermanGrade } from "@/utils/germanGrades";

const allWalkingPadsData = [
  {
    id: "sportstech SX175",
    brand: "Sportstech",
    model: "SX175",
    slug: "SportstechSX175",
    rating: 4.9,
    category: "both",
    badge: { en: "Test Winner 2025", de: "Testsieger 2025" },
    badgeColor: "bg-green-500",
    image: "/Model/Sportstech sx175 model.webp",
    price: "599.00",
    originalPrice: null,
    features: {
      display: { en: "23.8\" Full HD Rotating Touchscreen", de: "23,8\" Full-HD-Touchscreen drehbar" },
      dimensions: { en: "150 × 56 × 135 cm", de: "150 × 56 × 135 cm" },
      foldedSize: { en: "136 kg (300 lbs)", de: "n/a" },
      weight: { en: "Auto-Resistance 100 micro-levels", de: "136 kg" },
      flywheelMass: { en: "Optical HR + ANT+ Chest strap support", de: "n/a" },
      resistance: { en: "Auto-Resistance 100 micro-levels", de: "Automatischer Widerstand mit 100 Mikro-Stufen" },
      programs: { en: "4 pre-installed programs (P01–P04)", de: "4 vorinstallierte Programme (P01–P04)" },
      heartRate: { en: "Optical HR + ANT+ Chest strap support", de: "Optischer HR-Sensor + ANT+ Brustgurt-Unterstützung" },
      appCompatible: { en: "Wi-Fi, BT, ANT+", de: "WLAN, Bluetooth, ANT+" },
      backrest: { en: "No", de: "Nein" },
      driveSystem: { en: "2.5 HP Motor", de: "2.5 PS Motor" },
      deviceWeight: { en: "n/a", de: "n/a" },
    },
  },
  {
    id: "peloton bike",
    brand: "Peloton",
    model: "Bike",
    slug: "Peloton",
    rating: 4.0,
    category: "advanced",
    badge: { en: "", de: "" },
    badgeColor: "bg-blue-500",
    image: "/Model/Peloton bike model.webp",
    price: "299.00",
    originalPrice: "349.00",
    features: {
      display: { en: "24\" HD Pivoting Touchscreen", de: "24\" HD-Touchscreen schwenkbar" },
      dimensions: { en: "~152 × 56 × 140 cm", de: "ca. 152 × 56 × 140 cm" },
      foldedSize: { en: "n/a", de: "n/a" },
      weight: { en: "136 kg (300 lbs)", de: "136 kg" },
      flywheelMass: { en: "n/a", de: "n/a" },
      resistance: { en: "Electromagnetic 24 digital levels", de: "Elektromagnetisch mit 24 digitalen Stufen" },
      programs: { en: "n/a", de: "n/a" },
      heartRate: { en: "Handlebar pulse Chest strap compatible", de: "Pulssensoren am Lenker + Brustgurt-kompatibel" },
      appCompatible: { en: "Wi-Fi, BT, iFIT", de: "WLAN, Bluetooth, iFIT-App" },
      backrest: { en: "No", de: "Nein" },
      driveSystem: { en: "440 W", de: "440 Watt" },
      deviceWeight: { en: "n/a", de: "n/a" },
    },
  },
  {
    id: "nordictrack",
    brand: "Nordictrack",
    model: "Bike",
    slug: "Nordictrack",
    rating: 3.4,
    category: "advanced",
    badge: { en: "", de: "" },
    badgeColor: "bg-purple-500",
    image: "/Model/Nordictrack bike model.webp",
    price: "449.00",
    originalPrice: "499.00",
    features: {
      display: { en: "Built-in Controls App-based (no screen)", de: "App-basiert (kein integrierter Bildschirm)" },
      dimensions: { en: "~105 × 52 × 141 cm", de: "ca. 105 × 52 × 141 cm" },
      foldedSize: { en: "n/a", de: "n/a" },
      weight: { en: "150 kg (330 lbs)", de: "150 kg" },
      flywheelMass: { en: "n/a", de: "n/a" },
      resistance: { en: "Electronic Shifting SHIMANO/SRAM/Campagnolo", de: "Elektronische Schaltung SHIMANO/SRAM/Campagnolo" },
      programs: { en: "3 Programs", de: "3 Programme" },
      heartRate: { en: "ANT+ HRM + Bluetooth + L/R power balance", de: "ANT+ HRM + Bluetooth + Links/Rechts-Leistungsbalance" },
      appCompatible: { en: "BT 5.0 + ANT+ multi-device", de: "Bluetooth 5.0 + ANT+ Multi-Geräte-Kopplung" },
      backrest: { en: "No", de: "Nein" },
      driveSystem: { en: "2.5 HP", de: "2.5 PS" },
      deviceWeight: { en: "n/a", de: "n/a" },
    },
  },
  {
    id: "Wahoo bike",
    brand: "Wahoo",
    model: "Bike",
    slug: "Wahoo",
    rating: 3.9,
    category: "advanced",
    badge: { en: "", de: "" },
    badgeColor: "bg-orange-500",
    image: "/Model/Wahoo bike model.jpg",
    price: "399.00",
    originalPrice: null,
    features: {
      display: { en: "LED Display + Tablet Holder", de: "LED-Display + Tablet-Halterung" },
      dimensions: { en: "~100 × 47 × 120 cm", de: "ca. 100 × 47 × 120 cm" },
      foldedSize: { en: "120 kg (265 lbs)", de: "n/a" },
      weight: { en: "120 kg (265 lbs)", de: "120 kg" },
      flywheelMass: { en: "n/a", de: "n/a" },
      resistance: { en: "Stepless Magnetic Resistance", de: "Stufenloser Magnetwiderstand" },
      programs: { en: "n/a", de: "n/a" },
      heartRate: { en: "Handlebar pulse sensors", de: "Pulssensoren am Lenker" },
      appCompatible: { en: "Bluetooth + basic app", de: "Bluetooth + Basis-App-Unterstützung" },
      backrest: { en: "No", de: "Nein" },
      driveSystem: { en: "2.5 HP", de: "2.5 PS" },
      deviceWeight: { en: "n/a", de: "n/a" },
    },
  },
  {
    id: "Garmin Bike",
    brand: "Garmin",
    model: "Bike",
    slug: "Garmin",
    rating: 2.9,
    category: "advanced",
    badge: { en: "", de: "" },
    badgeColor: "bg-teal-500",
    image: "/Model/Garmin bike model.webp",
    price: "379.00",
    originalPrice: "429.00",
    features: {
      display: { en: "4.5\" Display + USB Chargers", de: "4,5\"-Display + USB-Ladeanschlüsse" },
      dimensions: { en: "~110 × 53 × 140 cm", de: "ca. 110 × 53 × 140 cm" },
      foldedSize: { en: "n/a", de: "n/a" },
      weight: { en: "136 kg (300 lbs)", de: "136 kg" },
      flywheelMass: { en: "n/a", de: "n/a" },
      resistance: { en: "Virtual Shifting Programmable gears", de: "Virtuelle Schaltung mit programmierbaren Gängen" },
      programs: { en: "n/a", de: "n/a" },
      heartRate: { en: "ANT+ HRM support L/R power balance", de: "ANT+ HRM-Unterstützung + Links/Rechts-Leistungsbalance" },
      appCompatible: { en: "BT Smart + ANT+ FE-C + Zwift", de: "Bluetooth Smart, ANT+ FE-C, Zwift" },
      backrest: { en: "No", de: "Nein" },
      driveSystem: { en: "2.5 HP", de: "2.5 HP" },
      deviceWeight: { en: "n/a", de: "n/a" },
    },
  },
  {
    id: "sportstech X150",
    brand: "Sportstech",
    model: "X150",
    slug: "Sportstech",
    rating: 4.9,
    category: "both",
    badge: { en: "Test Winner 2025", de: "Testsieger 2025" },
    badgeColor: "bg-green-500",
    image: "/Model/Sportstech X150 model.webp",
    price: "599.00",
    originalPrice: null,
    features: {
      display: { en: "3.5\" LCD Tablet", de: "3,5\" LCD + Tablet-Halterung" },
      dimensions: { en: "104.5×53.5×112 mm", de: "104,5 × 53,5 × 112" },
      foldedSize: { en: "55 x 55 cm", de: "55 x 55 cm" },
      weight: { en: "120 kg", de: "120 kg" },
      flywheelMass: { en: "4 Kg", de: "4 kg" },
      resistance: { en: "8 magnetic", de: "8 Magnetstufen" },
      programs: { en: "3-in-1 + App", de: "3-in-1 + App" },
      heartRate: { en: "Hand sensors", de: "Handsensoren" },
      appCompatible: { en: "Zwift/Kinomap", de: "Zwift / Kinomap" },
      backrest: { en: "Recumbent mode", de: "Liegeergometer-Modus" },
      driveSystem: { en: "Belt drive", de: "Riemenantrieb" },
      deviceWeight: { en: "~19 kg", de: "ca. 19 kg" },
    },
  },
  {
    id: "Ultrasport",
    brand: "Ultrasport",
    model: "Bike",
    slug: "Ultrasport",
    rating: 3.5,
    category: "amateur",
    // badge: { en: "Test Winner 2025", de: "Testsieger 2025" },
    badgeColor: "bg-green-500",
    image: "/Model/ultrasport bike model.jpg",
    price: "599.00",
    originalPrice: null,
    features: {
      display: { en: "LCD Console", de: "LCD-Konsole" },
      dimensions: { en: "80×45×121", de: "80 × 45 × 121" },
      foldedSize: { en: "30×40×142 cm", de: "30 × 40 × 142 cm" },
      weight: { en: "100 kg", de: "100 kg" },
      flywheelMass: { en: "1.5 kg", de: "1,5 kg" },
      resistance: { en: "8 magnetic", de: "8 Magnetstufen" },
      programs: { en: "Manual only", de: "Manuell" },
      heartRate: { en: "Hand sensors", de: "Handsensoren" },
      appCompatible: { en: "No", de: "Nein" },
      backrest: { en: "Included", de: "Inklusive" },
      driveSystem: { en: "Belt drive", de: "Riemenantrieb" },
      deviceWeight: { en: "~12 kg", de: "ca. 12 kg" },
    },
  },
  {
    id: "Sportplus",
    brand: "Sportplus",
    model: "Bike",
    slug: "SportPlus",
    rating: 3.4,
    category: "amateur",
    // badge: { en: "Test Winner 2025", de: "Testsieger 2025" },
    badgeColor: "bg-green-500",
    image: "/Model/Sportplus bike model.webp",
    price: "599.00",
    originalPrice: null,
    features: {
      display: { en: "5.5\" Backlit LCD", de: "5,5\" LCD mit Hintergrundbeleuchtung" },
      dimensions: { en: "102×51×140", de: "102 × 51 × 140" },
      foldedSize: { en: "Not foldable", de: "Nicht klappbar" },
      weight: { en: "150 kg", de: "150 kg" },
      flywheelMass: { en: "10 kg", de: "10 kg" },
      resistance: { en: "24 computer", de: "24 computergesteuerte Stufen" },
      programs: { en: "24 + 18 via App", de: "24 + 18 per App" },
      heartRate: { en: "Hand sensors", de: "Handsensoren" },
      appCompatible: { en: "Kinomap/BT", de: "Kinomap / BT" },
      backrest: { en: "No", de: "Nein" },
      driveSystem: { en: "Belt drive", de: "2.5 HP" },
      deviceWeight: { en: "~37 kg", de: "ca. 37 kg" },
    },
  },
  {
    id: "DOMYOS",
    brand: "DOMYOS",
    model: "Bike",
    slug: "DOMYOS",
    rating: 3.8,
    category: "amateur",
    // badge: { en: "Test Winner 2025", de: "Testsieger 2025" },
    badgeColor: "bg-green-500",
    image: "/Model/essential bike model.jpg",
    price: "599.00",
    originalPrice: null,
    features: {
      display: { en: "4-function LCD", de: "4-Funktionen-LCD" },
      dimensions: { en: "87×48×121", de: "87 × 48 × 121" },
      foldedSize: { en: "Not foldable", de: "Nicht klappbar" },
      weight: { en: "110 kg", de: "110 kg" },
      flywheelMass: { en: "3 kg", de: "3 kg" },
      resistance: { en: "7 manual", de: "7 manuelle Stufen" },
      programs: { en: "None", de: "Keine" },
      heartRate: { en: "No", de: "Nein" },
      appCompatible: { en: "No", de: "Nein" },
      backrest: { en: "No", de: "Nein" },
      driveSystem: { en: "Belt drive", de: "Riemenantrieb" },
      deviceWeight: { en: "20 kg", de: "ca. 20 kg" },
    },
  },
  {
    id: "AsVIVA",
    brand: "AsVIVA",
    model: "Bike",
    slug: "AsVIVA",
    rating: 3.7,
    category: "amateur",
    // badge: { en: "Test Winner 2025", de: "Testsieger 2025" },
    badgeColor: "bg-green-500",
    image: "/Model/AsVIVA bike model.webp",
    price: "599.00",
    originalPrice: null,
    features: {
      display: { en: "Backlit LCD + App", de: "Hintergrundbeleuchtetes LCD + App" },
      dimensions: { en: "118×54×139", de: "118 × 54 × 139" },
      foldedSize: { en: "Not foldable", de: "Nicht klappbar" },
      weight: { en: "150 kg", de: "150 kg" },
      flywheelMass: { en: "15 kg", de: "15 kg" },
      resistance: { en: "16 computer", de: "16 computergesteuerte Stufen" },
      programs: { en: "12 preset", de: "12 vorprogrammierte Stufen" },
      heartRate: { en: "+ Chest strap", de: "+ Brustgurt" },
      appCompatible: { en: "Kinomap/BT", de: "Kinomap / Bluetooth" },
      backrest: { en: "No", de: "Nein" },
      driveSystem: { en: "Belt drive", de: "Riemenantrieb" },
      deviceWeight: { en: "38 kg", de: "ca. 38 kg" },
    },
  },
];

const categoryDefinitions = {
  amateur: {
    name: { en: "Amateur Exercise Bikes", de: "Amateur-Exercise Bikes" },
    ids: ["sportstech X150", "Ultrasport", "Sportplus", "DOMYOS", "AsVIVA"],
  },
  advanced: {
    name: { en: "Advanced Exercise Bikes", de: "Advanced Exercise Bikes" },
    ids: ["sportstech SX175", "peloton bike", "nordictrack", "Wahoo bike", "Garmin Bike"],
  },
};

const featureRows = [
  { label: { en: "Display", de: "Display" }, key: "display" },
  { label: { en: "Dimensions (cm)", de: "Abmessungen (cm)" }, key: "dimensions" },
  { label: { en: "Max User Weight", de: "Max. Benutzergewicht" }, key: "weight" },
  { label: { en: "Resistance Levels", de: "Widerstandsstufen" }, key: "resistance" },
  { label: { en: "Pulse Measurement", de: "Pulsmessung" }, key: "heartRate" },
  { label: { en: "App Compatible", de: "App-kompatibel" }, key: "appCompatible" },
];

// ── MOBILE CARD ──────────────────────────────────────────────────────────────
function MobileCard({ brand, locale, isWinner, readReviewLabel, basePath, featureRowsData }) {
  const hasBadge = brand.badge?.[locale];
  const grade = getGermanGrade(brand.rating, locale);

  return (
    <div
      className={`bg-white rounded-2xl border overflow-visible relative ${
        isWinner
          ? "border-primary-400 ring-2 ring-primary-100"
          : "border-gray-200"
      }`}
    >
      {/* Badge — absolute top-left, exactly like desktop */}
      {hasBadge && (
        <div className="absolute top-2 left-2 bg-green-600 text-white text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide z-10 whitespace-nowrap">
          {brand.badge[locale]}
        </div>
      )}

      {/* Award icon — absolute top-right, exactly like desktop */}
      {isWinner && (
        <div className="absolute -top-2 -right-2 bg-green-600 text-white p-1 rounded-full z-10">
          <Award className="w-4 h-4" />
        </div>
      )}

      {/* Product image — pt-10 gives space so badge doesn't overlap image */}
      <div className="w-full flex items-center justify-center bg-gray-50 pt-10 pb-4 px-6 rounded-t-2xl">
        <img
          src={brand.image}
          alt={`${brand.brand} ${brand.model}`}
          className="h-28 w-auto object-contain"
        />
      </div>

      {/* Name + Stars */}
      <div className="text-center px-4 pt-3 pb-4">
        <h3 className="font-bold text-[17px] text-gray-900 mb-2 leading-tight">
          {brand.brand} {brand.model}
        </h3>
        <div className="flex items-center justify-center">
          <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm border ${grade.badgeClass}`} style={grade.badgeStyle}>
            Note {grade.note} ({grade.label})
          </span>
        </div>
      </div>

      {/* Spec rows */}
      <div className="border-t border-gray-100 mx-4">
        {featureRowsData.map((feature, i) => (
          <div
            key={feature.key}
            className={`flex justify-between items-start py-3 gap-4 ${
              i < featureRowsData.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className="text-[13px] text-gray-500 font-medium flex-shrink-0">
              {feature.label[locale]}
            </span>
            <span className="text-[13px] text-gray-800 text-right leading-snug font-normal">
              {brand.features[feature.key][locale]}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 py-4">
        <Link
          href={`${basePath}/brands/${brand.slug}`}
          className="w-full block text-center py-3 rounded-xl font-bold text-sm bg-primary-600 text-white hover:bg-primary-700 transition-colors"
        >
          {readReviewLabel}
        </Link>
      </div>
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────
function ReviewsContent() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const category = categoryParam && categoryDefinitions[categoryParam] ? categoryParam : "amateur";
  const tableRef = useRef(null);

  const walkingPadsData = (() => {
    if (!category || !categoryDefinitions[category]) return allWalkingPadsData;
    const categoryIds = categoryDefinitions[category].ids;
    return allWalkingPadsData.filter(
      (pad) => categoryIds.includes(pad.id) || categoryIds.includes(pad.slug)
    );
  })();

  const renderStars = (rating) => {
    const grade = getGermanGrade(rating, locale);

    return (
      <div className="flex items-center justify-center">
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm border ${grade.badgeClass}`} style={grade.badgeStyle}>
          Note {grade.note} ({grade.label})
        </span>
      </div>
    );
  };

  const getBasePath = () => (locale === "de" ? "/de" : "");

  const pageText = {
    title: { en: "Exercise Bike Comparison", de: "Erweiterter Heimtrainer-Vergleich" },
    subtitle: {
      en: "Compare the world's finest smart exercise bikes, tested by certified fitness professionals across power accuracy, ride realism, connectivity, and value.",
      de: "Vergleichen Sie die weltweit besten smarten Heimtrainer, getestet von zertifizierten Fitness-Experten.",
    },
    model: { en: "Model", de: "Model" },
    readReview: { en: "Read Review", de: "Test lesen" },
    recommendation:
      category === "amateur"
        ? {
            title: { en: "Our Recommendation: Sportstech X150 Ergometer - Winner", de: "Unsere Empfehlung: Sportstech X150 Ergometer — Sieger 2026" },
            text: {
              en: "The Sportstech X150 stands out as the best all-round amateur exercise bike of 2025. Its unique 3-in-1 design combined with Zwift & Kinomap app compatibility, a foldable frame and integrated tablet holder make it the most versatile package in its class.",
              de: "Das Sportstech X150 überzeugt als bester Allround-Heimtrainer für Hobby- und Einsteiger-Nutzer im Jahr 2025.",
            },
          }
        : {
            title: { en: "Our Recommendation: Sportstech SX175 — Winner", de: "Unsere Empfehlung: Sportstech SX175 — Testsieger" },
            text: {
              en: "The Sportstech SX175 stands out as the best value proposition in the advanced exercise bike category. With stepless magnetic resistance, built-in pulse measurement, and an LED display, all at just €299, it delivers everything most home users need without a mandatory subscription.",
              de: "Das Sportstech SX175 bietet das beste Preis-Leistungs-Verhältnis im Premium-Heimtrainer-Segment.",
            },
          },
  };

  const isWinner = (id) => id === "sportstech X150" || id === "sportstech SX175";

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative treadmill-bacgroundimage">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center py-14 sm:py-20 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              {pageText.title[locale]}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto text-white/90 drop-shadow px-2">
              {pageText.subtitle[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b border-gray-100 shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 py-3 sm:py-4">
            <Link
              href={`${getBasePath()}/reviews/?category=amateur`}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                category === "amateur"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {categoryDefinitions.amateur.name[locale]}
            </Link>
            <Link
              href={`${getBasePath()}/reviews/?category=advanced`}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                category === "advanced"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {categoryDefinitions.advanced.name[locale]}
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GermanGradeLegend locale={locale} />
        </div>
      </section> */}

      {/* Comparison Section */}
      <section className="py-8 sm:py-12">
        <div className="min-h-screen bg-primary-50 px-3 sm:px-4 lg:px-6 py-6">
          <div className="max-w-8xl mx-auto">

            {/* ── MOBILE CARDS (< 768px) ── */}
            <div className="md:hidden space-y-4 px-1 pt-2">
              {walkingPadsData.map((brand) => (
                <MobileCard
                  key={brand.id}
                  brand={brand}
                  locale={locale}
                  isWinner={isWinner(brand.id)}
                  readReviewLabel={pageText.readReview[locale]}
                  basePath={getBasePath()}
                  featureRowsData={featureRows}
                />
              ))}

              {/* Mobile recommendation strip */}
              <div className="bg-white rounded-2xl border border-primary-200 p-5 mt-4">
                <h3 className="text-base font-bold text-primary-700 mb-2">
                  {pageText.recommendation.title[locale]}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pageText.recommendation.text[locale]}
                </p>
              </div>
            </div>

            {/* ── DESKTOP TABLE (>= 768px) ── */}
            <div className="hidden md:block bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
              <div className="w-full relative">
                <div className="w-full overflow-x-auto" ref={tableRef}>
                  <table className="border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="sticky left-0 z-30 bg-gray-50 border-r border-gray-200 w-[260px] p-3 text-center font-semibold text-gray-700">
                          <span className="text-lg">{pageText.model[locale]}</span>
                        </th>
                        {walkingPadsData.map((brand) => (
                          <th key={brand.id} className="p-2 text-center align-top w-[300px] bg-white">
                            <div
                              className={`relative bg-white rounded-2xl p-4 shadow-sm border transition-all duration-300 ${
                                isWinner(brand.id)
                                  ? "border-primary-400 ring-1 ring-primary-100"
                                  : "border-gray-100 hover:border-primary-200"
                              }`}
                            >
                              {isWinner(brand.id) && brand.badge[locale] && (
                                <>
                                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold z-10">
                                    {brand.badge[locale]}
                                  </div>
                                  <div className="absolute -top-2 -right-2 bg-green-600 text-white p-1 rounded-full">
                                    <Award className="w-4 h-4" />
                                  </div>
                                </>
                              )}
                              <div className="pt-2">
                                <div className="w-full h-32 mb-4 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                                  <img
                                    src={brand.image}
                                    alt={`${brand.brand} ${brand.model}`}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>
                                <h3 className="font-bold text-base mb-3 text-gray-900 leading-tight h-[70px]">
                                  {brand.brand} {brand.model}
                                </h3>
                                <div className="mb-3">{renderStars(brand.rating)}</div>
                                <Link
                                  href={`${getBasePath()}/brands/${brand.slug}`}
                                  className="inline-block w-full text-center py-2 px-3 rounded-xl font-semibold text-sm transition-colors bg-primary-600 text-white hover:bg-primary-700"
                                >
                                  {pageText.readReview[locale]}
                                </Link>
                              </div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {featureRows.map((feature, index) => (
                        <tr
                          key={feature.key}
                          className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}
                        >
                          <td className="sticky left-0 z-20 bg-gray-50 border-r border-gray-200 w-[260px] p-4 font-semibold text-gray-700">
                            <span className="text-base">{feature.label[locale]}</span>
                          </td>
                          {walkingPadsData.map((brand) => (
                            <td
                              key={brand.id}
                              className={`p-4 text-center text-base w-[300px] ${
                                isWinner(brand.id)
                                  ? "bg-primary-50 text-primary-700 font-medium"
                                  : "text-gray-600"
                              }`}
                            >
                              {brand.features[feature.key][locale]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Desktop recommendation strip */}
                <div className="bg-primary-50 p-6 border-t border-primary-100">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-primary-700 mb-2">
                      {pageText.recommendation.title[locale]}
                    </h3>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                      {pageText.recommendation.text[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white text-gray-600 flex items-center justify-center p-8">
          Loading...
        </div>
      }
    >
      <ReviewsContent />
    </Suspense>
  );
}