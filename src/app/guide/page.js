import GuideHero from '@/components/guide/GuideHero';
import KeyFeatures from '@/components/guide/KeyFeatures';
import UseCase from '@/components/guide/UseCase';
import ComparisonTips from '@/components/guide/ComparisonTips';
import FAQ from '@/components/guide/FAQ';


export async function generateMetadata() {
  return {
    title: 'Exercise Bike Buying Guide 2025 - Expert Tips & Advice',
    description: 'Complete exercise bike buying guide with expert tips on motor power, belt size, incline settings, and more. Make the right choice for your fitness goals.',
    keywords: 'exercise bike buying guide, exercise bike features, motor power, belt size, incline settings, home exercise bike advice',
    icons: {
      icon: '/logo/Exercise Bikes Test Fav 1.png'
        },
  };
}


export default function GuidePage() {
  return (
    <div className="min-h-screen">
      <GuideHero />
      <KeyFeatures />
      <UseCase />
      <ComparisonTips />
      <FAQ />
    </div>
  );
}