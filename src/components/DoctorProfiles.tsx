
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Phone } from 'lucide-react';

const DoctorProfiles = () => {
  const doctors = [
    {
      name: "Dr. Aziza Karimova",
      nameUz: "Doktor Aziza Karimova",
      specialty: "General Medicine",
      specialtyUz: "Umumiy terapiya",
      experience: "15 years",
      languages: ["Uzbek", "Russian", "English"],
      rating: 4.9,
      consultations: 1250,
      image: "/api/placeholder/120/120",
      available: true
    },
    {
      name: "Dr. Bobur Rahimov",
      nameUz: "Doktor Bobur Rahimov", 
      specialty: "Pediatrics",
      specialtyUz: "Bolalar shifokori",
      experience: "12 years",
      languages: ["Uzbek", "Russian"],
      rating: 4.8,
      consultations: 980,
      image: "/api/placeholder/120/120",
      available: true
    },
    {
      name: "Dr. Nilufar Tosheva",
      nameUz: "Doktor Nilufar Tosheva",
      specialty: "Women's Health",
      specialtyUz: "Ayollar salomatligi",
      experience: "18 years", 
      languages: ["Uzbek", "Russian"],
      rating: 4.9,
      consultations: 1680,
      image: "/api/placeholder/120/120",
      available: false
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certified Doctors Ready to Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with experienced, licensed doctors who understand the unique healthcare 
            challenges of rural Uzbekistan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-gray-500">{doctor.nameUz}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">★</span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{doctor.rating}</span>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Specialty:</span>
                      <span className="font-medium">{doctor.specialty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{doctor.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Languages:</span>
                      <span className="font-medium text-sm">{doctor.languages.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Consultations:</span>
                      <span className="font-medium">{doctor.consultations}+</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700" 
                      disabled={!doctor.available}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Video Call
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      disabled={!doctor.available}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Book
                    </Button>
                  </div>
                  
                  {!doctor.available && (
                    <p className="text-sm text-gray-500 text-center">Available tomorrow at 9:00 AM</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorProfiles;
