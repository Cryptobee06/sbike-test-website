'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function ExpertOpinion() {
  const t = useTranslations('homepage.expertOpinion');

  return (
    <section className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[600px] border-t border-b border-neutral-200">

      {/* Left: full-bleed image */}
      <div className="relative lg:w-1/2 h-[280px] sm:h-[380px] lg:h-auto overflow-hidden bg-neutral-200">
        <img
          src="https://walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
          alt="Expert Trainer"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Subtle bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden" />
      </div>

      {/* Right: dark panel */}
      <div className="lg:w-1/2 bg-[#0D0D0D] flex items-center px-4 py-10 sm:px-8 sm:py-16 lg:px-16 xl:px-24 lg:py-20">
        <div className="max-w-lg w-full">

          {/* Eyebrow */}
          <span className="eyebrow-dark block mb-4 sm:mb-8">Expert Voice</span>

          {/* Giant quote mark */}
          <div
            className="text-neutral-700 font-serif leading-none select-none mb-2"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1 }}
          >
            "
          </div>

          {/* Quote */}
          <blockquote className="text-white text-sm sm:text-base lg:text-xl xl:text-2xl font-light leading-relaxed mb-6 sm:mb-10">
            {t('testimonial')}
          </blockquote>

          {/* Attribution - stack vertically on mobile, row on sm+ */}
          <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-base tracking-tight">{t('trainerName')}</p>
              <p className="text-neutral-500 text-sm mt-1 tracking-wide">{t('trainerTitle')}</p>
            </div>

            {/* Stars + badge - center on mobile, right on sm+ */}
            <div className="flex flex-col items-center sm:items-end gap-2 flex-shrink-0 w-full sm:w-auto">
              <div className="flex gap-1 sm:gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 sm:w-5 sm:h-5 text-[#C8A96E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs sm:text-[0.7rem] font-bold tracking-[0.18em] uppercase text-neutral-600 border border-neutral-700 px-3 py-1">
                {t('testedCount')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
