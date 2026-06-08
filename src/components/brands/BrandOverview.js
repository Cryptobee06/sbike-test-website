'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';

export default function BrandOverview({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();

  const displayName = brand.name?.toLowerCase().startsWith('sportstech') ? 'Sportstech' : brand.name;

  return (
    <section>
      <div
        className="relative bg-center bg-cover bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${brand.bannerImage}')`,
          minHeight: 'clamp(280px, 55vw, 43rem)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-black/55 to-black/25 z-0" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-primary-600/30 border border-primary-400/40 text-primary-200 font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.875rem)' }}
          >
            {t('overview')}
          </div>

          {/* Heading */}
          <h1
            className="font-black mb-3 sm:mb-4 leading-tight drop-shadow-lg"
            style={{ fontSize: 'clamp(1.75rem, 7vw, 3.75rem)' }}
          >
            {displayName}
            <span className="text-primary-300 ml-2 sm:ml-3">{brand.model}</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/90 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow"
            style={{ fontSize: 'clamp(0.875rem, 3vw, 1.25rem)' }}
          >
            {brand.description[locale]}
          </p>

        </div>
      </div>
    </section>
  );
}