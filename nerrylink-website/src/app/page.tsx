import { Hero } from '@/components/sections/Hero';
import { PromoVideo } from '@/components/sections/PromoVideo';
import { StatsBar } from '@/components/sections/StatsBar';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoVideo />
      <StatsBar />
      <ProductShowcase />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
}
