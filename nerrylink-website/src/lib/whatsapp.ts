export interface ContactFormData {
  name: string;
  lastName: string;
  nickname?: string;
  email?: string;
  phone: string;
  area: string;
  state: string;
  serviceNeeds: string;
  date: string;
  time: string;
}

export function generateWhatsAppMessage(data: ContactFormData): string {
  const fullName = `${data.name} ${data.lastName}`;
  const nicknameClause = data.nickname && data.nickname.trim()
    ? ` aka "${data.nickname.trim()}"`
    : '';
  return `Hello NerryLinks! My name is "${fullName}"${nicknameClause}. I am from "${data.area}" of "${data.state}". Please I will be needing "${data.serviceNeeds}". Please confirm on WhatsApp, Call or Text if you are available on "${data.date} at ${data.time}" to talk business.`;
}

export function buildWhatsAppURL(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(data: ContactFormData): void {
  const message = generateWhatsAppMessage(data);
  const url = buildWhatsAppURL('2348166490440', message);
  try {
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = url;
    }
  } catch {
    window.location.href = url;
  }
}
