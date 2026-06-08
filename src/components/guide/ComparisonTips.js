'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

export default function   ComparisonTips() {
  const t = useTranslations('guide.comparisonTips');

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          {/* <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Our Process
          </div> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t('title')}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="relative bg-primary-50 border border-primary-100 rounded-3xl px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 shadow-card">
          <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2">
            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary-600 rounded-2xl flex items-center justify-center shadow-emerald">
              <CheckCircle className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-lg text-gray-600 leading-relaxed mt-4 sm:mt-4 text-center">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
}
