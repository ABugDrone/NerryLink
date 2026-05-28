import type { Metadata } from 'next';
import { blogPosts } from '@/content/blog/posts';
import { BlogPostContent } from './BlogPostContent';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} — Nerrylink's Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Nerrylink's Blog`,
      description: post.excerpt,
      images: [{ url: post.imagePath, width: 1200, height: 630, alt: post.title }],
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div>
      <section className="relative h-48 sm:h-64 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-slate-950 to-indigo-950" />
        <div className="relative z-10 px-6 pb-8 max-w-3xl mx-auto w-full">
          <a href="/blog/" className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white/80 transition-colors mb-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Blog
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest bg-violet-500/60 text-white px-2 py-0.5 rounded-full mb-2 inline-block">{post.category}</span>
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">{post.title}</h1>
          <div className="flex items-center gap-2 text-xs text-white/50 mt-2">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>
      <BlogPostContent post={post} />
    </div>
  );
}