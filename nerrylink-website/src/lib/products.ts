export interface Product {
  id: string;
  name: string;
  category: 'pcs-laptops' | 'mobile' | 'gadgets' | 'automotive';
  description: string;
  imagePath: string;
  isRefurbished: boolean;
  isWholesale?: boolean;
  clientTypes?: Array<'B2C' | 'B2B' | 'B2G' | 'B2NGO'>;
  whatsappInquiryText: string;
}

export const products: Product[] = [

  // ── PCs & Laptops ──────────────────────────────────────────────
  { id: 'hp-new', name: 'HP New Model', category: 'pcs-laptops',
    description: 'Brand new HP laptop with latest specs. Available for retail and bulk wholesale orders for businesses, schools, and government agencies.',
    imagePath: '/assets/images/HP new.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G', 'B2NGO'],
    whatsappInquiryText: 'I am interested in the HP New Model laptop.' },

  { id: 'hp-modern', name: 'Modern HP', category: 'pcs-laptops',
    description: 'Sleek modern HP laptop with premium build quality. Wholesale pricing available for bulk orders.',
    imagePath: '/assets/images/Modern HP.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the Modern HP laptop.' },

  { id: 'hp-fold', name: 'HP Fold', category: 'pcs-laptops',
    description: 'Innovative HP foldable laptop — versatile and portable. Ideal for executives and field teams.',
    imagePath: '/assets/images/HP fold.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the HP Fold laptop.' },

  { id: 'hp-touch', name: 'HP Touchscreen', category: 'pcs-laptops',
    description: 'HP laptop with responsive touchscreen display. Great for presentations and interactive work.',
    imagePath: '/assets/images/HP touch.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in the HP Touchscreen laptop.' },

  { id: 'hp-touch2', name: 'HP Touch Pro', category: 'pcs-laptops',
    description: 'HP Touch Pro — upgraded touchscreen performance for professionals.',
    imagePath: '/assets/images/HP touch 2.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the HP Touch Pro laptop.' },

  { id: 'hp-range', name: 'HP Full Range', category: 'pcs-laptops',
    description: 'Full HP lineup — older and new models available. Great for bulk institutional orders.',
    imagePath: '/assets/images/HP older and new models.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G', 'B2NGO'],
    whatsappInquiryText: 'I am interested in the HP full range. Please share available models and pricing.' },

  { id: 'hp-fold2', name: 'HP Fold 2', category: 'pcs-laptops',
    description: 'Second-gen HP foldable — refined design and improved performance.',
    imagePath: '/assets/images/HP fold 2.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the HP Fold 2.' },

  { id: 'dell-laptop', name: 'Dell Laptop', category: 'pcs-laptops',
    description: 'Reliable Dell laptop for business and personal use. Bulk supply available for corporate and government procurement.',
    imagePath: '/assets/images/Dell .jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G', 'B2NGO'],
    whatsappInquiryText: 'I am interested in the Dell laptop.' },

  { id: 'dell-fold', name: 'Dell Fold', category: 'pcs-laptops',
    description: 'Dell foldable laptop — cutting-edge design meets performance. Premium choice for executives.',
    imagePath: '/assets/images/Dell Fold.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the Dell Fold laptop.' },

  { id: 'lenovo-new', name: 'Lenovo New', category: 'pcs-laptops',
    description: 'Latest Lenovo laptop with powerful performance. Wholesale supply for schools, NGOs, and government offices.',
    imagePath: '/assets/images/Lenovo New.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G', 'B2NGO'],
    whatsappInquiryText: 'I am interested in the Lenovo New laptop.' },

  { id: 'lenovo-inside', name: 'Lenovo Inside', category: 'pcs-laptops',
    description: 'Lenovo laptop with premium internals — built for performance and durability.',
    imagePath: '/assets/images/Lenovo Inside.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the Lenovo Inside laptop.' },

  { id: 'lenovo-pc', name: 'Lenovo PC', category: 'pcs-laptops',
    description: 'Lenovo desktop PC — powerful and reliable. Ideal for office and lab setups in bulk.',
    imagePath: '/assets/images/Lenovo PC.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in the Lenovo PC.' },

  { id: 'apple-macbook', name: 'MacBook Pro', category: 'pcs-laptops',
    description: 'Apple MacBook Pro — premium performance for professionals and creative teams.',
    imagePath: '/assets/images/Macbookpro.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the MacBook Pro.' },

  { id: 'apple-pc', name: 'Apple iMac', category: 'pcs-laptops',
    description: 'Apple iMac — stunning display and powerful performance for studios and offices.',
    imagePath: '/assets/images/Apple PC.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the Apple iMac.' },

  { id: 'thinkpad-touch', name: 'ThinkPad Touch', category: 'pcs-laptops',
    description: 'ThinkPad with touchscreen — business-grade reliability trusted by enterprises and government.',
    imagePath: '/assets/images/Thinkpad touch.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in the ThinkPad Touch.' },

  { id: 'thinkpad-touch2', name: 'ThinkPad Touch 2', category: 'pcs-laptops',
    description: 'ThinkPad Touch 2 — upgraded model with enhanced display and performance.',
    imagePath: '/assets/images/Thinkpad touch 2.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the ThinkPad Touch 2.' },

  { id: 'thinkpad-refurb', name: 'ThinkPad Refurbished', category: 'pcs-laptops',
    description: 'Certified refurbished ThinkPad — quality tested, great value. Popular for NGO and school deployments.',
    imagePath: '/assets/images/Thinkpad refurbished.jpeg', isRefurbished: true,
    clientTypes: ['B2C', 'B2NGO', 'B2G'],
    whatsappInquiryText: 'I am interested in the Refurbished ThinkPad.' },

  { id: 'refurb-laptops', name: 'Refurbished Laptops (Bulk)', category: 'pcs-laptops',
    description: 'Quality-certified refurbished laptops at budget-friendly prices. Grades A, B & C. Ideal for wholesale orders — schools, NGOs, and government agencies.',
    imagePath: '/assets/images/Refurbished Laptops.jpeg', isRefurbished: true, isWholesale: true,
    clientTypes: ['B2C', 'B2B', 'B2G', 'B2NGO'],
    whatsappInquiryText: 'I am interested in bulk refurbished laptops. Please share available grades, quantities, and wholesale pricing.' },

  // ── Mobile Devices ─────────────────────────────────────────────
  { id: 'iphone', name: 'iPhones', category: 'mobile',
    description: 'Latest Apple iPhone lineup — new and refurbished. Retail and wholesale supply available.',
    imagePath: '/assets/images/iPRO.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in iPhones. Please share available models and prices.' },

  { id: 'samsung', name: 'Samsung Galaxy', category: 'mobile',
    description: 'Full Samsung Galaxy range — flagship and mid-range. Bulk orders welcome for resellers and businesses.',
    imagePath: '/assets/images/fold.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Samsung Galaxy phones. Please share available models.' },

  { id: 'samsung-fold', name: 'Samsung Fold', category: 'mobile',
    description: 'Samsung Galaxy Fold — premium foldable smartphone for power users.',
    imagePath: 'https://images.unsplash.com/photo-1568378711447-f5eef04d85b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in the Samsung Galaxy Fold.' },

  { id: 'ipad-pro', name: 'iPad Pro', category: 'mobile',
    description: 'Apple iPad Pro — powerful tablet for work and creativity. Wholesale supply for schools and enterprises.',
    imagePath: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G', 'B2NGO'],
    whatsappInquiryText: 'I am interested in the iPad Pro.' },

  // ── Gadgets & Accessories ──────────────────────────────────────
  { id: 'gadgets-general', name: 'Tech Gadgets', category: 'gadgets',
    description: 'Wide range of tech gadgets — smartwatches, earbuds, power banks, USB hubs, and more. Retail and wholesale.',
    imagePath: '/assets/images/Our Products and services.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in tech gadgets and accessories. Please share what is available.' },

  { id: 'ear-pods', name: 'Ear Pods & Earbuds', category: 'gadgets',
    description: 'Premium wireless earbuds and ear pods — crystal clear sound, noise cancellation, and long battery life. All brands available.',
    imagePath: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Ear Pods and Earbuds. Please share available brands and pricing.' },

  { id: 'bluetooth-speakers', name: 'Bluetooth Speakers', category: 'gadgets',
    description: 'Portable and home Bluetooth speakers — powerful bass, wireless connectivity, and waterproof options available.',
    imagePath: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Bluetooth Speakers. Please share available options and pricing.' },

  { id: 'power-banks', name: 'Portable Power Banks', category: 'gadgets',
    description: 'High-capacity portable power banks — fast charging, multiple ports, and slim designs. Never run out of battery.',
    imagePath: 'https://images.unsplash.com/photo-1600577231598-31ea4cb50da3?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Portable Power Banks. Please share available capacities and pricing.' },

  { id: 'accessories-pc', name: 'PC Accessories', category: 'gadgets',
    description: 'Keyboards, mice, monitors, webcams, headsets, and all PC peripherals. Bulk supply available.',
    imagePath: '/assets/images/Lenovo Inside.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in PC accessories. Please share available options and pricing.' },

  { id: 'accessories-mobile', name: 'Mobile Accessories', category: 'gadgets',
    description: 'Phone cases, chargers, cables, screen protectors, and mobile accessories for all brands.',
    imagePath: '/assets/images/in_store.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in mobile accessories. Please share what is available.' },

  { id: 'networking', name: 'Networking & Connectivity', category: 'gadgets',
    description: 'Routers, switches, network cables, Wi-Fi extenders, and connectivity solutions for homes and offices.',
    imagePath: '/assets/images/Tech Services.jpeg', isRefurbished: false,
    clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in networking equipment. Please share available options.' },

  // ── Automotive ─────────────────────────────────────────────────
  { id: 'honda-crv', name: 'Luxury Rental Rides', category: 'automotive',
    description: 'Premium SUV hire for events, executive travel, and corporate functions. Comfortable, spacious, and reliable.',
    imagePath: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in Luxury Rental Rides. Please share availability and pricing.' },

  { id: 'toyota-prado', name: 'Executive Rentals', category: 'automotive',
    description: 'Executive-class vehicles for government delegations, VIP transport, and high-profile corporate events.',
    imagePath: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in Executive Rentals. Please share available vehicles and pricing.' },

  { id: 'toyota-hilux', name: 'Long Distance Journey Rentals', category: 'automotive',
    description: 'Rugged, dependable vehicles built for long-distance travel across Nigerian roads. Safe and comfortable.',
    imagePath: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in Long Distance Journey Rentals. Please share rates and availability.' },

  { id: 'toyota-camry', name: 'Fancy Drive Arounds', category: 'automotive',
    description: 'Stylish, smooth rides for city cruising, special occasions, weddings, and social events.',
    imagePath: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Fancy Drive Arounds. Please share available options and pricing.' },

  { id: 'lexus-rx', name: 'Premium Car Sales', category: 'automotive',
    description: 'Top-of-the-range vehicles available for outright purchase. Quality assured, competitively priced.',
    imagePath: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in purchasing a premium vehicle. Please share available options and pricing.' },

  { id: 'mercedes-gle', name: 'Corporate Fleet Supply', category: 'automotive',
    description: 'Bulk vehicle supply for corporate fleets, government convoys, and institutional transport needs.',
    imagePath: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in Corporate Fleet Supply. Please share available vehicles and bulk pricing.' },

  { id: 'toyota-corolla', name: 'Standard Car Sales', category: 'automotive',
    description: 'Affordable, reliable vehicles for personal and commercial use. Great value for everyday driving.',
    imagePath: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Standard Car Sales. Please share available options and pricing.' },

  { id: 'luxury-rental', name: 'Refurbished Cars for Sale', category: 'automotive',
    description: 'Quality-inspected, refurbished vehicles at budget-friendly prices. Tested and certified before sale.',
    imagePath: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
    isRefurbished: true, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Refurbished Cars for Sale. Please share available options and pricing.' },

  { id: 'standard-rental', name: 'Everyday Car Rentals', category: 'automotive',
    description: 'Flexible daily, weekly, or monthly car hire for individuals and small businesses. Simple and affordable.',
    imagePath: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Everyday Car Rentals. Please share rates and availability.' },
];
