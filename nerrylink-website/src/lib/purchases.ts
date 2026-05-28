export interface Purchase {
  name: string;
  location: string;
  product: string;
  timeAgo: string;
}

export const recentPurchases: Purchase[] = [
  { name: 'Abdul', location: 'Yola', product: 'Lenovo ThinkPad T450', timeAgo: '2 mins ago' },
  { name: 'Chioma', location: 'Enugu', product: 'HP Touchscreen Laptop', timeAgo: '5 mins ago' },
  { name: 'Musa', location: 'Kano', product: 'Samsung Galaxy S24', timeAgo: '8 mins ago' },
  { name: 'Ngozi', location: 'Port Harcourt', product: 'MacBook Pro', timeAgo: '11 mins ago' },
  { name: 'Emeka', location: 'Lagos', product: 'Refurbished ThinkPads ×20', timeAgo: '14 mins ago' },
  { name: 'Fatima', location: 'Maiduguri', product: 'iPad Pro', timeAgo: '18 mins ago' },
  { name: 'Tunde', location: 'Ibadan', product: 'Dell Laptop', timeAgo: '22 mins ago' },
  { name: 'Amara', location: 'Owerri', product: 'Laptop Backpack', timeAgo: '25 mins ago' },
  { name: 'Ibrahim', location: 'Kaduna', product: 'Lenovo Desktop PCs ×15', timeAgo: '28 mins ago' },
  { name: 'Blessing', location: 'Abuja', product: 'iPhone 15 Pro', timeAgo: '31 mins ago' },
];