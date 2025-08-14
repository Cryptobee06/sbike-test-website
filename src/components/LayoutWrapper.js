'use client';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useMemo, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine locale from pathname for meta and lang attributes
  const currentLocale = useMemo(() => {
    if (pathname?.startsWith('/de')) {
      return 'de';
    }
    return 'en';
  }, [pathname]);

  const metadata = useMemo(() => {
    if (currentLocale === 'de') {
      return {
        title: 'WalkingpadTests - Experten Walkingpad Tests & Bewertungen',
        description: 'Unabhängige Bewertungen von zertifizierten Fitnessexperten, die jedes Gerät auf Leistung, Haltbarkeit und Wertigkeit prüfen.',
      };
    }
    return {
      title: 'WalkingpadReviews - Expert Walkingpad Testing & Reviews',
      description: 'Independent Walkingpad reviews from certified fitness professionals. Comprehensive testing for performance, durability, and value.',
    };
  }, [currentLocale]);

  // On server-side or before mount, use default English to prevent hydration mismatch
  const safeLocale = mounted ? currentLocale : 'en';
  const safeMetadata = mounted ? metadata : {
    title: 'WalkingpadReviews - Expert Walkingpad Testing & Reviews',
    description: 'Independent Walkingpad reviews from certified fitness professionals. Comprehensive testing for performance, durability, and value.',
  };

  return (
    <html lang={safeLocale}>
      <head>
        <title>{safeMetadata.title}</title>
        <meta name="description" content={safeMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
