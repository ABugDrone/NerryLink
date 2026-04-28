import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppIntegration } from '@/components/forms/WhatsAppIntegration';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

export const metadata: Metadata = {
  title: 'NerryLink Computer and Gadgets — Nigeria\'s Trusted Tech Store',
  description: 'Shop laptops, phones, automotive accessories and book expert tech services at NerryLink Computer and Gadgets, Nigeria.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'NerryLink Computer and Gadgets',
    description: 'Laptops, Phones, Automotive & Expert Tech Services in Nigeria.',
    url: 'https://nerrylinks.web.app',
    siteName: 'NerryLink Computer and Gadgets',
    images: [{ url: '/assets/images/Home Hero section.jpeg', width: 1200, height: 630, alt: 'NerryLink Computer and Gadgets' }],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
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
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppIntegration />
        </ThemeProvider>
      </body>
    </html>
  );
}
