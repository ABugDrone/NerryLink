export interface Product {
  id: string;
  name: string;
  category: 'pcs-laptops' | 'mobile' | 'gadgets' | 'bags';
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

  // ── Bags ───────────────────────────────────────────────────────
  { id: 'laptop-bag-premium', name: 'Premium Laptop Bags', category: 'bags',
    description: 'High-quality laptop bags with padded compartments, water-resistant fabric, and multiple pockets. Fits 13"–17" laptops. Perfect for professionals and students.',
    imagePath: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Premium Laptop Bags. Please share available sizes and pricing.' },

  { id: 'laptop-backpack', name: 'Laptop Backpacks', category: 'bags',
    description: 'Ergonomic laptop backpacks with USB charging port, anti-theft design, and spacious compartments. Ideal for daily commuters and travellers.',
    imagePath: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Laptop Backpacks. Please share available styles and pricing.' },

  { id: 'laptop-sleeve', name: 'Laptop Sleeves & Cases', category: 'bags',
    description: 'Slim, lightweight laptop sleeves and hard-shell cases for maximum protection. Available for MacBook, Dell, HP, Lenovo, and more.',
    imagePath: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Laptop Sleeves and Cases. Please share available sizes and brands.' },

  { id: 'leather-work-bag', name: 'Leather Work Bags', category: 'bags',
    description: 'Premium genuine leather work bags — hand-crafted with reinforced stitching, padded laptop sleeve, and elegant finish. Carries your laptop and work tools in style.',
    imagePath: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Leather Work Bags. Please share available styles and pricing.' },

  { id: 'handbag-portable', name: 'Portable Handbags', category: 'bags',
    description: 'Stylish and functional portable handbags — perfect for carrying tablets, documents, and everyday essentials. Available in multiple colours and designs.',
    imagePath: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Portable Handbags. Please share available styles and pricing.' },

  { id: 'skin-tote-bag', name: 'Skin Tote & Carry Bags', category: 'bags',
    description: 'Hand-crafted skin and faux-leather tote bags — spacious enough for a 15" laptop, documents, and daily essentials. Sleek, durable, and professional.',
    imagePath: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Skin Tote and Carry Bags. Please share available options and pricing.' },

  { id: 'office-bag', name: 'Executive Office Bags', category: 'bags',
    description: 'Professional executive bags with dedicated laptop compartment, document organiser, and premium finish. Ideal for business meetings and corporate settings.',
    imagePath: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B', 'B2G'],
    whatsappInquiryText: 'I am interested in Executive Office Bags. Please share available options and pricing.' },

  { id: 'travel-bag', name: 'Travel & Duffel Bags', category: 'bags',
    description: 'Durable travel and duffel bags with expandable capacity, lockable zippers, and carry handles. Great for business trips and weekend getaways.',
    imagePath: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600&q=80',
    isRefurbished: false, clientTypes: ['B2C', 'B2B'],
    whatsappInquiryText: 'I am interested in Travel and Duffel Bags. Please share available options and pricing.' },

  { id: 'bags-wholesale', name: 'Bags Wholesale (Bulk)', category: 'bags',
    description: 'Bulk bag supply for resellers, schools, corporate gifting, and NGO distributions. All types available — laptop bags, backpacks, handbags, and more. Competitive wholesale pricing.',
    imagePath: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&q=80',
    isRefurbished: false, isWholesale: true, clientTypes: ['B2B', 'B2G', 'B2NGO'],
    whatsappInquiryText: 'I am interested in bulk bag supply. Please share available types, quantities, and wholesale pricing.' },
];
