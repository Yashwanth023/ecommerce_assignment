import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Plus, Minus, Check } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAuthRequired: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, 
  isOpen, 
  onClose, 
  onAuthRequired 
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  if (!product) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-400/50 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      onAuthRequired();
      toast({
        title: "Login Required",
        description: "Please login to add items to your cart.",
        variant: "destructive",
      });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: parseInt(product.id),
        title: product.title,
        price: product.price,
        image: product.image
      });
    }
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.title} added to your cart.`,
    });
    setQuantity(1);
  };

  const getPriceCategoryColor = (category: string) => {
    switch (category) {
      case 'budget': return 'bg-green-100 text-green-800';
      case 'mid-range': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <Badge 
                className={`absolute top-4 right-4 ${getPriceCategoryColor(product.priceCategory)}`}
              >
                {product.priceCategory}
              </Badge>
              {savings > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  Save ${savings}
                </Badge>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">({product.rating})</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-blue-600">
                  ${product.price}
                </div>
                {product.originalPrice && (
                  <div className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </div>
                )}
              </div>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-4">
                <div>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Category</h3>
                  <Badge variant="secondary" className="capitalize">
                    {product.category}
                  </Badge>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="specs" className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Specifications</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div>
              <h3 className="font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
