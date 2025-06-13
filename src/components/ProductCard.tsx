
import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 md:w-4 md:h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-400/50 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 h-full flex flex-col"
      onClick={() => onProductClick(product)}
    >
      <CardContent className="p-2 md:p-4 flex-1">
        {/* Mobile responsive image */}
        <div className="aspect-square overflow-hidden rounded-lg mb-2 md:mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        {/* Title - responsive text size */}
        <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 line-clamp-2">{product.title}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1 md:mb-2">
          {renderStars(product.rating)}
          <span className="text-xs md:text-sm text-gray-600 ml-1">({product.rating})</span>
        </div>
        
        {/* Price and Category */}
        <div className="flex items-center justify-between mb-2 md:mb-3 flex-wrap">
          <span className="text-lg md:text-2xl font-bold text-blue-600">${product.price}</span>
          <Badge variant="secondary" className="capitalize text-xs">
            {product.category}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="p-2 md:p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-xs md:text-sm py-2 md:py-2"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
