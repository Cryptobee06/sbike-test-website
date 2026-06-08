'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import Link from 'next/link';

// Unified blog posts data - exactly 3 posts for both languages
const blogPosts = [
  {
    id: 1,
    slug: 'best-treadmill-workouts-2025',
    title: {
      en: 'Exercise Bike Reviews: Tested Indoor Cycling Advanced Bikes for Home Fitness Enthusiasts',
      de: 'Heimtrainer-Testberichte: Getestete Advanced Indoor-Cycling-Bikes für Home-Fitness-Enthusiasten'
    },
    excerpt: {
      en: 'Indoor cycling has exploded in popularity over the last few years, and with good reason. Whether youre chasing serious performance gains, recovering from an injury, or simply trying to stay active without braving the elements, a quality exercise bike delivers an efficient, low-impact workout right in your home. But with dozens of models on the market, ranging from budget spinners to premium smart bikes, choosing the right one can feel overwhelming.We tested five of the most talked-about advanced indoor cycling bikes available today, evaluating them across ride feel, build quality, technology integration, display clarity, resistance accuracy, and overall value. Heres what we found.',
      de: 'Indoor Cycling hat in den letzten Jahren enorm an Popularität gewonnen – und das aus gutem Grund. Egal, ob Sie gezielt Ihre Leistung steigern, sich von einer Verletzung erholen oder einfach aktiv bleiben möchten, ohne Wind und Wetter ausgesetzt zu sein: Ein hochwertiger Heimtrainer ermöglicht ein effizientes, gelenkschonendes Workout direkt zu Hause. Doch bei der Vielzahl an Modellen – von günstigen Spinning-Bikes bis hin zu Premium-Smartbikes – kann die Wahl schnell überwältigend wirken.Wir haben fünf der derzeit meistdiskutierten Advanced Indoor-Cycling-Bikes ausführlich getestet und hinsichtlich Fahrgefühl, Verarbeitungsqualität, Technologieintegration, Displayqualität, Widerstandsgenauigkeit und Gesamtwert bewertet. Hier sind unsere Ergebnisse.'
    },
    date: {
      en: 'Jan 15, 2025',
      de: '15. Jan 2025'
    },
    image: '/blog/Blog image 1.jpg'
  },
  {
    id: 2,
    slug: 'treadmill-maintenance-guide',
    title: {
      en: 'What Is the Best Exercise Bike for Weight Loss? Expert Guide',
      de: 'Was ist das beste Heimtrainer-Fahrrad zum Abnehmen? Expertenratgeber'
    },
    excerpt: {
      en: 'Finding the best exercise bike for weight loss is not simply about choosing the most expensive model or the bike with the largest digital screen. Effective fat-loss training depends on workout consistency, resistance quality, riding comfort, and the ability to maintain long-term cardiovascular activity. In professional fitness environments, experts evaluate indoor bikes through structured Exercise bike testing and review processes that examine performance, durability, ergonomics, and calorie-burning potential.',
      de: 'Das beste Heimtrainer-Fahrrad zum Abnehmen zu finden bedeutet nicht einfach, das teuerste Modell oder das Bike mit dem größten digitalen Bildschirm auszuwählen. Effektives Fettverbrennungstraining hängt von der Trainingskonstanz, der Qualität des Widerstandssystems, dem Fahrkomfort und der Fähigkeit ab, langfristig ein regelmäßiges Herz-Kreislauf-Training aufrechtzuerhalten. In professionellen Fitnessumgebungen bewerten Experten Indoor-Bikes durch strukturierte Test- und Bewertungsverfahren, bei denen Leistung, Haltbarkeit, Ergonomie und Kalorienverbrauch analysiert werden.'
    },
    date: {
      en: 'Jan 10, 2025',
      de: '10. Jan 2025'
    },
    image: '/blog/Blog image 2.jpg'
  },
  {
    id: 3,
    slug: 'treadmill-motor-guide',
    title: {
      en: 'Which Exercise Bike Is Best for Home Use? Reviews & Comparisons',
      de: 'Welches Heimtrainer-Fahrrad eignet sich am besten für zu Hause? Tests & Vergleiche'
    },
    excerpt: {
      en: 'Indoor cycling has become one of the most effective ways to stay fit at home. Whether your goal is weight loss, cardio endurance, rehabilitation, or daily fitness maintenance, choosing the right exercise bike can make a major difference in your training experience. But with upright bikes, spin bikes, recumbent models, and smart fitness bikes all competing for attention, many buyers ask the same question: Which exercise bike is best for home use?',
      de: 'Indoor-Cycling gehört heute zu den effektivsten Möglichkeiten, um zu Hause fit zu bleiben. Ganz gleich, ob Ihr Ziel Gewichtsverlust, bessere Ausdauer, Rehabilitation oder tägliche Fitness ist – die Wahl des richtigen Heimtrainers kann Ihr Trainingserlebnis erheblich verbessern. Doch da Upright Bikes, Spinning Bikes, Liegeergometer und smarte Fitness-Bikes miteinander konkurrieren, stellen sich viele Käufer dieselbe Frage: Welches Heimtrainer-Fahrrad ist am besten für den Heimgebrauch geeignet?'
    },
    date: {
      en: 'Jan 5, 2025',
      de: '5. Jan 2025'
    },
    image: '/blog/Blog image 3.jpg'
  }
];

export default function BlogPage() {
  const locale = useLocale();
  
  // Get base path for links
  const getBasePath = () => {
    return locale === 'de' ? '/de' : '';
  };

  const pageTitle = {
    en: 'Exercise Bike Blog',
    de: 'Heimtrainer-Blog'
  };

  const pageSubtitle = {
    en: 'Explore expert exercise bike workouts, indoor cycling tips, cardio training guides, and recovery advice to support your home fitness goals.',
    de: 'Entdecken Sie Experten-Workouts für Heimtrainer, Indoor-Cycling-Tipps, Cardio-Trainingsleitfäden und Regenerationsempfehlungen, die Sie bei Ihren Fitnesszielen zu Hause unterstützen.'
  };

  const readMore = {
    en: 'Read More →',
    de: 'Weiterlesen →'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary-50 py-16 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* <div className="inline-flex items-center gap-2 bg-white text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary-200 mb-5">
            Blog
          </div> */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {pageTitle[locale]}
          </h1>
          <div className="divider-emerald mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            {pageSubtitle[locale]}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <Link
                  href={`${getBasePath()}/blog/${post.slug}`}
                  className="block overflow-hidden"
                >
                  <div className="aspect-[8/9]">
                    <img
                      src={post.image}
                      alt={post.title[locale]}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {post.title[locale]}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                    {post.excerpt[locale]}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">
                      {post.date[locale]}
                    </span>
                    <Link
                      href={`${getBasePath()}/blog/${post.slug}`}
                      className="text-green-600 font-semibold text-xs sm:text-sm hover:text-primary-700 transition-colors"
                    >
                      {readMore[locale]}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
