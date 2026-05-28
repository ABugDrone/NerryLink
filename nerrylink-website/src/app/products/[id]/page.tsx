import type { Metadata } from 'next';
import { products } from '@/lib/products';
import { ProductDetail } from '@/components/sections/ProductDetail';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} — Nerrylink's Gadget Store`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Nerrylink's Gadget Store`,
      description: product.description,
      images: [{ url: product.imagePath, width: 1200, height: 630, alt: product.name }],
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}