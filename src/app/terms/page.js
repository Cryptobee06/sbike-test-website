// 'use client';
// import { useTranslations } from '@/contexts/LanguageContext';

// export default function PrivacySection() {
//   const t = useTranslations('about');

//   return (
//     <>

//       <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">

//         <div className="absolute inset-0 pointer-events-none">
//           <svg
//             className="w-full h-full"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
//             <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
//           </svg>
//         </div>


//         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow">
//             Terms and condition
//           </h1>

//         </div>
//       </section>


//       <section className="bg-slate-50 py-20 px-4 sm:px-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 border border-gray-100">
//           <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
//             By accessing and using the WalkingpadReviews website (referred to as "the Site", "we", "our", or "us"), you agree to comply with and be bound by the following Terms and Conditions, which govern your use of this platform and any content, features, services, or materials provided herein. The Site is intended for personal, non-commercial use to provide informational resources, product reviews, and expert insights related to treadmills, fitness equipment, and related topics. All content published on the Site—including text, graphics, logos, images, videos, product comparisons, and editorial reviews—is the intellectual property of WalkingpadReviews or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws. You may not copy, reproduce, distribute, republish, modify, or exploit any content from the Site without our prior written consent. By using our website, you acknowledge that any reliance on the information presented is at your own risk. Although we strive to provide accurate, up-to-date, and unbiased content, we make no guarantees regarding the completeness, reliability, suitability, or availability of any products or services mentioned, and we disclaim all warranties, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose. Our site may include affiliate links or sponsored content, which means we may earn a commission if you click on those links and make a purchase. These relationships do not influence our editorial content or objectivity. You agree that we are not responsible for the accuracy, legality, or content of external sites linked within our reviews or blog posts. It is your responsibility to read and comply with the terms of any third-party websites you interact with. WalkingpadReviews does not offer medical advice, diagnosis, or treatment and the information provided should not be interpreted as a substitute for professional fitness, health, or medical guidance. You must consult with a physician before beginning any exercise program or using any equipment discussed on our Site. If you choose to create an account, submit comments, reviews, or engage with any interactive features, you are solely responsible for the content you post and agree not to use the Site for unlawful, offensive, or harmful behavior. We reserve the right to remove any content, restrict access, or terminate accounts at our sole discretion without prior notice. You agree to indemnify and hold harmless WalkingpadReviews, its affiliates, team members, content creators, and service providers from any claims, damages, liabilities, losses, or expenses (including legal fees) arising from your use of the Site, violation of these Terms, or infringement of any third-party rights. We may update these Terms and Conditions at any time without prior notice, and continued use of the Site constitutes your acceptance of any revised terms. It is your responsibility to review this page periodically for any changes. If you do not agree with any part of these Terms, you should discontinue use of the Site immediately. These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our business is registered, without regard to its conflict of law provisions. Any disputes arising from or related to the use of this Site shall be subject to the exclusive jurisdiction of the courts located in our operating territory. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. For any questions or concerns regarding these Terms and Conditions, please contact us at legal@WalkingpadReviews.com.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }
'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function Termssection() {
  const t = useTranslations('about');

  const sections = [
    {
      id: 'Acceptance of Terms',
      title: 'Acceptance of Terms',
      paragraphs: [
        "Welcome to Exercise Bike Reviews. By accessing, browsing, or using our website available at www.example.com (the “Site”), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions (“Terms”). These Terms include any additional policies, guidelines, or operational rules that may be published on the Site from time to time. They apply to all services offered through the Site, including exercise bike reviews, indoor cycling comparisons, fitness equipment evaluations, informational articles, affiliate-based recommendations, user feedback sections, and any other fitness-related content we provide.",
        "If you do not agree with any part of these Terms, you must stop using the Site immediately. Continued access or use of the Site constitutes your acceptance of these Terms, including any future updates or modifications. We reserve the right to revise, amend, or update these Terms at any time without prior notice. It is your responsibility to review this page regularly to stay informed of any changes. Your continued use of the Site after updates are posted signifies your acceptance of those changes.",
        "We may also introduce new tools, services, or features, and such additions will be subject to these Terms unless otherwise stated. If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will be severed without affecting the validity of the remaining sections. These Terms apply equally to all users, visitors, contributors, and anyone accessing the Site. If you access the Site on behalf of an organization, you confirm that you have the authority to bind that organization to these Terms."
      ]
    },
    {
      id: 'Intellectual Property and Use of Content',
      title: 'Intellectual Property and Use of Content',
      paragraphs: [
        "All materials published on Exercise Bike Reviews including text, images, graphics, logos, product comparisons, design elements, digital downloads, software, audio content, and data compilations are owned by Exercise Bike Reviews or its authorized licensors and are protected under applicable copyright, trademark, and intellectual property laws.",
        "You are not permitted to copy, reproduce, distribute, publish, sell, license, or exploit any content from the Site without prior written authorization. You are granted a limited, non-exclusive, non-transferable license to access and use the Site strictly for personal and non-commercial purposes. The use of automated systems such as bots, scrapers, or crawlers to access or extract content is strictly prohibited without explicit permission.",
        "All trademarks, logos, service marks, and brand identifiers displayed on the Site belong to Exercise Bike Reviews or their respective owners. No rights or licenses are granted for their use without prior written consent. You may share links to publicly available pages for personal or social sharing purposes, provided the content remains unaltered and properly attributed.",
        "We respect intellectual property rights and expect users to do the same. If you believe any content infringes your rights, please contact us at legal@example.com with sufficient details so we can investigate and take appropriate action, which may include content removal or access restrictions."
      ]
    },
    {
      id: 'User-Generated Content and Community Standards',
      title: 'User-Generated Content and Community Standards',
      paragraphs: [
        "The Site may allow users to post content such as reviews, comments, testimonials, or feedback. By submitting content, you grant Exercise Bike Reviews a worldwide, perpetual, irrevocable, royalty-free, and non-exclusive license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any media format.",
        "You remain solely responsible for any content you submit. You confirm that you own or have the necessary rights to share such content and that it does not violate any laws or third-party rights. You also agree that your submissions will not include unlawful, defamatory, offensive, misleading, or infringing material.",
        "We reserve the right to review, edit, moderate, or remove any user-generated content at our discretion. Repeated violations may result in suspension or permanent restriction of access. Posting spam, unsolicited promotions, or irrelevant external links is strictly prohibited.",
        "Users are expected to maintain respectful communication and contribute constructively. We do not endorse user-generated content and are not responsible for its accuracy or reliability. Users are encouraged to report inappropriate content through official contact channels so that appropriate action can be taken."
      ]
    },
    {
      id: 'Disclaimer of Warranties and Limitation of Liability',
      title: 'Disclaimer of Warranties and Limitation of Liability',
      paragraphs: [
        "Exercise Bike Reviews is an informational platform providing editorial content, comparisons, and user-generated insights related to exercise bikes, indoor cycling equipment, spin bikes, upright bikes, recumbent bikes, and home fitness products. All content is provided on an “as-is” and “as-available” basis without any warranties, express or implied, including warranties of accuracy, completeness, reliability, merchantability, fitness for a specific purpose, or non-infringement.",
        "We do not guarantee that the information provided is error-free, complete, or up to date. Product specifications and details may change without notice, and we are not responsible for such changes. Users rely on the information at their own discretion and risk.",
        "Under no circumstances shall Exercise Bike Reviews be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of or reliance on the Site. This includes but is not limited to data loss, financial loss, or health-related outcomes. Users are strongly advised to consult qualified medical or fitness professionals before starting any exercise program or using fitness equipment mentioned on the Site.",
        "The Site may participate in affiliate programs, including Amazon Associates, which means we may earn commissions from qualifying purchases. We do not manufacture, sell, or control third-party products and are not responsible for product quality, delivery, or customer service provided by external vendors. Any interaction with third-party platforms is governed by their own terms and policies."
      ]
    },
    {
      id: ' Governing Law, Jurisdiction, and Termination',
      title: ' Governing Law, Jurisdiction, and Termination',
      paragraphs: [
        "Depending on your jurisdiction, you may be entitled to certain data protection rights under applicable laws such as GDPR or CCPA. These rights may include access to, correction of, or deletion of your personal data.",
        "To exercise these rights or for any privacy-related inquiries, you may contact us at privacy@example.com, which is associated with www.example.com."
      ]
    },
  ];

  return (
    <>
      {/* Hero Section */}
      {/* // <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden"> */}
        <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
          <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
        Terms and Conditions
        </h1>
      </div>
    </section>

      {/* Content Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <aside className="md:col-span-1 border p-6 rounded shadow-sm">
            <h2 className="text-xl text-black mb-4">Table of Contents:</h2>
            <ul className="space-y-2 text-blue-600 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline  text-md text-base/8">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-10">
            <div className="text-sm text-gray-600 italic">Effective July 30, 2025</div>
            <div>
              {/* <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Privacy Matters</h2>
              <p className="text-gray-700 text-base mb-2">
                WalkingpadReviews is committed to being transparent about the data we collect about you, how it is used, and with whom it is shared.
              </p>
              <p className="text-gray-700 text-base">
                This Privacy Policy applies when you use our Services. We offer users choices about the data we collect, use, and share as described in this policy, our Cookie Policy, and our Terms of Use.
              </p> */}
            </div>

            {sections.map((section, idx) => (
              <div key={idx} id={section.id}>
                <h2 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-700 text-base mb-4 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
