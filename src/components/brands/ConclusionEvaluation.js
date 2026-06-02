"use client";

import { useLocale } from "@/contexts/LanguageContext";

export default function ConclusionEvaluation({ brand }) {
  const locale = useLocale();

  if (!brand?.conclusionEvaluation) return null;

  const data = brand.conclusionEvaluation[locale] || brand.conclusionEvaluation.en;

  if (!data) return null;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
          Conclusion
        </div>

        {data.title && (
          <h2 className="text-xl sm:text-2xl  font-bold text-gray-900 mb-3 sm:mb-4">
            {data.title}
          </h2>
        )}

        <div className="divider-emerald mb-6"></div>

        {data.intro && (
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 max-w-3xl whitespace-pre-wrap">
            {data.intro}
          </p>
        )}

        {data.cardsTitle && (
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 sm:mb-6 max-w-3xl">
            {data.cardsTitle}
          </p>
        )}

        {data.cards && data.cards.length > 0 && (
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full my-8">
            {data.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-primary-50 border border-primary-100 hover:border-primary-400 hover:-translate-y-0.5 p-6 md:p-8 rounded-2xl flex-1 flex items-center justify-center text-center shadow-sm transition-all duration-300"
              >
                <span className="text-gray-900 font-semibold text-base md:text-lg leading-snug">{card}</span>
              </div>
            ))}
          </div>
        )}

        {data.outro && (
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-4xl whitespace-pre-wrap">
            {data.outro}
          </p>
        )}
      </div>
    </section>
  );
}
