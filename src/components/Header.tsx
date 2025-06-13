import React from 'react';
import { Store, Search, ShoppingCart, User, LogOut, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onAuthClick: () => void;
  onOrdersClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  onSearchChange, 
  onCartClick, 
  onAuthClick,
  onOrdersClick 
}) => {
  const { user, logout, isAuthenticated } = useAuth();
  const { items } = useCart();
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Store className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">ShopNow</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                variant="ghost"
                onClick={onOrdersClick}
                className="hidden md:flex items-center gap-2"
              >
                <Package className="w-5 h-5" />
                Orders
              </Button>
            )}
            
            <Button
              variant="ghost"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                  {cartItemsCount}
                </Badge>
              )}
              <span className="hidden md:inline ml-2">Cart</span>
            </Button>

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className="hidden md:inline text-sm text-gray-600">
                  Hello, {user?.name}
                </span>
                <Button
                  variant="outline"
                  onClick={logout}
                  className="text-sm"
                >
                  <LogOut className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={onAuthClick}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <User className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Login</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
