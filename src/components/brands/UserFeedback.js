'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { useState } from 'react';

// Sample user feedback data
const generateUserFeedback = (brandName, locale) => {
  const feedbackData = {
    en: [
      {
        id: 1,
        name: 'Michael Thompson',
        avatar: 'MT',
        rating: 5,
        comment: `Just received my ${brandName} and I'm absolutely thrilled! The build quality exceeded my expectations and setup was straightforward. The motor runs incredibly smooth and quiet.`,
        date: '2025-01-10',
        replies: [
          {
            id: 11,
            name: 'Sarah K.',
            avatar: 'SK',
            comment: 'Completely agree! Mine has been running perfectly for 6 months now.',
            date: '2025-01-12'
          }
        ]
      },
      {
        id: 2,
        name: 'Jennifer Martinez',
        avatar: 'JM',
        rating: 4,
        comment: 'Really solid Walkingpad overall. The cushioning system is fantastic for my knees. Only minor complaint is the assembly instructions could be clearer.',
        date: '2025-01-08',
        replies: []
      },
      {
        id: 3,
        name: 'David Chen',
        avatar: 'DC',
        rating: 5,
        comment: 'Outstanding performance! Been using it daily for 3 months. The incline feature works perfectly and the belt tracking has remained stable.',
        date: '2025-01-05',
        replies: [
          {
            id: 31,
            name: 'Lisa R.',
            avatar: 'LR',
            comment: 'How\'s the noise level? I live in an apartment.',
            date: '2025-01-06'
          },
          {
            id: 32,
            name: 'David Chen',
            avatar: 'DC',
            comment: 'Very quiet! My downstairs neighbor hasn\'t complained once.',
            date: '2025-01-07'
          }
        ]
      }
    ],
    de: [
      {
        id: 1,
        name: 'Michael Thompson',
        avatar: 'MT',
        rating: 5,
        comment: `Habe gerade mein ${brandName} erhalten und bin absolut begeistert! Die Bauqualität übertraf meine Erwartungen und der Aufbau war unkompliziert. Der Motor läuft unglaublich ruhig und leise.`,
        date: '2025-01-10',
        replies: [
          {
            id: 11,
            name: 'Sarah K.',
            avatar: 'SK',
            comment: 'Stimme vollkommen zu! Meins läuft seit 6 Monaten perfekt.',
            date: '2025-01-12'
          }
        ]
      },
      {
        id: 2,
        name: 'Jennifer Martinez',
        avatar: 'JM',
        rating: 4,
        comment: 'Insgesamt sehr solides Walkingpad. Das Dämpfungssystem ist fantastisch für meine Knie. Einzige kleine Beschwerde: Die Aufbauanleitung könnte klarer sein.',
        date: '2025-01-08',
        replies: []
      },
      {
        id: 3,
        name: 'David Chen',
        avatar: 'DC',
        rating: 5,
        comment: 'Hervorragende Leistung! Benutze es seit 3 Monaten täglich. Die Steigungsfunktion funktioniert perfekt und die Bandführung ist stabil geblieben.',
        date: '2025-01-05',
        replies: [
          {
            id: 31,
            name: 'Lisa R.',
            avatar: 'LR',
            comment: 'Wie ist der Geräuschpegel? Ich wohne in einer Wohnung.',
            date: '2025-01-06'
          },
          {
            id: 32,
            name: 'David Chen',
            avatar: 'DC',
            comment: 'Sehr leise! Mein Nachbar unten hat sich noch nie beschwert.',
            date: '2025-01-07'
          }
        ]
      }
    ]
  };
  
  return feedbackData[locale] || feedbackData.en;
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

const formatDate = (dateString, locale) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};

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
                        {formatDate(feedback.date, locale)}
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
                {feedback.replies.length > 0 && (
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
                                {formatDate(reply.date, locale)}
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
        
        {/* Add Comment Section */}
        {/* <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {locale === 'en' ? 'Share Your Experience' : 'Teilen Sie Ihre Erfahrung'}
            </h3>
            
            <p className="text-gray-600 text-sm">
              {locale === 'en' 
                ? 'Have you used this treadmill? Share your thoughts to help other buyers make informed decisions.'
                : 'Haben Sie dieses Laufband benutzt? Teilen Sie Ihre Gedanken, um anderen Käufern bei informierten Entscheidungen zu helfen.'
              }
            </p>
            
            <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              {locale === 'en' ? 'Write a Review' : 'Eine Bewertung schreiben'}
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}