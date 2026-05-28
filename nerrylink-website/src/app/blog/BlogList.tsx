'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '@/content/blog/posts';

export function BlogList() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Link href={`/blog/${post.slug}/`} className="block group">
              <div className="glass-elevated rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.imagePath}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-violet-500/80 text-white px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-[var(--text-primary)] font-bold text-base group-hover:text-violet-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[var(--text-secondary)] text-sm mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 mt-3 group-hover:gap-2 transition-all">
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}