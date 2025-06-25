
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dilfuza Rakhimova",
      nameUz: "Dilfuza Rahimova",
      location: "Fergana village",
      locationUz: "Farg'ona qishlog'i",
      text: "MYDoctorUZ saved my family time and money. The AI symptom checker helped me understand my child's fever, and the video call with Dr. Bobur was very helpful.",
      textUz: "MYDoctorUZ bizga vaqt va pul tejadi. AI tashxis bolam isitmasini tushunishga yordam berdi, doktor bilan video qo'ng'iroq juda foydali bo'ldi.",
      rating: 5,
      service: "Used AI checker & video consultation"
    },
    {
      name: "Rustam Nazarov", 
      nameUz: "Rustam Nazarov",
      location: "Namangan region",
      locationUz: "Namangan viloyati",
      text: "Living far from the city, this app is a blessing. Found nearby pharmacy and booked appointment at local clinic easily. Very user-friendly.",
      textUz: "Shahardan uzoqda yashab, bu ilova haqiqiy ne'mat. Yaqin dorixona topdim va mahalliy klinikaga bemalol navbat oldim.",
      rating: 5,
      service: "Used pharmacy finder & appointments"
    },
    {
      name: "Gulnora Karimova",
      nameUz: "Gulnora Karimova", 
      location: "Samarkand village",
      locationUz: "Samarqand qishlog'i",
      text: "The health articles are very informative and written in simple language. As a mother of three, I learned so much about child care and nutrition.",
      textUz: "Salomatlik maqolalari juda foydali va oddiy tilda yozilgan. Uch bola onasi sifatida bolalar parvarishi haqida ko'p narsani o'rgandim.",
      rating: 5,
      service: "Reads health education articles"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Rural Families
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real families across rural Uzbekistan who have improved 
            their healthcare access with MYDoctorUZ.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 bg-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                        <p className="text-xs text-blue-600 mt-1">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 text-gray-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2,500+</div>
              <div className="text-sm">Happy Families</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15,000+</div>
              <div className="text-sm">Consultations</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9★</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
