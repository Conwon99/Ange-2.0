
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
      {/* Full-width fixed header */}
      <Header />

      {/* Full-width hero section */}
      <main>
        <HeroSection />

        {/* Full-width banner */}
        <StatsSection />

        {/* Constrained content sections */}
        <div className="max-w-6xl mx-auto">
          <ServicesSection />
          <ScheduleSection />
          <ReflexologySection />
          <TeamSection />
          <TestimonialsSection />
          <PricingSection />
          <ContactSection />
          <FAQSection />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
