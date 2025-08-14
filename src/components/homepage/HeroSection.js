'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function HeroSection() {
  const t = useTranslations('homepage');

  return (
    <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">
      {/* Animated SVG Circles Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full animate-pulse"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30%" cy="40%" r="320" fill="rgba(255,255,255,0.03)" />
          <circle cx="70%" cy="30%" r="260" fill="rgba(255,255,255,0.05)" />
          <circle cx="50%" cy="75%" r="200" fill="rgba(255,255,255,0.04)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-xl">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('heroSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#best-treadmills" passHref>
      <button
        className="bg-white text-blue-800 px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
        aria-label={t('bestTreadmills.title')}
      >
        {t('bestTreadmills.title')}
        <ArrowRight className="w-5 h-5" />
      </button>
          </Link>
          <Link href ='/testing'>
          <button
                className="bg-white/10 border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                aria-label={t('testingProcess.title')} 
              >
                {t('testingProcess.title')}
              </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
