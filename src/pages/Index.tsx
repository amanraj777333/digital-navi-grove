
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import ContactSection from '@/components/home/ContactSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy overflow-hidden font-inter">
      <Navbar />
      <Hero />
      <ServicesSection />
      <HowWeWorkSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <PortfolioSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
