'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import { Zap, TrendingUp, Ruler, Weight, MonitorSmartphone, Box } from 'lucide-react';

const features = [
  { id: 'motorPower',      icon: Zap,              bg: 'bg-amber-50',   border: 'border-amber-100',   iconBg: 'bg-amber-100',   iconColor: 'text-amber-600'   },
  { id: 'inclineSettings', icon: TrendingUp,        bg: 'bg-primary-50', border: 'border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-600' },
  { id: 'beltSize',        icon: Ruler,             bg: 'bg-blue-50',    border: 'border-blue-100',    iconBg: 'bg-blue-100',    iconColor: 'text-blue-600'    },
  { id: 'weightCapacity',  icon: Weight,            bg: 'bg-purple-50',  border: 'border-purple-100',  iconBg: 'bg-purple-100',  iconColor: 'text-purple-600'  },
  { id: 'display',         icon: MonitorSmartphone, bg: 'bg-primary-50', border: 'border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-600' },
  { id: 'foldability',     icon: Box,               bg: 'bg-orange-50',  border: 'border-orange-100',  iconBg: 'bg-orange-100',  iconColor: 'text-orange-600'  },
];

export default function KeyFeatures() {
  const t = useTranslations('guide.keyFeatures');

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {/* <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Key Criteria
          </div> */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t('title')}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className={`${f.bg} border ${f.border} rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  <Icon className={`w-7 h-7 ${f.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t(`${f.id}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`${f.id}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
