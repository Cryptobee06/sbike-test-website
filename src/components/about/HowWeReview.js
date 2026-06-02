// 'use client';
// import { useTranslations } from '@/contexts/LanguageContext';

// export default function HowWeReview() {
//   const t = useTranslations('about.howWeReview');

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
//             {t('title')}
//           </h2>
          
//           <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
//             <div className="flex justify-center mb-6">
//               <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//                 </svg>
//               </div>
//             </div>
            
//             <p className="text-lg text-gray-700 leading-relaxed">
//               {t('description')}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function HowWeReview() {
  const t = useTranslations('about.howWeReview');

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background SVG Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute left-[-100px] top-[-50px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="rgba(255, 81, 0, 0.9)" />
        </svg>
        <svg
          className="absolute right-[-80px] bottom-[-80px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="rgba(12, 243, 24, 0.03)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg sm:text-xl lg:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          {t('title')}
        </h2>

        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          {/* Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary-600 shadow-md flex items-center justify-center">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-base lg:text-lg review-description max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
}
