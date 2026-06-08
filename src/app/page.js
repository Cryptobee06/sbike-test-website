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

    title: 'Exercise Bike Reviews - Expert Testing & Ratings',
    description: 'Independent Exercise Bike reviews from certified fitness professionals. Comprehensive testing for performance, durability, and value. Find the best Exercise Bike for your needs.',
    keywords: 'Exercise Bike reviews, Exercise Bike testing, best Exercise Bikes 2025, fitness equipment reviews, Exercise Bike buying guide',
    openGraph: {
      title: 'Exercise Bike Reviews - Expert Exercise Bike Testing & Ratings 2025',
      description: 'Independent Exercise Bike reviews from certified fitness professionals',
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