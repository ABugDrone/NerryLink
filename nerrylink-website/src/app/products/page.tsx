import Image from 'next/image';
import { ProductShowcase } from '@/components/sections/ProductShowcase';

export default function ProductsPage() {
  return (
    <div>
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/assets/images/Our Products and services.jpeg" alt="NerryLink Products" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto w-full animate-fade-up">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-sky-300 uppercase tracking-widest mb-3">Products</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Browse Our Catalogue</h1>
          <p className="mt-2 text-white/60">Click any product to enquire — we&apos;ll connect you on WhatsApp</p>
        </div>
      </section>
      <div className="relative h-28 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/images/Instore.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/50 flex items-center justify-center">
          <p className="text-white/60 text-sm font-medium tracking-widest uppercase">In-Store Experience</p>
        </div>
      </div>
      <ProductShowcase />
    </div>
  );
}
