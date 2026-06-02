'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import { Gauge, Mountain, Wrench, Volume2, Sparkles } from 'lucide-react';
import Link from 'next/link';

const testData = [
  { id: 'speedTest',      icon: Gauge,    image: '/Test protocol/Test protocol 1.jpg' },
  { id: 'durabilityTest', icon: Wrench,   image: '/Test protocol/Test protocol 7.jpg' },
  { id: 'inclineTest',    icon: Mountain, image: '/Test protocol/Test protocol 3.jpg' },
  { id: 'noiseTest',      icon: Volume2,  image: '/Test protocol/Test protocol 5.jpg' },
  { id: 'comfortTest',    icon: Sparkles, image: '/Test protocol/Test protocol 6.jpg' },
];

export default function TestingProcess() {
  const t = useTranslations('homepage.testingProcess');

  return (
    <section className="bg-white">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 text-center">
        <h2 className="heading-section text-neutral-900 max-w-2xl mx-auto">
          {t('title')}
        </h2>
      </div>

      {/* Alternating editorial rows */}
      {testData.map((test, index) => {
        const Icon = test.icon;
        const isReversed = index % 2 === 1;

        return (
          <div
            key={test.id}
            className={`flex flex-col lg:flex-row border-t border-neutral-200 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image side */}
            <div className="w-full lg:w-1/2 h-[200px] xs:h-[280px] sm:h-[380px] lg:h-auto lg:min-h-[500px] xl:min-h-[580px] overflow-hidden bg-neutral-100 relative flex-shrink-0">
              <img
                src={test.image}
                alt={t(`${test.id}.title`)}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            {/* Text side */}
            <div
              className={`w-full lg:w-1/2 flex items-center bg-white px-4 py-8 xs:px-6 xs:py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-24 ${
                isReversed ? 'lg:border-r' : 'lg:border-l'
              } border-neutral-200`}
            >
              <div className="w-full max-w-md mx-auto lg:mx-0">

                {/* Step number + icon */}
                <div className="flex items-end gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
                  <span
                    className="font-black leading-none text-neutral-200 select-none"
                    style={{ fontSize: 'clamp(2.5rem, 12vw, 6rem)', letterSpacing: '-0.05em', lineHeight: 1 }}
                  >
                    0{index + 1}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-neutral-900 flex items-center justify-center flex-shrink-0 mb-2">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3 sm:mb-4">
                  {t(`${test.id}.title`)}
                </h3>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light">
                  {t(`${test.id}.description`)}
                </p>

                {/* Passed badge */}
                <div className="flex items-center gap-2 mt-6 sm:mt-8">
                  <div className="w-4 h-4 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.18em] uppercase text-neutral-400">
                    {t('passed')}
                  </span>
                </div>

              </div>
            </div>
          </div>
        );
      })}

    </section>
  );
}