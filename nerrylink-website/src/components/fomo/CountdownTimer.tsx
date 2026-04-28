'use client';
import { useEffect, useState } from 'react';
import { formatCountdown, CountdownDisplay } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [display, setDisplay] = useState<CountdownDisplay>({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    const tick = () => {
      const ms = new Date(targetDate).getTime() - Date.now();
      setDisplay(formatCountdown(ms));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (display.expired) {
    return (
      <div className="glass-dark inline-flex items-center gap-2 px-4 py-2 rounded-xl text-red-400 font-semibold text-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        Offer Expired
      </div>
    );
  }

  const units = [
    { label: 'Days', value: display.days },
    { label: 'Hrs', value: display.hours },
    { label: 'Min', value: display.minutes },
    { label: 'Sec', value: display.seconds },
  ];

  return (
    <div className="glass-dark inline-flex flex-col items-center gap-2 px-4 py-3 rounded-xl">
      <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">⏰ Limited Time Offer!</p>
      <div className="flex gap-2">
        {units.map(({ label, value }) => (
          <div key={label} className="glass flex flex-col items-center px-3 py-2 rounded-lg min-w-[52px]">
            <span className="text-2xl font-bold text-white tabular-nums">{String(value).padStart(2, '0')}</span>
            <span className="text-xs text-white/60">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
