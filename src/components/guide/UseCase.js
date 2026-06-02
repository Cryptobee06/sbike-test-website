'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import { Sprout, Activity, Users, Home } from 'lucide-react';

const useCases = [
  { id: 'beginners', icon: Sprout,   bg: 'bg-primary-50',  border: 'border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-600' },
  { id: 'runners',   icon: Activity, bg: 'bg-blue-50',     border: 'border-blue-100',    iconBg: 'bg-blue-100',    iconColor: 'text-blue-600'    },
  { id: 'seniors',   icon: Users,    bg: 'bg-purple-50',   border: 'border-purple-100',  iconBg: 'bg-purple-100',  iconColor: 'text-purple-600'  },
  { id: 'homeGym',   icon: Home,     bg: 'bg-orange-50',   border: 'border-orange-100',  iconBg: 'bg-orange-100',  iconColor: 'text-orange-600'  },
];

export default function UseCase() {
  const t = useTranslations('guide.useCase');

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          {/* <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Find Your Match
          </div> */}
          <h2 className="text-xl sm:text-2xl lg:text-xl font-bold text-gray-900 mb-3">
            {t('title')}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((u) => {
            const Icon = u.icon;
            return (
              <div
                key={u.id}
                className={`${u.bg} border ${u.border} rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${u.iconBg} rounded-xl flex items-center justify-center shadow-sm`}>
                    <Icon className={`w-6 h-6 ${u.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {t(`${u.id}.title`)}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(`${u.id}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
