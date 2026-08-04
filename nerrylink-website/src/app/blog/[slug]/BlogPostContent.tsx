'use client';

import { useTheme } from '@/components/ui/ThemeProvider';
import type { BlogPost } from '@/content/blog/posts';

function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith('## ')) {
      return <h2 key={i} className="text-xl font-black text-[var(--text-primary)] mt-10 mb-3">{trimmed.slice(3)}</h2>;
    }

    if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ') || trimmed.startsWith('5. ') || trimmed.startsWith('6. ')) {
      const boldParts = /^\d. \*\*(.+?)\*\*(.+)$/.exec(trimmed);
      if (boldParts) {
        return (
          <h3 key={i} className="mt-6 mb-1 text-base font-bold text-[var(--text-primary)]">
            {trimmed}
          </h3>
        );
      }
      return <h3 key={i} className="mt-6 mb-1 text-base font-bold text-[var(--text-primary)]">{trimmed}</h3>;
    }

    if (trimmed.startsWith('- ')) {
      return <li key={i} className="text-[var(--text-secondary)] text-sm leading-relaxed ml-4 list-disc mb-1">{trimmed.slice(2)}</li>;
    }

    if (trimmed.startsWith('**') && trimmed.includes('**') && trimmed.indexOf('**') !== trimmed.lastIndexOf('**')) {
      return <p key={i} className="text-[var(--text-secondary)] text-sm leading-relaxed mt-4"><strong className="text-[var(--text-primary)] font-semibold">{trimmed.replace(/\*\*/g, '')}</strong></p>;
    }

    return <p key={i} className="text-[var(--text-secondary)] text-sm leading-relaxed mt-4" dangerouslySetInnerHTML={{
      __html: trimmed
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[var(--text-primary)] font-semibold">$1</strong>')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline font-semibold">$1</a>'),
    }} />;
  }).filter(Boolean);
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <article className="py-12 max-w-3xl mx-auto px-4 sm:px-6">
      <div className={`prose-content ${isLight ? 'text-gray-600' : 'text-[var(--text-secondary)]'}`}>
        {renderContent(post.content)}
      </div>

      <div className={`mt-16 pt-8 border-t ${isLight ? 'border-gray-200' : 'border-white/10'}`}>
        <p className="text-xs text-[var(--text-muted)] mb-4">
          Written by <strong className="text-[var(--text-primary)]">{post.author}</strong> · {post.date}
        </p>
        <a
          href="/blog/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Blog
        </a>
      </div>
    </article>
  );
}