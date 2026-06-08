'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { BadgeCheck, Clock, Star } from 'lucide-react';
import { getGermanGrade } from '@/utils/germanGrades';

export default function ExpertOverview() {
  const t = useTranslations('homepage.expertOverview');
  const locale = useLocale();
  const overviewGrade = getGermanGrade(4.9, locale);
  const stats = [
    { icon: Clock, value: '1,200+', label: locale === 'de' ? 'Teststunden' : 'Hours Tested' },
    { icon: Star, value: `Note ${overviewGrade.note} (${overviewGrade.label})`, label: locale === 'de' ? 'Durchschnittsnote' : 'Avg. Rating' },
    { icon: BadgeCheck, value: '18+', label: locale === 'de' ? 'Getestete Modelle' : 'Models Tested' },
  ];

  return (
    <section className="py-24 bg-primary-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-emerald">
            <BadgeCheck className="w-8 h-8" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <div className="divider-emerald mb-8"></div>
          <p className="text-md md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('content')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center bg-white rounded-2xl px-6 py-5 border border-primary-100 shadow-card">
              <div className="flex justify-center mb-2">
                <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
              </div>
              <div className="text-2xl font-black text-gray-900">{value}</div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Attribution */}
        <p className="text-center text-sm text-gray-400 mt-8">— Certified Fitness & Equipment Expert</p>
      </div>
    </section>
  );
}
