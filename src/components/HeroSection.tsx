
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden w-full" style={{
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      left: 0,
      right: 0
    }}>
      {/* Background image */}
      <img
        src="/heroback.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: 'scaleX(-1)',
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
        onError={(e) => {
          console.log('Background image failed to load:', (e as any).target.src);
        }}
      />
      <div className="container mx-auto px-6 pt-24 pb-20 lg:pt-32 lg:pb-32 relative z-10">
        <div className="flex items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight text-foreground tracking-tight">
                <span className="font-rocaone">Yoga, Reflexology & Aromatics</span>
                <br />
                <span className="italic font-playfair text-purple-600">with Ange</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-foreground max-w-lg leading-relaxed">
                I'm Ange, a 200 YTT qualified yoga teacher with 7 years experience in Ayrshire. I offer weekly yoga classes in Troon, Irvine and Kilwinning, plus reflexology treatments and aromatics products. Perfect for beginners and those seeking holistic healing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 transform" style={{backgroundColor: '#7756a5'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#6a4a8f'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#7756a5'}>
                Book Your Class
              </button>
              <button
                className="border-2 px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 transform"
                style={{ backgroundColor: '#ffffff', color: '#7756a5', borderColor: '#ffffff' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#f3f4f6'; (e.target as HTMLElement).style.color = '#7756a5'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#ffffff'; (e.target as HTMLElement).style.color = '#7756a5'; }}
              >
                Shop Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
