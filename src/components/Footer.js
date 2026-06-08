'use client';
import { useTranslations, useLocale, useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const { isLoaded } = useLanguage();
  const currentYear = new Date().getFullYear();
  const getBasePath = () => locale === 'de' ? '/de' : '';

  if (!isLoaded) {
    return (
      <footer className="bg-[#0D0D0D] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-neutral-700 text-xs tracking-widest uppercase">Loading…</div>
        </div>
      </footer>
    );
  }

  const links = [
    { href: `${getBasePath()}/reviews`, label: t('treadmillReviews') },
    { href: `${getBasePath()}/guide`,   label: t('guide') },
    { href: `${getBasePath()}/blog`,    label: t('blog') },
    { href: `${getBasePath()}/about`,   label: t('about') },
  ];

  const legal = [
    { href: '/privacy', label: locale === 'en' ? 'Privacy Policy' : 'Datenschutz' },
    { href: '/terms',   label: locale === 'en' ? 'Terms of Service' : 'AGB' },
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-neutral-800">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* Brand column */}
          <div className="md:col-span-5">
            <img
              src="/logo/Exercise Bikes Test  logo svg - balck1.png"
              alt="WalkingPad Reviews"
              className="h-12 w-auto object-contain mb-8"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-light">
              {locale === 'en'
                ? 'Expert exercise bike reviews and performance testing from certified fitness professionals. Independent, research-backed evaluations to help you choose the best indoor cycling bike for your fitness goals, home gym setup, and budget.'
                : 'Expertenbewertungen und Leistungstests für Heimtrainer von zertifizierten Fitnessprofis. Unabhängige, fundierte Analysen helfen Ihnen dabei, das beste Indoor-Cycling-Bike für Ihre Fitnessziele, Ihr Home-Gym und Ihr Budget auszuwählen.'}
            </p>

            {/* Trust indicators */}
            {/* <div className="mt-10 space-y-3">
              {[
                locale === 'en' ? 'Independent Reviews' : 'Unabhängige Bewertungen',
                locale === 'en' ? 'Expert Testing' : 'Experten-Tests',
                locale === 'en' ? 'Honest Recommendations' : 'Ehrliche Empfehlungen',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-3 h-px bg-neutral-600 flex-shrink-0" />
                  <span className="text-neutral-600 text-[0.65rem] uppercase tracking-[0.18em] font-semibold">{item}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-neutral-600 mb-6">
              {locale === 'en' ? 'Quick Links' : 'Schnellzugriff'}
            </h3>
            <ul className="space-y-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-500 hover:text-white text-sm transition-colors duration-200 font-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h3 className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-neutral-600 mb-6">
              {locale === 'en' ? 'Legal' : 'Rechtliches'}
            </h3>
            <ul className="space-y-4">
              {legal.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-500 hover:text-white text-sm transition-colors duration-200 font-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          {/* <div className="md:col-span-2">
            <h3 className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-neutral-600 mb-6">
              {locale === 'en' ? 'Get Started' : 'Starten'}
            </h3>
            <Link href={`${getBasePath()}/reviews`}>
              <span className="block border border-neutral-700 hover:border-white text-white text-[0.65rem] font-bold tracking-[0.18em] uppercase px-4 py-3 text-center transition-colors duration-200 hover:bg-white hover:text-neutral-900">
                {locale === 'en' ? 'See Reviews' : 'Bewertungen'}
              </span>
            </Link>
            <Link href={`${getBasePath()}/guide`}>
              <span className="block mt-3 text-neutral-500 hover:text-white text-[0.65rem] font-bold tracking-[0.18em] uppercase px-4 py-3 text-center border border-neutral-800 hover:border-neutral-700 transition-colors duration-200">
                {locale === 'en' ? 'Buying Guide' : 'Kaufratgeber'}
              </span>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-700 text-[0.65rem] uppercase tracking-[0.12em] font-semibold">
            © {currentYear} Exercise Bike. {locale === 'en' ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
          </p>
          <p className="text-neutral-800 text-[0.65rem] uppercase tracking-[0.12em] font-semibold">
            {locale === 'en' ? 'Independent reviews. Real-world testing. Honest recommendations.' : 'Unabhängige Bewertungen. Praxistests unter realen Bedingungen. Ehrliche Empfehlungen.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
