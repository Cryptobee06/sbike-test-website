"use client";

import { useLocale } from "@/contexts/LanguageContext";

export default function TargetAudience({ brand }) {
  const locale = useLocale();

  if (!brand?.targetAudience) return null;

  const data = brand.targetAudience[locale] || brand.targetAudience.en;

  if (!data) return null;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
          Target Audience
        </div>

        {data.title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
        )}

        <div className="divider-emerald mb-8"></div>

        {data.intro && (
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-8 sm:mb-10 max-w-3xl">
            {data.intro}
          </p>
        )}

        {data.suitableForLabel && (
          <p className="text-gray-900 font-semibold text-sm sm:text-base mb-3 sm:mb-4">
            {data.suitableForLabel}
          </p>
        )}

        {data.suitableFor && data.suitableFor.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12 w-full max-w-3xl">
            {data.suitableFor.map((item, idx) => (
              <div
                key={idx}
                className={`bg-primary-50 border border-primary-100 hover:border-primary-400 hover:-translate-y-0.5 px-6 py-4 rounded-xl text-primary-800 text-sm font-medium flex-grow text-center transition-all duration-200 shadow-sm ${
                  data.suitableFor.length % 2 !== 0 && idx === data.suitableFor.length - 1 ? 'w-full' : 'w-full sm:w-[calc(50%-0.375rem)]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {data.notSuitableForLabel && (
          <p className="text-gray-900 font-semibold text-base mb-4">
            {data.notSuitableForLabel}
          </p>
        )}

        {data.notSuitableFor && data.notSuitableFor.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-3xl">
            {data.notSuitableFor.map((item, idx) => (
              <div
                key={idx}
                className={`bg-red-50 border border-red-100 hover:border-red-300 hover:-translate-y-0.5 px-6 py-4 rounded-xl text-red-700 text-sm font-medium flex-grow text-center transition-all duration-200 shadow-sm ${
                  data.notSuitableFor.length % 2 !== 0 && idx === data.notSuitableFor.length - 1 ? 'w-full' : 'w-full sm:w-[calc(50%-0.375rem)]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
