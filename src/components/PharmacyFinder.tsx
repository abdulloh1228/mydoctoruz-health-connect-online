
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';

const PharmacyFinder = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState<number | null>(null);

  const pharmacies = [
    {
      name: "Pharma Plus",
      nameUz: "Farma Plyus",
      address: "Tashkent Street 15, Fergana",
      addressUz: "Toshkent ko'chasi 15, Farg'ona",
      distance: "2.3 km",
      phone: "+998 73 244 55 66",
      hours: "08:00 - 22:00",
      available: true,
      medicines: ["Paracetamol", "Ibuprofen", "Amoxicillin"]
    },
    {
      name: "Health Care Pharmacy",
      nameUz: "Salomatlik Dorixonasi", 
      address: "Mustaqillik Street 45, Fergana",
      addressUz: "Mustaqillik ko'chasi 45, Farg'ona",
      distance: "3.1 km",
      phone: "+998 73 255 77 88",
      hours: "07:00 - 21:00",
      available: true,
      medicines: ["Aspirin", "Vitamins", "Blood pressure meds"]
    },
    {
      name: "City Pharmacy",
      nameUz: "Shahar Dorixonasi",
      address: "Amir Temur Street 22, Fergana", 
      addressUz: "Amir Temur ko'chasi 22, Farg'ona",
      distance: "4.7 km",
      phone: "+998 73 266 99 00",
      hours: "24/7",
      available: true,
      medicines: ["Antibiotics", "Diabetes meds", "Heart medicine"]
    }
  ];

  return (
    <section id="pharmacy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Nearby Pharmacies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Locate pharmacies near you and check medicine availability before you travel. 
            Save time and ensure you get the medications you need.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Location</h3>
              <div className="flex space-x-3">
                <input 
                  type="text" 
                  placeholder="Enter your location..." 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {pharmacies.map((pharmacy, index) => (
                <Card 
                  key={index} 
                  className={`border cursor-pointer transition-all duration-200 ${
                    selectedPharmacy === index 
                      ? 'border-blue-500 shadow-md' 
                      : 'border-gray-100 hover:shadow-sm'
                  }`}
                  onClick={() => setSelectedPharmacy(index)}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{pharmacy.name}</h4>
                          <p className="text-sm text-gray-500">{pharmacy.nameUz}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-blue-600 font-medium">{pharmacy.distance}</span>
                          <div className="w-3 h-3 bg-green-500 rounded-full ml-auto mt-1"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{pharmacy.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{pharmacy.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{pharmacy.hours}</span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-sm text-gray-500 mb-2">Available medicines:</p>
                        <div className="flex flex-wrap gap-2">
                          {pharmacy.medicines.map((medicine, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                            >
                              {medicine}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 pt-3">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Get Directions
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Call Pharmacy
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p>Interactive Map View</p>
              <p className="text-sm">Shows pharmacy locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyFinder;
