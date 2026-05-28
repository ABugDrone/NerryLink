export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Nerrylink's Gadget Store",
    alternateName: "Nerrylink's Global Services",
    url: 'https://nerrylinks.web.app',
    logo: 'https://nerrylinks.web.app/logo.svg',
    image: 'https://nerrylinks.web.app/assets/images/Home%20Hero%20section.jpeg',
    description: 'Shop laptops, phones, bags and book expert tech services at Nerrylink\'s Gadget Store, Nigeria.',
    email: 'ekpajerrimiah@gmail.com',
    telephone: '+2348166490440',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Nigeria',
    },
    sameAs: [
      'https://web.facebook.com/profile.php?id=100067730592515',
      'https://wa.me/2348166490440',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:30',
    },
  };

  return <JsonLd data={org} />;
}

export function WebSiteSchema() {
  const site = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Nerrylink's Gadget Store",
    url: 'https://nerrylinks.web.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://nerrylinks.web.app/products/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <JsonLd data={site} />;
}

export function ProductJsonLd({
  name, description, image, url,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: `https://nerrylinks.web.app${image}`,
    url: `https://nerrylinks.web.app${url}`,
    brand: {
      '@type': 'Brand',
      name: "Nerrylink's Gadget Store",
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'NGN',
      seller: {
        '@type': 'Organization',
        name: "Nerrylink's Gadget Store",
      },
    },
  };

  return <JsonLd data={product} />;
}

export function FAQJsonLd({ questions }: { questions: { question: string; answer: string }[] }) {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return <JsonLd data={faq} />;
}