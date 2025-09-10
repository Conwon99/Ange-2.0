
import React from 'react';
import { Heart, Footprints, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Yoga Classes",
      description: "Weekly classes in Troon, Irvine and Kilwinning, plus online zoom classes. Hatha, Yin, and Ashtanga styles for all levels. Special beach yoga sessions and monthly bedtime yoga with sound bath.",
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
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
            <span className="font-rocaone-light">My</span>{' '}
            <span className="italic font-playfair text-foreground">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I offer a holistic approach to wellness through yoga, reflexology, and aromatics. Perfect for beginners and those seeking natural healing and balance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group rounded-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden flex flex-col ${
                service.title === "Aromatics Products" 
                  ? "bg-gray-100/80 hover:bg-gray-200/80 opacity-60" 
                  : "bg-purple-100/80 hover:bg-purple-200/80 hover:scale-105 transform hover:shadow-lg"
              }`}
            >
              {/* Image section - top half */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    service.title === "Aromatics Products" 
                      ? "grayscale" 
                      : "group-hover:scale-110"
                  }`}
                />
              </div>
              
              {/* Content section - bottom half */}
              <div className="p-8 flex flex-col flex-grow">
                <div className={`mb-6 transition-transform duration-300 ${
                  service.title === "Aromatics Products" 
                    ? "text-gray-400" 
                    : "text-primary group-hover:scale-110"
                }`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-2xl font-normal mb-4 ${
                  service.title === "Aromatics Products" 
                    ? "text-gray-500" 
                    : "text-foreground"
                }`}>
                  {service.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 flex-grow ${
                  service.title === "Aromatics Products" 
                    ? "text-gray-400" 
                    : "text-muted-foreground"
                }`}>
                  {service.description}
                </p>
                
                {service.title === "Aromatics Products" ? (
                  <div className="w-full text-gray-500 px-6 py-3 rounded-full font-medium mt-auto block text-center bg-gray-300 cursor-not-allowed">
                    Coming Soon
                  </div>
                ) : (
                  <a 
                    href={service.title === "Yoga Classes" ? "/classes-booking" : "/classes-booking"}
                    className="w-full text-white px-6 py-3 rounded-full transition-all duration-300 font-medium hover:scale-105 transform mt-auto block text-center bg-purple-600 hover:bg-purple-700" 
                  >
                    {service.title === "Yoga Classes" ? "Book Your Class" : "Book Treatment"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
