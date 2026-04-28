import Image from 'next/image';
import { ContactSection } from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <div>
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <Image src="/assets/images/Contact Us.jpeg" alt="Contact NerryLink" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto w-full animate-fade-up">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-[#25D366] uppercase tracking-widest mb-3">Get In Touch</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Book a Service or Enquire</h1>
          <p className="mt-2 text-white/60">Fill in the form and we&apos;ll connect via WhatsApp</p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
