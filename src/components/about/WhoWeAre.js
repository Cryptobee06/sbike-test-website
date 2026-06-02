'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import { Target, Shield, Zap } from 'lucide-react';

const pillars = [
  // { icon: Target, label: 'Simplify fitness tech' },
  // { icon: Shield, label: 'Stay independent'      },
  // { icon: Zap,    label: 'Empower your choice'   },
];

export default function WhoWeAre() {
  const t = useTranslations('about.whoWeAre');

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          {/* <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Our Mission
          </div> */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <div className="divider-emerald mb-6 sm:mb-8"></div>
          <p className="text-xs sm:text-base lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mt-8 sm:mt-10">
          {pillars.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 sm:gap-2.5 bg-primary-50 border border-primary-100 text-primary-800 px-3 sm:px-5 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium">
              <Icon className="w-3 sm:w-4 h-3 sm:h-4 text-primary-600" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
