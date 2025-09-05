
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight text-foreground">
                Yoga, Reflexology & Aromatics
                <br />
                <span className="italic font-playfair text-wellness-green-600">with Ange</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                I'm Ange, a 200 YTT qualified yoga teacher with 7 years experience in Ayrshire. I offer weekly yoga classes in Troon, Irvine and Kilwinning, plus reflexology treatments and aromatics products. Perfect for beginners and those seeking holistic healing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium text-lg hover:scale-105 transform">
                Book Your Class
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-lg hover:scale-105 transform">
                Shop Products
              </button>
            </div>
          </div>

          {/* Right Image - Aligned to the right */}
          <div className="lg:flex justify-end">
            <div className="relative">
              <div className="w-full max-w-2xl mx-auto lg:mx-0 aspect-square bg-gradient-to-br from-wellness-green-100 to-wellness-cream-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/hero-ange.png" 
                  alt="Ange teaching yoga in a peaceful beach setting" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-wellness-green-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-wellness-cream-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
