'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. James Hartwell',
    role: { en: 'Lead Performance & Fitness Specialist', de: 'Leitender Performance- & Fitness-Spezialist' },
    description: { en: 'NASM and ACE dual-certified personal trainer with 10 years of hands-on experience testing and programming cardio fitness equipment.', de: 'NASM- und ACE-zertifizierter Personal Trainer mit 10 Jahren praktischer Erfahrung im Testen und Entwickeln von Cardio-Fitnessgeräten.' },
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg',
  },
  {
    id: 2,
    name: 'Dr. Sarah Jon',
    role: { en: 'Sports Biomechanics & Injury Prevention Expert', de: 'Expertin für Sportbiomechanik & Verletzungsprävention' },
    description: { en: 'PhD in Sports Biomechanics and research into lower-limb kinematics on stationary bikes. D', de: 'PhD in Sportwissenschaft, spezialisiert auf Ganganalyse und Verletzungsprävention.' },
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/team1.png',
  },
  {
    id: 3,
    name: 'Carlos Mendez',
    role: { en: 'Mechanical & Structural Engineering Analyst', de: 'Analyst für Maschinenbau & Strukturtechnik' },
    description: { en: 'Mechanical engineer with 11 years of experience specialising in consumer fitness hardware.', de: 'Maschinenbauingenieur mit 11 Jahren Erfahrung, spezialisiert auf Fitnessgeräte für Endverbraucher.' },
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/team3.png',
  },
  {
    id: 4,
    name: 'Aisha Thompson',
    role: { en: 'Smart Technology & Connected Fitness Reviewer', de: 'Expertin für Smart-Technologie & Connected Fitness' },
    description: { en: 'Certified personal trainer and sports technology journalist with deep expertise in connected fitness platforms, including Peloton, iFIT, JRNY, and Zwift integration.', de: 'Zertifizierte Personal Trainerin und Sporttechnologie-Journalistin mit umfassender Expertise in Connected-Fitness-Plattformen wie Peloton, iFIT, JRNY und Zwift-Integration.' },
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/team4.png',
  },
];

export default function OurTeam() {
  const t = useTranslations('about.ourTeam');
  const locale = useLocale();

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {/* <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            The People Behind It
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('title')}
          </h2>
          <div className="divider-emerald mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-0.5">{member.name}</h3>
                <p className="text-primary-600 text-sm font-semibold mb-2">{member.role[locale]}</p>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{member.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
