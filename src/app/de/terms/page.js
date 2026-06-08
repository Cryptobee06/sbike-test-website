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
      title: 'Akzeptanz der Bedingungen',
      paragraphs: [
        "Willkommen bei Exercise Bike Reviews. Durch den Zugriff auf, das Browsen auf oder die Nutzung unserer Website unter www.example.com (die „Website“) bestätigen Sie, dass Sie diese Allgemeinen Geschäftsbedingungen („Bedingungen“) gelesen, verstanden und rechtlich akzeptiert haben. Diese Bedingungen umfassen auch zusätzliche Richtlinien, Leitfäden oder betriebliche Regeln, die von Zeit zu Zeit auf der Website veröffentlicht werden können. Sie gelten für alle über die Website angebotenen Dienste, einschließlich Heimtrainer-Bewertungen, Vergleiche von Indoor-Cycling-Bikes, Bewertungen von Fitnessgeräten, Informationsartikel, affiliatebasierte Produktempfehlungen, Benutzerfeedback-Bereiche sowie alle weiteren fitnessbezogenen Inhalte, die wir bereitstellen.",
        "Wenn Sie mit irgendeinem Teil dieser Bedingungen nicht einverstanden sind, müssen Sie die Nutzung der Website unverzüglich einstellen. Die fortgesetzte Nutzung oder der Zugriff auf die Website gilt als Zustimmung zu diesen Bedingungen einschließlich zukünftiger Aktualisierungen oder Änderungen. Wir behalten uns das Recht vor, diese Bedingungen jederzeit ohne vorherige Ankündigung zu ändern, anzupassen oder zu aktualisieren. Es liegt in Ihrer Verantwortung, diese Seite regelmäßig zu überprüfen, um über Änderungen informiert zu bleiben. Ihre weitere Nutzung der Website nach Veröffentlichung von Änderungen gilt als Zustimmung zu diesen Änderungen.",
        "Wir können außerdem neue Tools, Dienstleistungen oder Funktionen einführen, und solche Ergänzungen unterliegen ebenfalls diesen Bedingungen, sofern nicht anders angegeben. Sollte eine Bestimmung dieser Bedingungen ungültig, rechtswidrig oder nicht durchsetzbar sein, bleibt die Gültigkeit der übrigen Bestimmungen davon unberührt. Diese Bedingungen gelten gleichermaßen für alle Nutzer, Besucher, Mitwirkenden sowie alle Personen, die auf die Website zugreifen. Wenn Sie die Website im Namen einer Organisation nutzen, bestätigen Sie, dass Sie befugt sind, diese Organisation an diese Bedingungen zu binden."
      ]
    },
    {
      id: 'Intellectual Property and Use of Content',
      title: 'Geistiges Eigentum und Nutzung von Inhalten',
      paragraphs: [
        "Alle auf Exercise Bike Reviews veröffentlichten Materialien, einschließlich Texte, Bilder, Grafiken, Logos, Produktvergleiche, Designelemente, digitale Downloads, Software, Audioinhalte und Datensammlungen, sind Eigentum von Exercise Bike Reviews oder dessen autorisierten Lizenzgebern und durch geltende Urheber-, Marken- und geistige Eigentumsrechte geschützt.",
        "Es ist Ihnen nicht gestattet, Inhalte der Website ohne vorherige schriftliche Genehmigung zu kopieren, zu reproduzieren, zu verbreiten, zu veröffentlichen, zu verkaufen, zu lizenzieren oder anderweitig zu verwerten. Ihnen wird lediglich eine eingeschränkte, nicht exklusive und nicht übertragbare Lizenz gewährt, um die Website ausschließlich für persönliche und nicht-kommerzielle Zwecke zu nutzen. Die Nutzung automatisierter Systeme wie Bots, Scraper oder Crawler zum Zugriff auf oder zur Extraktion von Inhalten ist ohne ausdrückliche Genehmigung strengstens untersagt.",
        "Alle auf der Website dargestellten Marken, Logos, Dienstleistungsmarken und Markenkennzeichen gehören Exercise Bike Reviews oder den jeweiligen Eigentümern. Ohne vorherige schriftliche Zustimmung werden keinerlei Rechte oder Lizenzen zur Nutzung eingeräumt. Sie dürfen Links zu öffentlich zugänglichen Seiten für persönliche oder soziale Zwecke teilen, sofern die Inhalte unverändert bleiben und ordnungsgemäß zugeordnet werden.",
        "Wir behalten uns das Recht vor, nutzergenerierte Inhalte nach eigenem Ermessen zu überprüfen, zu bearbeiten, zu moderieren oder zu entfernen. Wiederholte Verstöße können zur Sperrung oder dauerhaften Einschränkung des Zugriffs führen. Das Veröffentlichen von Spam, unerwünschter Werbung oder irrelevanten externen Links ist strengstens untersagt.",
       
        
      ]
    },
    {
      id: 'User-Generated Content and Community Standards',
      title: 'Nutzergenerierte Inhalte und Community-Richtlinien',
      paragraphs: [
        "Die Website kann Nutzern ermöglichen, Inhalte wie Bewertungen, Kommentare, Erfahrungsberichte oder Feedback zu veröffentlichen. Mit der Übermittlung solcher Inhalte gewähren Sie Exercise Bike Reviews eine weltweite, dauerhafte, unwiderrufliche, lizenzgebührenfreie und nicht exklusive Lizenz zur Nutzung, Vervielfältigung, Änderung, Anpassung, Veröffentlichung, Übersetzung und Verbreitung Ihrer Inhalte in jeglichen Medienformaten.",
        "Sie bleiben allein verantwortlich für alle Inhalte, die Sie einreichen. Sie bestätigen, dass Sie Eigentümer der Inhalte sind oder über die erforderlichen Rechte verfügen, diese zu teilen, und dass diese keine Gesetze oder Rechte Dritter verletzen. Außerdem erklären Sie sich damit ",
        "Wir behalten uns das Recht vor, nutzergenerierte Inhalte nach eigenem Ermessen zu überprüfen, zu bearbeiten, zu moderieren oder zu entfernen. Wiederholte Verstöße können zur Sperrung oder dauerhaften Einschränkung des Zugriffs führen. Das Veröffentlichen von Spam, unerwünschter Werbung oder irrelevanten externen Links ist strengstens untersagt.",
        "Von Nutzern wird erwartet, respektvoll zu kommunizieren und konstruktiv zur Community beizutragen. Wir unterstützen oder garantieren keine nutzergenerierten Inhalte und übernehmen keine Verantwortung für deren Genauigkeit oder Zuverlässigkeit. Nutzer werden gebeten, unangemessene Inhalte über offizielle Kontaktkanäle zu melden, damit geeignete Maßnahmen ergriffen werden können."
      ]
    },
    {
      id: 'Disclaimer of Warranties and Limitation of Liability',
      title: 'Haftungsausschluss und Haftungsbeschränkung',
      paragraphs: [
        "Exercise Bike Reviews ist eine Informationsplattform, die redaktionelle Inhalte, Vergleiche und nutzergenerierte Einblicke zu Heimtrainern, Indoor-Cycling-Geräten, Spinning-Bikes, Upright Bikes, Liegefahrrädern und Fitnessprodukten für Zuhause bereitstellt. Alle Inhalte werden „wie besehen“ und „wie verfügbar“ ohne jegliche ausdrückliche oder stillschweigende Gewährleistungen bereitgestellt, einschließlich Garantien hinsichtlich Genauigkeit, Vollständigkeit, Zuverlässigkeit, Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung von Rechten Dritter.",
        "Wir garantieren nicht, dass die bereitgestellten Informationen fehlerfrei, vollständig oder aktuell sind. Produktspezifikationen und Details können sich ohne vorherige Ankündigung ändern, und wir übernehmen hierfür keine Verantwortung. Nutzer verwenden die Informationen auf eigenes Risiko und nach eigenem Ermessen.",
        "Unter keinen Umständen haftet Exercise Bike Reviews für direkte, indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung oder dem Vertrauen auf die Website entstehen. Dies umfasst unter anderem Datenverluste, finanzielle Verluste oder gesundheitliche Folgen. Nutzern wird dringend empfohlen, vor Beginn eines Trainingsprogramms oder der Nutzung von Fitnessgeräten qualifizierte medizinische oder Fitnessfachkräfte zu konsultieren.",
        "Die Website kann an Affiliate-Programmen teilnehmen, einschließlich des Amazon-Partnerprogramms, wodurch wir Provisionen aus qualifizierten Käufen erhalten können. Wir stellen keine Produkte her, verkaufen diese nicht und kontrollieren keine Drittanbieterprodukte. Daher übernehmen wir keine Verantwortung für Produktqualität, Lieferung oder Kundenservice externer Anbieter. Jegliche Interaktion mit Drittplattformen unterliegt deren eigenen Bedingungen und Richtlinien"
      ]
    },
    {
      id: ' Governing Law, Jurisdiction, and Termination',
      title: 'Geltendes Recht, Gerichtsstand und Kündigung',
      paragraphs: [
        "Abhängig von Ihrem Wohnsitzland können Ihnen bestimmte Datenschutzrechte gemäß geltenden Gesetzen wie der DSGVO oder dem CCPA zustehen. Diese Rechte können den Zugang zu Ihren personenbezogenen Daten, deren Berichtigung oder Löschung umfassen.",
        "Zur Ausübung dieser Rechte oder bei datenschutzbezogenen Anfragen können Sie uns unter privacy@example.com kontaktieren, welches mit www.example.com verbunden ist."
      ]
    },
  ];

  return (
    <>
      <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
            <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 border p-6 rounded shadow-sm">
            <h2 className="text-xl text-black mb-4">Inhaltsverzeichnis:</h2>
            <ul className="space-y-2 text-blue-600 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline text-md text-base/8">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="md:col-span-3 space-y-10">
            <div className="text-sm text-gray-600 italic">Gültig ab 30. Juli 2025</div>
            <div></div>

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
