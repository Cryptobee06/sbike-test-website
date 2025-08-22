'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { useState } from 'react';

// ✅ Brand-specific feedback data (all in one place)
const feedbackData = {
  sportstech: {
    en: [
      {
        id: 1,
        name: 'Lena M',
        avatar: 'LM',
        rating: 5,
        comment: 'Just received mine—and it is top-tier! Build quality is excellent, and the motor runs smooth and silent.!',
        date: '5 min ago',

      },
      {
        id: 2,
        name: 'Markus R',
        avatar: 'MR',
        rating: 5,
        comment: 'Comfort levels are outstanding—very gentle on my knees. The setup guide could be clearer, though.',
        date: 'a day ago',

      },
      {
        id: 3,
        name: 'Sabine K',
        avatar: 'SK',
        rating: 5,
        comment: 'Three months of daily use, and it performs flawlessly. The incline works great, and the belt remains smooth.',
        date: ' 3 days ago',

      },
      {
        id: 4,
        name: 'Jonas P',
        avatar: 'JP',
        rating: 5,
        comment: 'High-quality build and great value for money. I use it almost daily and feel fitter.',
        date: 'a week ago',

      },
      {
        id: 5,
        name: 'Claudia W',
        avatar: 'CM',
        rating: 5,
        comment: 'I was surprised by how stable the walking pad is. It feels secure even when I train on it for longer periods.',
        date: 'a month ago',

      }
    ],
    de: [
      {
        id: 1,
        name: 'Lena M',
        avatar: 'LM',
        rating: 5,
        comment: 'Das Walking Pad ist super leise und passt perfekt unter meinen Schreibtisch.Endlich kann ich mich auch im Home-Office mehr bewegen!',
        date: 'Vor 5 Minuten',

      },
      {
        id: 2,
        name: 'Markus R',
        avatar: 'MR',
        rating: 5,
        comment: 'Sehr platzsparend, einfach zusammenzuklappen und schnell verstaut. Genau das richtige Fitnessgerät für meine kleine Wohnung.',
        date: 'vor einem Tag',

      },
      {
        id: 3,
        name: 'Sabine K',
        avatar: 'SK',
        rating: 5,
        comment: 'Die App-Steuerung motiviert mich, meine Schritte im Blick zu behalten. Tolle Kombination aus Technik und Bewegung.',
        date: 'Vor 3 Tagen',

      },
      {
        id: 4,
        name: 'Jonas P',
        avatar: 'JP',
        rating: 5,
        comment: 'Hochwertige Verarbeitung und gutes Preis-Leistungs-Verhältnis. Ich nutze es fast täglich und fühle mich fitter.',
        date: 'vor einer Woche',

      },
      {
        id: 5,
        name: 'Claudia W',
        avatar: 'CM',
        rating: 5,
        comment: 'Ich war überrascht, wie stabil das Walking Pad ist. Es fühlt sich sicher an, auch wenn ich länger darauf trainiere.',
        date: 'vor einem Monat',

      }
    ]
  },
  citysports: {
    en: [
      {
        id: 6,
        name: 'Clara',
        avatar: 'C',
        rating: 4,
        comment: 'Set it up in under five minutes and started walking during my Zoom meetings. Totally discreet and boosts my step count!',
        date: '2 hours ago',

      },
      {
        id: 7,
        name: 'Charlie',
        avatar: 'C',
        rating: 4.1,
        comment: 'Even after months of daily use, it’s still whisper-quiet. A great productivity & fitness combo.',
        date: ' a day ago',

      },
      {
        id: 8,
        name: 'Americo',
        avatar: 'A',
        rating: 3,
        comment: 'I appreciate how compact it is—slides effortlessly under my couch when not in use.',
        date: ' 5 days ago',

      },
      {
        id: 9,
        name: 'Django',
        avatar: 'D',
        rating: 4,
        comment: 'There are no training programs or heart rate monitoring – I miss the motivation from automated workouts.',
        date: ' a month ago',

      },
    ],
    de: [
      {
        id: 6,
        name: 'Clara',
        avatar: 'C',
        rating: 4,
        comment: 'Das Citysports WP6 ist superleise – ideal fürs Home-Office. Ich kann während meiner Meetings trainieren, ohne den Besprechungspartner zu stören.',
        date: 'Vor 2 Stunden',

      },
      {
        id: 7,
        name: 'Charlie',
        avatar: 'C',
        rating: 3,
        comment: 'Der Motor reicht nur bis 6 km/h. Für ernsthafte Läufer ist das Gerät zu langsam.',
        date: 'vor einem Tag',

      },
      {
        id: 8,
        name: 'Americo',
        avatar: 'A',
        rating: 3,
        comment: 'Die Lauffläche ist zu klein, besonders für größere Nutzer nicht bequem. Ich stoße regelmäßig mit den Füßen an den Rand.',
        date: 'Vor 5 Tagen',

      },
      {
        id: 9,
        name: 'Django',
        avatar: 'D',
        rating: 4,
        comment: ' Keine Trainingsprogramme oder Pulsmessung vorhanden – ich vermisse die Motivation durch automatisierte Workouts.',
        date: 'vor einem Monat',

      },
    ]
  },
  kiddoza: {
    en: [
      {
        id: 10,
        name: 'Emma K',
        avatar: 'EK',
        rating: 3,
        comment: 'Setup was instant—no tools, no hassle, and I started walking during my morning calls right away.',
        date: '3 days ago',

      },
      {
        id: 11,
        name: 'David R',
        avatar: 'DR',
        rating: 4,
        comment: 'The pad feels sturdy and quiet, even with incline turned on. Perfect for small living spaces.',
        date: ' a week ago',

      },
      {
        id: 12,
        name: 'Jonas M',
        avatar: 'JM',
        rating: 2,
        comment: 'The shock absorption is next-level. My knees thank me after each walk session.',
        date: ' 2 months ago',

      }
    ],
    de: [
      {
        id: 10,
        name: 'Emma K',
        avatar: 'EK',
        rating: 3,
        comment: 'Superun ist klasse – Steigung läuft zuverlässig und der Laufgurt bleibt stabil.',
        date: ' Vor 3 Tagen',

      },
      {
        id: 11,
        name: 'David R',
        avatar: 'DR',
        rating: 4,
        comment: 'Tolles Dämpfungssystem – perfekt für meine Gelenke."Anleitung könnte besser sein.',
        date: 'vor 10 Tagen',

      },
      {
        id: 12,
        name: 'Jonas M',
        avatar: 'JM',
        rating: 2,
        comment: 'Habe es 3 Monate täglich genutzt – Steigung läuft zuverlässig, der Laufgurt ist stabil.',
        date: 'vor einer Woche',

      }
    ]
  },
  superun: {
    en: [
      {
        id: 13,
        name: 'Lukas',
        avatar: 'L',
        rating: 3,
        comment: 'Great for working from home, quiet, compact, and remote-ready. I can walk during Zoom calls without disturbing my family.',
        date: ' 1 day ago',

      },
      {
        id: 14,
        name: 'Maria',
        avatar: 'M',
        rating: 2,
        comment: 'I had mine for over a year still running smoothly. Lightweight, portable, and quiet. Excellent value for staying active.',
        date: ' 6 days ago',

      },
      {
        id: 15,
        name: 'Paul',
        avatar: 'P',
        rating: 4,
        comment: 'The motor stopped working after a year. Tried basic fixes without success. It is frustrating, especially with limited customer service follow-up. ',
        date: ' a week ago',

      },
    ],
    de: [
      {
        id: 13,
        name: 'Lukas',
        avatar: 'L',
        rating: 3,
        comment: 'Qualität und Aufbau sind top.unglaublich ruhig – total begeistert!',
        date: 'vor 1 Tag',

      },
      {
        id: 14,
        name: 'Maria',
        avatar: 'M',
        rating: 2,
        comment: 'Tolles Dämpfungssystem, super für meine Gelenke."Anleitung könnte übersichtlicher sein.',
        date: 'Vor 6 Tagen',

      },
      {
        id: 15,
        name: 'Paul',
        avatar: 'p',
        rating: 4,
        comment: 'Seit drei Monaten täglich genutzt – Steigung arbeitet zuverlässig, Laufband-toleranz top.',
        date: 'vor einer Woche',

      },
    ]
  },
  urevo: {
    en: [
      {
        id: 16,
        name: 'Tim',
        avatar: 'T',
        rating: 4,
        comment: 'Compact and quiet—ideal for dense workdays — A hands-on review highlighting its home-office utility',
        date: '3 hours ago',

      },
      {
        id: 17,
        name: 'Felix',
        avatar: 'F',
        rating: 3,
        comment: 'Rock-solid frame, silent motor. Perfect combination for multitasking — Tech reviewers praised its reliable build and quiet operation.',
        date: ' 2 days ago',

      },
      {
        id: 18,
        name: 'Emilia',
        avatar: 'E',
        rating: 3,
        comment: 'Incline adds real intensity. The CyberPad is a game-changer — Media reviews lauded its incline capabilities for busy users.',
        date: '5 days ago',

      }
    ],
    de: [
      {
        id: 16,
        name: 'Tim',
        avatar: 'T',
        rating: 4,
        comment: 'Der Motor läuft reibungslos und extrem leise – die Gerätequalität übertraf meine Erwartungen.',
        date: 'gerade eben',

      },
      {
        id: 17,
        name: 'Felix',
        avatar: 'F',
        rating: 3,
        comment: 'Sehr solide Dämpfungsleistung – meine Knie danken es mir täglich. Aufbauanleitung könnte klarer sein.',
        date: 'vor 2 Tagen',

      },
      {
        id: 18,
        name: 'Emilia',
        avatar: 'E',
        rating: 3,
        comment: 'Tägliche Nutzung seit 3 Monaten – die automatische Steigung funktioniert perfekt, und der Laufgurt läuft extrem stabil.',
        date: 'Vor 5 Tagen',

      }
    ]
  },
};
// ✅ Helper to pick feedback dynamically
const generateUserFeedback = (brandName, locale) => {
  const key = brandName.toLowerCase();
  // console.log(brandName, locale, key);
  if (feedbackData[key] && feedbackData[key][locale]) {
    return feedbackData[key][locale];
  }
  return feedbackData[key]?.en || [];
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
};

