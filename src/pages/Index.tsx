
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SymptomChecker from '../components/SymptomChecker';
import DoctorProfiles from '../components/DoctorProfiles';
import PharmacyFinder from '../components/PharmacyFinder';
import HealthArticles from '../components/HealthArticles';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <SymptomChecker />
      <DoctorProfiles />
      <PharmacyFinder />
      <HealthArticles />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
