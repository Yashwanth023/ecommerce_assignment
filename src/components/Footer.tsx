
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            <ul className="space-y-2 text-blue-200">
              <li>All</li>
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Accessories</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-blue-200">
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-4 text-center text-blue-200">
          © 2024 Whatbytes Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
