
import ReviewsPage from '@/components/reviews/ReviewsPage';
// import WalkingPadComparison from '../comparison/page';

export async function generateMetadata() {
  return {
    title: 'Exercise Bike Reviews 2025 - Expert Testing & Ratings',
    description: 'Comprehensive Exercise Bike reviews and ratings from fitness experts. Compare top brands and models to find the perfect Exercise Bike for your home gym.',
    keywords: 'Exercise Bike reviews 2025, best Exercise Bikes, Exercise Bike comparison, fitness equipment reviews',
    icons: {
      icon: '/logo/Exercise Bikes Test Fav 1.png'
        },
  };
}

export default function Page() {
  return(
    <>
     <ReviewsPage />
    </>
  )
}
