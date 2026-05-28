'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { faqs } from '@/lib/faq';
import { FAQJsonLd } from '@/components/seo/JsonLd';
import { useTheme } from '@/components/ui/ThemeProvider';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <>
      <FAQJsonLd questions={faqs} />
      <section className="mt-16" aria-labelledby="faq-heading">
        <div className="text-center mb-8">
          <span className={`glass px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
            isLight ? 'text-[#DC2626]' : 'text-violet-300'
          }`}>
            FAQ
          </span>
          <h2 id="faq-heading" className="mt-4 text-2xl font-black text-[var(--text-primary)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className={`glass-elevated rounded-2xl overflow-hidden transition-all ${
                openIndex === i ? 'border border-violet-500/30' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
              >
                <span className="text-sm font-bold text-[var(--text-primary)] pr-4">{faq.question}</span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" className={`flex-shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-5"
                >
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}