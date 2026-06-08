'use client';

import { useTranslations } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const statKeys = [
  { value: '1,200+', labelKey: 'heroStatHoursTested' },
  { value: '10+',    labelKey: 'heroStatModelsReviewed' },
  { value: '100%',   labelKey: 'heroStatIndependent' },
];

export default function HeroSection() {
  const t = useTranslations('homepage');

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url('/banner/Gemini_Generated_Image_2lon0v2lon0v2lon.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />

      {/* Dark overlay — keeps text readable while showing the image */}
      <div className="absolute inset-0 bg-black/72" />

      {/* Subtle vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-24 sm:pb-32 w-full">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 justify-center mb-8 sm:mb-10">
          <div className="w-6 sm:w-8 h-px bg-neutral-600" />
          <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-neutral-500">
            {t('heroEyebrow')}
          </span>
          <div className="w-6 sm:w-8 h-px bg-neutral-600" />
        </div>

        {/* Hero heading */}
        <h1
          className="text-center text-white font-black leading-[0.95] tracking-[-0.03em] sm:tracking-[-0.045em] mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(2.4rem, 11vw, 9rem)' }}
        >
          {t('heroHeadingLine1')}
          <br />
          <span className="text-neutral-500">{t('heroHeadingLine2')}</span>
          <br />
          {t('heroHeadingLine3')}
        </h1>

        {/* Subheading */}
        <p className="text-center text-white/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-10 sm:mb-12 font-light px-2">
          {t('heroSubtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 px-4 sm:px-0">
          <Link href="/#best-treadmills" className="w-full sm:w-auto">
            <span className="btn-primary-light text-xs py-4 px-8 flex items-center justify-center gap-2 w-full sm:w-auto">
              {t('heroCtaExplore')}
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </span>
          </Link>
          <Link href="/testing" className="w-full sm:w-auto">
            <span className="btn-secondary-dark text-xs py-4 px-8 flex items-center justify-center w-full sm:w-auto">
              {t('heroCtaTesting')}
            </span>
          </Link>
        </div>

        {/* Stats row */}
        <div className="border-t border-neutral-800 pt-8 sm:pt-10">
          <div className="grid grid-cols-3 sm:flex sm:flex-row items-center justify-center">
            {statKeys.map((stat, i) => (
              <div key={stat.labelKey} className="flex items-center justify-center">
                <div className="text-center px-3 sm:px-10 py-4">
                  <p className="text-white font-black text-xl sm:text-3xl tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-neutral-600 text-[0.55rem] sm:text-[0.65rem] uppercase tracking-[0.12em] sm:tracking-[0.18em] font-semibold mt-1 leading-snug">
                    {t(stat.labelKey)}
                  </p>
                </div>
                {i < statKeys.length - 1 && (
                  <div className="w-px h-10 bg-neutral-800 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-800" />
    </section>
  );
}