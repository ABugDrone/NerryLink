import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppIntegration } from '@/components/forms/WhatsAppIntegration';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

export const metadata: Metadata = {
  title: 'Nerrylink\'s Gadgets Store — Nigeria\'s Trusted Tech Store',
  description: 'Shop laptops, phones, bags and book expert tech services at Nerrylink\'s Gadgets Store, Nigeria.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Nerrylink\'s Gadgets Store',
    description: 'Laptops, Phones, Bags & Expert Tech Services in Nigeria.',
    url: 'https://nerrylinks.web.app',
    siteName: 'Nerrylink\'s Gadgets Store',
    images: [{ url: '/assets/images/Home Hero section.jpeg', width: 1200, height: 630, alt: 'Nerrylink\'s Gadgets Store' }],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
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
