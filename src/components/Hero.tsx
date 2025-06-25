
import React from 'react';
import { Button } from '@/components/ui/button';
import { Video, Phone, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Healthcare for
                <span className="text-blue-600"> Rural Uzbekistan</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get instant AI symptom checks, video consultations with certified doctors, 
                and find nearby pharmacies — all from your home in rural areas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Get Health Check - FREE
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Video className="w-5 h-5 mr-2" />
                Book Video Call
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Certified Doctors</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Quick Health Check</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-700">🤒 Feeling unwell? Describe your symptoms...</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <div className="text-2xl mb-1">🤕</div>
                      <div className="text-sm text-gray-700">Headache</div>
                    </button>
                    <button className="p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <div className="text-2xl mb-1">😷</div>
                      <div className="text-sm text-gray-700">Cold/Flu</div>
                    </button>
                    <button className="p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <div className="text-2xl mb-1">🤢</div>
                      <div className="text-sm text-gray-700">Stomach</div>
                    </button>
                    <button className="p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <div className="text-2xl mb-1">💪</div>
                      <div className="text-sm text-gray-700">Body Pain</div>
                    </button>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start AI Analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
