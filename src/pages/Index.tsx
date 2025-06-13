
import React, { useState, useMemo } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import AuthModal from '../components/AuthModal';
import CartModal from '../components/CartModal';
import ProductDetailModal from '../components/ProductDetailModal';
import Footer from '../components/Footer';
import { products, Product } from '../data/products';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategories, priceRange]);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onCartClick={() => setIsCartModalOpen(true)}
            onAuthClick={() => setIsAuthModalOpen(true)}
          />
          
          <div className="container mx-auto px-4 py-8">
            <div className="flex gap-8">
              <Sidebar
                selectedCategories={selectedCategories}
                onCategoryChange={setSelectedCategories}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
              />
              
              <div className="flex-1">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-blue-800 mb-2">Product Listing</h1>
                  <p className="text-gray-600">
                    Found {filteredProducts.length} products
                  </p>
                </div>
                
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-500">No products found</p>
                    <p className="text-gray-400">Try adjusting your filters or search query</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onProductClick={setSelectedProduct}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <Footer />
          
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
          />
          
          <CartModal
            isOpen={isCartModalOpen}
            onClose={() => setIsCartModalOpen(false)}
          />
          
          <ProductDetailModal
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default Index;
