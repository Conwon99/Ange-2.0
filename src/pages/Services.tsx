import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Full-width fixed header */}
      <Header />
      
      {/* Main content */}
      <main className="pt-24">
        {/* Page Header */}
        <section className="pt-20 pb-8 lg:pt-32 lg:pb-12 bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight text-foreground mb-6 font-rocaone tracking-tight">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the range of wellness services offered by Ange, from yoga classes to reflexology treatments and aromatics products.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
