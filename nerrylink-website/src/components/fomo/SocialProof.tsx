interface SocialProofProps {
  viewCount: number;
}

export function SocialProof({ viewCount }: SocialProofProps) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      {viewCount} people viewed this today
    </span>
  );
}
