import ReviewsPage from '@/components/reviews/ReviewsPage';

export async function generateMetadata() {
  return {
    title: 'Exercise Bike 2025 - Experten Tests & Bewertungen',
    description: 'Umfassende Exercise Bike-Tests und Bewertungen von Fitness-Experten. Vergleichen Sie Top-Marken und Modelle, um das perfekte Exercise Bike für Ihr Heimstudio zu finden.',
    keywords: 'Exercise Bike Tests 2025, beste Laufbänder, Exercise Bike Vergleich, Fitnessgeräte Tests',
    icons: {
      icon: '/logo/Exercise Bikes Test Fav 1.png'
        },
  };
}

export default function Page() {
  return <ReviewsPage />;
}
