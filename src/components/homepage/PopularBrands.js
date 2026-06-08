'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import Image from 'next/image';

const brands = [
  { name: 'Sportstech', logo: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/products/sportstech.png', scale: 'w-28 sm:w-32 lg:w-40' },
  { name: 'Citysports',  logo: '/logo/Peloton-Logo.png',        scale: 'w-24 sm:w-28 lg:w-36' },
  { name: 'Superun',     logo: '/logo/nordictrack-logo.png',    scale: 'w-24 sm:w-28 lg:w-36' },
  { name: 'UREVO',       logo: '/logo/wahoo_fitness-logo.png',  scale: 'w-20 sm:w-24 lg:w-32' },
  { name: 'Kiddoza',     logo: '/logo/garmin-logo.webp',        scale: 'w-20 sm:w-24 lg:w-32' },
  { name: 'Merach',      logo: '/logo/Ultra-logo.png',          scale: 'w-24 sm:w-28 lg:w-36' },
  { name: 'Cursor',      logo: '/logo/Domyos-logo.png',         scale: 'w-20 sm:w-24 lg:w-32' },
  { name: 'Cazvian',     logo: '/logo/AsVIVA-Logo.png',         scale: 'w-24 sm:w-28 lg:w-36' },
  { name: 'SportPlus',   logo: '/logo/SportPlus-logo.png',      scale: 'w-20 sm:w-24 lg:w-32' },
];

export default function PopularBrands() {
  const t = useTranslations('homepage.popularBrands');

  const firstRow = brands.slice(0, 6);
  const secondRow = brands.slice(6);

  return (
    <section className="bg-white border-t border-neutral-200 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-section text-neutral-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            {t('Subtitle')}
          </p>
        </div>

        {/* Row 1 — 6 logos */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-0">
          {firstRow.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-24 sm:h-28 lg:h-32 px-2 sm:px-4 lg:px-6 group hover:bg-neutral-50 transition-colors duration-200"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={200}
                height={80}
                className={`object-contain h-auto ${brand.scale}
                  grayscale opacity-60
                  group-hover:grayscale-0 group-hover:opacity-100
                  transition-all duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Row 2 — 3 logos, centered */}
        <div className="flex justify-center flex-wrap">
          {secondRow.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-24 sm:h-28 lg:h-32
                w-1/3 lg:w-1/6
                px-2 sm:px-4 lg:px-6
                group hover:bg-neutral-50 transition-colors duration-200"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={200}
                height={80}
                className={`object-contain h-auto ${brand.scale}
                  grayscale opacity-60
                  group-hover:grayscale-0 group-hover:opacity-100
                  transition-all duration-300`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}