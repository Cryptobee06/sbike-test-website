'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function BlogHero() {
  const t = useTranslations('blog');

  return (
    <section className="relative hero-bg text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary-700/20 blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-primary-600/15 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-primary-700/40 border border-primary-500/40 text-primary-200 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          Fitness & Walking Pad Blog
        </div>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-black leading-tight mb-6 tracking-tight">
          {t('title')}
        </h1>
        <p className="text-md md:text-lg lg:text-xl text-primary-100/80 max-w-2xl mx-auto leading-relaxed">
          {t('introduction')}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="relative block w-full h-10">
          <path d="M0,0 C300,60 900,60 1200,0 L1200,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
