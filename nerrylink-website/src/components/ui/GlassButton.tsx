'use client';
import Link from 'next/link';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

const variantStyles: Record<string, string> = {
  primary: 'bg-sky-500/20 border-sky-400/40 text-sky-100 hover:bg-sky-500/40',
  secondary: 'bg-white/10 border-white/20 text-white hover:bg-white/20',
  whatsapp: 'bg-[#25D366]/20 border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/40',
};

export function GlassButton({
  children,
  onClick,
  href,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
}: GlassButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border backdrop-blur-md font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
