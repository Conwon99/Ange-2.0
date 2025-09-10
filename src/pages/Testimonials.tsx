import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Full-width fixed header */}
      <Header />
      
      {/* Main content */}
      <main className="pt-24">
        {/* Page Header */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight text-foreground mb-6 font-rocaone tracking-tight">
                Testimonials
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hear from our community of students and clients who have experienced the transformative power of yoga and reflexology with Ange.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
