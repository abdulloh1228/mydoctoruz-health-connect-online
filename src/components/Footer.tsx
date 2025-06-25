
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Video, MapPin, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MD</span>
              </div>
              <span className="text-2xl font-bold">MYDoctorUZ</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bringing modern healthcare to every family in rural Uzbekistan. 
              24/7 access to medical support, right from your home.
            </p>
            <div className="flex space-x-2">
              <span className="text-sm text-gray-400">Languages:</span>
              <span className="text-sm text-blue-400">UZ • RU • EN</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>AI Symptom Checker</span>
              </li>
              <li className="flex items-center space-x-2">
                <Video className="w-4 h-4 text-blue-400" />
                <span>Video Consultations</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Pharmacy Finder</span>
              </li>
              <li className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Health Education</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Emergency</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Get Started</h3>
            <p className="text-gray-300">
              Ready to improve your family's healthcare access?
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Start Free Health Check
            </Button>
            <div className="text-sm text-gray-400">
              <p>Emergency: 103</p>
              <p>Support: +998 78 150 00 03</p>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 MYDoctorUZ. All rights reserved. Licensed healthcare platform.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Licenses</a>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-medium">
            🎯 Get your health check in 2 minutes. Try MYDoctorUZ now — it's free!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
