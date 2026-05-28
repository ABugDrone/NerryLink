'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { recentPurchases } from '@/lib/purchases';

export function LivePurchaseTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % recentPurchases.length);
        setVisible(true);
      }, 400);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const purchase = recentPurchases[index];

  return (
    <div className="fixed bottom-32 left-4 z-[9997] hidden sm:block">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -10, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="glass-elevated p-3 rounded-2xl shadow-xl max-w-[240px]"
          >
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-400 mt-1.5 animate-pulse" />
              <div>
                <p className="text-[10px] text-[var(--text-muted)]">
                  <strong className="text-[var(--text-primary)]">{purchase.name}</strong> in {purchase.location} purchased
                </p>
                <p className="text-[11px] font-semibold text-green-400 mt-0.5">
                  {purchase.product}
                </p>
                <p className="text-[9px] text-[var(--text-muted)]/60 mt-0.5">{purchase.timeAgo}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}