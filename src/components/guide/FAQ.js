  'use client';
  import { useState } from 'react';
  import { useTranslations, useLocale } from '@/contexts/LanguageContext';

  const faqData = [
    {
      id: 1,
      question: {
        en: "1. Are walking pads healthy?",
        de: "1. Ist ein Walking Pad gesund?"
      },
      answer: {
        en: "Yes, regular walking during work improves circulation, posture, and helps prevent back pain.",
        de: "Ja, regelmäßiges Gehen während der Arbeit verbessert Kreislauf und Haltung und beugt Rückenschmerzen vor."
      }
    },
    {
      id: 2,
      question: {
        en: "2. How loud should a walking pad be for office use?",
        de: "2. Wie laut sollte ein Walking Pad fürs Büro sein?"
      },
      answer: {
        en: "Below 60 dB, so it doesn’t interfere with work.",
        de: "Unter 60 dB, damit es beim Arbeiten nicht stört "
      }
    },
    {
      id: 3,
      question: {
        en: "3. Will a walking pad fit under any desk?",
        de: "3. Passt ein Walking Pad unter jeden Schreibtisch?"
      },
      answer: {
        en: "Only flat models under 12 cm height will fit easily under most desks.",
        de: "Nur flache Modelle unter 12 cm Höhe passen problemlos unter gängige Bürotische."
      }
    },
    {
      id: 4,
      question: {
        en: "4.What are the benefits of good cushioning?",
        de: "4. Welche Vorteile bringt eine gute Dämpfung?"
      },
      answer: {
        en: "Soft cushioning protects joints, reduces fatigue, and allows longer walking sessions.",
        de: "Sanfte Dämpfung schützt die Gelenke, reduziert Ermüdung und ermöglicht längere Gehzeiten."
      }
    },
    {
      id: 5,
      question: {
        en: "5. Which walking pads are best for the home office?",
        de: "5. Welche Walking Pads sind fürs Homeoffice am besten geeignet?"
      },
      answer: {
        en: "Quiet, compact models with app + remote control, e.g., Sportstech.",
        de: "Leise, kompakte Modelle mit App- und Fernbedienung, z. B. Sportstech."
      }
    },
    {
      id: 6,
      question: {
        en: "6. Do I need an app to control it?",
        de: "6. Brauche ich zwingend eine App zur Steuerung?"
      },
      answer: {
        en: "No, a remote is enough – but the app is useful for stats and motivation.",
        de: "Nein, eine Fernbedienung reicht – die App ist praktisch für Statistiken und Motivation."
      }
    },
    {
      id: 7,
      question: {
        en: "7. How often should I use a walking pad?",
        de: "7. Wie oft sollte man ein Walking Pad nutzen?"
      },
      answer: {
        en: "1–2 hours a day are enough for benefits; pros can walk longer.",
        de: "1–2 Stunden pro Tag reichen für positive Effekte, Profis können länger gehen. "
      }
    },
    {
      id: 8,
      question: {
        en: "8. Can walking pads be used for light jogging?",
        de: "8. Können Walking Pads auch für leichtes Joggen genutzt werden?"
      },
      answer: {
        en: "Only models with higher speed settings (e.g., UREVO); sWalk Lite is designed for healthy walking.",
        de: "Nur Modelle mit höherer Geschwindigkeit (z. B. UREVO), sWalk Lite ist auf gesundes Gehen optimiert."
      }
    },
    {
      id: 9,
      question: {
        en: "9. What should I look for when buying a walking pad?",
        de: "9. Worauf sollte man beim Kauf eines Walking Pads achten?"
      },
      answer: {
        en: "Height ≤ 12 cm, quiet motor (< 60 dB), good cushioning, app + remote control, and solid build quality.",
        de: "Höhe ≤ 12 cm, Leiser Motor (< 60 dB), Gute Dämpfung, App + Fernbedienung, Stabile Verarbeitung"
      }
    },
  ];

  export default function FAQ() {
    const t = useTranslations('guide.faq');
    const locale = useLocale();
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (id) => {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        newOpenItems.add(id);
      }
      setOpenItems(newOpenItems);
    };

    return (
 <section className="py-20 bg-gradient-to-b from-white to-gray-100">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
      {t('title')}
    </h2>

    <div className="space-y-4">
      {faqData.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className={`bg-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border ${
              isOpen ? 'border-blue-500' : 'border-blue-300'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-full flex items-center justify-between px-6 py-5 text-left rounded-lg transition-colors duration-300 focus:outline-none`}
            >
              <span className="text-lg font-medium text-gray-900">
                {item.question[locale]}
              </span>

              {/* + / - icon always blue */}
              <span className="ml-4">
                {isOpen ? (
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                )}
              </span>
            </button>

            {/* Answer content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen
                  ? 'max-h-[500px] opacity-100 py-4 px-6'
                  : 'max-h-0 opacity-0 px-6 py-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed text-base">
                {item.answer[locale]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


    );
  }