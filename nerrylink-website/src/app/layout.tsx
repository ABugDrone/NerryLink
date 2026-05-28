import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppIntegration } from '@/components/forms/WhatsAppIntegration';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { PwaInstallPrompt } from '@/components/ui/PwaInstallPrompt';
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Nerrylink\'s Gadget Store — Nigeria\'s Trusted Tech Store',
  description: 'Shop laptops, phones, bags and book expert tech services at Nerrylink\'s Gadget Store, Nigeria.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Nerrylink\'s Gadget Store',
    description: 'Laptops, Phones, Bags & Expert Tech Services in Nigeria.',
    url: 'https://nerrylinks.web.app',
    siteName: 'Nerrylink\'s Gadget Store',
    images: [{ url: '/assets/images/Home Hero section.jpeg', width: 1200, height: 630, alt: 'Nerrylink\'s Gadget Store' }],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="DroneBug Technologies and Services" />
        <meta name="theme-color" content="#7C3AED" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#6B21A8" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nerrylink" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* Preload critical fonts */}
        <link rel="preload" as="font" href="https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw0aXpsog.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuMwr7I5gEwUULdPIeeO1zNLvkNQvw.woff2" type="font/woff2" crossOrigin="anonymous" />
        {/* Set theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try {
              var t = localStorage.getItem('nerrylink-theme') || 'dark';
              document.documentElement.setAttribute('data-theme', t);
            } catch(e){
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          })();
        `}} />
      </head>
<body className="antialiased transition-colors duration-300" suppressHydrationWarning>
        <OrganizationSchema />
        <WebSiteSchema />
        <ThemeProvider>
          {/* Skip to main content — keyboard / screen-reader accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-[#7C3AED] focus:text-white focus:font-semibold focus:text-sm focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppIntegration />
          <PwaInstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
