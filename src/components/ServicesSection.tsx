
import React from 'react';
import { Heart, Footprints, Sparkles } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Yoga Classes",
      description: "Weekly classes in Troon, Irvine and Kilwinning, plus online zoom classes. Hatha and Yin styles for all levels. Special beach yoga sessions and monthly bedtime yoga with sound bath.",
      image: "/Contact/yogapose.jpg"
    },
    {
      icon: <Footprints className="w-12 h-12" />,
      title: "Reflexology Treatments",
      description: "60-minute aromatherapy reflexology sessions in my Irvine studio. Available Thursdays and Fridays for stress relief, natural healing, and improved sleep.",
      image: "/assetsnew/reflex.png"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Aromatics Products",
      description: "Aromatics71 with Ange - room mists, essential oils, and yoga equipment. Enhance your practice and create a calming atmosphere with our signature blends.",
      image: "/angeassets/aromatics.jpg"
    }
  ];

  return (
    <section id="services" className="pt-8 pb-20 lg:pt-12 lg:pb-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollAnimate className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group rounded-2xl bg-purple-100/80 backdrop-blur-sm hover:bg-purple-200/80 transition-all duration-300 hover:scale-105 transform hover:shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image section - top half */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content section - bottom half */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-normal text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {service.title === "Aromatics Products" ? (
                  <div className="w-full text-gray-500 px-6 py-3 rounded-full font-medium mt-auto block text-center bg-gray-300 cursor-not-allowed">
                    Coming Soon
                  </div>
                ) : (
                  <a 
                    href={service.title === "Yoga Classes" ? "/classes-booking" : service.title === "Reflexology Treatments" ? "/classes-booking?tab=reflexology" : "/classes-booking"}
                    className="w-full text-white px-6 py-3 rounded-full transition-all duration-300 font-medium hover:scale-105 transform mt-auto block text-center bg-purple-600 hover:bg-purple-700" 
                  >
                    {service.title === "Yoga Classes" ? "Book Your Class" : "Book Treatment"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default ServicesSection;
