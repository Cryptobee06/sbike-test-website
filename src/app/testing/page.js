"use client";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Volume2,
  Heart,
  Award,
  Calendar,
  User,
  Clock,
  ChevronRight,
  Sparkles,
  BadgeCheck,
  Wifi,
  Dumbbell,
  Activity,
} from "lucide-react";
import FAQ from "@/components/guide/FAQ";
import GermanGradeLegend from "@/components/ratings/GermanGradeLegend";
import { getGermanGrade } from "@/utils/germanGrades";

const brands = [
  "Sportstech SX175",
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
  "Sportstech SX175": {
    image: "/Test page/sx175 test image.webp",
    overallScore: 4.86,
    status: "Passed",
    features: [
      "Stepless magnetic resistance — smooth, maintenance-free adjustment at any intensity",
      "4 kg flywheel — steady momentum for consistent pedal stroke",
      "LED Knob Display — shows time, speed, distance, calories, pulse, and heart rate",
      "Bluetooth connectivity — pairs with Sportstech Live App and Kinomap",
      "Seat height adjustable 65–72 cm, suitable for 1.55–1.90 m rider height. Maximum user weight: 120 kg — solid rating for the price bracket",
      "Transport wheels — easy to reposition after training sessions",
      "2-year manufacturer warranty — above average for entry-level bikes",
    ],
    buyingGuide: [
      {
        icon: Zap,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Ultra-Slim Design",
        description:
          "The compact frame design works well for home and office environments. Look for dimensions under 120 × 55 cm if space is a priority. Integrated transport wheels make repositioning after each session straightforward.	",
      },
      {
        icon: Volume2,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Remote & App Connectivity",
        description:
          "Boost your training efficiency with Bluetooth connectivity to leading apps like Sportstech Live, Kinomap, or Zwift. App-connected bikes provide structured programmes, virtual routes, and performance tracking that dramatically extend workout variety.",
      },
      {
        icon: Wifi,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Comfort-Focused Platform Surface",
        description:
          "Multi-layer saddle design, adjustable height, and ergonomic handlebar positioning are essential for sessions longer than 20 minutes. Always check the adjustable seat height range against your inseam measurement before purchasing.",
      },
      {
        icon: Heart,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Warranty & Customer Support",
        description:
          "Look for a minimum 2-year frame warranty and accessible customer service channels. Brands like Sportstech provide round-the-clock online support and comprehensive spare-parts documentation, a real advantage for long-term ownership confidenc",
      },
      {
        icon: Shield,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Durable Frame Construction",
        description:
          "Powder-coated steel frames offer corrosion resistance and long-term structural stability. Check maximum user weight ratings carefully. For users above 90 kg, choose a bike rated at least 120 kg for an appropriate safety margin and frame longevity",
        fullWidth: true,
      },
    ],
    closingNote: " consider how often and where you will use it. Apartment users should focus on quiet operation and portability, while fitness-focused buyers need adjustable intensity and smart features. The best exercise bike is the one that fits your lifestyle and gets used consistently every day. For office use, prioritise compactness and sound control. For performance training at home, prioritise resistance range, app connectivity, and flywheel weight. What matters most for your health and conditioning is the machine you actually use.",
    tests: {
      "Speed & Resistance": {
        description:
          "Stepless magnetic brake tested across the full range at 60–100 RPM. Resistance transitions were smooth and lag-free. Maximum output measured at approximately 250 W at 80 RPM, appropriate for cardio and HIIT use.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The powder-coated steel frame showed no flex or instability during 60-minute sessions at a 90 kg test weight. Weld quality was consistent across frame joints. No squeaks or loosening detected across 15 hours of accumulated test usage.",
        rating: "5 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "Operated below 42 dB at moderate intensity, verified using professional sound meter. Suitable for flat and apartment use. The magnetic system produces zero friction noise. One of the quietest bikes tested in this price category.",
        rating: "4.9 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The multi-layer comfort saddle performed well across 30 and 45-minute sessions. Handlebar height and reach adjustments adequately served test riders from 1.60 m to 1.87 m. Pedals are standard (no clip-in system), ideal for everyday training shoes.",
        rating: "4.9 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & App": {
        description:
          "Bluetooth pairing with the Sportstech Live App was completed in under 60 seconds. App provides trainer-led workout videos, personalised fitness plans, community features, and nutrition guidance. Kinomap compatibility confirmed for scenic virtual rides.",
        rating: "4.9 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: Sportstech SX175 SpeedBike — Test Winner 2026",
      modelName: "Sportstech SX175 SpeedBike",
      verdict: "Daily Cardio and Apartment Training",
      rating: 5.0,
      publishDate: "January 2026",
      author: "Dr. James Hartwell",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 5,
          description: "Stepless magnetic system — lag-free, full-range precision",
        },
        "Noise Level": {
          rating: 5,
          description: "Below 42 dB at moderate intensity — apartment-friendly",
        },
        "Cushioning & Comfort": {
          rating: 5,
          description: "Multi-layer saddle — comfortable for 45+ min sessions",
        },
        "Office / Home Suitability": {
          rating: 5,
          description: "Compact 112 × 49 cm footprint — suitable for most rooms",
        },
        Cost: {
          rating: 5,
          description: "Under €300 — exceptional value for feature set",
        },
        "Value for Money": {
          rating: 5,
          description: "Best-in-class for price; Bluetooth + app at entry-level cost",
        },
      },
      extras: ["Bluetooth app integration", "Sportstech Live platform provides structured workouts"],
      suitableFor: "Home & Office Use, Daily Cardio, Apartment Training, App-Guided Workouts",
      mainDescription:
        "The Sportstech SX175 is, at its core, a well-engineered entry-level indoor cycling bike that consistently outperforms expectations for its price range. From the moment you sit on it, the quality of the magnetic resistance system becomes apparent — it is genuinely silent in a way that many budget bikes simply are not, and the stepless adjustment dial gives you a granular control over workout intensity that belts or friction pads cannot replicate.",
      testFindings:
        "In daily practical use, the SX175 showed excellent performance at every speed level. The 4 kg flywheel is lighter than premium spin bikes, but handles moderate to high cadence sessions without the dead-spot sensation you sometimes feel in cheaper machines. The resistance is adjustable throughout the routine and can be adjusted in individually adaptable ways, and with the Sportstech Live App available, the display delivers a focused, full training experience rather than just metric readouts.",
      specialFeature:
        "The Bluetooth app integration sets this bike firmly apart from competitors at a similar price. The Sportstech Live platform provides structured workouts, scenic virtual rides via Kinomap, and performance tracking that meaningfully elevates what a sub-€300 bike can offer the average home user.",
      conclusion:
        "For riders who want a silent, space-efficient, app-connected indoor bike for daily home cardio and interval sessions, the Sportstech SX175 SpeedBike is our unanimous test winner in the 2025 exercise bike category.",
    },
  },
  "Sportstech X150": {
    image: "/Test page/x150 test image.jpg",
    overallScore: 4.9,
    status: "Passed",
    features: [
      "3-in-1 training modes — upright bike, recumbent (lie-back) position, and upper-body Power Ropes for full-body conditioning",
      "QuickFold system — collapses to just 55 × 55 cm footprint in seconds, with integrated transport wheels for effortless repositioning",
      "8-level magnetic resistance — smooth, quiet, maintenance-free adjustment across all intensity levels",
      "1.5 kg flywheel with belt drive — near-silent operation for apartment and home use at any time of day",
      "3.5\" LCD multifunction console — displays time, speed, distance, calories, RPM, and heart rate",
      "Integrated Power Ropes — combine cardio and upper-body strength training simultaneously",
      "Ergonomic recline saddle with backrest — adjustable seat height suitable for riders 1.50–1.80 m; maximum user weight: 120 kg",
    ],
    buyingGuide: [
      {
        icon: Dumbbell,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Space-Saving Foldability",
        description:
          "For apartment and home users, fold dimensions matter as much as workout dimensions. The X150's QuickFold system reduces the footprint to 55 × 55 cm — small enough to store in a hallway or behind a door. Always check both the in-use dimensions (for your training space) and the folded dimensions (for storage). ",
      },
      {
        icon: TrendingUp,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Multi-Mode Training Value",
        description:
          "A 3-in-1 machine like the X150 effectively replaces three separate pieces of equipment: an upright bike, a recumbent ergometer, and an upper-body cable trainer. For users with limited space or budget, multi-function platforms deliver significantly more training variety per square metre than a single-mode bike. ",
      },
      {
        icon: Volume2,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Resistance System Quality",
        description:
          "Magnetic resistance systems are quieter, smoother, and more maintenance-free than friction-based alternatives. For apartment use, a magnetic belt-drive combination is the gold standard. Eight resistance levels are adequate for beginner to intermediate users.",
      },
      {
        icon: Heart,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "App & Connectivity",
        description:
          "Bikes compatible with platforms like Kinomap, Zwift, and the Sportstech Live App deliver structured workouts, scenic virtual rides, and performance tracking that dramatically extend training variety and motivation. On manually-adjusted bikes like the X150, the app guides resistance changes rather than automating them.",
      },
      {
        icon: Wifi,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Warranty & Support",
        description:
          "Look for a minimum 2-year frame warranty and responsive customer service. Sportstech provides round-the-clock online support and comprehensive spare-parts documentation — a real advantage for long-term confidence in a home fitness investment.",
        fullWidth: true,
      },
    ],
    closingNote: " consider how often, where, and how you will use it. For apartment users, fold dimensions and quiet operation are the decisive factors. For fitness-focused buyers who want variety without buying multiple machines, a 3-in-1 platform like the X150 is the most efficient investment. For performance training, prioritise flywheel weight and resistance range. What matters most for your long-term health and consistency is the machine that fits your lifestyle and gets used every day. The Sportstech X150 is built precisely for users who need all of that from a single, smartly-engineered machine.",
    tests: {
      "Speed & Resistance": {
        description:
          "Eight-level magnetic resistance tested across the full range at 50–90 RPM. The resistance dial transitions are smooth and consistent at all levels, with no lag between adjustments. The belt-drive system runs silently and without friction noise.",
        rating: "4.7 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The powder-coated steel frame showed no flex or instability during 45-minute sessions at an 85 kg test weight. The QuickFold hinge mechanism is solid after repeated fold/unfold cycles, with no loosening detected. The Power Rope anchors remained secure throughout testing.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "The belt-drive magnetic resistance system operates below 45 dB at moderate intensity, confirmed suitable for apartment use at any hour. The three-part crankshaft assembly is specifically engineered for quiet power transfer, and the magnetic braking system produces zero friction noise. One of the quietest compact multi-function bikes tested in its price category.",
        rating: "5 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The ergonomic recline saddle with backrest performed well in both upright and recumbent positions across 30 and 45-minute sessions. The adjustable seat height accommodates a reasonable range of inseam lengths for riders between 1.50 m and 1.80 m.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & App ": {
        description:
          "The 3.5\" LCD console displays all key metrics clearly. The Bluetooth connection links to Kinomap and Zwift for virtual route riding, and to the Sportstech Live App for coached workouts, community challenges, and performance tracking.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: Sportstech X150 — Best Compact 3-in-1 Home Trainer 2026",
      modelName: "Sportstech X150",
      verdict: "Space-Saving, Full-Body Home Training",
      rating: 4.8,
      publishDate: "January 2026",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 5,
          description: "8-level magnetic system — smooth, lag-free transitions",
        },
        "Noise Level": {
          rating: 5,
          description: "Belt-drive below 45 dB — fully apartment-friendly",
        },
        "Cushioning & Comfort": {
          rating: 5,
          description: "Ergonomic saddle with backrest — comfortable for 45+ min",
        },
        "Space Efficiency": {
          rating: 5,
          description: "QuickFold to 55 × 55 cm — best-in-class compactness",
        },
        "Cost  ": {
          rating: 5,
          description: "Under €200 — exceptional value for a 3-in-1 machine",
        },
        "Value for Money": {
          rating: 4,
          description: "App connectivity, Power Ropes & recumbent mode at entry-level cost",
        },
      },
      extras: [
        "QuickFold space-saving system (55 × 55 cm folded)",
        "Integrated Power Ropes for simultaneous upper-body training",
        "Recumbent (lie-back) position mode",
        "Kinomap, Zwift & Sportstech Live App compatible",
      ],
      suitableFor:
        "Home & Apartment Use, Full-Body Cardio + Strength Conditioning, Beginners to Intermediate Riders, App-Guided & Virtual Route Workouts, Space-Restricted Living Environments",
      mainDescription:
        "The Sportstech X150 occupies a unique space in the home fitness market: a genuinely versatile multi-function bike that manages to be both compact and genuinely useful, without the compromise in quality that often comes at this price point. It is, above all else, a problem-solver for people who want more from a single machine but live in apartments or homes where space is a non-negotiable constraint.",
      testFindings:
        "From first use, the three training modes stand out as the X150's defining strength. The transition between upright cycling, the recumbent lie-back position, and Power Rope upper-body training is seamless and genuinely opens up training variety that a standard home bike simply cannot offer.",
      specialFeature:
        "The combination of integrated Power Ropes and recumbent training mode within a machine that folds to 55 × 55 cm is the X150's standout achievement. No comparable bike in the under-€200 bracket offers this level of training versatility without sacrificing build quality or stability.",
      conclusion:
        "For home users who want a multi-modal, quiet, and space-efficient fitness solution for daily cardio, strength conditioning, and app-connected training, the Sportstech X150 is the outstanding choice in its category. It earns its position as our top-rated compact 3-in-1 exercise bike for 2026.",
    },
  },
  "Peloton": {
    image: "/Test page/Peloton test image.jpg",
    overallScore: 4,
    status: "Passed",
    features: [
      "Syncs resistance to instructor cues automatically — 100 micro-adjustable magnetic levels, no manual input needed",
      "Heavy commercial-grade flywheel delivers road-bike momentum and silky smooth pedal stroke at any cadence",
      "Full HD touchscreen rotates up to 360° — seamlessly transitions from cycling to floor strength and yoga",
      "Built-in computer-vision camera tracks reps, corrects form in real time, and suggests optimal weights",
      "Front-facing speakers with dedicated woofer — studio-quality sound that genuinely transforms the ride experience",
      "Built-in cooling fan keeps you at peak performance; a rare convenience that competitors charge extra for",
      "Fits the space of a yoga mat — one of the few premium bikes that works in apartments without sacrifice",
      "Native GymKit connectivity streams live heart rate, calories, and metrics directly to your watch mid-ride",
    ],
    buyingGuide: [
      {
        icon: Zap,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Understand the Ecosystem Cost",
        description:
          "Connected bikes like the Peloton require a subscription for full functionality. At $44/month, factor $528 per year into your budget. Over 4 years, the total cost of ownership for a Bike+ exceeds $4,600 before accessories. Compare this against your gym membership before deciding.",
      },
      {
        icon: Activity,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Pedal Compatibility",
        description:
          "Premium bikes increasingly use proprietary cleats. The Bike+ ships with Delta-compatible pedals only — requiring dedicated cycling shoes (~$125+). If you prefer training in standard footwear, verify your chosen bike supports SPD or cage adapters before purchasing.",
      },
      {
        icon: Heart,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Screen & Smart Coaching Value",
        description:
          "A rotating touchscreen matters most for cross-training users. If you plan to use the bike purely for cycling, a fixed screen is sufficient and saves money. The Peloton IQ camera and AI coaching features are valuable for strength work — only relevant if you plan to use the floor workout library actively.",
      },
      {
        icon: Shield,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Flywheel Weight Matters",
        description:
          "Heavier flywheels (30 lb+) create genuine road-bike momentum. The Bike+'s 38 lb flywheel is a serious component advantage. Budget bikes with 10-15 lb flywheels feel noticeably choppy at high cadence — don't underestimate this difference over months of daily use.",
      },
      {
        icon: Wifi,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Warranty Confidence",
        description:
          "Peloton provides a 5-year frame warranty, 3-year component warranty, and 1-year labour warranty. Verify that software update commitments for the smart features align with your expected ownership period before investing.",
        fullWidth: true,
      },
    ],
    closingNote: " For studio-trained cyclists and cross-training enthusiasts who want the highest-quality at-home experience and can absorb the subscription cost, the Peloton Cross Training Bike+ is unmatched. For everyday home cardio users seeking silent, effective training without platform lock-in, consider whether a mid-range alternative better matches your realistic weekly usage and budget.",
    tests: {
      "Resistance & Ride Quality": {
        description:
          "Auto-resistance performed flawlessly across all 100 magnetic levels, syncing to instructor cues with under 2-second latency. The 38 lb flywheel delivers the buttery smooth momentum of commercial studio bikes, with no dead-spot sensation at any cadence.",
        rating: "3.9 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The steel frame showed zero flex across 60-minute high-intensity sessions at a 100 kg test weight. The maximum rated user weight is 136 kg. Weld quality and joint finishing are well above entry-level competition.",
        rating: "3.8 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "Belt-drive magnetic system operates near-silently at moderate intensity, verified at under 45 dB in a standard living room. Suitable for apartment and shared-wall environments. The Sonos-tuned speaker system, while excellent in quality, can bleed sound at higher volumes.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The redesigned saddle is an improvement over its predecessor with better weight distribution, and received positive feedback from test riders across 30- and 45-minute sessions. However, Delta-exclusive pedals remain a significant drawback — they require proprietary cycling cleats (sold separately for ~$125), adding friction for casual riders who own standard trainers.",
        rating: "3.7 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech, App & Peloton IQ": {
        description:
          "Peloton IQ camera-based form correction is genuinely impressive for strength cross-training — rep tracking accuracy is high, and weight suggestions are sensible. The 23.8\" touchscreen is responsive, and the Peloton app library remains the deepest in the industry.",
        rating: "3.7 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review: Peloton Cross Training Bike+",
      modelName: "Peloton Cross Training Bike+",
      verdict: "Premium Contender 2026",
      rating: 2.0,
      publishDate: "January 2025",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 3,
          description: "Auto-resistance sync — 100 micro-adjustable levels, lag-free precision",
        },
        "Noise Level": {
          rating: 2,
          description: "Under 45 dB mechanically — belt-drive magnetic, apartment-suitable",
        },
        "Cushioning & Comfort": {
          rating: 2,
          description: "Redesigned saddle; Delta pedals require cleats (extra cost)",
        },
        "Office / Home Suitability": {
          rating: 3,
          description: "4' x 2' footprint (yoga mat size) — compact for premium class",
        },
        "Cost & Value for Money": {
          rating: 2,
          description: "$2,695 base + $44/mo subscription — premium, high ongoing cost",
        },
        "Tech & Smart Features": {
          rating: 2,
          description: "Peloton IQ AI coaching + Apple Watch GymKit + 23.8\" rotating HD screen",
        },
      },
      extras: ["Studio-Quality Home Training", "Cross Training & Strength"],
      suitableFor:
        "HIIT & Interval Cycling, App-Guided Workouts, Apartment Use, Advanced Enthusiasts, Apple Watch Users",
      mainDescription:
        "The Peloton Cross Training Bike+ is, without question, the most technologically ambitious home fitness machine currently on the market. Sitting on it for the first time, you understand why: the ride is effortlessly smooth in a way that genuinely mimics a studio bike, the screen is crisp and tactile, and the auto-resistance feature removes the mental load of manual adjustments mid-class. For cycling alone, it is a near-flawless machine.",
      testFindings:
        "Where the picture gets more complex is in the broader value proposition. The Peloton IQ camera adds real merit to cross-training sessions; it accurately tracked reps and identified form breakdowns in our testing, which no competitor at this price offers. But daily practical use reveals friction: the mandatory proprietary cycling cleats mean casual riders face an extra entry cost before they even ride, and the mandatory subscription means the total first-year cost exceeds $3,200 before accessories.",
      specialFeature:
        "The Peloton IQ camera-powered coaching system is a genuine category leap. Real-time form correction and rep tracking during off-bike strength sessions brings personal-trainer-level feedback into the home.",
      conclusion:
        "For riders who demand a premium, studio-grade experience and are committed to the Peloton ecosystem, the Cross Training Bike+ is the strongest all-around machine available today. The ride quality, coaching intelligence, and content library collectively justify the price for dedicated users. For home cardio beginners or occasional cyclists, the subscription dependency and accessory costs create a total cost of ownership that demands honest consideration before purchase.",
    },
  },
  "NordicTrack": {
    image: "/Test page/Nordictrack test image.webp",
    overallScore: 3.48,
    status: "Passed",
    features: [
      "24 pivoting HD touchscreen — immersive trainer-led cycling and off-bike workout viewing",
      "24 magnetic resistance levels — smooth digital resistance adjustments for cardio and endurance sessions",
      "32 lb estimated flywheel — stable momentum and consistent pedal stroke under higher cadence training",
      "iFIT integration — access to trainer-led classes, adaptive workouts, and scenic global rides",
      "Bluetooth connectivity — supports Bluetooth headphones and heart rate accessories",
      "Hybrid pedals and ergonomic saddle — compatible with standard athletic shoes and SPD cycling setups",
      "350 lb maximum user capacity — highly stable steel frame construction for larger riders",
      "10-year frame warranty — premium long-term structural coverage from NordicTrack",
    ],
    buyingGuide: [
      {
        icon: Activity,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Premium Display & Interactive Features",
        description:
          "Modern smart exercise bikes increasingly integrate large HD touchscreens and connected training ecosystems. Look for bikes with responsive displays, automatic resistance adjustment, and access to structured training platforms like iFIT or Kinomap. These features dramatically improve workout engagement and long-term consistency..",
      },
      {
        icon: Wifi,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Magnetic Resistance Performance",
        description:
          "Magnetic resistance systems provide smoother operation, lower maintenance requirements, and quieter performance than friction-pad systems. For serious home cardio use, choose bikes with digitally controlled resistance ranges that allow both beginner recovery rides and high-intensity interval training.",
      },
      {
        icon: Zap,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Comfort & Adjustability™",
        description:
          "Extended indoor cycling sessions place significant importance on ergonomic setup. Adjustable saddle height, fore/aft positioning, handlebar reach, and pedal compatibility all contribute to better riding posture and reduced joint fatigue. Riders above 1.85 m should especially verify the handlebar adjustment range before purchasing.",
      },
      {
        icon: Shield,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Subscription Ecosystem & Software",
        description:
          "Many premium bikes now rely heavily on subscription-based training platforms. Before buying, evaluate whether the ongoing monthly cost aligns with your intended usage. Smart platforms can greatly improve motivation and workout variety, but some bikes lose significant functionality without active memberships.",
      },
      {
        icon: Heart,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Build Quality & Frame Stability",
        description:
          "Heavy steel frames and higher user-weight ratings typically indicate better long-term stability. Riders above 90 kg should prioritise bikes rated for at least 120–150 kg capacity. Stable stabilisers, quality welds, and belt-drive systems all contribute to improved durability and quieter operation.",
        fullWidth: true,
      },
    ],
    closingNote: "carefully evaluate whether you prefer a traditional standalone cycling machine or a fully connected smart-fitness platform. Users focused on quiet apartment training should prioritise magnetic resistance and belt-drive systems, while performance-focused riders benefit from heavier flywheels and broader resistance ranges. Smart bikes like the NordicTrack New S24 Studio Bike deliver highly immersive training experiences, but they also introduce ongoing software and subscription considerations. The best exercise bike is ultimately the one that matches both your training style and your long-term motivation habits.",
    tests: {
      "Speed & Resistance": {
        description:
          "The digitally controlled magnetic resistance system delivered smooth transitions across all 24 resistance levels during testing between 60 and 105 RPM. Resistance strength was noticeably higher than most mid-range home bikes, especially above level 18. Automatic iFIT resistance adjustments responded quickly during interval sessions, though manual touchscreen-only adjustments felt less intuitive during sprint training.",
        rating: "3.5 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The heavy-duty steel frame remained stable during repeated standing intervals with test loads up to 105 kg. The wide stabilisers and adjustable levelling feet prevented frame movement during harder climbs. However, several long-term user discussions surrounding earlier NordicTrack bike generations referenced occasional control-board and resistance calibration issues.",
        rating: "3.6 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "The belt-driven magnetic system operated quietly throughout moderate and high-intensity workouts. Average sound levels remained around 40–44 dB during steady-state rides, making the S24 appropriate for apartment and shared-space use.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The ergonomic saddle and multi-position handlebars performed well during 30 and 60-minute endurance sessions. Riders between 1.60 m and 1.92 m achieved acceptable positioning adjustments. The riding geometry feels closer to a commercial studio cycle than a compact upright bike.",
        rating: "3.4 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & App": {
        description:
          "The 24 rotating touchscreen is one of the strongest features of the S24 platform. iFIT integration provides automatic resistance control, personalised workouts, global scenic rides, and entertainment streaming apps, including Netflix, Spotify, Prime Video, and Audible. Bluetooth pairing was fast and stable throughout testing.",
        rating: "4.4 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: NordicTrack New S24 Studio Bike",
      modelName: "NordicTrack S24 Studio Bike",
      verdict: "Smart Home Cycling and Interactive Training",
      rating: 1.5,
      publishDate: "January 2025",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 2,
          description: "24 magnetic resistance levels — smooth digital transitions with strong upper resistance range",
        },
        "Noise Level": {
          rating: 2,
          description: "Quiet belt-driven system — suitable for apartment and shared-room environments",
        },
        "Cushioning & Comfort": {
          rating: 1,
          description: "Ergonomic saddle and multi-grip handlebars — comfortable during extended rides",
        },
        "Office / Home Suitability ": {
          rating: 2,
          description: "Compact premium studio-bike footprint with transport wheels and stable frame",
        },
        "Cost ": {
          rating: 1,
          description: "Premium pricing plus ongoing iFIT membership costs increase total ownership expense",
        },
        "Value for Money": {
          rating: 2,
          description: "Excellent display and app ecosystem, though long-term value depends heavily on subscription usage",
        },
      },
      extras: ["Streaming entertainment integration", "Global scenic rides and adaptive workout recommendations"],
      suitableFor: "Home Cardio Training, Interactive App-Based Workouts, Apartment Use, Endurance & Interval Cycling",
      mainDescription:
        "The NordicTrack New S24 Studio Bike is designed for users who prioritise immersive connected fitness over purely mechanical cycling simplicity. From the first session, the oversized 24-inch HD touchscreen immediately separates the S24 from traditional home exercise bikes. Combined with iFIT's adaptive training ecosystem, the bike creates a far more interactive experience than standard indoor cycles in the same category.",
      testFindings:
        "In practical daily use, the S24 performs exceptionally well during structured endurance rides, interval sessions, and guided scenic workouts. The magnetic resistance system feels refined and consistent, while the heavy flywheel generates smooth momentum that closely resembles commercial studio bikes. The steel frame remains highly stable even during standing climbs, and the near-silent belt drive makes the bike suitable for apartment environments and shared living spaces.",
      specialFeature:
        "24 rotating HD touchscreen - Automatic iFIT resistance adjustment and SmartAdjust™ training",
      conclusion:
        "For riders seeking an immersive, app-connected indoor cycling experience with premium display quality and smooth magnetic resistance, the NordicTrack New S24 Studio Bike remains one of the strongest smart-bike options in its category. However, subscription dependency and occasional long-term software concerns prevent it from achieving a perfect rating in our 2026 exercise bike testing programme.",
    },
  },
  "Wahoo Fitness": {
    image: "/Test page/Wahoo test image.jpg",
    overallScore: 3.9,
    status: "Passed",
    features: [
      "Electromagnetic resistance system — delivers highly responsive resistance changes for structured interval training",
      "Integrated grade simulation — physically tilts up to 20% incline and -15% decline for realistic road feel",
      "2,500 W maximum output — elite-level resistance capacity for sprint and race simulation",
      "Virtual shifting system — supports Shimano, SRAM, and Campagnolo riding profiles",
      "Wi-Fi, Bluetooth, ANT+ connectivity — broad compatibility with Zwift, Wahoo SYSTM, TrainerRoad, and Kinomap",
      "Adjustable fit geometry — accommodates riders from 152 cm to 193 cm with multiple crank-length settings",
      "Premium Fizik saddle and updated handlebars — improved comfort over previous KICKR Bike generations",
      "2-year manufacturer warranty — acceptable coverage considering the premium smart-bike category",
    ],
    buyingGuide: [
      {
        icon: TrendingUp,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Smart Resistance Technology",
        description:
          "Premium smart bikes use electromagnetic resistance systems that react instantly to changes in workout intensity and virtual terrain. Look for responsive resistance performance, accurate watt measurement, and compatibility with structured training platforms.",
      },
      {
        icon: Wifi,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "App & Platform Connectivity",
        description:
          "Modern indoor cycling increasingly depends on connected ecosystems. Compatibility with Zwift, TrainerRoad, Wahoo SYSTM, and Kinomap substantially expands workout variety through virtual racing, coaching plans, and scenic riding environments.",
      },
      {
        icon: Zap,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Bike Fit Adjustability",
        description:
          "A proper fit remains essential for both comfort and injury prevention. Adjustable stack, reach, saddle height, crank length, and setback settings allow the bike to closely replicate your outdoor riding position.",
      },
      {
        icon: Heart,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Noise & Ride Feel",
        description:
          "Magnetic and electromagnetic systems are generally quieter than friction-based alternatives. However, premium realism systems with motorised gradient simulation can still generate some operational sound during intense climbing or sprint sessions.",
      },
      {
        icon: Shield,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Frame Stability & Build Quality",
        description:
          "Heavy-duty steel and aluminium frames improve sprint stability and long-term durability. For high-intensity cycling, always prioritise bikes with strong frame rigidity and appropriate maximum rider-weight ratings.",
        fullWidth: true,
      },
    ],
    closingNote: " consider your actual training goals and riding habits. Casual users may not fully benefit from advanced race simulation features, while dedicated cyclists and Zwift racers can justify the additional investment through year-round structured training access. The best indoor bike is not necessarily the most expensive model — it is the one that realistically fits your fitness goals, available space, and long-term workout consistency.Sources & Research References",
    tests: {
      "Speed & Resistance": {
        description:
          "The electromagnetic resistance system responded almost instantly during sprint and ERG-mode testing between 90 and 120 RPM. Power delivery remained stable across long threshold sessions, and the 2,500 W output ceiling comfortably handled high-intensity race simulations. However, resistance transitions occasionally felt slightly abrupt during rapid virtual gradient changes.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The steel and aluminium chassis felt extremely rigid during standing climbs and high-power sprint efforts. Long-duration testing confirmed excellent structural stability, though some worldwide user reports referenced occasional creaking noises and quality-control inconsistencies after extended usage.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "The belt-drive system remained relatively quiet throughout endurance rides, averaging around 48 dB during moderate cadence sessions. Under steep simulated climbs and sprint accelerations, slight drivetrain hum and motor noise became more noticeable than on quieter competitors such as the Tacx Neo Bike Plus.",
        rating: "3.9 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The redesigned handlebars, premium Fi'zi:k saddle, and extensive bike-fit adjustments supported comfortable 60-minute and 90-minute sessions. The fit system effectively replicated outdoor road-bike geometry, although new users may require time to fine-tune reach and saddle positioning.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & App": {
        description:
          "Connectivity performance was excellent across Zwift, TrainerRoad, Wahoo SYSTM, and Kinomap. Bluetooth and Wi-Fi pairing completed quickly, and the integrated hood controls significantly improved in-app navigation. Race Mode support provided highly responsive power transmission for competitive virtual cycling.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: Wahoo Fitness KICKR Bike Pro",
      modelName: "Wahoo Fitness KICKR Bike Pro",
      verdict: "Advanced Indoor Cycling & Virtual Training",
      rating: 2.0,
      publishDate: "January 2025",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 3,
          description: "Elite-level electromagnetic system with excellent responsiveness",
        },
        "Noise Level": {
          rating: 2,
          description: "Quiet during endurance rides, though not completely silent under heavy load",
        },
        "Cushioning & Comfort": {
          rating: 3,
          description: "Premium Fizik saddle and extensive fit adjustments improve long-session comfort",
        },
        "Home Suitability": {
          rating: 2,
          description: "Large footprint and premium frame require dedicated workout space",
        },
        Cost: {
          rating: 2,
          description: "Premium pricing places it far above traditional home exercise bikes",
        },
        "Value for Money": {
          rating: 2,
          description: "Outstanding performance and realism, though expensive for casual users",
        },
      },
      extras: ["Integrated virtual shifting", "Physical incline and decline simulation"],
      suitableFor: "Virtual Racing, Structured Cycling Training, Advanced Home Cardio, Zwift & Wahoo SYSTM Users",
      mainDescription:
        "The Wahoo Fitness KICKR Bike Pro is designed for serious indoor cyclists who want one of the most immersive smart-bike experiences currently available. From the first ride, the physical tilt simulation and responsive electromagnetic resistance system create a noticeably more realistic road feel than conventional exercise bikes.",
      testFindings:
        "In daily use, the KICKR Bike Pro performs exceptionally well during endurance rides, interval sessions, and virtual racing. The integrated virtual shifting system is among the strongest features, allowing riders to customise drivetrain behaviour based on Shimano, SRAM, or Campagnolo setups.",
      specialFeature:
        "The physical grade simulation remains the standout feature of the KICKR Bike Pro. Few indoor bikes can replicate road gradients with this level of immersion, and the integrated tilt system substantially enhances long training sessions and virtual race realism.",
      conclusion:
        "The Wahoo Fitness KICKR Bike Pro remains one of the most technically advanced indoor smart bikes on the market. However, its premium pricing, occasional noise under load, and scattered quality-control complaints prevent it from receiving a perfect score in our 2026 testing programme.",
    },
  },
  "Garmin / Tacx": {
    image: "/Test page/Garmin test image.webp",
    overallScore: 3.92,
    status: "Passed",
    features: [
      "Direct-drive virtual flywheel system — exceptionally realistic road feel with advanced electromagnetic resistance",
      "2200 W maximum resistance output — suitable for sprint training and high-intensity interval sessions",
      "±1% power accuracy — among the most precise smart bikes currently available",
      "25% virtual incline simulation — supports advanced climbing workouts and race simulations",
      "Custom virtual shifting — compatible with Shimano, SRAM, and Campagnolo gear styles",
      "Bluetooth & ANT+ connectivity — integrates with Zwift, TrainerRoad, Tacx Training App, and Kinomap",
      "Integrated road-surface simulation — reproduces cobblestones, gravel, and road textures virtually",
      "Multi-position fit adjustments — supports multiple rider sizes with professional bike-fit flexibility",
    ],
    buyingGuide: [
      {
        icon: Zap,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Smart Resistance Technology",
        description:
          "Premium indoor bikes increasingly use electromagnetic or advanced magnetic resistance systems for silent and highly accurate resistance control. Look for bikes supporting ERG mode, realistic gradient simulation, and fast response times if structured training is important.",
      },
      {
        icon: TrendingUp,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "App & Virtual Platform Compatibility",
        description:
          "Modern smart bikes should integrate smoothly with platforms like Zwift, TrainerRoad, Kinomap, and Tacx Training. Bluetooth and ANT+ compatibility significantly expand training flexibility and allow full workout data synchronisation.",
      },
      {
        icon: Activity,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Fit Adjustment & Ergonomics",
        description:
          "High-end indoor bikes should provide multi-position handlebar and saddle adjustment to replicate real outdoor bike geometry accurately. Adjustable crank length and cockpit positioning are particularly important for long endurance sessions and injury prevention.",
      },
      {
        icon: Shield,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Noise & Apartment Suitability",
        description:
          "Electromagnetic resistance systems generally produce lower operational noise than friction-based indoor bikes. Riders in shared apartments should also consider vibration levels generated by virtual road simulation systems and sprint training.",
      },
      {
        icon: Wifi,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Durability & Service Support",
        description:
          "Premium smart bikes contain sophisticated electronics and drivetrain simulation systems, making manufacturer support extremely important. Look for responsive customer service, spare-part availability, firmware updates, and long-term software support before investing.",
        fullWidth: true,
      },
    ],
    closingNote: "carefully evaluate how seriously you intend to use indoor cycling as part of your fitness or performance routine. Casual users may not fully benefit from the advanced simulation and data-analysis capabilities offered by ultra-premium systems like the Garmin Tacx NEO Bike Plus. Dedicated cyclists, however, will appreciate the precision, realism, and immersive ride quality that advanced smart-bike platforms can provide. The ideal indoor bike is ultimately the one that matches both your training goals and long-term usage habits consistently.",
    tests: {
      "Speed & Resistance": {
        description:
          "The Tacx NEO Bike Plus delivered exceptionally responsive resistance transitions during structured ERG workouts and sprint intervals. Resistance adjustments were nearly instantaneous during 30/30 interval testing, with no noticeable lag under high cadence loads.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The steel frame construction felt exceptionally rigid and stable during high-power seated and standing efforts. No frame flex was observed during long endurance sessions. However, several long-term user reports highlighted occasional drive-unit noise, crank loosening, or belt-related issues after extended ownership.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "At a moderate endurance pace, operational noise remained extremely low thanks to the electromagnetic resistance system and absence of a physical drivetrain. During testing, the bike remained quieter than most chain-driven smart trainers.",
        rating: "4.3 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The fully adjustable cockpit allows accurate replication of real outdoor bike geometry, making the NEO Bike Plus highly suitable for performance cyclists. Saddle and handlebar adjustments accommodate a broad range of rider sizes and riding positions.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & App": {
        description:
          "Bluetooth and ANT+ pairing performance was excellent across Zwift, TrainerRoad, and Tacx applications. Virtual shifting functionality is one of the strongest features in the category, closely replicating real drivetrain feel. Road-surface simulation and immersive ride feedback significantly enhance realism for indoor training enthusiasts.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: Garmin Tacx NEO Bike Plus",
      modelName: "Garmin Tacx NEO Bike Plus",
      verdict: "Advanced Indoor Cycling & Structured Performance Training",
      rating: 3.0,
      publishDate: "January 2026",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 3,
          description: "Electromagnetic direct-drive system — elite-level realism and instant response",
        },
        "Noise Level": {
          rating: 3,
          description: "Ultra-quiet operation with minor vibration effects during road simulation",
        },
        "Cushioning & Comfort": {
          rating: 3,
          description: "Highly adjustable geometry — suitable for endurance and long training blocks",
        },
        "Office / Home Suitability": {
          rating: 3,
          description: "A large premium frame requires a dedicated indoor training space",
        },
        Cost: {
          rating: 2,
          description: "Extremely expensive compared with most consumer smart bikes",
        },
        "Value for Money": {
          rating: 3,
          description: "Outstanding performance and realism, but premium pricing limits accessibility",
        },
      },
      extras: ["Virtual road-surface simulation", "Customisable electronic shifting profiles"],
      suitableFor:
        "Structured Indoor Cycling, Zwift & Virtual Racing, High-Intensity Interval Training, Performance-Focused Home Athletes",
      mainDescription:
        "The Garmin Tacx NEO Bike Plus is one of the most technically advanced indoor cycling systems currently available, engineered primarily for serious cyclists and data-focused home athletes rather than casual fitness users. From the first ride session, the realism of the electromagnetic flywheel system becomes immediately apparent.",
      testFindings:
        "In practical day-to-day use, the NEO Bike Plus excels during structured interval sessions, FTP testing, and immersive virtual rides. The virtual shifting system is particularly impressive because it allows riders to emulate Shimano, SRAM, or Campagnolo drivetrain styles without requiring any physical drivetrain components.",
      specialFeature:
        "The electromagnetic resistance engine remains the standout feature of the NEO Bike Plus. Unlike friction or magnetic-pad systems, the virtual flywheel generates a highly realistic inertia simulation with almost silent operation and extremely precise power measurement accuracy.",
      conclusion:
        "For experienced indoor cyclists who prioritise immersive training realism, precise performance metrics, and elite-level smart connectivity, the Garmin Tacx NEO Bike Plus remains one of the most advanced smart bikes available. However, its extremely high purchase price and occasional long-term reliability concerns prevent it from achieving a perfect overall rating in our 2026 exercise bike testing category.",
    },
  },
  "Ultrasport": {
    image: "/Test page/Ultrasports test image.jpg",
    overallScore: 3.5,
    status: "Passed",
    features: [
      "8-level magnetic resistance — simple manual adjustment suitable for beginner to intermediate cardio sessions",
      "Foldable X-frame design — compact storage solution for flats, bedrooms, and small home gyms",
      "LCD training computer — displays time, speed, calories, distance, and pulse data",
      "Pulse sensors integrated into handlebars — basic heart-rate tracking during workouts",
      "Adjustable saddle height — accommodates a wide range of rider sizes for casual home fitness use",
      "Lightweight 14–18 kg frame — easy to reposition and fold after training sessions",
      "Maximum user weight: 100 kg — acceptable rating for budget folding bike category",
      "Transport-friendly structure — practical for users prioritising portability over heavy-duty performance"

    ],
    buyingGuide: [
      {
        icon: TrendingUp,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Ultra-Compact Folding Design",
        description:
          "Folding exercise bikes are ideal for users with limited floor space. Look for models with compact folded dimensions and lightweight frames under 20 kg if regular storage is important. Integrated transport-friendly designs make repositioning far easier after each session. ",
      },
      {
        icon: Volume2,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Resistance & Workout Variety",
        description:
          "Magnetic resistance systems provide quieter operation and smoother pedal motion compared with friction-based alternatives. For beginners, 8 resistance levels are usually sufficient, while advanced users should prioritise heavier flywheels and broader resistance ranges for more demanding workouts.",
      },
      {
        icon: Shield,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Comfort & Adjustability",
        description:
          "Adjustable saddle height and upright ergonomics are essential for long-term usability. Riders planning sessions beyond 30 minutes should pay close attention to saddle quality, handlebar positioning, and pedal stability before purchasing. Budget folding bikes often compromise slightly in this area. ",
      },
      {
        icon: Heart,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Display & Tracking Features",
        description:
          "Basic LCD consoles typically monitor speed, calories, time, distance, and pulse. More advanced exercise bikes may include Bluetooth connectivity, virtual ride platforms, or guided training applications. Casual users generally benefit most from simplicity and easy readability rather than advanced software ecosystems.",
      },
      {
        icon: Wifi,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Frame Stability & Weight Capacity",
        description:
          "Always check the maximum user weight rating carefully. Folding bikes prioritise portability, but lighter frames may introduce small amounts of movement during intense pedalling. Users above 90 kg should ideally choose reinforced models with higher structural ratings for improved stability and longevity.",
        fullWidth: true,
      },
    ],
    closingNote: "Before investing in an exercise bike, evaluate how frequently you plan to use it and how much storage space you realistically have available. Folding bikes excel for convenience, portability, and light daily cardio, while heavier studio-style bikes remain better suited for performance-focused training. The best exercise bike is the one that integrates naturally into your daily routine and encourages consistent long-term use.",
    tests: {
      Speed: {
        description:
          "The 8-step magnetic resistance system delivered consistent light-to-moderate workout intensity during testing between 50–85 RPM. Resistance changes were generally smooth, though higher settings lacked the stronger load required for advanced interval training. Best suited for steady cardio, rehabilitation, and beginner home fitness sessions rather than aggressive performance cycling. ",
        rating: "3.0 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The folding steel frame remained stable during regular 30–45 minute workouts, but minor frame movement was observed under heavier sprint-style usage. Hinges and folding joints held securely during repeated open-close cycles, though the lighter construction clearly targets casual fitness rather than long-term heavy athletic use.",
        rating: "3.0 / 5",
        status: "Passed",
        icon: Shield,
      },
      // Incline: {
      //   description:
      //     "This model does not include incline, making it purely a flat walking surface. Not suitable for users wanting varied intensity.",
      //   rating: "2.5 / 5",
      //   status: "Limited",
      //   icon: TrendingUp,
      // },
      Noise: {
        description:
          "Operational noise averaged below 45 dB during moderate sessions, making the F-Bike suitable for apartments and shared indoor spaces. The belt-driven magnetic system remained impressively quiet throughout testing, although minor pedal vibration became noticeable during higher cadence efforts. Overall sound control exceeds expectations for this price bracket. ",
        rating: "3.8 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The adjustable saddle supports a broad range of rider heights, and the upright riding posture works well for relaxed cardio sessions. However, the saddle cushioning became uncomfortable during sessions beyond 35 minutes, a commonly reported drawback among long-term users. Pedal straps performed adequately for standard training shoes, while handlebar positioning remained comfortable for everyday use.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & Display Test": {
        description:
          "The LCD console tracks essential workout metrics, including speed, distance, calories, time, and pulse monitoring. Display readability remained acceptable under indoor lighting conditions, though the system lacks Bluetooth connectivity, app integration, or advanced training features. ",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: Ultrasport F-Bike Folding Exercise Bike ",
      modelName: "Ultrasport F-Bike Folding Exercise Bike",
      verdict: "Compact Home Cardio and Casual Fitness",
      rating: 3.0,
      publishDate: "January 2026",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 3,
          description: "8-level magnetic system — smooth but limited high-intensity resistance",
        },
        "Noise Level": {
          rating: 3,
          description: "Quiet magnetic drive system — suitable for shared indoor spaces",
        },
        "Cushioning & Comfort": {
          rating: 2,
          description: "Standard saddle comfort — adequate for shorter cardio sessions",
        },
        "Office / Home Suitability": {
          rating: 2,
          description: "Foldable compact footprint — ideal for smaller rooms and storage",
        },
        "Cost ": {
          rating: 2,
          description: "Affordable entry-level pricing — accessible for casual users",
        },
        "Value for Money": {
          rating: 3,
          description: "Strong portability and convenience for the budget category",
        },
      },
      extras: ["Compact foldable frame, Simple beginner-friendly resistance system"],
      suitableFor: "Apartment Use,Light Daily Cardio,Beginner Fitness,Compact Home Workouts",
      mainDescription:
        "The Ultrasport F-Bike is fundamentally designed for one very specific purpose: delivering accessible, low-impact home cardio in extremely limited spaces. In that role, it performs reasonably well. The folding frame is genuinely practical for apartments or multipurpose rooms, and the lightweight structure makes storage far easier than with traditional upright exercise bikes.",
      testFindings:
        "During daily testing, the bike delivered stable and quiet operation at moderate training intensity. The magnetic resistance system is smooth enough for beginner cardio routines, rehabilitation sessions, or general daily movement goals. However, the limited resistance ceiling and lightweight flywheel mean experienced cyclists will quickly outgrow its performance capabilities. At higher cadences, the bike begins to feel less planted compared with heavier indoor cycling models.",
      specialFeature: "The foldable X-frame remains the F-Bike’s strongest advantage. Unlike many bulky exercise bikes, this model can be collapsed within seconds and stored against a wall or inside a cupboard, making it highly attractive for small-space living.",
      conclusion:
        "For users prioritising affordability, portability, and quiet operation over high-performance cycling realism, the Ultrasport F-Bike remains a sensible entry-level option. It is not designed for aggressive interval training or advanced endurance work, but for everyday home cardio and convenience-focused fitness; it provides acceptable value at a budget-friendly price point.",
    },
  },
  "SportPlus": {
    image: "/Test page/sportplus test image.jpg",
    overallScore: 3.4,
    status: "Passed",
    features: [
      "Electronically controlled magnetic resistance — smooth resistance changes with low maintenance requirements",
      "9 kg flywheel — noticeably steadier pedal rotation than most entry-level exercise bikes",
      "Backlit LCD console — displays time, speed, RPM, calories, distance, pulse, and watt output",
      "Bluetooth connectivity — compatible with Kinomap and selected fitness tracking apps",
      "Adjustable saddle and multi-grip handlebars, suitable for riders approx. 1.60–1.95 m. Maximum user weight: 150 kg — excellent structural rating for the category",
      "Transport wheels — practical repositioning for home environments",
      "Integrated pulse sensors + chest strap compatibility — supports heart rate-based training",
      "2-year manufacturer warranty — standard coverage for mid-range ergometers",
    ],
    buyingGuide: [
      {
        icon: Zap,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Stable Compact Design",
        description:
          "A stable frame is essential for safe indoor cycling, especially during higher cadence sessions. Look for exercise bikes with reinforced steel construction and transport wheels for easier room-to-room movement. Compact dimensions below 130 × 60 cm generally suit most home environments without dominating living space.",
      },
      {
        icon: Activity,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Smart Connectivity & Training Apps",
        description:
          "Modern exercise bikes increasingly support Bluetooth connectivity for apps like Kinomap or Zwift. Connected training platforms improve workout engagement through virtual routes, guided sessions, and performance tracking. Even mid-range bikes now benefit significantly from app integration for long-term motivation.",
      },
      {
        icon: Shield,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Comfort & Ergonomic Adjustability",
        description:
          "A properly adjustable saddle and handlebars dramatically improve comfort during sessions longer than 20 minutes. Upright riding positions generally suit beginners and endurance-focused users, while more aggressive geometries target performance training. Always verify rider height compatibility before purchasing.",
      },
      {
        icon: Wifi,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Warranty & Service Support",
        description:
          "Reliable customer support and spare-parts availability remain important for long-term ownership. A minimum two-year manufacturer warranty is recommended for home ergometers, especially for electronically controlled resistance systems where console reliability matters as much as frame durability.",
      },
      {
        icon: Heart,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Flywheel Weight & Resistance Quality",
        description:
          "Heavier flywheels generally provide smoother pedal rotation and more natural riding feel. For moderate home cardio, a flywheel between 7–10 kg offers a balanced combination of momentum, stability, and comfort without excessive cost. Magnetic resistance systems also remain quieter and require less maintenance than friction-based alternatives.",
        fullWidth: true,
      },
    ],
    closingNote: "consider how frequently you intend to train and which type of riding experience you actually prefer. Users in flats or shared living spaces should prioritise low noise levels and compact storage dimensions, while endurance-focused riders benefit more from stable resistance systems and accurate workout tracking. The best exercise bike is ultimately the one that integrates naturally into your daily routine and encourages consistent long-term use",
    tests: {
      "Speed & Resistance ": {
        description:
          "The electronically controlled magnetic resistance system delivered stable transitions across all preset resistance levels during testing at 50–95 RPM. Resistance response remained smooth during interval sessions, although slight delay was noticeable when switching rapidly between higher levels.",
        rating: "3.8 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The reinforced steel frame remained stable throughout extended 60-minute endurance sessions using test riders between 75–100 kg. Frame welds and stabilisers showed solid construction quality with minimal lateral movement under standing pedalling efforts. After approximately 15 hours of cumulative testing, no structural creaks or console instability were detected.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "Noise levels averaged approximately 45 dB during steady-state rides, making the SP-HT-9600-iE suitable for flats, shared rooms, and evening workouts. The belt-driven magnetic system eliminated friction noise almost entirely, though minor pedal and flywheel vibration became noticeable during higher resistance sprint efforts.",
        rating: "3.9 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The padded ergonomic saddle provided acceptable comfort for rides between 30–50 minutes, though longer sessions may require additional cushioning for some riders. Handlebar adjustment range accommodated multiple riding positions effectively, while the low step-through frame improved accessibility.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & App ": {
        description:
          "Bluetooth setup with Kinomap completed reliably within one minute during testing. App-based scenic rides and structured training programmes added variety beyond the built-in workout presets. Console navigation remained straightforward, although the interface appears slightly dated compared with newer connected exercise bikes.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: SportPlus SP-HT-9600-iE",
      modelName: "SportPlus SP-HT-9600-iE",
      verdict: "Daily Endurance Training & Structured Home Cardio",
      rating: 4.0,
      publishDate: "January 2025",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 4,
          description: "Electronic magnetic system — stable multi-level resistance control",
        },
        "Noise Level": {
          rating: 3,
          description: "Quiet belt-drive operation — suitable for apartment use",
        },
        "Cushioning & Comfort": {
          rating: 4,
          description: "Ergonomic saddle and upright riding position for longer sessions",
        },
        "Home Suitability": {
          rating: 4,
          description: "Compact indoor footprint with transport wheels for flexible placement",
        },
        Cost: {
          rating: 3,
          description: "Mid-range pricing with strong feature balance",
        },
        "Value for Money": {
          rating: 4,
          description: "Reliable feature set and build quality for long-term home fitness",
        },
      },
      extras: ["Electronic resistance adjustment", "Kinomap-compatible virtual training support"],
      suitableFor: "Home Fitness Use, Daily Cardio Sessions, Endurance Training, Beginner & Intermediate Riders",
      mainDescription:
        "The SportPlus SP-HT-9600-iE positions itself as a dependable mid-range exercise ergometer focused on comfort, quiet operation, and controlled home cardio sessions rather than aggressive studio-style cycling performance.",
      testFindings:
        "The electronically controlled resistance system combined with Kinomap connectivity gives this ergometer a more premium training feel than many similarly priced home exercise bikes. The ability to follow virtual routes and guided workouts significantly improves long-term workout engagement for home users.",
      specialFeature:
        "Electronic resistance adjustment combined with Kinomap virtual training support offers a connected training experience that punches above its price class.",
      conclusion:
        "For users seeking a quiet, stable, and feature-rich ergometer for regular home cardio and endurance sessions, the SportPlus SP-HT-9600-iE offers strong overall value. It may not deliver the intensity or immersive ecosystem of premium smart bikes, but for practical daily fitness use, it remains a capable and dependable mid-range option in the 2026 exercise bike category.",
    },
  },
  "DOMYOS / Decathlon": {
    image: "/Test page/Domyos test image.jpg",
    overallScore: 3.8,
    status: "Passed",
    features: [
      "7-level manual magnetic resistance — beginner-friendly adjustment system for light to moderate cardio sessions",
      "3 kg flywheel — stable enough for steady daily pedalling and low-impact workouts",
      "LCD console display — tracks time, speed, distance, calories burned, and scan mode",
      "Compact upright frame — suitable for apartments, bedrooms, and small home gyms",
      "Adjustable saddle height — accommodates a broad range of rider heights for casual fitness use",
      "Maximum user weight: 110 kg — acceptable structural rating for entry-level indoor bikes",
      "Integrated transport wheels — simple repositioning after workouts or office use",
      "Decathlon support ecosystem — spare parts availability and retail service network support",
    ],
    buyingGuide: [
      {
        icon: Heart,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Compact Space-Saving Design",
        description:
          "Exercise bikes intended for apartments or office environments should ideally maintain a footprint below 120 × 60 cm. Compact frames simplify room placement and improve long-term usability in smaller homes. Integrated transport wheels remain highly valuable for daily repositioning and storage convenience.",
      },
      {
        icon: TrendingUp,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Resistance Quality & Ride Smoothness",
        description:
          "Magnetic resistance systems provide quieter and smoother operation compared with friction-pad alternatives. Heavier flywheels generally create more natural pedalling momentum and better stability during higher cadence sessions. For beginners, a 3–5 kg flywheel is usually sufficient for steady cardio and low-impact fitness routines.",
      },
      {
        icon: Shield,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Display & Smart Connectivity",
        description:
          "Basic LCDs are adequate for casual training, but Bluetooth-enabled exercise bikes provide significantly greater workout variety through virtual riding apps, structured programmes, and performance tracking systems. Riders planning long-term progression may benefit from connected training ecosystems like Kinomap or Zwift.",
      },
      {
        icon: Wifi,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Comfort & Ergonomics",
        description:
          "An adjustable saddle and upright riding geometry are essential for maintaining comfort during repeated daily sessions. Users planning workouts beyond 30 minutes should prioritise seat cushioning, handlebar positioning, and proper pedal stability to minimise fatigue and joint discomfort over time.",
      },
      {
        icon: Volume2,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Warranty & After-Sales Support",
        description:
          "Reliable after-sales service remains one of the most overlooked aspects of exercise bike ownership. Established fitness retailers with spare parts availability and nationwide support networks provide greater long-term ownership confidence than unverified low-cost brands with limited servicing infrastructure.",
        fullWidth: true,
      },
    ],
    closingNote: "evaluate how frequently the machine will realistically be used and which features genuinely support your training habits. Apartment users should prioritise quiet operation and compact dimensions, while fitness-focused riders benefit more from heavier flywheels and advanced resistance systems. Entry-level bikes like the DOMYOS Exercise Bike are ideal for consistency-focused beginners who want convenient daily movement without technical complexity. The most effective exercise bike is ultimately the one that integrates naturally into your routine and encourages regular long-term use.",
    tests: {
      "Speed & Resistance": {
        description:
          "The 7-level magnetic resistance system delivered predictable resistance progression during testing between 50 and 85 RPM. Resistance changes were smooth at lower levels, although higher settings lacked the heavier load and precision seen in premium indoor cycles.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The powder-coated steel frame remained structurally stable throughout repeated 45-minute test sessions using riders between 72 and 95 kg. Minor handlebar movement was observed during aggressive standing pedalling, which is common among lightweight entry-level exercise bikes.",
        rating: "4.5 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "Operational sound remained below 46 dB during moderate cadence sessions, verified using a calibrated sound meter. The belt-driven magnetic system eliminates friction-pad noise and remains quiet enough for apartment environments, home offices, and shared living spaces.",
        rating: "4.3 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The padded saddle performed adequately during 20–40 minute cardio sessions and supports casual everyday fitness routines comfortably. Upright geometry creates a relaxed riding posture suitable for beginners and office users.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & Display": {
        description:
          "The integrated LCD monitor provides clear visibility for essential workout metrics, including speed, time, calories, and distance. Unlike smart exercise bikes, the DOMYOS model does not include Bluetooth connectivity or native app integration, limiting interactive training functionality.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: DOMYOS Exercise Bike",
      modelName: "DOMYOS Exercise Bike",
      verdict: "Daily Cardio and Beginner Home Fitness",
      rating: 4.2,
      publishDate: "January 2026",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 4,
          description: "7-level magnetic resistance — consistent for beginner workouts",
        },
        "Noise Level": {
          rating: 4,
          description: "Below 46 dB during standard cardio sessions — quiet indoor operation",
        },
        "Cushioning & Comfort": {
          rating: 4,
          description: "Padded upright saddle — comfortable for moderate-length rides",
        },
        "Office / Home Suitability": {
          rating: 4,
          description: "Compact footprint — easy placement in smaller living spaces",
        },
        "Cost ": {
          rating: 4,
          description: "Affordable entry-level pricing with strong accessibility value",
        },
        "Value for Money": {
          rating: 4,
          description: "Good everyday fitness performance for casual home training users",
        },
      },
      extras: ["Compact apartment-friendly design", "Simple beginner-focused resistance system"],
      suitableFor: "Home Use, Beginner Cardio, Low-Impact Fitness, Apartment Training",
      mainDescription:
        "The DOMYOS Exercise Bike is designed with practicality and affordability at the forefront, targeting users who want a compact and uncomplicated indoor cardio solution without entering premium smart-bike pricing territory.",
      testFindings:
        "The compact, lightweight chassis combined with quiet magnetic resistance makes the DOMYOS Exercise Bike particularly effective for apartment living and shared indoor environments where silent operation is essential for regular training consistency.",
      specialFeature:
        "Decathlon retail support network and simple no-setup design make this accessible to complete beginners without any technical experience.",
      conclusion:
        "For beginners, casual riders, and home users wanting a dependable low-noise exercise bike for steady cardio training, the DOMYOS Exercise Bike delivers respectable overall performance and strong practicality at an affordable price point, though advanced users may outgrow its limited resistance range over time.",
    },
  },
  "AsVIVA / Roger Black": {
    image: "/Test page/Asviva test image.jpg",
    overallScore: 3.7,
    status: "Passed",
    features: [
      "Electronic magnetic resistance system — smoother and quieter than traditional friction-based exercise bikes",
      "9 kg flywheel — stable pedal motion for steady endurance and cardio sessions",
      "LCD training computer — displays speed, time, distance, calories, pulse, RPM, and watt output",
      "Bluetooth app compatibility — supports Kinomap integration for virtual ride experiences",
      "Adjustable saddle and handlebars — suitable for riders approximately 1.60–1.92 m tall",
      "Maximum user weight: 150 kg — excellent structural rating for this category",
      "Integrated transport wheels — practical for moving and storing between sessions",
      "Tablet and smartphone holder — convenient for entertainment or app-guided training",
      "2-year manufacturer warranty — competitive coverage for a mid-range home ergometer",
    ],
    buyingGuide: [
      {
        icon: Heart,
        color: "bg-primary-100",
        iconColor: "text-primary-600",
        title: "Stable Ergometer Resistance System",
        description:
          "Magnetic resistance systems provide quieter and smoother operation compared with friction-pad bikes. Electronically controlled resistance adds precision and allows structured cardio sessions without abrupt adjustment changes. For consistent home training, prioritise magnetic systems wherever possible.",
      },
      {
        icon: Zap,
        color: "bg-sky-100",
        iconColor: "text-sky-600",
        title: "Smart Connectivity & Training Apps",
        description:
          "Modern exercise bikes increasingly support Bluetooth connectivity for apps like Kinomap or Zwift. Connected training platforms improve workout engagement through guided programmes, virtual scenery, and progress tracking. Even mid-range bikes benefit significantly from app compatibility.",
      },
      {
        icon: Wifi,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Comfort & Ergonomic Adjustability",
        description:
          "Comfort becomes essential for sessions exceeding 20–30 minutes. Adjustable saddle height, handlebar positioning, and ergonomic seating geometry dramatically improve long-term usability. Upright riding positions are particularly suitable for beginners and rehabilitation-focused users.",
      },
      {
        icon: Shield,
        color: "bg-rose-100",
        iconColor: "text-rose-500",
        title: "Frame Stability & User Weight Capacity",
        description:
          "A heavier steel frame generally improves stability during higher cadence riding. Always compare the maximum supported user weight with your actual body weight. For long-term durability, users above 90 kg should ideally select bikes rated for at least 120–150 kg.",
      },
      {
        icon: Volume2,
        color: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Noise Control for Home Use",
        description:
          "Apartment users should prioritise magnetic resistance systems and belt-driven transmissions. Quiet operation significantly improves practicality for early morning or late evening workouts and reduces disturbance in shared living spaces.",
        fullWidth: true,
      },
    ],
    closingNote: "think carefully about your primary training goal. Users focused on rehabilitation, weight loss, or steady cardiovascular improvement will benefit most from comfort-oriented ergometers with smooth resistance and quiet operation. Riders pursuing aggressive interval training or advanced cycling simulation may require heavier flywheels and higher resistance ceilings. Ultimately, the best exercise bike is the one that fits comfortably into your daily routine and encourages consistent long-term use.",
    tests: {
      "Speed & Resistance": {
        description:
          "The electronically controlled magnetic resistance system performed consistently during endurance testing between 55–95 RPM. Resistance changes were generally smooth, though slight transition delays were noticeable at higher wattage settings.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The reinforced steel frame delivered good overall stability during 45-minute endurance sessions with test riders up to 95 kg. The frame remained secure without significant lateral movement, though minor handlebar flex appeared during high-intensity sprint efforts.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Shield,
      },
      Noise: {
        description:
          "The belt-driven system operated at approximately 45 dB during moderate sessions, making the H22 well-suited for home and apartment environments. Minor drivetrain vibration became noticeable during standing pedalling efforts, but seated endurance rides remained impressively quiet throughout testing.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The padded ergonomic saddle provided acceptable comfort during 30–50 minute sessions, particularly for casual cardio users. Multiple saddle and handlebar adjustment positions improved riding posture flexibility for different rider heights.",
        rating: "3.5 / 5",
        status: "Passed",
        icon: Heart,
      },
      "Tech & App": {
        description:
          "Bluetooth pairing with Kinomap was completed successfully within two minutes during testing. Virtual routes and training sessions operated reliably, though the onboard display interface feels slightly dated compared with newer smart fitness consoles.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Zap,
      },
    },
    individualReview: {
      title: "Individual Review: AsVIVA H22 Exercise Bike & Ergometer",
      modelName: "AsVIVA H22",
      verdict: "Low-Impact Cardio and Everyday Home Fitness",
      rating: 3.8,
      publishDate: "January 2025",
      author: "Dr. James Hartwell",
      expertise: "Lead Performance & Fitness Specialist",
      testDuration: "Extended testing",
      testCriteria: {
        "Resistance Smoothness & Range": {
          rating: 4,
          description: "Electronic magnetic resistance — consistent and beginner-friendly.",
        },
        "Noise Level": {
          rating: 3,
          description: "Quiet belt-drive system — suitable for apartments and shared spaces",
        },
        "Cushioning & Comfort": {
          rating: 3,
          description: "Ergonomic saddle and upright posture support longer sessions",
        },
        "Home Suitability": {
          rating: 4,
          description: "Compact ergonomic footprint with transport wheels",
        },
        Cost: {
          rating: 3,
          description: "Mid-range pricing with strong durability and comfort value",
        },
        "Value for Money": {
          rating: 4,
          description: "Reliable all-round ergometer with practical smart features",
        },
      },
      extras: ["Bluetooth Kinomap compatibility", "Comfort-focused ergonomic riding position"],
      suitableFor:
        "Home Cardio Training, Low-Impact Fitness, Rehabilitation Exercise, Beginner & Intermediate Riders",
      mainDescription:
        "The AsVIVA H22 positions itself as a practical mid-range ergometer built primarily for users who value comfort, quiet operation, and dependable home cardio functionality over high-performance studio cycling.",
      testFindings:
        "The Kinomap Bluetooth compatibility adds meaningful long-term workout variety. Virtual routes and guided sessions help reduce training monotony while giving the H22 a more modern connected-fitness experience than standard entry-level ergometers.",
      specialFeature:
        "Step-through low-entry frame design combined with Kinomap connectivity makes the H22 particularly accessible for older users and those in rehabilitation.",
      conclusion:
        "For users seeking a quiet, stable, and comfortable exercise bike for regular home cardio training, the AsVIVA H22 Exercise Bike & Ergometer delivers dependable overall performance with particularly strong comfort and accessibility features.",
    },
  },
};

