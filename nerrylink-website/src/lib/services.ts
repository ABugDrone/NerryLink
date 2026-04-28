export interface Service {
  id: string;
  name: string;
  category: 'technical' | 'support' | 'wholesale';
  description: string;
  iconName: string;
  whatsappBookingText: string;
}

export const services: Service[] = [
  { id: 'repairs', name: 'Repairs & Maintenance', category: 'technical', description: 'Fast and reliable hardware and software repairs for laptops, PCs, and mobile devices. Quick turnaround guaranteed.', iconName: 'wrench', whatsappBookingText: 'I would like to book a repair/maintenance service.' },
  { id: 'software', name: 'Software Installations', category: 'technical', description: 'Professional installation of operating systems, productivity software, antivirus, and custom applications.', iconName: 'laptop', whatsappBookingText: 'I would like to book a software installation service.' },
  { id: 'hardware', name: 'Hardware Upgrades', category: 'technical', description: 'Boost your device performance with RAM upgrades, SSD installations, battery replacements, and more.', iconName: 'cpu', whatsappBookingText: 'I would like to book a hardware upgrade service.' },
  { id: 'support', name: 'Technical Support', category: 'support', description: 'Expert technical support for all your device issues. Remote and in-person assistance available.', iconName: 'headset', whatsappBookingText: 'I would like to book a technical support session.' },
  { id: 'consultation', name: 'Consultation Services', category: 'support', description: 'Professional tech consultation to help you make the right purchasing and technology decisions for your business or organisation.', iconName: 'chat', whatsappBookingText: 'I would like to book a consultation session.' },
  { id: 'training', name: 'Training & Setup', category: 'support', description: 'Personalised training sessions and device setup services for individuals, businesses, and institutions.', iconName: 'graduation', whatsappBookingText: 'I would like to book a training and setup session.' },
  { id: 'b2b-wholesale', name: 'B2B Wholesale Supply', category: 'wholesale', description: 'Bulk supply of laptops, phones, and accessories for businesses and resellers. Competitive wholesale pricing with flexible payment terms.', iconName: 'building', whatsappBookingText: 'I am a business interested in wholesale/bulk supply of tech products. Please share your wholesale catalogue and pricing.' },
  { id: 'b2g-supply', name: 'Government & Institutional Supply (B2G)', category: 'wholesale', description: 'Certified supplier for government agencies, ministries, and parastatals. We handle procurement, delivery, and after-sales support for large-scale tech deployments.', iconName: 'shield', whatsappBookingText: 'I represent a government agency/institution interested in tech procurement. Please share your B2G catalogue and terms.' },
  { id: 'ngo-supply', name: 'NGO & Non-Profit Supply (B2NGO)', category: 'wholesale', description: 'Special pricing for NGOs, charities, and non-profit organisations. We support digital inclusion initiatives with quality devices at accessible prices.', iconName: 'heart', whatsappBookingText: 'I represent an NGO/non-profit organisation interested in tech procurement. Please share your NGO pricing and available options.' },
  { id: 'luxury-auto', name: 'Luxury Car Sales & Rental', category: 'wholesale', description: 'Premium luxury vehicle sales and hire for executives, corporate events, government delegations, and special occasions. Fleet supply available for businesses.', iconName: 'car', whatsappBookingText: 'I am interested in luxury car sales or rental services. Please share available vehicles and pricing.' },
];
