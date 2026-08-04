import type { Metadata } from 'next';
import { BlogList } from './BlogList';

export const metadata: Metadata = {
  title: "Tech Guides & Blog — Tips, Buying Advice & News | Nerrylink's",
  description: "Expert tech guides, buying advice, and tips for Nigerian tech buyers. Laptops, phones, accessories, and more — from the Nerrylink team.",
  openGraph: {
    title: "Tech Guides & Blog — Nerrylink's Gadget Store",
    description: 'Expert tech guides and buying advice for Nigerian tech buyers.',
    url: 'https://nerrylinks.web.app/blog/',
    siteName: "Nerrylink's Gadget Store",
    images: [{ url: '/assets/images/Home Hero section.jpeg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div>
      <section className="relative h-56 sm:h-72 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-950 to-blue-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto w-full animate-fade-up">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3">Blog</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Tech Guides & Tips</h1>
          <p className="mt-2 text-white/60">Expert advice from the Nerrylink team</p>
        </div>
      </section>
      <BlogList />
    </div>
  );
}