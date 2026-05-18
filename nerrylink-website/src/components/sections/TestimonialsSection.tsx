'use client';
import { useEffect, useState, useCallback } from 'react';
import { useTheme } from '@/components/ui/ThemeProvider';

interface Testimonial {
  name: string;
  location: string;
  product: string;
  text: string;
  gender: 'male' | 'female';
  initial: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Abdulaziz',
    location: 'Yola, Adamawa',
    product: 'Lenovo ThinkPad T450',
    gender: 'male',
    initial: 'A',
    color: '#7C3AED',
    text: 'Got my Lenovo T450 from NerryLink and it has been a beast. Fast, reliable, and the battery still holds strong. Best purchase I made this year — and the price was unbeatable.',
  },
  {
    name: 'Frank',
    location: 'Abuja, FCT',
    product: 'Dell All-in-One & Apple iMac',
    gender: 'male',
    initial: 'F',
    color: '#0EA5E9',
    text: 'I needed a serious setup for my graphics studio. NerryLink delivered a Dell All-in-One and an iMac — both in perfect condition. My publishing workflow has never been smoother. These machines are absolute workhorses.',
  },
  {
    name: 'Chidinma',
    location: 'Enugu, Enugu State',
    product: 'HP Touchscreen Laptop',
    gender: 'female',
    initial: 'C',
    color: '#EC4899',
    text: 'I was sceptical about buying online but NerryLink proved me wrong. My HP touchscreen arrived exactly as described. The team was patient, answered all my questions on WhatsApp, and delivery was smooth.',
  },
  {
    name: 'Musa',
    location: 'Kano, Kano State',
    product: 'Samsung Galaxy S24',
    gender: 'male',
    initial: 'M',
    color: '#F59E0B',
    text: 'Ordered a Samsung Galaxy S24 for my business. NerryLink had the best price in town and the phone came sealed. Customer service was top-notch — they followed up even after delivery. Highly recommend.',
  },
  {
    name: 'Ngozi',
    location: 'Port Harcourt, Rivers',
    product: 'MacBook Pro',
    gender: 'female',
    initial: 'N',
    color: '#10B981',
    text: 'As a software developer, I needed a reliable MacBook. NerryLink sourced exactly what I wanted at a fair price. The machine is flawless. I have already referred three colleagues — they all came back satisfied.',
  },
  {
    name: 'Emeka',
    location: 'Lagos, Lagos State',
    product: 'Refurbished ThinkPad (Bulk)',
    gender: 'male',
    initial: 'E',
    color: '#8B5CF6',
    text: 'We procured 20 refurbished ThinkPads for our NGO training centre. Every single unit was tested, clean, and performing well. NerryLink handled the bulk order professionally — on time and within budget.',
  },
  {
    name: 'Fatima',
    location: 'Maiduguri, Borno',
    product: 'iPad Pro',
    gender: 'female',
    initial: 'F',
    color: '#EF4444',
    text: "I bought an iPad Pro for my daughter's school. NerryLink was honest about the specs and pricing. No hidden charges, no drama. The iPad arrived in perfect condition. We are now loyal customers.",
  },
  {
    name: 'Tunde',
    location: 'Ibadan, Oyo State',
    product: 'Dell Laptop',
    gender: 'male',
    initial: 'T',
    color: '#06B6D4',
    text: 'My Dell laptop from NerryLink has been running non-stop for eight months without a single issue. I use it for data analysis and it handles everything I throw at it. Great value, great service.',
  },
  {
    name: 'Amara',
    location: 'Owerri, Imo State',
    product: 'Laptop Backpack',
    gender: 'female',
    initial: 'A',
    color: '#F97316',
    text: 'Picked up a laptop backpack alongside my new HP. The bag is solid — padded, spacious, and stylish. I carry it everywhere. NerryLink really does have everything a tech person needs in one place.',
  },
  {
    name: 'Ibrahim',
    location: 'Kaduna, Kaduna State',
    product: 'Lenovo Desktop PC',
    gender: 'male',
    initial: 'I',
    color: '#84CC16',
    text: 'Set up a small computer lab for my school using Lenovo PCs from NerryLink. The wholesale pricing was fair and the machines are performing excellently. Students are happy, teachers are happy — I am happy.',
  },
];

const DISPLAY_DURATION = 5000; // 5 seconds visible
const FADE_DURATION = 600;     // 0.6s fade

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
      setVisible(true);
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, DISPLAY_DURATION + FADE_DURATION);
    return () => clearInterval(id);
  }, [advance, paused]);

  const t = testimonials[current];

  return (
    <section className="py-16 px-4 sm:px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className={`glass px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
            isLight ? 'text-[#DC2626]' : 'text-red-300'
          }`}>
            Customer Stories
          </span>
          <h2
            id="testimonials-heading"
            className="mt-4 text-2xl sm:text-3xl font-black text-[var(--text-primary)]"
          >
            What Our Customers Say
          </h2>
          <span className="section-accent-line" aria-hidden="true" />
          <p className="mt-4 text-[var(--text-secondary)] text-sm">
            Real people, real purchases, real satisfaction.
          </p>
        </div>

        {/* Testimonial card */}
        <div
          className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-opacity"
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease`,
            minHeight: '220px',
          }}
          aria-live="polite"
          aria-atomic="true"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Decorative quote mark */}
          <div
            className="absolute top-4 right-6 text-8xl font-black leading-none select-none pointer-events-none"
            style={{ color: t.color, opacity: 0.08 }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <div className="flex items-start gap-4 mb-4">
            {/* Avatar */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-lg"
              style={{ background: t.color }}
              aria-hidden="true"
            >
              {t.initial}
            </div>
            <div>
              <p className="font-black text-[var(--text-primary)] text-base leading-tight">{t.name}</p>
              <p className="text-[var(--text-muted)] text-xs mt-0.5">{t.location}</p>
              <div className="mt-1.5">
                <StarRating />
              </div>
            </div>
            <div className="ml-auto text-right hidden sm:block">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
              >
                {t.product}
              </span>
            </div>
          </div>

          {/* Product badge — mobile */}
          <div className="sm:hidden mb-3">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
            >
              {t.product}
            </span>
          </div>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-medium">
            &ldquo;{t.text}&rdquo;
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => {
                setVisible(false);
                setTimeout(() => { setCurrent(i); setVisible(true); }, FADE_DURATION);
              }}
              className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? testimonials[i].color : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-[var(--text-muted)] text-xs mt-3">
          {current + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
}
