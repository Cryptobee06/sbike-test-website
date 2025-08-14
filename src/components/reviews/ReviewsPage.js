'use client';
import { useLocale } from '@/contexts/LanguageContext';
import Link from 'next/link';

// Unified treadmill data for both languages
const treadmillsData = [
  {
    id: 'sportstech',
    brand: 'Sportstech',
    model: 'sWalk',
    slug: 'sportstech',
    rating: 4.9,
    badge: {
      en: 'Test Winner',
      de: 'Testsieger'
    },
    badgeColor: 'bg-green-500',
    image: '/images/treadmills/sportstech-treadmill.jpg',
    summary: {
      en: 'Excellent value with advanced shock absorption and smart connectivity features.',
      de: 'Hervorragender Wert mit fortschrittlicher Stoßdämpfung und intelligenten Konnektivitätsfeatures.'
    }
  },
  {
    id: 'Citysports',
    brand: 'Citysports',
    model: 'CS-WP6',
    slug: 'Citysports',
    rating: 4.6,
    badge: {
      en: '',
      de: ''
    },
    badgeColor: 'bg-blue-500',
    image: '/CITYSPORTS/city04.png',
    summary: {
      en: 'Premium Walkingpad with interactive training and commercial-grade construction.',
      de: 'Premium-Walkingpad mit interaktivem Training und kommerzieller Konstruktion.'
    }
  },
  {
    id: 'kiddoza',
    brand: 'kiddoza',
    model: 'Under desk walking pad',
    slug: 'kiddoza',
    rating: 4.2,
    badge: {
      en: '',
      de: ''
    },
    badgeColor: 'bg-gray-500',
    image: '/Kiddoza/kiddoza04.png',
    summary: {
      en: 'Feature-rich Walkingpad with iFit integration and powerful motor performance.',
      de: 'Funktionsreiches Walkingpad mit iFit-Integration und leistungsstarker Motorleistung.'
    }
  },
  {
    id: 'Superun',
    brand: 'Superun',
    model: 'B,A06-С',
    slug: 'Superun',
    rating: 4.5,
    badge: {
      en: '',
      de: ''
    },
    badgeColor: 'bg-green-500',
    image: '/Superun Raceable Walking Pad/superun04.png',
    summary: {
      en: 'Reliable mid-range Walkingpad with excellent build quality and warranty.',
      de: 'Zuverlässiges Mittelklasse-Walkingpad mit ausgezeichneter Bauqualität und Garantie.'
    }
  },
  {
    id: 'Urevo',
    brand: 'Urevo',
    model: 'SpaceWalk E1L',
    slug: 'Urevo',
    rating: 4,
    badge: {
      en: '',
      de: ''
    },
    badgeColor: 'bg-purple-500',
    image: '/UREVO/ureo04.png',
    summary: {
      en: 'Commercial-grade home Walkingpad with superior build quality and whisper-quiet operation.',
      de: 'HeimWalkingpad in kommerzieller Qualität mit überlegener Bauqualität und flüsterleisem Betrieb.'
    }
  }
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star-reviews">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="#e5e7eb"/>
            </linearGradient>
          </defs>
          <path fill="url(#half-star-reviews)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-2">{rating}</span>
    </div>
  );
};

export default function ReviewsPage() {
  const locale = useLocale();

  // Get base path for links
  const getBasePath = () => {
    return locale === 'de' ? '/de' : '';
  };

  const pageTexts = {
    title: {
      en: 'Walkingpad Reviews 2025',
      de: 'Walkingpad Tests 2025'
    },
    subtitle: {
      en: 'Expert testing and comprehensive reviews of the best Walkingpads available today.',
      de: 'Experten-Tests und umfassende Bewertungen der besten heute verfügbaren Laufbänder.'
    },
    readReview: {
      en: 'Read Review',
      de: 'Test lesen'
    },
    needHelpTitle: {
      en: 'Need Help Choosing?',
      de: 'Brauchen Sie Hilfe bei der Auswahl?'
    },
    needHelpText: {
      en: 'Check out our comprehensive buying guide for expert advice on selecting the perfect Walkingpad.',
      de: 'Schauen Sie sich unseren umfassenden Kaufratgeber für Expertenberatung bei der Auswahl des perfekten Walkingpads an.'
    },
    viewGuide: {
      en: 'View Buying Guide',
      de: 'Kaufratgeber ansehen'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 treadmill-bacgroundimage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-xl-5">
          <div className="text-center margin-banner mt-xl-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {pageTexts.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {pageTexts.subtitle[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {treadmillsData.map((treadmill) => (
              <div key={treadmill.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-2/5 relative">
                  <div className="w-full h-68 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-lg">
                    <img
                      src={treadmill.image}
                      alt={`${treadmill.brand} ${treadmill.model}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                    {/* Badge */}
                    {treadmill.badge[locale] && (
                      <div className={`absolute top-4 left-4 ${treadmill.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                        {treadmill.badge[locale]}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6">
                    <div className="h-full flex flex-col">
                      {/* Title and Rating */}
                      <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                          {treadmill.brand} {treadmill.model}
                        </h2>
                        <StarRating rating={treadmill.rating} />
                      </div>

                      {/* Summary */}
                      <p className="text-gray-600 text-sm mb-6 flex-grow">
                        {treadmill.summary[locale]}
                      </p>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                          href={`${getBasePath()}/brands/${treadmill.slug}`}
                          className="flex-1 bg-primary-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                        >
                          {pageTexts.readReview[locale]}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {pageTexts.needHelpTitle[locale]}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {pageTexts.needHelpText[locale]}
          </p>
          <Link 
            href={`${getBasePath()}/guide`}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            {pageTexts.viewGuide[locale]}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
