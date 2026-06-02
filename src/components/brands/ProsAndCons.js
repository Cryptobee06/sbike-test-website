'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';

export default function ProsAndCons({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Evaluation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('prosAndCons')}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {/* Pros */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-card overflow-hidden">
            <div className="bg-primary-600 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">{t('whatWeLike')}</h3>
            </div>
            <div className="p-4 sm:p-6">
              <ul className="space-y-3 sm:space-y-4">
                {brand.pros[locale].map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5 hidden sm:flex">
                      <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {typeof pro === 'string' ? (
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{pro}</span>
                    ) : (
                      <div className="w-full">
                        <span className="text-gray-900 font-semibold text-xs sm:text-sm">{pro.title}</span>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-0.5">{pro.description}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cons */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-card overflow-hidden">
            <div className="bg-red-500 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">{t('whatWeDontLike')}</h3>
            </div>
            <div className="p-4 sm:p-6">
              <ul className="space-y-3 sm:space-y-4">
                {brand.cons[locale].map((con, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 hidden sm:flex">
                      <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {typeof con === 'string' ? (
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{con}</span>
                    ) : (
                      <div className="w-full">
                        <span className="text-gray-900 font-semibold text-xs sm:text-sm">{con.title}</span>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-0.5">{con.description}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
