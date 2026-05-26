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
          className="fixed bottom-20 right-4 z-[9998] w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30 flex items-center justify-center hover:from-violet-600 hover:to-purple-700 hover:scale-110 transition-all duration-300 animate-slide-up"
          aria-label="Install app"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </button>
      )}

      {/* Chrome/Edge install banner */}
      {showBanner && !isIos() && (
        <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-[9999] animate-slide-up" role="dialog" aria-label="Install app">
          <div className="glass-elevated p-4 rounded-2xl shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[var(--text-primary)]">Install Nerrylink&apos;s</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Add to home screen for quick access</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleInstall}
                    className="flex-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 transition-all"
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
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </div>
              <p className="text-lg font-black text-[var(--text-primary)]">Add to Home Screen</p>
              <p className={`text-sm mt-2 leading-relaxed ${isLight ? 'text-gray-500' : 'text-[var(--text-secondary)]'}`}>
                Tap the <strong className={isLight ? 'text-[#6B21A8]' : 'text-violet-400'}>Share</strong> button in your browser, then tap <strong className={isLight ? 'text-[#6B21A8]' : 'text-violet-400'}>&ldquo;Add to Home Screen&rdquo;</strong>
              </p>
            </div>
            <div className="flex justify-center mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={isLight ? '#6B21A8' : '#7C3AED'} strokeWidth="1.5" className="animate-bounce">
                <path d="M12 5v10M7 10l5 5 5-5" />
              </svg>
            </div>
            <button
              onClick={() => { setShowIosTip(false); setDismissed(true); }}
              className="w-full py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 transition-all"
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
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[var(--text-primary)]">Install Nerrylink&apos;s</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Add to home screen for quick access</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setShowIosTip(true)}
                    className="flex-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 transition-all"
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