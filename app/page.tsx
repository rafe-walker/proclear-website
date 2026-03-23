import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhoWeServe from '@/components/WhoWeServe';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import ServiceAreas from '@/components/ServiceAreas';
import BlogPreview from '@/components/BlogPreview';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
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
