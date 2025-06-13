import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import AuthModal from '../components/AuthModal';
import CartModal from '../components/CartModal';
import ProductDetailModal from '../components/ProductDetailModal';
import PaymentPage from '../components/PaymentPage';
import Footer from '../components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isPaymentPageOpen, setIsPaymentPageOpen] = useState(false);

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

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleAuthRequired = () => {
    setIsAuthModalOpen(true);
  };

  const handleCheckout = () => {
    setIsPaymentPageOpen(true);
  };

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
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:flex-shrink-0">
                <Sidebar
                  selectedCategories={selectedCategories}
                  onCategoryChange={setSelectedCategories}
                  priceRange={priceRange}
                  onPriceChange={setPriceRange}
                />
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Products ({filteredProducts.length})
                  </h2>
                  <p className="text-gray-600">
                    {searchQuery && `Search results for "${searchQuery}"`}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onProductClick={handleProductClick}
                      onAuthRequired={handleAuthRequired}
                    />
                  ))}
                </div>
                
                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
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
            onCheckout={handleCheckout}
          />
          
          <ProductDetailModal
            product={selectedProduct}
            isOpen={isProductModalOpen}
            onClose={() => setIsProductModalOpen(false)}
            onAuthRequired={handleAuthRequired}
          />
          
          <PaymentPage
            isOpen={isPaymentPageOpen}
            onClose={() => setIsPaymentPageOpen(false)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default Index;
