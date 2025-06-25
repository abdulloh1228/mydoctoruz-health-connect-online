
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

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
            
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline">Welcome back!</span>
                </div>
                <Button 
                  onClick={handleAuthAction}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleAuthAction}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
