import { Hero } from '@/components/sections/Hero';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
}
