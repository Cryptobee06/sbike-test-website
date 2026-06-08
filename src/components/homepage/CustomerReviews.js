'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { getGermanGrade } from '@/utils/germanGrades';

const reviewsData = [
  { id: 1, name: 'Daniel R.',   rating: 5,   review: 'Durch die detaillierten Testberichte habe ich das perfekte Laufband gefunden. Die Empfehlung des Sportstech sWalk Lite war ein Volltreffer!', avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus1.jpg' },
  { id: 2, name: 'Emma L.',  rating: 5,   review: 'Very thorough reviews with real performance data. I appreciate the detailed testing process and honest pros/cons for each model.', avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus2.webp' },
  { id: 3, name: 'Thomas W.',  rating: 4.8, review: 'Great resource for treadmill comparisons. The buying guide was especially helpful for understanding what features matter most.', avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus3.webp' },
  { id: 4, name: 'Roman William  N.',          rating: 5,   review: "Professional and unbiased reviews. The team clearly knows what they're talking about. Saved me from buying the wrong treadmill!", avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus4.webp' },
  { id: 5, name: 'Kevin Petersion S.',       rating: 4.9, review: 'Comprehensive testing and easy-to-understand explanations. The noise level tests were particularly useful for my apartment.', avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus5.jpg' },
];

export default function CustomerReviews() {
  const t = useTranslations('homepage.customerReviews');
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const translatedReviews = t('reviews', { returnObjects: true });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const review = reviewsData[currentIndex];
  const text = translatedReviews?.[currentIndex]?.description || review.review;

  return (
    <section className="bg-[#0D0D0D] relative overflow-hidden border-t border-neutral-800">

      {/* Very subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-28 md:py-36">

        {/* Header */}
        <div className="text-center mb-16">
          {/* <span className="eyebrow-dark block mb-4">Real Experiences</span> */}
          <h2 className="heading-section text-white">
            {t('title')}
          </h2>
        </div>

        {/* Review card */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviewsData.map((r, index) => {
                const reviewText = translatedReviews?.[index]?.description || r.review;
                const grade = getGermanGrade(r.rating, locale);
                return (
                  <div key={r.id} className="w-full flex-shrink-0 text-center px-3 sm:px-4 md:px-16">

                    {/* Giant quote mark */}
                    <div
                      className="text-neutral-800 font-serif leading-none select-none mb-4 mx-auto"
                      style={{ fontSize: 'clamp(2rem, 8vw, 7rem)', lineHeight: 1 }}
                    >
                      "
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-8">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold border ${grade.badgeClass}`}
                        style={grade.badgeStyle}
                      >
                        Note {grade.note} ({grade.label})
                      </span>
                    </div>

                    {/* Quote text */}
                    <blockquote className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
                      {reviewText}
                    </blockquote>

                    {/* Avatar + name */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 overflow-hidden border border-neutral-700">
                        <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-neutral-300 font-semibold text-sm tracking-wide">{r.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev/Next arrows */}
          <button
            onClick={() => goTo(currentIndex === 0 ? reviewsData.length - 1 : currentIndex - 1)}
            className="absolute left-1 sm:left-4 md:left-0 top-1/3 -translate-y-1/2 md:-translate-x-6 w-8 h-8 sm:w-10 sm:h-10 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:border-neutral-500 text-neutral-400 hover:text-white transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goTo(currentIndex === reviewsData.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-1 sm:right-4 md:right-0 top-1/3 -translate-y-1/2 md:translate-x-6 w-8 h-8 sm:w-10 sm:h-10 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:border-neutral-500 text-neutral-400 hover:text-white transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress indicators */}
        <div className="mt-16 flex justify-center items-center gap-3">
          {reviewsData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              aria-label={`Review ${i + 1}`}
            >
              <div className={`transition-all duration-300 ${i === currentIndex ? 'w-8 h-0.5 bg-white' : 'w-4 h-0.5 bg-neutral-700 hover:bg-neutral-500'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
