
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  priceCategory: 'budget' | 'mid-range' | 'premium';
  features: string[];
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'clothing',
    description: 'Comfortable running shoes perfect for daily workouts and jogging.',
    rating: 4.5,
    priceCategory: 'mid-range',
    features: ['Breathable mesh upper', 'Cushioned midsole', 'Durable rubber outsole'],
    specifications: {
      'Material': 'Synthetic mesh',
      'Weight': '280g',
      'Size Range': '6-12',
      'Color Options': '5 colors available'
    }
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation.',
    rating: 4.8,
    priceCategory: 'mid-range',
    features: ['Active noise cancellation', '30-hour battery life', 'Quick charge technology'],
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Warranty': '2 years'
    }
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'accessories',
    description: 'Durable backpack perfect for travel and daily use.',
    rating: 4.3,
    priceCategory: 'mid-range',
    features: ['Water-resistant fabric', 'Multiple compartments', 'Padded laptop sleeve'],
    specifications: {
      'Capacity': '25L',
      'Material': 'Nylon',
      'Dimensions': '45x30x15cm',
      'Weight': '800g'
    }
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'electronics',
    description: 'Advanced smartwatch with fitness tracking and notifications.',
    rating: 4.6,
    priceCategory: 'premium',
    features: ['Heart rate monitor', 'GPS tracking', 'Water resistant'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Rating': '5ATM',
      'Compatibility': 'iOS & Android'
    }
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
    category: 'accessories',
    description: 'Stylish sunglasses with UV protection.',
    rating: 4.2,
    priceCategory: 'mid-range',
    features: ['100% UV protection', 'Polarized lenses', 'Lightweight frame'],
    specifications: {
      'Frame Material': 'Titanium',
      'Lens Type': 'Polarized',
      'UV Protection': '100%',
      'Weight': '25g'
    }
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
    category: 'electronics',
    description: 'Professional digital camera for photography enthusiasts.',
    rating: 4.7,
    priceCategory: 'premium',
    features: ['24MP sensor', '4K video recording', 'Image stabilization'],
    specifications: {
      'Sensor': '24MP APS-C',
      'Video': '4K 30fps',
      'ISO Range': '100-25600',
      'Battery Life': '500 shots'
    }
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    originalPrice: 39,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'clothing',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
    rating: 4.1,
    priceCategory: 'budget',
    features: ['100% cotton', 'Pre-shrunk fabric', 'Tagless design'],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular',
      'Care': 'Machine washable',
      'Sizes': 'XS-XXL'
    }
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    category: 'electronics',
    description: 'Latest smartphone with advanced features and great camera.',
    rating: 4.8,
    priceCategory: 'premium',
    features: ['Triple camera system', '5G connectivity', 'All-day battery'],
    specifications: {
      'Display': '6.1" OLED',
      'Storage': '128GB',
      'Camera': '48MP triple system',
      'Battery': '4000mAh'
    }
  },
  {
    id: '9',
    title: 'Laptop',
    price: 899,
    originalPrice: 1099,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    category: 'electronics',
    description: 'High-performance laptop for work and entertainment.',
    rating: 4.5,
    priceCategory: 'premium',
    features: ['Intel Core i7', '16GB RAM', 'SSD storage'],
    specifications: {
      'Processor': 'Intel Core i7',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Display': '14" Full HD'
    }
  },
  {
    id: '10',
    title: 'Watch',
    price: 199,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400',
    category: 'accessories',
    description: 'Classic watch with elegant design.',
    rating: 4.4,
    priceCategory: 'mid-range',
    features: ['Stainless steel case', 'Leather strap', 'Water resistant'],
    specifications: {
      'Movement': 'Quartz',
      'Case Material': 'Stainless Steel',
      'Water Resistance': '50m',
      'Strap': 'Genuine Leather'
    }
  }
];
