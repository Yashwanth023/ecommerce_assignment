import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface FeaturedProductProps {
  product: Product;
  onProductClick: (product: Product) => void;
  onAuthRequired: () => void;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ 
  product, 
  onProductClick, 
  onAuthRequired 
}) => {
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
        className={`w-3 h-3 ${
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
    <Card className="sticky top-4">
      <CardContent className="p-4">
        <div className="text-center mb-3">
          <Badge className="bg-blue-100 text-blue-800 mb-2">Featured Product</Badge>
          <h3 className="font-bold text-lg text-blue-600">Deal of the Day</h3>
        </div>
        
        <div 
          className="cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <div className="aspect-square overflow-hidden rounded-lg mb-3 relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
            {product.originalPrice && (
              <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                Save ${(product.originalPrice - product.price).toFixed(0)}
              </Badge>
            )}
          </div>
          
          <h4 className="font-semibold text-sm mb-2 line-clamp-2">{product.title}</h4>
          
          <div className="flex items-center justify-center gap-1 mb-2">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
          </div>
          
          <div className="text-center mb-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl font-bold text-blue-600">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <Badge variant="secondary" className="capitalize text-xs mt-1">
              {product.priceCategory}
            </Badge>
          </div>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeaturedProduct;
