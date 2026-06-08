'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import Link from 'next/link';

const blogPosts = [
  { id: 1, slug: 'best-treadmill-workouts-2025', title: { en: 'Exercise Bike Reviews: Tested Indoor Cycling Advanced Bikes for Home Fitness Enthusiasts', de: '10 Beste Walkingpad-Workouts für Gewichtsverlust 2025' }, excerpt: { en: 'Discover effective treadmill workouts that burn calories and boost metabolism. From HIIT to incline training, these proven routines deliver results.', de: 'Entdecken Sie effektive Walkingpad-Workouts, die Kalorien verbrennen und den Stoffwechsel ankurbeln.' }, publishDate: '2025-01-15', category: { en: 'Training', de: 'Training' }, emoji: '🏃' },
  { id: 2, slug: 'treadmill-maintenance-guide', title: { en: 'Complete Treadmill Maintenance Guide', de: 'Vollständiger Walkingpad-Wartungsratgeber' }, excerpt: { en: "Learn essential maintenance tips to extend your treadmill's lifespan. Regular care prevents costly repairs and ensures optimal performance.", de: 'Lernen Sie wichtige Wartungstipps, um die Lebensdauer Ihres Walkingpads zu verlängern.' }, publishDate: '2025-01-10', category: { en: 'Maintenance', de: 'Wartung' }, emoji: '🔧' },
  { id: 3, slug: 'running-vs-walking-treadmill', title: { en: 'Running vs Walking on Treadmill: Which Burns More Calories?', de: 'Laufen vs. Gehen auf dem Walkingpad: Was verbrennt mehr Kalorien?' }, excerpt: { en: 'Compare the benefits of running versus walking on treadmills. Understand calorie burn, joint impact, and which approach suits your fitness goals.', de: 'Vergleichen Sie die Vorteile des Laufens gegenüber dem Gehen auf Laufbändern.' }, publishDate: '2025-01-05', category: { en: 'Fitness', de: 'Fitness' }, emoji: '⚖️' },
  { id: 4, slug: 'home-gym-treadmill-setup', title: { en: 'Setting Up Your Home Gym: Treadmill Placement and Safety Tips', de: 'Heimstudio einrichten: Walkingpad-Platzierung und Sicherheitstipps' }, excerpt: { en: 'Expert advice on positioning your treadmill for optimal use and safety. Learn about space requirements and creating the perfect workout environment.', de: 'Expertenberatung zur optimalen Positionierung Ihres Walkingpads.' }, publishDate: '2024-12-28', category: { en: 'Home Gym', de: 'Heimstudio' }, emoji: '🏠' },
  { id: 5, slug: 'treadmill-technology-2025', title: { en: "Latest Treadmill Technology Trends in 2025: What's New?", de: 'Neueste Walkingpad-Technologie-Trends 2025: Was ist neu?' }, excerpt: { en: 'Explore cutting-edge treadmill features including AI coaching, virtual reality integration, and smart connectivity.', de: 'Entdecken Sie modernste Walkingpad-Features einschließlich KI-Coaching und intelligenter Konnektivität.' }, publishDate: '2024-12-20', category: { en: 'Technology', de: 'Technologie' }, emoji: '💡' },
  { id: 6, slug: 'beginner-treadmill-mistakes', title: { en: '7 Common Beginner Treadmill Mistakes and How to Avoid Them', de: '7 Häufige Anfänger-Walkingpad-Fehler und wie man sie vermeidet' }, excerpt: { en: 'Avoid these common treadmill mistakes that can lead to injury or poor results. Learn proper form, speed progression, and safety protocols.', de: 'Vermeiden Sie diese häufigen Walkingpad-Fehler, die zu Verletzungen führen können.' }, publishDate: '2024-12-15', category: { en: 'Beginner Tips', de: 'Anfänger-Tipps' }, emoji: '⚡' },
];

const formatDate = (dateString, locale) =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(dateString));

export default function BlogGrid() {
  const t = useTranslations('blog');
  const locale = useLocale();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-7">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-primary-50 flex items-center justify-center border-b border-gray-100">
                <div className="text-center">
                  <div className="text-5xl mb-2">{post.emoji}</div>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                {/* Category badge */}
                <span className="inline-flex items-center self-start px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-100 mb-4">
                  {post.category[locale]}
                </span>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 flex-grow">
                  {post.title[locale]}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm mb-5 line-clamp-3 leading-relaxed">
                  {post.excerpt[locale]}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-400 text-xs">
                    {formatDate(post.publishDate, locale)}
                  </span>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                  >
                    {t('readMore')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            {locale === 'en' ? 'Load More Articles' : 'Weitere Artikel laden'}
          </button>
        </div>
      </div>
    </section>
  );
}
