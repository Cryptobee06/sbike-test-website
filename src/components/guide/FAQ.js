"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "@/contexts/LanguageContext";

const faqData = [
  { id: 1, question: { en: "1. What is the best exercise bike for losing weight at home?", de: "1. Welcher Heimtrainer eignet sich am besten zum Abnehmen zuhause?" }, answer: { en: "For weight loss, the most effective exercise bike is one you will actually use consistently. A mid-range upright bike with 16+ magnetic resistance levels gives you the variety needed for interval training, the most time-efficient format for fat loss. ", de: "Zum Abnehmen ist der effektivste Heimtrainer derjenige, den Sie regelmäßig verwenden. Ein Upright Bike der Mittelklasse mit mehr als 16 magnetischen Widerstandsstufen bietet genügend Abwechslung für Intervalltraining — die zeiteffizienteste Trainingsform zur Fettverbrennung." } },
  { id: 2, question: { en: "2. How many resistance levels does a good exercise bike need?", de: "2. Wie viele Widerstandsstufen sollte ein guter Heimtrainer haben?" }, answer: { en: "For beginner to intermediate riders, 8 resistance levels is a functional minimum. For progressive training and HIIT programming, 16 or more levels is strongly recommended. Smart bikes with electromagnetic resistance offer virtually infinite levels, which is optimal for structured training plans. ", de: "Für Anfänger und fortgeschrittene Freizeitnutzer sind 8 Widerstandsstufen das funktionale Minimum. Für progressives Training und HIIT werden 16 oder mehr Stufen dringend empfohlen. Smart Bikes mit elektromagnetischem Widerstand bieten nahezu unbegrenzte Widerstandsstufen und sind ideal für strukturierte Trainingspläne." } },
  { id: 3, question: { en: "3. Is a spin bike better than an upright bike for cardio fitness?", de: "3. Ist ein Spinning Bike besser für die Ausdauer als ein Upright Bike??" }, answer: { en: "Spin bikes generally produce higher cardiovascular output because the forward riding position, heavier flywheel, and standing-climb capability engage more muscle groups simultaneously. However, 'better' depends on your fitness goals and physical condition. Upright bikes are more comfortable for longer, lower-intensity sessions and are better suited for daily riding habits. ", de: "Spinning Bikes erzeugen in der Regel eine höhere Herz-Kreislauf-Belastung, da die nach vorne geneigte Sitzposition, die schwerere Schwungmasse und die Möglichkeit zum Fahren im Stehen mehr Muskelgruppen gleichzeitig aktivieren. Welche Variante „besser“ ist, hängt jedoch von Ihren Zielen und Ihrer körperlichen Verfassung ab. Upright Bikes sind komfortabler für längere, weniger intensive Einheiten und besser für tägliche Trainingseinheiten geeignet." } },
  { id: 4, question: { en: "4. What flywheel weight should I look for in an exercise bike?", de: "Auf welches Schwungradgewicht sollte ich achten?" }, answer: { en: "For upright bikes, a flywheel of 7–10 kg provides smooth resistance for general fitness. For spin bikes designed for HIIT or performance training, look for a minimum of 18 kg — 20–25 kg is ideal for the most natural, fluid pedal stroke. Flywheel weight is one of the most reliable indicators of a spin bike's overall quality.", de: "Bei Upright Bikes sorgen 7–10 kg Schwungmasse für einen gleichmäßigen Bewegungsablauf im allgemeinen Fitnesstraining. Für Spinning Bikes im HIIT- oder Performance-Bereich sollten es mindestens 18 kg sein — idealerweise 20–25 kg für ein besonders natürliches und flüssiges Pedalgefühl. Das Schwungradgewicht ist einer der zuverlässigsten Qualitätsindikatoren eines Spinning Bikes." } },
  { id: 5, question: { en: "5. Are exercise bikes suitable for people with knee problems?", de: "5. Sind Heimtrainer für Menschen mit Knieproblemen geeignet?" }, answer: { en: "Yes — with the correct setup and bike type. Recumbent bikes are the safest option for those with acute knee injuries because the pedal position is forward rather than directly below the hip, reducing joint compression. ", de: "Ja — mit der richtigen Einstellung und dem passenden Fahrradtyp. Liegeergometer gelten als die sicherste Wahl bei akuten Knieproblemen, da sich die Pedale vor dem Körper statt direkt unter der Hüfte befinden und dadurch die Gelenkbelastung reduziert wird." } },
  { id: 6, question: { en: "6. Can I connect an exercise bike to Zwift or Apple Fitness+?", de: "6. Kann ich einen Heimtrainer mit Zwift oder Apple Fitness+ verbinden?" }, answer: { en: "Many modern exercise bikes support Bluetooth and ANT+ connectivity for third-party app integration. Zwift requires either a smart trainer with power output data or a bike with Bluetooth power broadcasting capability — most premium spin bikes and all smart bikes support this. ", de: "Viele moderne Heimtrainer unterstützen Bluetooth- und ANT+-Konnektivität zur Integration mit Drittanbieter-Apps. Zwift benötigt entweder einen Smart Trainer mit Leistungsdaten oder ein Bike mit Bluetooth-Leistungsübertragung — die meisten Premium-Spinning Bikes und alle Smart Bikes unterstützen diese Funktion." } },
  { id: 7, question: { en: "7. How loud is an exercise bike? Will it disturb my neighbours?", de: "7. Wie laut ist ein Heimtrainer? Stört er Nachbarn?" }, answer: { en: "This depends entirely on the resistance and drive mechanism. Belt-drive magnetic bikes, the quietest category - register 42–55 dB at 80 RPM in our tests, comparable to a quiet office environment. Chain-drive bikes average 65–74 dB. Air bikes are the loudest at 70–85 dB depending on fan speed. ", de: "Das hängt vollständig vom Widerstands- und Antriebssystem ab. Riemengetriebene Magnetbikes — die leiseste Kategorie — erreichen in unseren Tests 42–55 dB bei 80 U/min, vergleichbar mit einer ruhigen Büroumgebung. Kettenantrieb-Bikes liegen durchschnittlich bei 65–74 dB. Air Bikes sind mit 70–85 dB je nach Lüftergeschwindigkeit am lautesten." } },
  { id: 8, question: { en: "8. What are the most important safety features on an exercise bike?", de: "8. Welche Sicherheitsmerkmale sind bei einem Heimtrainer am wichtigsten?" }, answer: { en: "The five most critical safety features are.., Emergency stop brake, standard on spin bikes, essential for HIIT; Non-slip, adjustable pedal straps or SPD clip-in compatibility to prevent foot slippage; Stable base footprint with anti-tip geometry for the maximum-rated user weight; Smooth resistance transition to prevent sudden load changes that can cause muscle strain; Frame stability ratings confirmed by third-party testing. For recumbent bikes, side grab handles are an additional essential safety feature for safe mounting and dismounting.", de: "Die fünf wichtigsten Sicherheitsmerkmale sind:Notbremsfunktion, besonders bei Spinning Bikes essenziell für HIITRutschfeste, verstellbare Pedalriemen oder SPD-Klicksysteme zur Vermeidung von FußrutschenStabiler Stand mit kippsicherer Rahmengeometrie für das maximal zulässige BenutzergewichtGleichmäßige Widerstandsübergänge zur Vermeidung plötzlicher BelastungsspitzenRahmenstabilität, bestätigt durch unabhängige TestsBei Liegeergometern gehören zusätzliche Haltegriffe zu den wichtigsten Sicherheitsmerkmalen für sicheres Auf- und Absteigen." } },
  // { id: 9, question: { en: "9. What should I look for when buying a walking pad?", de: "9. Worauf solltest du besonders achten beim Kauf?" }, answer: { en: "Height ≤ 12 cm, quiet motor (< 60 dB), good cushioning, app + remote control, and solid build quality.", de: "Entscheidend sind: flache Bauweise (< 12 cm), leiser Motor (< 60 dB), gute Dämpfung, App + Fernsteuerung und stabile Bauqualität." } },
];

export default function FAQ() {
  const t = useTranslations("guide.faq");
  const locale = useLocale();
  const [openItems, setOpenItems] = useState(new Set());

  const toggle = (id) => {
    const next = new Set(openItems);
    next.has(id) ? next.delete(id) : next.add(id);
    setOpenItems(next);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-primary-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            FAQ
          </div> */}
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("title")}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-card transition-all duration-300 border ${
                  isOpen ? "border-primary-300 shadow-emerald-sm" : "border-gray-100 hover:border-primary-200"
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-primary-700' : 'text-gray-800'}`}>
                    {item.question[locale]}
                  </span>
                  <span className={`ml-4 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      {isOpen
                        ? <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        : <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      }
                    </svg>
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-5 px-6" : "max-h-0 opacity-0 px-6 pb-0"}`}>
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
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
