
import React, { useState } from 'react';
import { Search, ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onCartClick,
  onAuthClick
}) => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getTotalItems } = useCart();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          Whatbytes Store
        </div>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-blue-500 border-blue-400 text-white placeholder-blue-200 focus:bg-blue-400"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCartClick}
            className="relative text-white hover:bg-blue-500"
          >
            <ShoppingCart className="w-5 h-5" />
            {getTotalItems() > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs">
                {getTotalItems()}
              </Badge>
            )}
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-500">
                  <User className="w-5 h-5 mr-2" />
                  {user?.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={onAuthClick}
              className="text-white hover:bg-blue-500"
            >
              <User className="w-5 h-5 mr-2" />
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
