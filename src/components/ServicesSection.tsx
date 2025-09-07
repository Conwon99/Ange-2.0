
import React from 'react';
import { Heart, Footprints, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Yoga Classes",
      description: "Weekly classes in Troon, Irvine and Kilwinning. Hatha, Yin, and Ashtanga styles for all levels. Special beach yoga sessions and monthly bedtime yoga with sound bath."
    },
    {
      icon: <Footprints className="w-12 h-12" />,
      title: "Reflexology Treatments",
      description: "60-minute aromatherapy reflexology sessions in my Irvine studio. Available Thursdays and Fridays for stress relief, natural healing, and improved sleep."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Aromatics Products",
      description: "Aromatics71 with Ange - room mists, essential oils, and yoga equipment. Enhance your practice and create a calming atmosphere with our signature blends."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I offer a holistic approach to wellness through yoga, reflexology, and aromatics. Perfect for beginners and those seeking natural healing and balance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card hover:bg-accent/50 transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-normal text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 font-medium hover:scale-105 transform">
            Book Your Class
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
