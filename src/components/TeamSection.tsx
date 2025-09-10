
import React from 'react';
import { ArrowRight } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
            <span className="font-rocaone-light">About</span>{' '}
            <span className="italic font-playfair text-foreground">Ange</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Philosophy Card */}
          <div className="bg-purple-100/80 backdrop-blur-sm text-foreground p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium mb-4 text-muted-foreground">MY PHILOSOPHY</p>
              
              <h3 className="text-3xl font-normal mb-6 leading-tight italic font-playfair text-foreground tracking-tight">
                "Health is a state of complete harmony of the body, mind and spirit"
              </h3>
              <p className="text-sm text-muted-foreground mb-4">B.K.S. Iyengar</p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                I create safe, nurturing learning environments with a gentle, supportive, and creative teaching style. I believe you know your body best, and I focus on holistic wellbeing and balance.
              </p>
            </div>
            
            <a 
              href="https://bookwhen.com/yoga71withange" 
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 font-medium self-start hover:scale-105 transform inline-block"
            >
              Book a Class
            </a>
          </div>

          {/* Ange's Journey */}
          <div className="group">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-200 to-purple-100">
                <img 
                  src="/assetsnew/Landing page small image.jpg" 
                  alt="Ange - 200 YTT qualified yoga teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-normal text-foreground">My Journey</h4>
                  <a 
                    href="/about" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Started yoga in my 20s in Edinburgh. 2018: Completed 200 YTT training. 25 years teaching experience in Further Education.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 to-purple-200">
                <img 
                  src="/assetsnew/About Ange.jpg" 
                  alt="Ange's qualifications and training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-normal text-foreground">Qualifications</h4>
                  <a 
                    href="/about" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
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
