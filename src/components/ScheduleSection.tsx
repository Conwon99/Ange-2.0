import React from 'react';
import { Button } from './ui/button';

const ScheduleSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/yoga-class-photo.jpg"
                  alt="Yoga class in session with Ange teaching"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-wellness-green-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-wellness-cream-300 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6">
                Yoga Classes
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Join me for weekly yoga classes in Troon, Irvine, and Kilwinning. I offer a variety of styles including Hatha, Yin, and Ashtanga yoga, perfect for all levels from beginners to advanced practitioners.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Experience the benefits of regular yoga practice in a supportive, nurturing environment. Each class is designed to help you connect with your body, reduce stress, and improve your overall wellbeing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Weekly classes in multiple locations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Special beach yoga sessions (weather permitting)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Monthly bedtime yoga & sound bath</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">All levels welcome - beginners encouraged</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://bookwhen.com/yoga71withange" className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium text-lg hover:scale-105 transform text-center">
                Book Your Class
              </a>
              <a href="#contact" className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-lg hover:scale-105 transform text-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;