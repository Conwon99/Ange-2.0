
import React from 'react';
import { ArrowRight } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone">
            About Ange
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Philosophy Card */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium mb-4 opacity-90">MY PHILOSOPHY</p>
              
              <h3 className="text-3xl font-normal mb-6 leading-tight italic font-playfair">
                "The most important relationship we have is with ourselves"
              </h3>
              
              <p className="text-primary-foreground/90 leading-relaxed mb-8">
                I create safe, nurturing learning environments with a gentle, supportive, and creative teaching style. I believe you know your body best, and I focus on holistic wellbeing and balance.
              </p>
            </div>
            
            <button className="bg-primary-foreground text-primary px-6 py-3 rounded-full hover:bg-primary-foreground/90 transition-all duration-300 font-medium self-start hover:scale-105 transform">
              Book a Class
            </button>
          </div>

          {/* Ange's Journey */}
          <div className="group">
            <div className="bg-gradient-to-br from-wellness-green-100 to-wellness-cream-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="aspect-[4/5] bg-gradient-to-br from-wellness-green-200 to-wellness-cream-200">
                <img 
                  src="/lovable-uploads/f3ae8157-240d-4998-8153-dcb44abf015c.png" 
                  alt="Ange - 200 YTT qualified yoga teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-normal text-foreground">My Journey</h4>
                  <button className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200">
                    More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Started yoga in my 20s in Edinburgh. 2018: Completed 200 YTT training. 25 years teaching experience in Further Education.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="group">
            <div className="bg-gradient-to-br from-wellness-cream-100 to-wellness-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="aspect-[4/5] bg-gradient-to-br from-wellness-cream-200 to-wellness-green-200">
                <img 
                  src="/lovable-uploads/3e91ddb7-904e-420f-a600-46c29455342e.png" 
                  alt="Ange's qualifications and training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-normal text-foreground">Qualifications</h4>
                  <button className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200">
                    More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  200 YTT qualified yoga teacher. Trained in reflexology and aromatherapy. 7 years in business serving Ayrshire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
