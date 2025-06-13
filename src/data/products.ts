
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'clothing',
    description: 'Comfortable running shoes perfect for daily workouts and jogging.',
    rating: 4.5
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 149,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation.',
    rating: 4.8
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'accessories',
    description: 'Durable backpack perfect for travel and daily use.',
    rating: 4.3
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'electronics',
    description: 'Advanced smartwatch with fitness tracking and notifications.',
    rating: 4.6
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
    category: 'accessories',
    description: 'Stylish sunglasses with UV protection.',
    rating: 4.2
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
    category: 'electronics',
    description: 'Professional digital camera for photography enthusiasts.',
    rating: 4.7
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'clothing',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
    rating: 4.1
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    category: 'electronics',
    description: 'Latest smartphone with advanced features and great camera.',
    rating: 4.8
  }
];
