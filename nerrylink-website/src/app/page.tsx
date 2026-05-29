import { Hero } from '@/components/sections/Hero';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { StatsBar } from '@/components/sections/StatsBar';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <StatsBar />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
}
