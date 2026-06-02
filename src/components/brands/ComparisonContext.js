"use client";

import { useLocale } from "@/contexts/LanguageContext";

export default function ComparisonContext({ brand }) {
  const locale = useLocale();

  if (!brand?.comparisonContext) return null;

  const data = brand.comparisonContext[locale] || brand.comparisonContext.en;

  if (!data) return null;

  return (
    <section className="bg-primary-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
          Comparison
        </div>

        {data.title && (
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
            {data.title}
          </h2>
        )}

        <div className="divider-emerald mb-8"></div>

        {data.intro && (
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-10 text-center max-w-3xl">
            {data.intro}
          </p>
        )}

        {data.box1 && (
          <div className="w-full bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card border border-gray-100 hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-300 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-5">
              {data.box1.heading}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {data.box1.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-xs sm:text-sm leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3 mt-0.5 hidden sm:flex">
                    <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.middleText && (
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 text-center max-w-3xl">
            {data.middleText}
          </p>
        )}

        {data.box2 && (
          <div className="w-full bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card border border-gray-100 hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-300 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-5">
              {data.box2.heading}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {data.box2.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-xs sm:text-sm leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3 mt-0.5 hidden sm:flex">
                    <svg className="w-3 h-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.outro && (
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center max-w-3xl">
            {data.outro}
          </p>
        )}
      </div>
    </section>
  );
}
