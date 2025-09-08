
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Wendy Wood",
      text: "I absolutely love my yoga practice with Ange. Since joining the classes last year I really feel the benefits both to my mind & physical wellbeing. Ange sprays her own blends of aromatherapy mists into the air which are just beautiful.",
      rating: 5
    },
    {
      name: "Corinne Pennington",
      text: "I love coming to Ange's classes. Each month she brings a new focus, which keeps the practice fresh and meaningful. She isn't just a wonderful teacher, but has also become a real friend and support along the way.",
      rating: 5
    },
    {
      name: "Liane Hunt",
      text: "Yoga with Ange is special. She has the ability to create a sense of ease as soon as you walk through the door. She creates a beautiful ambience with her essential oil room sprays and her energy as a person allows you to instantly feel safe and calm.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
            <span className="font-rocaone-light">What My</span>{' '}
            <span className="italic font-playfair text-foreground">Clients Say</span>
          </h2>
          <p className="text-xl text-foreground mb-2">
            Real experiences from my yoga and reflexology clients
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-purple-100/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-800 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-normal text-foreground">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
