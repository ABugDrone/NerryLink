import { z } from 'zod';

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export const contactFormSchema = z.object({
  name: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  nickname: z.string().optional(),
  email: z.union([z.string().email('Invalid email address'), z.literal('')]).optional(),
  phone: z.string().min(10, 'Valid phone number required (min 10 digits)'),
  area: z.string().min(1, 'Area is required (e.g. Bekaji or Abuja Municipal Area)'),
  state: z.string().min(1, 'State is required (e.g. Adamawa)'),
  serviceNeeds: z
    .string()
    .min(1, 'Please describe your service needs')
    .refine((val) => countWords(val) <= 100, { message: 'Service needs must be 100 words or fewer' }),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function isWithinWorkingHours(date: string, time: string): boolean {
  const selectedDate = new Date(date + 'T00:00:00');
  const dayOfWeek = selectedDate.getDay(); // 0 = Sunday
  if (dayOfWeek === 0) return false;
  const [hoursStr, minutesStr] = time.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  if (isNaN(hours) || isNaN(minutes)) return false;
  const timeInMinutes = hours * 60 + minutes;
  const startTime = 9 * 60;       // 09:00
  const endTime = 19 * 60 + 30;   // 19:30
  return timeInMinutes >= startTime && timeInMinutes <= endTime;
}

export function getOutOfHoursMessage(): string {
  return "We do not work on Sundays or during these hours. However, you can call us to see if it's possible to make an exception for you. You are precious and we value you as a person. Call/WhatsApp or Text +2348166490440";
}
