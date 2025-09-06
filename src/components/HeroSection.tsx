
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
                <span className="font-rocaone">Yoga, Reflexology & Aromatics</span>
                <br />
                <span className="italic font-playfair" style={{color: '#7756a5'}}>with Ange</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                I'm Ange, a 200 YTT qualified yoga teacher with 7 years experience in Ayrshire. I offer weekly yoga classes in Troon, Irvine and Kilwinning, plus reflexology treatments and aromatics products. Perfect for beginners and those seeking holistic healing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 transform" style={{backgroundColor: '#7756a5'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6a4a8f'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7756a5'}>
                Book Your Class
              </button>
              <button className="border-2 px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 transform" style={{borderColor: '#7756a5', color: '#7756a5'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#7756a5'; e.target.style.color = 'white'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#7756a5'}}>
                Shop Products
              </button>
            </div>
          </div>

          {/* Right Image - Aligned to the right */}
          <div className="lg:flex justify-end">
            <div className="relative">
              <div className="w-full max-w-6xl mx-auto lg:mx-0 aspect-square overflow-hidden">
              <img
                src="/ange-hero-purp.png"
                alt="Ange teaching yoga in a peaceful beach setting"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Image failed to load, trying fallback');
                  e.target.src = '/hero-ange.png';
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
