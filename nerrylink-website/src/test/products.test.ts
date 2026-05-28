import { describe, it, expect } from 'vitest';
import { products } from '@/lib/products';

describe('Products data', () => {
  it('should have at least 10 products', () => {
    expect(products.length).toBeGreaterThanOrEqual(10);
  });

  it('every product should have required fields', () => {
    for (const p of products) {
      expect(typeof p.id).toBe('string');
      expect(p.id.length).toBeGreaterThan(0);
      expect(typeof p.name).toBe('string');
      expect(p.name.length).toBeGreaterThan(0);
      expect(typeof p.description).toBe('string');
      expect(typeof p.imagePath).toBe('string');
      expect(typeof p.isRefurbished).toBe('boolean');
      expect(['pcs-laptops', 'mobile', 'gadgets', 'bags']).toContain(p.category);
    }
  });

  it('every product ID should be unique', () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should have products across all 4 categories', () => {
    const cats = new Set(products.map((p) => p.category));
    expect(cats.size).toBe(4);
  });

  it('products with gallery should have non-empty arrays', () => {
    for (const p of products) {
      if (p.gallery) {
        expect(Array.isArray(p.gallery)).toBe(true);
        expect(p.gallery.length).toBeGreaterThan(0);
      }
    }
  });
});