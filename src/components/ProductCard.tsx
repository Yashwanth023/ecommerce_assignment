import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
  onAuthRequired: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick, onAuthRequired }) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!isAuthenticated) {
      onAuthRequired();
      toast({
        title: "Login Required",
        description: "Please login to add items to your cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: parseInt(product.id),
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

  const getPriceCategoryColor = (category: string) => {
    switch (category) {
      case 'budget': return 'bg-green-100 text-green-800';
      case 'mid-range': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 h-full flex flex-col"
      onClick={() => onProductClick(product)}
    >
      <CardContent className="p-2 md:p-4 flex-1">
        <div className="aspect-square overflow-hidden rounded-lg mb-2 md:mb-4 relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
          <Badge 
            className={`absolute top-2 right-2 text-xs ${getPriceCategoryColor(product.priceCategory)}`}
          >
            {product.priceCategory}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 line-clamp-2">{product.title}</h3>
        
        <div className="flex items-center gap-1 mb-1 md:mb-2">
          {renderStars(product.rating)}
          <span className="text-xs md:text-sm text-gray-600 ml-1">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between mb-2 md:mb-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-lg md:text-2xl font-bold text-blue-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
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
