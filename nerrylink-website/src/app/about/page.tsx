import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/assets/images/About US.jpeg" alt="About NerryLink" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="relative z-10 px-6 pb-10 max-w-5xl mx-auto w-full animate-fade-up">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-sky-300 uppercase tracking-widest mb-3">About Us</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">NerryLink Computer and Gadgets</h1>
          <p className="mt-2 text-white/60">
            <span className="text-emerald-400 font-semibold">CAC Registered Business</span> · NerryLink&apos;s Global Services
          </p>
        </div>
      </section>

      <section className="pt-12 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">

        {/* In-store video */}
        <div className="relative rounded-2xl overflow-hidden mb-12 h-48 sm:h-64 animate-fade-up">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/assets/images/Instore.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent flex items-center px-8">
            <div>
              <p className="text-sky-300 text-xs font-semibold uppercase tracking-widest mb-1">Experience</p>
              <p className="text-white text-xl font-bold">Visit Us In-Store</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="glass p-8 rounded-2xl space-y-4 animate-fade-up">
            <h2 className="text-xl font-bold text-white">Our Story</h2>
            <p className="text-white/70 leading-relaxed">
              NerryLink Computer and Gadgets is a <strong className="text-emerald-400">CAC registered Nigerian business</strong> (RC: NerryLink&apos;s Global Services) dedicated to making quality technology accessible to everyone — from individual consumers to large institutions.
            </p>
            <p className="text-white/70 leading-relaxed">
              We serve <strong className="text-white">B2C</strong> (retail), <strong className="text-white">B2B</strong> (businesses), <strong className="text-white">B2G</strong> (government), and <strong className="text-white">B2NGO</strong> (non-profits) — offering retail and wholesale supply of laptops, smartphones, gadgets, and automotive products.
            </p>
            <p className="text-white/70 leading-relaxed">
              Beyond tech, we offer <strong className="text-white">luxury and standard car sales and rental</strong> — for executives, corporate fleets, government delegations, and individuals.
            </p>
            <p className="text-white/70 leading-relaxed">
              Our certified technicians provide fast repairs, software installations, hardware upgrades, and expert consultation — all under one roof.
            </p>
          </div>

          <div className="space-y-4 animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden h-40 border border-white/10">
              <Image src="/assets/images/Our team.jpeg" alt="NerryLink team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-4">
                <p className="text-white font-semibold text-sm">Our Team</p>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-white mb-4">Business Details</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400 mt-0.5 flex-shrink-0"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
                  <div><p className="text-white font-medium">CAC Registered</p><p className="text-emerald-400/80 text-xs">NerryLink&apos;s Global Services</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400 mt-0.5 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div><p className="text-white font-medium">Location</p><p className="text-white/60">Nigeria</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400 mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <div>
                    <p className="text-white font-medium">Working Hours</p>
                    <p className="text-white/60">Monday – Saturday: 9:00 AM – 7:30 PM</p>
                    <p className="text-red-400/80 text-xs">Closed on Sundays</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366] mt-0.5 flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  <div>
                    <p className="text-white font-medium">WhatsApp (Primary)</p>
                    <a href="https://wa.me/2348166490440" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#25D366]/80 transition-colors">+234 816 649 0440</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]/60 mt-0.5 flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  <div>
                    <p className="text-white font-medium">WhatsApp <span className="text-orange-400/70 text-xs">(Slower response)</span></p>
                    <a href="https://wa.me/2348149588574" target="_blank" rel="noopener noreferrer" className="text-[#25D366]/70 hover:text-[#25D366] transition-colors">+234 814 958 8574</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-sky-400 mt-0.5 flex-shrink-0"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  <div>
                    <p className="text-white font-medium">Facebook</p>
                    <a href="https://www.facebook.com/profile.php?id=61580632770804" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">NerryLink Computer and Gadgets</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { type: 'B2C', label: 'Retail Customers', desc: 'Individuals buying for personal use', cls: 'border-sky-500/20 text-sky-400' },
            { type: 'B2B', label: 'Businesses', desc: 'Companies, resellers & enterprises', cls: 'border-amber-500/20 text-amber-400' },
            { type: 'B2G', label: 'Government', desc: 'Agencies, ministries & parastatals', cls: 'border-red-500/20 text-red-400' },
            { type: 'B2NGO', label: 'NGOs & Non-Profits', desc: 'Charities & development organisations', cls: 'border-green-500/20 text-green-400' },
          ].map(({ type, label, desc, cls }) => (
            <div key={type} className={`glass p-4 rounded-2xl border ${cls.split(' ')[0]} text-center`}>
              <span className={`text-2xl font-black ${cls.split(' ')[1]}`}>{type}</span>
              <p className="text-white font-semibold text-sm mt-1">{label}</p>
              <p className="text-white/50 text-xs mt-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* Store photos */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {['/assets/images/WhatsApp Image 2026-04-27 at 9.51.54 AM.jpeg', '/assets/images/WhatsApp Image 2026-04-27 at 9.51.58 AM.jpeg'].map((src, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden h-48 border border-white/10">
              <Image src={src} alt={`NerryLink store ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Google Maps */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.820575105927!2d12.442078325114608!3d9.260322740810558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b9232eef307%3A0x88ecb3fa1827339f!2sNERRYLINK&#39;S%20GLOBAL%20SERVICES!5e0!3m2!1sen!2sng!4v1777287167930!5m2!1sen!2sng"
            width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="NerryLink location on Google Maps" />
        </div>
      </section>
    </div>
  );
}
