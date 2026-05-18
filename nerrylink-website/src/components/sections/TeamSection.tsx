'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { team } from '@/lib/team';
import { useTheme } from '@/components/ui/ThemeProvider';

const gradients = [
  'from-sky-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-indigo-600',
];

function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function MemberCard({
  member,
  gradient,
}: {
  member: typeof team[0];
  gradient: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`glass-elevated rounded-3xl overflow-hidden group relative ${
        isLight ? '' : 'hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10'
      }`}
      style={{
        transition: 'all 0.3s ease',
      }}
    >
      {/* Gradient border overlay on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.2))',
          padding: '1px',
          borderRadius: '24px',
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 bg-inherit rounded-3xl overflow-hidden">
      {/* Photo area */}
      <div
        className={`relative h-64 sm:h-72 overflow-hidden ${
          isLight ? 'bg-gradient-to-br from-purple-50 to-purple-100' : 'bg-gradient-to-br from-slate-800 to-slate-900'
        }`}
      >
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photoUrl}
            alt={`Photo of ${member.name}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgFailed(true)}
            crossOrigin="anonymous"
          />
        ) : (
          /* Stylish initials fallback */
          <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${gradient}`}>
            <span className="text-6xl font-black text-white/90 tracking-tight drop-shadow-lg">
              {getInitials(member.name)}
            </span>
            <span className="mt-3 text-white/60 text-xs font-medium uppercase tracking-widest">
              {member.role}
            </span>
            {/* Prompt to view on Facebook */}
            <a
              href={member.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
              onClick={e => e.stopPropagation()}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              View photo on Facebook
            </a>
          </div>
        )}

        {/* Gradient overlay at bottom */}
        <div className={`absolute bottom-0 left-0 right-0 h-24 ${
          isLight
            ? 'bg-gradient-to-t from-white/70 to-transparent'
            : 'bg-gradient-to-t from-slate-900/90 to-transparent'
        }`} />
      </div>

      {/* Info */}
      <div className="p-5 pt-4">
        <h3 className="text-[var(--text-primary)] font-bold text-lg leading-tight">{member.name}</h3>

        {/* Role pill */}
        <span className={`inline-block mt-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
          isLight
            ? 'bg-purple-100 text-[#6B21A8] border border-purple-200'
            : 'bg-gradient-to-r from-violet-500/20 to-purple-500/15 text-violet-300 border border-violet-500/40 group-hover:border-violet-400/60 group-hover:shadow-lg group-hover:shadow-violet-500/10 transition-all'
        }`}>
          {member.role}
        </span>

        {/* Facebook link */}
        <div className="mt-4 pt-4 border-t border-white/8">
          <a
            href={member.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 transition-all text-xs font-semibold px-3 py-2 rounded-xl ${
              isLight
                ? 'text-[#4a2080]/60 hover:text-[#6B21A8] hover:bg-purple-50 border border-transparent hover:border-purple-200/60'
                : 'text-white/40 hover:text-sky-300 hover:bg-white/8 border border-transparent hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/10'
            }`}
            aria-label={`${member.name} on Facebook`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook Profile
          </a>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="team-heading">
      <div className="text-center mb-12">
        <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-widest">
          Our Team
        </span>
        <h2 id="team-heading" className="mt-4 text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
          Meet the People Behind NerryLink
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">Passionate, certified, and dedicated to your tech needs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <MemberCard key={member.id} member={member} gradient={gradients[i % gradients.length]} />
        ))}
      </div>
    </section>
  );
}
