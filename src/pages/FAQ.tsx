import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';

const FAQ = () => {
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions about yoga classes, reflexology treatments, and booking with Ange.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
