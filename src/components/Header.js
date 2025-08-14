'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale, useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const brands = [
  { name: 'Sportstech', slug: 'sportstech' },
  { name: 'Citysports', slug: 'Citysports' },
  { name: 'kiddoza', slug: 'kiddoza' },
  { name: 'Superun', slug: 'Superun' },
  { name: 'Urevo', slug: 'Urevo' }
];

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const { switchLanguage, isLoaded } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  // --- Default to German if no locale is set ---
  useEffect(() => {
    if (locale === 'en') return; // Do nothing if it's already English
    if (!locale || locale !== 'de') {
      switchLanguage('de'); // Set default to German
    }
  }, [locale, switchLanguage]);

  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  const isActivePath = (path) => {

    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'de' : 'en';
    switchLanguage(newLocale);
  };

  const getBasePath = () => {
    return locale === 'de' ? '/de' : '';
  };

  if (!isLoaded) {
    return (
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-primary-600">Loading...</div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`${getBasePath()}/`} className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              {t('logo')}
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={`${getBasePath()}/reviews`}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActivePath('/reviews') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('treadmillReviews')}
            </Link>

            <div className="relative group">
              <button 
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                  isActivePath('/brands') 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onMouseEnter={() => setIsBrandsOpen(true)}
                onMouseLeave={() => setIsBrandsOpen(false)}
              >
                {t('brands')}
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div 
                className={`absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  isBrandsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsBrandsOpen(true)}
                onMouseLeave={() => setIsBrandsOpen(false)}
              >
                <div className="py-1">
                  {brands.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`${getBasePath()}/brands/${brand.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href={`${getBasePath()}/guide`}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActivePath('/guide') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('guide')}
            </Link>

            <Link 
              href={`${getBasePath()}/blog`}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActivePath('/blog') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('blog')}
            </Link>

            <Link 
              href={`${getBasePath()}/about`}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActivePath('/about') 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('about')}
            </Link>

            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors border border-gray-300 rounded-md"
            >
              {locale === 'en' ? 'DE' : 'EN'}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href={`${getBasePath()}/reviews`}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActivePath('/reviews') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('treadmillReviews')}
              </Link>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-700">{t('brands')}</div>
                {brands.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`${getBasePath()}/brands/${brand.slug}`}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
              
              <Link 
                href={`${getBasePath()}/guide`}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActivePath('/guide') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('guide')}
              </Link>
              
              <Link 
                href={`${getBasePath()}/blog`}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActivePath('/blog') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              
              <Link 
                href={`${getBasePath()}/about`}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActivePath('/about') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                {locale === 'en' ? 'Deutsch' : 'English'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
