import BlogPage from '@/components/blog/BlogPage';

export async function generateMetadata() {
  return {
    title: 'Fitness & Exercise Bikes-Blog - Expert Tips & Training Advice',
    description:
      'Expert insights, training tips, and the latest news in fitness technology and treadmill innovation. Stay updated with professional advice.',
    keywords:
      'fitness blog, treadmill training, workout tips, fitness technology, running advice',
      icons: {
        icon: '/logo/Exercise Bikes Test Fav 1.png'
          },
  };
}

export default function Page() {
  return <BlogPage />;
}
