'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';

const standards = [
  {
    id: 'Resistance & Drive System Testing',
    icon: '⚡',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    iconBg: 'bg-amber-100',
    content: {
      en: 'We assess every resistance level, magnetic, friction, air, and electromagnetic, under controlled conditions at 60, 80, and 100 RPM. We measure flywheel inertia (in kg), resistance step linearity, and drive train smoothness: no skipped levels, no abbreviated test sessions. ',
      de: 'Wir analysieren jede Widerstandsstufe – magnetisch, reibungsbasiert, luftgestützt und elektromagnetisch – unter kontrollierten Bedingungen bei 60, 80 und 100 U/min. Dabei messen wir die Schwungmassen-Trägheit (in kg), die Linearität der Widerstandsstufen sowie die Laufruhe des Antriebssystems. Keine ausgelassenen Widerstandsstufen, keine verkürzten Testläufe.',
    },
  },
  {
    id: 'Structural Durability Checks',
    icon: '🔧',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-100',
    content: {
      en: 'Each bike is tested beyond its rated user capacity and subjected to repeated mounting, dismounting, and aggressive resistance changes to simulate months of daily use. We inspect welds, frame flex under load, seat clamp retention strength, and handlebar torque limits. ',
      de: 'Jeder Heimtrainer wird über seine angegebene Nutzerkapazität hinaus getestet und wiederholten Auf- und Abstiegen sowie aggressiven Widerstandswechseln ausgesetzt, um Monate täglicher Nutzung zu simulieren. Wir überprüfen Schweißnähte, Rahmenflex unter Belastung, die Stabilität der Sitzhalterung sowie die Belastungsgrenzen des Lenkers.',
    },
  },
  {
    id: 'Verified User Feedback Integration',
    icon: '💬',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    iconBg: 'bg-primary-100',
    content: {
      en: 'Lab data alone does not tell the full story. We gather structured ride diaries from five or more testers, ranging from complete beginners to advanced interval trainers, and synthesise their qualitative feedback with our quantitative scores. This ensures our final ratings reflect diverse real-world needs rather than a single experts preference.',
      de: 'Labordaten allein erzählen nicht die ganze Geschichte. Deshalb sammeln wir strukturierte Fahrprotokolle von fünf oder mehr Testpersonen – vom absoluten Anfänger bis zum fortgeschrittenen Intervalltrainer – und kombinieren deren qualitative Erfahrungen mit unseren quantitativen Ergebnissen. So spiegeln unsere Endbewertungen unterschiedliche reale Nutzerbedürfnisse wider und nicht nur die Meinung eines einzelnen Experten.',
    },
  },
  {
    id: 'Certified Expert Validation',
    icon: '✓',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    iconBg: 'bg-purple-100',
    content: {
      en: 'Every review is cross-checked by at least two certified specialists, one fitness expert and one technical engineer. This dual-verification process catches errors, resolves discrepancies in scoring, and ensures that no single reviewers blind spots affect the final rating. All evaluators hold current professional certifications in their respective disciplines.',
      de: 'Jede Bewertung wird von mindestens zwei zertifizierten Spezialisten geprüft – einem Fitness-Experten und einem technischen Ingenieur. Dieser doppelte Prüfprozess minimiert Fehler, löst Bewertungsunterschiede auf und stellt sicher, dass persönliche Vorlieben einzelner Tester das Endergebnis nicht beeinflussen. Alle Prüfer verfügen über aktuelle professionelle Zertifizierungen in ihren jeweiligen Fachbereichen.',
    },
  },
  {
    id: 'Transparent & Data-Driven Scoring',
    icon: '📈',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    iconBg: 'bg-primary-100',
    content: {
      en: 'Our scoring methodology is fully documented and publicly available. Each category carries a defined weighting, and we show the raw subscores alongside the composite rating. You will never see a vague overall score without understanding exactly how we arrived at it. ',
      de: 'Unsere Bewertungsmethodik ist vollständig dokumentiert und öffentlich einsehbar. Jede Kategorie besitzt eine definierte Gewichtung, und wir zeigen die einzelnen Teilbewertungen zusätzlich zur Gesamtpunktzahl an. Sie werden bei uns niemals eine unklare Gesamtbewertung sehen, ohne nachvollziehen zu können, wie diese zustande gekommen ist.',
    },
  },
  {
    id: 'Regular Review Updates & Re-Testing',
    icon: '🔃',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    iconBg: 'bg-primary-100',
    content: {
      en: 'Products change. Firmware updates can improve or degrade smart bike performance. Prices shift. Manufacturers alter components without announcement. We re-test any product that receives a material change and update our scores accordingly, with a clear revision date displayed on every review page. ',
      de: 'Produkte verändern sich. Firmware-Updates können die Leistung smarter Heimtrainer verbessern oder verschlechtern. Preise ändern sich, und Hersteller tauschen manchmal Komponenten ohne Ankündigung aus. Deshalb testen wir jedes Produkt erneut, sobald wesentliche Änderungen vorgenommen werden, und aktualisieren unsere Bewertungen entsprechend – inklusive klar sichtbarem Aktualisierungsdatum auf jeder Testseite.',
    },
  },
];

export default function ReviewStandards() {
  const t = useTranslations('');
  const locale = useLocale();

  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {/* <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            How We Work
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Review Standards
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((s) => (
            <div
              key={s.id}
              className={`${s.bg} border ${s.border} rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t(s.id)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {s.content[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
