
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Video, MapPin, FileText, Clock, Calendar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "AI Symptom Checker",
      description: "Get instant health insights with our advanced AI that understands your symptoms in Uzbek and Russian.",
      highlight: "2-minute analysis"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Video Consultations", 
      description: "Connect with certified doctors via secure video calls from anywhere in rural Uzbekistan.",
      highlight: "24/7 available"
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Easy Appointments",
      description: "Book appointments at local clinics and hospitals with just a few taps on your phone.",
      highlight: "Local clinics"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Pharmacy Finder",
      description: "Locate nearby pharmacies and check medicine availability before you travel.",
      highlight: "Real-time stock"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Health Education",
      description: "Access personalized health articles and tips based on your symptoms and concerns.",
      highlight: "Personalized"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Offline Support",
      description: "Essential features work even with poor internet connection in remote areas.",
      highlight: "Offline-first"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Healthcare at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for rural communities in Uzbekistan, our platform brings 
            modern healthcare to every family, no matter how remote.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {feature.icon}
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
