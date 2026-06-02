

export const dynamic = 'force-static';
import HeroSection from '@/components/homepage/HeroSection';
import ExpertOverview from '@/components/homepage/ExpertOverview';
import PopularBrands from '@/components/homepage/PopularBrands';
import TestingProcess from '@/components/homepage/TestingProcess';
import ExpertOpinion from '@/components/homepage/ExpertOpinion';
import BestTreadmills from '@/components/homepage/BestTreadmills';
import CustomerReviews from '@/components/homepage/CustomerReviews';

export async function generateMetadata() {
  return {
    title: 'Heimtrainer Bewertungen - Experten Tests & Bewertungen',
    description: 'Unabhängige Heimtrainer-Bewertungen von zertifizierten Fitness-Profis. Umfassende Tests für Leistung, Haltbarkeit und Wert. Finden Sie das beste Heimtrainer für Ihre Bedürfnisse.',
    keywords: 'Heimtrainer Tests, Heimtrainer Bewertungen, beste Heimtrainer 2025, Fitnessgeräte Tests, Heimtrainer Kaufratgeber',
    openGraph: {
      title: 'Heimtrainer Tests - Experten Heimtrainer Tests & Bewertungen 2025',
      description: 'Unabhängige Heimtrainer-Bewertungen von zertifizierten Fitness-Profis',
      type: 'website',
    },
    icons: {
      icon: '/logo/Exercise Bikes Test Fav 1.png'
        },
  };
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
       <HeroSection />
       {/* <ExpertOverview /> */}
       <TestingProcess />
       <ExpertOpinion />
       <BestTreadmills />
       <CustomerReviews />
      <PopularBrands />
    </div>
  );
}