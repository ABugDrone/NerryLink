'use client';
import { useState } from 'react';
import { team } from '@/lib/team';

const gradients = [
  'from-sky-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-indigo-600',
];

function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function MemberCard({ member, gradient }: { member: typeof team[0]; gradient: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-200 animate-fade-up">
      {/* Photo area — tall rectangle */}
      <div className="relative h-64 sm:h-72 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photoUrl}
            alt={`Photo of ${member.name}`}
            className="w-full h-full object-cover object-top"
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
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg leading-tight">{member.name}</h3>
        <p className="text-sky-300 text-xs font-semibold mt-1 uppercase tracking-wider">{member.role}</p>

        <div className="flex items-center gap-3 mt-4">
          <a
            href={member.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-sky-400 transition-colors text-xs font-medium"
            aria-label={`${member.name} on Facebook`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="team-heading">
      <div className="text-center mb-12">
        <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold text-purple-300 uppercase tracking-widest">Our Team</span>
        <h2 id="team-heading" className="mt-4 text-3xl sm:text-4xl font-black text-white">
          Meet the People Behind NerryLink
        </h2>
        <p className="mt-2 text-white/60">Passionate, certified, and dedicated to your tech needs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <MemberCard key={member.id} member={member} gradient={gradients[i % gradients.length]} />
        ))}
      </div>
    </section>
  );
}
