import AboutHero from "@/components/about/AboutHero";
import HowWeReview from "@/components/about/HowWeReview";
import OurTeam from "@/components/about/OurTeam";
import ReviewStandards from "@/components/about/ReviewStandards";
import WhoWeAre from "@/components/about/WhoWeAre";



export async function generateMetadata() {
  return {
    title: 'About Us - Expert Exercise Bike Team & Review Standards',
    description: 'Learn about our expert team, rigorous testing methodology, and transparent review standards. Professional Exercise Bike evaluations you can trust.',
    keywords: 'about Exercise Bike reviews, expert testing team, review methodology, fitness equipment standards',
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