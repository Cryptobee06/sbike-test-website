import AboutHero from '@/components/about/AboutHero';
import HowWeReview from '@/components/about/HowWeReview';
import ReviewStandards from '@/components/about/ReviewStandards';
import WhoWeAre from '@/components/about/WhoWeAre';
import OurTeam from '@/components/about/OurTeam';

export async function generateMetadata() {
  return {
    title: 'Über uns - Experten Exercise Bike Team & Bewertungsstandards',
    description: 'Erfahren Sie mehr über unser Expertenteam, rigorose Testmethodik und transparente Bewertungsstandards. Professionelle Laufband-Bewertungen, denen Sie vertrauen können.',
    keywords: 'über Exercise Bike-Bewertungen, Experten-Test Team, Bewertungsmethodik, Fitnessgeräte Standards',
    icons: {
      icon: '/logo/Exercise Bikes Test Fav 1.png'
        },
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <HowWeReview />
      <OurTeam />
      <ReviewStandards />
      <WhoWeAre />
    </div>
  );
}
