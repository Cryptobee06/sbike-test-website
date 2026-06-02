'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import './guide.css';

export default function GuideHero() {
  const t = useTranslations('guide');

  return (
    <section
      className="guide-banner bg-cover bg-center w-full flex items-center justify-center"
      style={{ minHeight: 'clamp(280px, 60vw, 700px)' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h1
            className="font-bold text-white mb-4 sm:mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}
          >
            {t('title')}
          </h1>
          <p
            className="text-white/90 max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 3vw, 1.5rem)' }}
          >
            {t('introduction')}
          </p>
        </div>
      </div>
    </section>
  );
}