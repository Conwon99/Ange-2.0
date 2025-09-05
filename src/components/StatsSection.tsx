
import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-wellness-green-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Stats */}
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              3.2<span className="text-3xl">K</span>
            </div>
            <div className="text-lg opacity-90">World champions</div>
          </div>

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              1.8<span className="text-3xl">%</span>
            </div>
            <div className="text-lg opacity-90">Runner up champions</div>
          </div>

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold mb-2">
              4.5<span className="text-3xl">M</span>
            </div>
            <div className="text-lg opacity-90">Sea games participation</div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-lg mb-4 leading-relaxed">
              Once we receive your consult request we match you up with a trainer. This is to ensure that your unique goals, needs, and personalities align.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium">
              Join Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
