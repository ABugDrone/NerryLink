'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues, isWithinWorkingHours, getOutOfHoursMessage } from '@/lib/validation';
import { generateWhatsAppMessage, buildWhatsAppURL } from '@/lib/whatsapp';
import { GlassButton } from '@/components/ui/GlassButton';
import { useState } from 'react';

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Convert "HH:MM" 24h to "H:MM AM/PM"
function to12Hour(time: string): string {
  if (!time) return '';
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, '0')} ${period}`;
}

// Get day name from YYYY-MM-DD
function getDayName(date: string): string {
  if (!date) return '';
  const d = new Date(date + 'T00:00:00');
  return d.toLocaleDateString('en-NG', { weekday: 'long' });
}

// Format date for display: "Monday, 5 May 2025"
function formatDateDisplay(date: string): string {
  if (!date) return '';
  const d = new Date(date + 'T00:00:00');
  return d.toLocaleDateString('en-NG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

// Build WhatsApp message with 12h time and day name
function buildMessage(data: ContactFormValues): string {
  const fullName = `${data.name} ${data.lastName}`;
  const nicknameClause = data.nickname?.trim() ? ` aka "${data.nickname.trim()}"` : '';
  const dayName = getDayName(data.date);
  const time12 = to12Hour(data.time);
  const dateDisplay = `${dayName}, ${formatDateDisplay(data.date)} at ${time12}`;
  return `Hello NerryLinks! My name is "${fullName}"${nicknameClause}. I am from "${data.area}" of "${data.state}". Please I will be needing "${data.serviceNeeds}". Please confirm on WhatsApp, Call or Text if you are available on "${dateDisplay}" to talk business.`;
}

const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export function ContactForm() {
  const [outOfHours, setOutOfHours] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const serviceNeeds = watch('serviceNeeds', '');
  const watchedDate = watch('date', '');
  const watchedTime = watch('time', '');
  const wordCount = serviceNeeds ? countWords(serviceNeeds) : 0;

  const handleSend = (data: ContactFormValues, phone: string) => {
    if (!isWithinWorkingHours(data.date, data.time)) {
      setOutOfHours(true);
      return;
    }
    setOutOfHours(false);
    const message = buildMessage(data);
    const url = buildWhatsAppURL(phone, message);
    try {
      const opened = window.open(url, '_blank', 'noopener,noreferrer');
      if (!opened) window.location.href = url;
    } catch {
      window.location.href = url;
    }
  };

  const onSubmitPrimary = (data: ContactFormValues) => handleSend(data, '2348166490440');
  const onSubmitSecondary = (data: ContactFormValues) => handleSend(data, '2348149588574');

  const inputClass = 'w-full bg-white/5 border border-white/15 rounded-xl px-3 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-sky-400/60 focus:bg-white/10 transition-all';
  const errorClass = 'text-red-400 text-xs mt-1';
  const labelClass = 'block text-white/70 text-xs font-medium mb-1 uppercase tracking-wider';

  // 12-hour time options: 9:00 AM to 7:30 PM in 30-min steps
  const timeOptions: { value: string; label: string }[] = [];
  for (let h = 9; h <= 19; h++) {
    for (const m of [0, 30]) {
      if (h === 19 && m === 30) { timeOptions.push({ value: '19:30', label: '7:30 PM' }); break; }
      if (h === 19 && m > 30) break;
      const value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      const period = h >= 12 ? 'PM' : 'AM';
      const hour = h % 12 || 12;
      const label = `${hour}:${String(m).padStart(2, '0')} ${period}`;
      timeOptions.push({ value, label });
    }
  }

  return (
    <form noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>First Name *</label>
          <input id="name" type="text" placeholder="e.g. Amaka" className={inputClass} {...register('name')} />
          {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name *</label>
          <input id="lastName" type="text" placeholder="e.g. Okafor" className={inputClass} {...register('lastName')} />
          {errors.lastName && <p className={errorClass} role="alert">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="nickname" className={labelClass}>Nickname (optional)</label>
        <input id="nickname" type="text" placeholder="What do people call you?" className={inputClass} {...register('nickname')} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>Email (optional)</label>
          <input id="email" type="email" placeholder="you@example.com" className={inputClass} {...register('email')} />
          {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone / WhatsApp *</label>
          <input id="phone" type="tel" placeholder="+234 800 000 0000" className={inputClass} {...register('phone')} />
          {errors.phone && <p className={errorClass} role="alert">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="area" className={labelClass}>Area *</label>
          <input id="area" type="text" placeholder="e.g. Bekaji or Abuja Municipal" className={inputClass} {...register('area')} />
          {errors.area && <p className={errorClass} role="alert">{errors.area.message}</p>}
        </div>
        <div>
          <label htmlFor="state" className={labelClass}>State *</label>
          <input id="state" type="text" placeholder="e.g. Adamawa" className={inputClass} {...register('state')} />
          {errors.state && <p className={errorClass} role="alert">{errors.state.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="serviceNeeds" className={labelClass}>
          What do you need? * <span className={`ml-2 ${wordCount > 100 ? 'text-red-400' : 'text-white/40'}`}>({wordCount}/100 words)</span>
        </label>
        <textarea
          id="serviceNeeds"
          rows={4}
          placeholder="Describe what you need — a laptop repair, a new phone, a service booking..."
          className={inputClass}
          {...register('serviceNeeds')}
        />
        {errors.serviceNeeds && <p className={errorClass} role="alert">{errors.serviceNeeds.message}</p>}
      </div>

      {/* Date + Day display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className={labelClass}>Preferred Date *</label>
          <input
            id="date"
            type="date"
            className={inputClass}
            {...register('date')}
          />
          {watchedDate && (
            <p className="text-sky-300 text-xs mt-1 font-medium">
              📅 {formatDateDisplay(watchedDate)}
            </p>
          )}
          {errors.date && <p className={errorClass} role="alert">{errors.date.message}</p>}
        </div>

        {/* 12-hour time select */}
        <div>
          <label htmlFor="time" className={labelClass}>Preferred Time *</label>
          <select
            id="time"
            className={`${inputClass} cursor-pointer`}
            {...register('time')}
            defaultValue=""
          >
            <option value="" disabled className="bg-slate-900 text-white/40">Select a time...</option>
            {timeOptions.map(({ value, label }) => (
              <option key={value} value={value} className="bg-slate-900 text-white">
                {label}
              </option>
            ))}
          </select>
          {watchedTime && (
            <p className="text-sky-300 text-xs mt-1 font-medium">
              🕐 {to12Hour(watchedTime)}
            </p>
          )}
          {errors.time && <p className={errorClass} role="alert">{errors.time.message}</p>}
        </div>
      </div>

      {outOfHours && (
        <div className="glass-dark border border-orange-400/30 rounded-xl p-4 text-orange-300 text-sm" role="alert">
          {getOutOfHoursMessage()}
        </div>
      )}

      {/* Two send buttons */}
      <div className="space-y-3 pt-1">
        {/* Primary — fast response */}
        <GlassButton
          type="button"
          variant="whatsapp"
          className="w-full justify-center py-4 text-base"
          onClick={handleSubmit(onSubmitPrimary)}
        >
          {WA_ICON}
          Send via WhatsApp
        </GlassButton>

        {/* Secondary — slower response */}
        <div className="relative">
          <GlassButton
            type="button"
            variant="secondary"
            className="w-full justify-center py-3 text-sm border-[#25D366]/20 text-[#25D366]/70 hover:text-[#25D366] hover:border-[#25D366]/40"
            onClick={handleSubmit(onSubmitSecondary)}
          >
            {WA_ICON}
            Try Alternate WhatsApp
          </GlassButton>
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-orange-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
            Slower response
          </span>
        </div>
      </div>
    </form>
  );
}
