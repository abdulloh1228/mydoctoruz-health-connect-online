
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Video, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MD</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">MYDoctorUZ</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#doctors" className="text-gray-600 hover:text-blue-600 transition-colors">Doctors</a>
            <a href="#pharmacy" className="text-gray-600 hover:text-blue-600 transition-colors">Pharmacy</a>
            <a href="#articles" className="text-gray-600 hover:text-blue-600 transition-colors">Health Tips</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span>UZ</span>
              <span>|</span>
              <span>RU</span>
              <span>|</span>
              <span>EN</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Start Free Check
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
