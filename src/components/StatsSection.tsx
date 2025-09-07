
import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-wellness-green-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Stats */}
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              7<span className="text-3xl">+</span>
            </div>
            <div className="text-lg opacity-90">Years Guiding Wellness in Ayrshire</div>
          </div>

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              1.2<span className="text-3xl">K</span>
            </div>
            <div className="text-lg opacity-90">Students Empowered Through Yoga & Reflexology</div>
          </div>

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              3
            </div>
            <div className="text-lg opacity-90">Locations: Troon, Irvine & Kilwinning</div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-lg mb-4 leading-relaxed">
              Join Ange's holistic wellness community and experience the transformative power of yoga, reflexology, and aromatics. Perfect for beginners and those seeking natural healing.
            </p>
            <a href="https://bookwhen.com/yoga71withange" className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium inline-block">
              Book Your Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