export default function TestingProcessPage() {
  const [activeBrand, setActiveBrand] = useState("Sportstech XS175");
  const brandData = testData[activeBrand];
  const overallGrade = getGermanGrade(brandData?.overallScore ?? 0, "en");

  useEffect(() => {
    if (brandData?.image) {
      const img = new Image();
      img.src = brandData.image;
    }
  }, [brandData?.image]);

  const renderStars = (ratingStr) => {
    const rating = parseFloat(ratingStr);
    const grade = getGermanGrade(rating, "en");

    return (
      <div className="flex items-center">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold border ${grade.badgeClass}`}
          style={grade.badgeStyle}
        >
          Note {grade.note} ({grade.label})
        </span>
      </div>
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Passed":
        return "text-emerald-700 bg-emerald-50 border border-emerald-200";
      case "Limited":
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
              Expert Exercise Bike Evaluation Criteria for Accurate Reviews
            </h1>
            <p className="text-md md:text-lg lg:text-xl text-primary-100/80 max-w-3xl mx-auto leading-relaxed">
              Our expert,{" "}
              <span className="font-semibold text-white">Dr. James Hartwell</span>,
              reviews exercise bikes to give you honest and thoroughly documented assessments based on real-world testing, never manufacturer talking points.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/Model/Exercise-about-4.jpg"
                alt="Dr. James Hartwell"
                className="rounded-lg shadow-lg w-96 h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-sm md:text-lg leading-relaxed mb-4">
                  <strong className="text-white">At example.com</strong>, we hold one belief above all: you deserve unbiased, real-world guidance, not recycled marketing copy. That's why our entire evaluation process is based on one principle: put everything in the way a real person uses it at home.{" "}
                  <strong className="text-white">Dr. James Hartwell</strong>, our lead evaluator and a certified personal trainer with over 10 years of hands-on fitness experience, has tested more than 60 exercise bikes across various categories.
                </p>
                <p className="text-primary-100/80">
                  Exercise bikes have quickly moved from gym floors into living rooms, and for good reason. With so many models flooding the market, picking the right one without hands-on experience is genuinely difficult. Our job is to prevent that.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-primary-300" />
                  <span className="font-semibold text-white">Our Certification Process</span>
                </div>
                <p className="text-primary-100/80 text-sm">
                  Every exercise bike we recommend is independently tested through our strict review process for quality, comfort, durability, resistance performance, and real-world usability. Brands cannot buy rankings or influence scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-\xl md:text-4xl font-bold text-gray-900 mb-3">
            Best-Rated Exercise Bikes for Home Fitness — Performance & Comfort Tested
          </h2>
          <div className="divider-emerald mt-4 mb-4"></div>
          <p className="text-lg text-gray-500">
            Reviewed across all categories. Reliable brand links for every budget.
          </p>
        </div>

        {/* <div className="mb-8">
          <GermanGradeLegend locale="en" />
        </div> */}

        {/* Brand Tabs */}
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
              <div className="bg-primary-600 px-6 py-4 md:py-8">
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <h2 className="text-xl md:text-2xl font-bold text-white">{activeBrand} Details</h2>
                    <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-end mt-2 sm:mt-0">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(brandData.status)}`}>
                        {brandData.status}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${overallGrade.badgeClass}`}
                        style={overallGrade.badgeStyle}
                      >
                        Note {overallGrade.note} ({overallGrade.label})
                      </span>
                    </div>
                  </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex justify-center">
                    <img
                      src={brandData.image}
                      alt={`${activeBrand}`}
                      className="rounded-xl shadow-card max-w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {renderStars(data.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Individual Review Section */}
            {brandData.individualReview && (
              <div className="mt-16 space-y-8">
                <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl p-8 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-xl md:text-3xl font-bold mb-2">
                        {brandData.individualReview.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-primary-100">
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
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                      <div className="flex items-center space-x-2">
                        <BadgeCheck className="w-5 h-5" />
                        <span className="font-bold text-sm md:text-lg">{brandData.individualReview.verdict}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {brandData.individualReview.mainDescription}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {brandData.individualReview.testFindings}
                      </p>
                      {brandData.individualReview.specialFeature && (
                        <p className="text-gray-600 leading-relaxed mb-4">
                          <strong className="text-gray-900">Special Feature: </strong>
                          {brandData.individualReview.specialFeature}
                        </p>
                      )}
                      <p className="text-gray-900 font-semibold">
                        <strong>Conclusion: </strong>
                        {brandData.individualReview.conclusion}
                      </p>
                    </div>

                    {brandData.individualReview.testCriteria && (
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Full Test Criteria — Scoring Breakdown
                        </h3>
                        <div className="space-y-3">
                          {Object.entries(brandData.individualReview.testCriteria).map(([criteria, data]) => {
                            const criteriaGrade = getGermanGrade(data.rating, "en");

                            return (
                              <div key={criteria} className="border-b border-gray-100 pb-3 last:border-0">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-semibold text-gray-900">{criteria}</h4>
                                    <p className="text-sm text-gray-500">{data.description}</p>
                                  </div>
                                  <span
                                    className={`rounded-full px-2.5 py-1 text-xs font-semibold border ${criteriaGrade.badgeClass}`}
                                    style={criteriaGrade.badgeStyle}
                                  >
                                    Note {criteriaGrade.note} ({criteriaGrade.label})
                                  </span>
                                </div>
                              </div>
                            );
                          })}
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
                        <h3 className="text-lg font-bold text-emerald-700 mb-3">Suitable For</h3>
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
                        ? "Overall Test Winner: Sportstech X150"
                        : "Premium Choice: Sportstech SX175 Speedbike"}
                    </h4>
                    <p className="text-primary-600">
                      {activeBrand === "Sportstech X150"
                        ? "Highest overall score across all testing categories"
                        : "Best for quiet, high-performance home cardio training"}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {activeBrand === "Sportstech X150" ? (
                    <>
                      The Sportstech X150 represents the smart choice for home fitness users who refuse to compromise on versatility or space. Purpose-engineered as a 3-in-1 training platform, it combines upright cycling, recumbent bike positioning, and upper-body Power Rope training in a machine that folds to a near-footprint-free 55 × 55 cm when not in use. With its ultra-quiet belt-drive magnetic resistance system, 8 adjustable resistance levels, and compatibility with Kinomap, Zwift, and the Sportstech Live App, the X150 delivers a genuinely connected training experience that rivals machines at twice the price. <strong>Note {overallGrade.note} ({overallGrade.label})</strong>.
                    </>
                  ) : (
                    <>
                      The Sportstech SX175 SpeedBike represents the premium tier of home cycling bikes with an impressive rating of <strong>Note {overallGrade.note} ({overallGrade.label})</strong>. With its ultra-quiet magnetic resistance system, maintenance-friendly belt drive, and stepless resistance control, the SX175 is the ideal choice for users who want studio-style cycling workouts without disturbing their household.
                    </>
                  )}
                </p>
              </div>
            )}

            {/* ✅ DYNAMIC Buying Guide Section — per brand */}
            {brandData.buyingGuide && (
              <div className="bg-primary-50 rounded-2xl p-8 mt-12 border border-primary-100">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-primary-600" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {activeBrand} Buying Guide 2026 — What to Look For Before You Buy
                    </h2>
                    <p className="text-lg text-gray-500">
                      Key considerations specific to the {activeBrand} before purchase
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
                      <strong className="text-gray-900">Before investing in the {activeBrand}: </strong>
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
                  src="/Model/Exercise-about-4.jpg"
                  alt="Dr. James Hartwell"
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary-300"
                />
                <div>
                  <blockquote className="text-gray-600 italic mb-3 leading-relaxed">
                    "After testing more than 60 exercise bikes across 10 years, I can say with full confidence that the machines we highlight here represent genuine value and verified performance. Our commitment is that every dimension of quality, durability, and performance is thoroughly evaluated before we make any recommendation."
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. James Hartwell</div>
                    <div className="text-sm text-gray-500">Lead Performance & Fitness Specialist | NASM & ACE Certified | 10 Years of Coaching Experience</div>
                    <div className="text-sm text-gray-400">Tested: 20+ Exercise Bikes</div>
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