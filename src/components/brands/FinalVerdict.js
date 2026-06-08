'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { getGermanGrade } from '@/utils/germanGrades';

export default function FinalVerdict({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();
  const brandGrade = getGermanGrade(brand.rating, locale);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            Verdict
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t('finalVerdict')}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-card p-4 sm:p-8 lg:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {brand.name} {brand.model}
              </h3>
              <div className="flex justify-center mb-2">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${brandGrade.badgeClass}`}
                  style={brandGrade.badgeStyle}
                >
                  Note {brandGrade.note} ({brandGrade.label})
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed text-center mb-6 sm:mb-10">
              {brand.verdict[locale]}
            </p>

            <div className="text-center">
              <a
                href={brand.buyLink}
                target={brand.buyLink !== '#' ? '_blank' : '_self'}
                rel={brand.buyLink !== '#' ? 'noopener noreferrer' : ''}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-xl font-semibold text-xs sm:text-sm hover:bg-primary-700 transition-colors shadow-emerald">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m4.5-6v6m4-6v6m4-6v6" />
                </svg>
                {t('buyNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
