import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhoWeServe from '@/components/WhoWeServe';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import ServiceAreas from '@/components/ServiceAreas';
import BlogPreview from '@/components/BlogPreview';
import CTA from '@/components/CTA';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a foreclosure cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A foreclosure cleanout is the complete removal of all personal property, debris, furniture, appliances, and waste left behind in a foreclosed property. ProClear Solutions leaves every property broom-clean and market-ready after a cleanout.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can ProClear Solutions complete a cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most standard foreclosure cleanouts are completed within 24-48 hours of work order approval. Same-day service is available for urgent jobs in the Tucson metro area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ProClear Solutions bonded and insured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ProClear Solutions carries full general liability insurance and is bonded, meeting all requirements for government agency and REO servicer contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does ProClear Solutions serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ProClear Solutions provides property preservation services throughout Southern Arizona, including Cochise County, Santa Cruz County, Pima County, and the greater Tucson metro area. Statewide service is also available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ProClear Solutions meet GSE and HUD property preservation standards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All work performed by ProClear Solutions meets Fannie Mae, Freddie Mac, and HUD property preservation standards, including photo documentation, compliance reporting, and timeline requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does ProClear Solutions offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ProClear Solutions offers foreclosure cleanouts, trash-out services, yard maintenance, lock changes and property securing, handyman repairs, property inspections, paint touch-ups, and winterization services.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustBar />
      <Services />
      <WhoWeServe />
      <Process />
      <WhyUs />
      <ServiceAreas />
      <BlogPreview />
      <CTA />
    </>
  );
}
