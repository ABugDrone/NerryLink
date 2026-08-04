'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ui/ThemeProvider';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function isIos() {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandalone() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(display-mode: standalone)').matches;
}

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showIosTip, setShowIosTip] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isStandalone()) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  useEffect(() => {
    if (deferredPrompt && !dismissed) {
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, [deferredPrompt, dismissed]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowBanner(false);
        setDismissed(true);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setDismissed(true);
  };

  const handleInstallClick = () => {
    if (isIos()) {
      setShowIosTip(true);
    } else if (deferredPrompt) {
      handleInstall();
    } else {
      setShowIosTip(true);
    }
  };

  if (isStandalone()) return null;

  return (
    <>
      {/* Floating install button — visible everywhere */}
      {!showBanner && !dismissed && (
        <button
          onClick={handleInstallClick}
          className="fixed bottom-20 right-4 z-[9998] w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-blue-500/20 flex items-center justify-center hover:scale-110 transition-all duration-300 animate-slide-up overflow-hidden"
          aria-label="Install app"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Nerrylink" className="w-8 h-8" />
        </button>
      )}

      {/* Chrome/Edge install banner */}
      {showBanner && !isIos() && (
        <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-[9999] animate-slide-up" role="dialog" aria-label="Install app">
          <div className="glass-elevated p-4 rounded-2xl shadow-2xl">
            <div className="flex items-start gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Nerrylink" className="flex-shrink-0 w-11 h-11 rounded-xl" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[var(--text-primary)]">Install Nerrylink&apos;s</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Add to home screen for quick access</p>
                <p className="text-[10px] text-[var(--text-muted)]/50 mt-0.5">by DroneBug Technologies</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleInstall}
                    className="flex-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    Install
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/10 transition-all"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* iOS instructions overlay */}
      {showIosTip && (
        <div className="fixed inset-0 z-[10000] flex items-end justify-center p-4" onClick={() => setShowIosTip(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className={`relative z-10 p-6 rounded-3xl max-w-sm w-full mb-8 ${isLight ? 'bg-white shadow-2xl' : 'glass-elevated'}`}>
            <div className="text-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Nerrylink" className="mx-auto w-16 h-16 rounded-2xl mb-3" />
              <p className="text-lg font-black text-[var(--text-primary)]">Add to Home Screen</p>
              <p className={`text-sm mt-2 leading-relaxed ${isLight ? 'text-gray-500' : 'text-[var(--text-secondary)]'}`}>
                Tap the <strong className={isLight ? 'text-[#1E40AF]' : 'text-blue-400'}>Share</strong> button in your browser, then tap <strong className={isLight ? 'text-[#1E40AF]' : 'text-blue-400'}>&ldquo;Add to Home Screen&rdquo;</strong>
              </p>
            </div>
            <div className="flex justify-center mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={isLight ? '#1E40AF' : '#2563EB'} strokeWidth="1.5" className="animate-bounce">
                <path d="M12 5v10M7 10l5 5 5-5" />
              </svg>
            </div>
            <button
              onClick={() => { setShowIosTip(false); setDismissed(true); }}
              className="w-full py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Android/Other fallback banner */}
      {showBanner && isIos() && !showIosTip && (
        <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-[9999] animate-slide-up" role="dialog" aria-label="Install app">
          <div className="glass-elevated p-4 rounded-2xl shadow-2xl">
            <div className="flex items-start gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Nerrylink" className="flex-shrink-0 w-11 h-11 rounded-xl" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[var(--text-primary)]">Install Nerrylink&apos;s</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Add to home screen for quick access</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setShowIosTip(true)}
                    className="flex-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    How to Install
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/10 transition-all"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}