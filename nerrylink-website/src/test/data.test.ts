import { describe, it, expect } from 'vitest';
import { faqs } from '@/lib/faq';
import { recentPurchases } from '@/lib/purchases';
import { blogPosts } from '@/content/blog/posts';

describe('FAQ data', () => {
  it('should have at least 3 questions', () => {
    expect(faqs.length).toBeGreaterThanOrEqual(3);
  });

  it('each FAQ should have a question and answer', () => {
    for (const f of faqs) {
      expect(typeof f.question).toBe('string');
      expect(f.question.length).toBeGreaterThan(0);
      expect(typeof f.answer).toBe('string');
      expect(f.answer.length).toBeGreaterThan(0);
    }
  });
});

describe('Recent purchases', () => {
  it('should have at least 5 purchases', () => {
    expect(recentPurchases.length).toBeGreaterThanOrEqual(5);
  });

  it('each purchase should have all fields', () => {
    for (const p of recentPurchases) {
      expect(typeof p.name).toBe('string');
      expect(typeof p.location).toBe('string');
      expect(typeof p.product).toBe('string');
      expect(typeof p.timeAgo).toBe('string');
    }
  });
});

describe('Blog posts', () => {
  it('should have at least 2 posts', () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(2);
  });

  it('each post should have required fields', () => {
    for (const post of blogPosts) {
      expect(typeof post.slug).toBe('string');
      expect(typeof post.title).toBe('string');
      expect(typeof post.excerpt).toBe('string');
      expect(typeof post.content).toBe('string');
      expect(typeof post.author).toBe('string');
      expect(typeof post.category).toBe('string');
    }
  });

  it('post slugs should be unique', () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});