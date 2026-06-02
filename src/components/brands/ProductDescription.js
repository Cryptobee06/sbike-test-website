"use client";

import { useLocale } from "@/contexts/LanguageContext";

export default function ProductDescription({ brand }) {
  const locale = useLocale();

  if (!brand?.productDescription) return null;

  const desc = brand.productDescription[locale] || brand.productDescription.en;

  if (!desc) return null;

  return (
    <section className="bg-primary-50 py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-4 sm:p-6 lg:p-12 rounded-2xl shadow-card border border-gray-100 hover:border-primary-200 hover:-translate-y-0.5 flex flex-col items-center text-center transition-all duration-300">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-[11px] sm:text-xs font-semibold uppercase tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            Description
          </div>

          {/* Heading */}
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
            Product Description
          </h2>

          <div className="divider-emerald mb-4 sm:mb-6" />

          {/* Intro paragraph */}
          {desc.intro && (
            <p className="text-gray-600 text-xs sm:text-sm lg:text-lg leading-relaxed max-w-3xl">
              {desc.intro}
            </p>
          )}

          {/* Cards / paragraphs */}
          {desc.cards && desc.cards.length > 0 && (
            <div className="mt-3 sm:mt-6 space-y-2 sm:space-y-4 text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl w-full">
              {desc.cards.map((card, idx) => (
                <p key={idx}>{card}</p>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}