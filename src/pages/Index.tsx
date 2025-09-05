
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import ScheduleSection from '../components/ScheduleSection';
import ReflexologySection from '../components/ReflexologySection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto">
        <Header />
        <main>
          <HeroSection />
        </main>
      </div>
      
      {/* Full-width banner */}
      <StatsSection />
      
      <div className="max-w-6xl mx-auto">
        <main>
          <ServicesSection />
          <ScheduleSection />
          <ReflexologySection />
          <TeamSection />
          <TestimonialsSection />
          <PricingSection />
          <ContactSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
