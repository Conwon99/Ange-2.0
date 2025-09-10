import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { trackBooking, trackContact } from '../lib/analytics';
import ScrollAnimate from './ScrollAnimate';

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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-wellness-cream-300 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <ScrollAnimate className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
                <span className="font-rocaone-light">Yoga</span>{' '}
                <span className="italic font-playfair text-foreground">Classes</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Join me for weekly yoga classes in Troon, Irvine, and Kilwinning. I offer a variety of styles including Hatha and Yin yoga, perfect for all levels from beginners to advanced practitioners.
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
              <a href="/classes-booking" className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 font-medium text-lg hover:scale-105 transform text-center whitespace-nowrap" onClick={() => trackBooking('Book Your Class', 'Yoga Classes Section')}>
                Book Your Class
              </a>
              <a 
                href="/zoom-booking"
                className="border-2 px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 transform flex items-center justify-center gap-2"
                style={{ backgroundColor: '#ffffff', color: '#7756a5', borderColor: '#7756a5' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#7756a5'; (e.target as HTMLElement).style.color = '#ffffff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#ffffff'; (e.target as HTMLElement).style.color = '#7756a5'; }}
                onClick={() => trackContact('Message Button', 'Yoga Classes Section')}
              >
                <MessageCircle className="w-5 h-5" />
                Message
              </a>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;