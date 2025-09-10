
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Wendy Wood",
      text: "I absolutely love my yoga practice with Ange. Since joining the classes last year I really feel the benefits both to my mind & physical wellbeing. Ange sprays her own blends of aromatherapy mists into the air which are just beautiful.",
      rating: 5,
      image: "/angeassets/test1.jpg"
    },
    {
      name: "Corinne Pennington",
      text: "I love coming to Ange's classes. Each month she brings a new focus, which keeps the practice fresh and meaningful. She isn't just a wonderful teacher, but has also become a real friend and support along the way.",
      rating: 5,
      image: "/angeassets/test2.jpg"
    },
    {
      name: "Liane Hunt",
      text: "Yoga with Ange is special. She has the ability to create a sense of ease as soon as you walk through the door. She creates a beautiful ambience with her essential oil room sprays and her energy as a person allows you to instantly feel safe and calm.",
      rating: 5,
      image: "/angeassets/TEST3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="pt-8 pb-20 lg:pt-12 lg:pb-32 bg-background">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-purple-100/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
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
