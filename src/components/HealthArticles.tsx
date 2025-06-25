
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Clock } from 'lucide-react';

const HealthArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', nameUz: 'Barcha maqolalar' },
    { id: 'prevention', name: 'Prevention', nameUz: 'Oldini olish' },
    { id: 'nutrition', name: 'Nutrition', nameUz: 'Ovqatlanish' },
    { id: 'mental', name: 'Mental Health', nameUz: 'Ruhiy salomatlik' },
    { id: 'children', name: 'Child Health', nameUz: 'Bolalar salomatligi' }
  ];

  const articles = [
    {
      title: "Winter Health Tips for Rural Families",
      titleUz: "Qishki salomatlik maslahatlari",
      category: "prevention",
      readTime: "5 min",
      summary: "Essential tips to stay healthy during cold winter months in rural areas.",
      summaryUz: "Qishda sog'lom qolish uchun muhim maslahatlar.",
      author: "Dr. Aziza Karimova",
      date: "2 days ago",
      image: "🌨️"
    },
    {
      title: "Healthy Eating on a Budget",
      titleUz: "Arzon va foydali ovqatlanish",
      category: "nutrition", 
      readTime: "7 min",
      summary: "How to maintain a nutritious diet without spending too much money.",
      summaryUz: "Kam pul sarflagan holda to'g'ri ovqatlanish yo'llari.",
      author: "Dr. Nilufar Tosheva",
      date: "1 week ago", 
      image: "🥗"
    },
    {
      title: "Managing Stress in Rural Life",
      titleUz: "Qishloqda stress bilan kurash",
      category: "mental",
      readTime: "6 min", 
      summary: "Practical ways to handle stress and anxiety in rural communities.",
      summaryUz: "Qishloq sharoitida stress va tashvishni engish usullari.",
      author: "Dr. Bobur Rahimov",
      date: "3 days ago",
      image: "🧘"
    },
    {
      title: "Common Childhood Illnesses",
      titleUz: "Bolalardagi keng tarqalgan kasalliklar", 
      category: "children",
      readTime: "8 min",
      summary: "How to recognize and treat common illnesses in children at home.",
      summaryUz: "Bolalardagi kasalliklarni aniqlash va davolash.",
      author: "Dr. Bobur Rahimov", 
      date: "5 days ago",
      image: "👶"
    },
    {
      title: "Herbal Remedies from Uzbekistan",
      titleUz: "O'zbekistondagi dorivor o'simliklar",
      category: "prevention",
      readTime: "10 min",
      summary: "Traditional healing plants and how to use them safely.",
      summaryUz: "An'anaviy shifobakhsh o'simliklar va ulardan foydalanish.",
      author: "Dr. Aziza Karimova",
      date: "1 week ago",
      image: "🌿"
    },
    {
      title: "Clean Water and Sanitation",
      titleUz: "Toza suv va gigiyena",
      category: "prevention", 
      readTime: "4 min",
      summary: "Importance of clean water and basic sanitation in rural areas.",
      summaryUz: "Qishloqda toza suv va gigiyenaning ahamiyati.",
      author: "Dr. Nilufar Tosheva",
      date: "2 weeks ago",
      image: "💧"
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Health Education & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with personalized health articles written by certified doctors 
            specifically for rural Uzbekistan communities.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-4xl mb-3">{article.image}</div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500">{article.titleUz}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs text-blue-600 font-medium">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">{article.author}</p>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Read Article
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthArticles;
