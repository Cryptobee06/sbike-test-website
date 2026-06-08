'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale, useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const brandCategories = [
  {
    name: 'Amateur Exercise Bikes',
    nameDE: 'Amateur-Exercise Bikes',
    slug: 'amateur',
    brands: [
      { name: 'Sportstech X150', slug: 'Sportstech' },
      { name: 'Ultrasport', slug: 'Ultrasport' },
      { name: 'SportPlus', slug: 'SportPlus' },
      { name: 'DOMYOS', slug: 'DOMYOS' },
      { name: 'AsVIVA', slug: 'AsVIVA' },
    ]
  },
  {
    name: 'Advanced Exercise Bikes',
    nameDE: 'Advanced-Exercise Bikes',
    slug: 'advanced',
    brands: [
      { name: 'Sportstech SX175', slug: 'SportstechSX175' },
      { name: 'Peloton', slug: 'Peloton' },
      { name: 'Nordictrack', slug: 'Nordictrack' },
      { name: 'Wahoo', slug: 'Wahoo' },
      { name: 'Garmin', slug: 'Garmin' },
    ]
  }
];

const reviewCategories = [
  { name: 'Amateur Exercise Bikes', nameDE: 'Amateur-Exercise Bikes', slug: 'amateur' },
  { name: 'Advanced Exercise Bikes', nameDE: 'Advanced Exercise Bikes', slug: 'advanced' }
];

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const { switchLanguage, isLoaded } = useLanguage();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);
  const [mobileExpandedReviews, setMobileExpandedReviews] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (locale === 'en') return;
    if (!locale || locale !== 'de') switchLanguage('de');
  }, [locale, switchLanguage]);

  const currentPath = pathname.replace(`/${locale}`, '') || '/';
  const isActivePath = (path) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };
  const getBasePath = () => locale === 'de' ? '/de' : '';
  const getCategoryName = (cat) => locale === 'de' ? cat.nameDE : cat.name;

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'de' : 'en';
    const currentQueryString = searchParams.toString();
    let pathWithoutLocale = pathname;
    if (pathname.startsWith('/de/')) pathWithoutLocale = pathname.substring(3);
    else if (pathname === '/de') pathWithoutLocale = '/';
    else if (pathname.startsWith('/en/')) pathWithoutLocale = pathname.substring(3);
    else if (pathname === '/en') pathWithoutLocale = '/';
    if (!pathWithoutLocale.startsWith('/')) pathWithoutLocale = '/' + pathWithoutLocale;
    const newBasePath = newLocale === 'de' ? '/de' : '';
    let newFullPath = newBasePath + pathWithoutLocale;
    if (newFullPath === '') newFullPath = '/';
    if (currentQueryString) newFullPath = `${newFullPath}?${currentQueryString}`;
    switchLanguage(newLocale);
    router.push(newFullPath);
  };

  if (!isLoaded) {
    return (
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-800">Loading…</div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-white border-b border-neutral-200'
      }`}
    >
      <nav className="max-w-full mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">

          {/* Logo */}
          <Link href={`${getBasePath()}/`} className="flex items-center flex-shrink-0">
            <img
              src="/logo/Exercise Bikes Test  logo svg - balck1.png"
              className="h-10 w-auto md:h-14 lg:h-14 object-contain"
              style={{ filter: 'brightness(0)' }}
              alt="WalkingPad Reviews"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">

            {/* Reviews dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsReviewsOpen(true)}
              onMouseLeave={() => setIsReviewsOpen(false)}
            >
              <button
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-1.5 ${
                  isActivePath('/reviews') ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {t('treadmillReviews')}
                <svg className={`w-3 h-3 transition-transform duration-200 ${isReviewsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 top-full pt-2 transition-all duration-200 ${isReviewsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="bg-white border border-neutral-200 shadow-[0_8px_32px_rgba(0,0,0,0.10)] min-w-[220px]">
                  {reviewCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`${getBasePath()}/reviews?category=${cat.slug}`}
                      className="block px-5 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-0"
                    >
                      {getCategoryName(cat)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Brands dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsBrandsOpen(true)}
              onMouseLeave={() => { setIsBrandsOpen(false); setActiveCategory(null); }}
            >
              <button
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-1.5 ${
                  isActivePath('/brands') ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {t('brands')}
                <svg className={`w-3 h-3 transition-transform duration-200 ${isBrandsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 top-full pt-2 transition-all duration-200 ${isBrandsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="bg-white border border-neutral-200 shadow-[0_8px_32px_rgba(0,0,0,0.10)] min-w-[220px]">
                  {brandCategories.map((cat) => (
                    <div key={cat.slug} className="relative" onMouseEnter={() => setActiveCategory(cat.slug)}>
                      <div className="flex items-center justify-between px-5 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 cursor-pointer transition-colors border-b border-neutral-100 last:border-0">
                        <span>{getCategoryName(cat)}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className={`absolute left-full top-0 transition-all duration-200 ${activeCategory === cat.slug ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <div className="bg-white border border-neutral-200 shadow-[0_8px_32px_rgba(0,0,0,0.10)] min-w-[200px] ml-0.5">
                          {cat.brands.map((brand) => (
                            <Link
                              key={brand.slug}
                              href={`${getBasePath()}/brands/${brand.slug}`}
                              className="block px-5 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-0"
                            >
                              {brand.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {['guide', 'blog', 'about'].map((item) => (
              <Link
                key={item}
                href={`${getBasePath()}/${item}`}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-colors capitalize ${
                  isActivePath(`/${item}`) ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {t(item)}
              </Link>
            ))}

            {/* Language + CTA */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-neutral-200">
              <button
                onClick={toggleLanguage}
                className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {locale === 'en' ? 'DE' : 'EN'}
              </button>
              <Link href={`${getBasePath()}/reviews`}>
                {/* <span className="btn-primary text-xs py-3 px-6">
                  {locale === 'en' ? 'See Reviews' : 'Bewertungen'}
                </span> */}
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-700 p-2 hover:bg-neutral-50 transition-colors"
            aria-label="Menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen
                ? <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white pb-6">
            <div className="pt-4 space-y-0.5">

              {/* Mobile Reviews */}
              <div>
                <button
                  onClick={() => setMobileExpandedReviews(!mobileExpandedReviews)}
                  className="flex items-center justify-between w-full px-4 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  <span>{t('treadmillReviews')}</span>
                  <svg className={`w-3 h-3 transition-transform ${mobileExpandedReviews ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpandedReviews && (
                  <div className="bg-neutral-50 border-t border-neutral-200">
                    {reviewCategories.map((cat) => (
                      <Link key={cat.slug} href={`${getBasePath()}/reviews?category=${cat.slug}`}
                        className="block px-8 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors border-b border-neutral-200 last:border-0"
                        onClick={() => setIsMenuOpen(false)}>
                        {getCategoryName(cat)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Brands */}
              <div>
                <div className="px-4 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-400">{t('brands')}</div>
                {brandCategories.map((cat) => (
                  <div key={cat.slug}>
                    <button
                      onClick={() => setMobileExpandedCategory(mobileExpandedCategory === cat.slug ? null : cat.slug)}
                      className="flex items-center justify-between w-full px-6 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                    >
                      <span>{getCategoryName(cat)}</span>
                      <svg className={`w-3 h-3 transition-transform ${mobileExpandedCategory === cat.slug ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpandedCategory === cat.slug && (
                      <div className="bg-neutral-50 border-t border-neutral-200">
                        {cat.brands.map((brand) => (
                          <Link key={brand.slug} href={`${getBasePath()}/brands/${brand.slug}`}
                            className="block px-10 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors border-b border-neutral-200 last:border-0"
                            onClick={() => setIsMenuOpen(false)}>
                            {brand.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {['guide', 'blog', 'about'].map((item) => (
                <Link key={item} href={`${getBasePath()}/${item}`}
                  className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors capitalize"
                  onClick={() => setIsMenuOpen(false)}>
                  {t(item)}
                </Link>
              ))}

              <div className="px-4 pt-4 space-y-3">
                <button
                  onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                  className="block w-full text-center py-3 text-xs font-semibold tracking-widest uppercase text-neutral-500 border border-neutral-300 hover:text-neutral-900 hover:border-neutral-900 transition-colors"
                >
                  {locale === 'en' ? 'Deutsch' : 'English'}
                </button>
                <Link href={`${getBasePath()}/reviews`} onClick={() => setIsMenuOpen(false)}>
                  <span className="block w-full text-center py-3 bg-neutral-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-neutral-700 transition-colors">
                    {locale === 'en' ? 'See Reviews' : 'Bewertungen'}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