// const formatDate = (dateString, locale) => {
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat(locale, {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   }).format(date);
// };

export default function UserFeedback({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();
  const [expandedComments, setExpandedComments] = useState(new Set());
  
  const userFeedback = generateUserFeedback(brand.name, locale);
  
  const toggleExpanded = (commentId) => {
    const newExpanded = new Set(expandedComments);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedComments(newExpanded);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {t('userFeedback')}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {userFeedback.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                {/* User Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">
                      {feedback.avatar}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {feedback.name}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {feedback.date}
                      </span>
                    </div>
                    
                    <StarRating rating={feedback.rating} />
                  </div>
                </div>
                
                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feedback.comment}
                </p>
                
                {/* Reply Button */}
                {expandedComments.has(feedback.id) && feedback.replies.length > 0 && (
                  <button
                    onClick={() => toggleExpanded(feedback.id)}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                  >
                    <svg className={`w-4 h-4 mr-1 transition-transform ${expandedComments.has(feedback.id) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {expandedComments.has(feedback.id) 
                      ? (locale === 'en' ? 'Hide replies' : 'Antworten ausblenden')
                      : (locale === 'en' ? `Show ${feedback.replies.length} replies` : `${feedback.replies.length} Antworten anzeigen`)
                    }
                  </button>
                )}
                
                {/* Replies */}
                {expandedComments.has(feedback.id) && feedback.replies.length > 0 && (
                  <div className="mt-4 pl-8 border-l-2 border-gray-200 space-y-4">
                    {feedback.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-semibold">
                              {reply.avatar}
                            </span>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium text-gray-900 text-sm">
                                {reply.name}
                              </h5>
                              <span className="text-xs text-gray-500">
                                {reply.date}
                              </span>
                            </div>
                            
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {reply.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
