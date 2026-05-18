import { create } from 'zustand';
import { PROMO_COUNTDOWN_END } from '@/lib/constants';

interface FOMOState {
  countdownTarget: string;
  stockLevels: Record<string, number>;
  viewCounts: Record<string, number>;
  setCountdownTarget: (target: string) => void;
  setStockLevel: (productId: string, qty: number) => void;
  setViewCount: (productId: string, count: number) => void;
}

export const useFOMOStore = create<FOMOState>((set) => ({
  countdownTarget: PROMO_COUNTDOWN_END,
  stockLevels: {
    'hp-new': 3, 'hp-modern': 5, 'hp-fold': 2, 'hp-touch': 4, 'hp-touch2': 3, 'hp-range': 8, 'hp-fold2': 2,
    'dell-laptop': 6, 'dell-fold': 1,
    'lenovo-new': 8, 'lenovo-inside': 5, 'lenovo-pc': 7,
    'apple-macbook': 2, 'apple-pc': 3,
    'thinkpad-touch': 5, 'thinkpad-touch2': 4, 'thinkpad-refurb': 4, 'refurb-laptops': 10,
    'iphone': 5, 'samsung': 9, 'samsung-fold': 3, 'ipad-pro': 3,
    'gadgets-general': 20, 'ear-pods': 12, 'bluetooth-speakers': 8, 'power-banks': 15,
    'accessories-pc': 15, 'accessories-mobile': 25, 'networking': 12,
    'honda-crv': 3, 'toyota-prado': 2, 'toyota-hilux': 4, 'toyota-camry': 5,
    'lexus-rx': 2, 'mercedes-gle': 1, 'toyota-corolla': 6,
    'luxury-rental': 4, 'standard-rental': 7,
  },
  viewCounts: {
    'hp-new': 47, 'hp-modern': 32, 'hp-fold': 89, 'hp-touch': 23, 'hp-touch2': 18, 'hp-range': 41, 'hp-fold2': 67,
    'dell-laptop': 56, 'dell-fold': 71,
    'lenovo-new': 38, 'lenovo-inside': 29, 'lenovo-pc': 19,
    'apple-macbook': 124, 'apple-pc': 67,
    'thinkpad-touch': 41, 'thinkpad-touch2': 33, 'thinkpad-refurb': 55, 'refurb-laptops': 93,
    'iphone': 201, 'samsung': 178, 'samsung-fold': 112, 'ipad-pro': 88,
    'gadgets-general': 64, 'ear-pods': 143, 'bluetooth-speakers': 97, 'power-banks': 118,
    'accessories-pc': 45, 'accessories-mobile': 83, 'networking': 37,
    'honda-crv': 156, 'toyota-prado': 134, 'toyota-hilux': 98, 'toyota-camry': 187,
    'lexus-rx': 203, 'mercedes-gle': 89, 'toyota-corolla': 211,
    'luxury-rental': 94, 'standard-rental': 67,
  },
  setCountdownTarget: (target) => set({ countdownTarget: target }),
  setStockLevel: (productId, qty) =>
    set((state) => ({ stockLevels: { ...state.stockLevels, [productId]: qty } })),
  setViewCount: (productId, count) =>
    set((state) => ({ viewCounts: { ...state.viewCounts, [productId]: count } })),
}));
