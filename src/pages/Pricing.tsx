import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, Clock, MapPin, Check, Footprints } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Full-width fixed header */}
      <Header />

      {/* Main content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-wellness-green-50 to-wellness-green-100">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight text-foreground mb-6 font-rocaone">
                Pricing & Packages
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Choose the perfect wellness package for your journey. All prices include personalized attention and holistic healing approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Yoga Pricing Cards */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
                Yoga Classes
              </h2>
              <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Choose the perfect yoga package for your journey. All prices include personalized attention and holistic healing approaches from Ange's 7+ years of experience in Ayrshire.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <Card className="bg-purple-100/80 backdrop-blur-sm hover:bg-purple-200/80 border-0 p-8 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-medium mb-4 text-foreground">
                    Unlimited Live/Zoom
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                      £48
                    </span>
                </div>
                  <p className="text-sm text-muted-foreground">
                    monthly pass
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <a 
                    href="https://bookwhen.com/yoga71withange/passes"
                    className="w-full py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 inline-block text-center bg-purple-600 text-white hover:bg-purple-700"
                  >
                    Book Pass
                  </a>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                      <span className="text-sm leading-relaxed text-foreground">
                    Unlimited live classes in Troon, Irvine & Kilwinning
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                      <span className="text-sm leading-relaxed text-foreground">
                    Unlimited Zoom classes
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                      <span className="text-sm leading-relaxed text-foreground">
                    All yoga styles included
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                      <span className="text-sm leading-relaxed text-foreground">
                    Perfect for regular practitioners
                      </span>
                  </li>
                </ul>
                </CardContent>
              </Card>

              <Card className="bg-purple-600 text-white border-0 p-8 transition-all duration-300 hover:scale-105 transform scale-105">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-medium mb-4 text-white">
                    Drop-in Classes
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                      £9
                    </span>
                  </div>
                  <p className="text-sm text-white/80">
                    per class
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <a 
                    href="https://bookwhen.com/yoga71withange/passes"
                    className="w-full py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 inline-block text-center bg-white text-purple-600 hover:bg-white/90"
                  >
                    Book Class
                  </a>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                      <span className="text-sm leading-relaxed text-white/90">
                        £9 for regular classes
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                      <span className="text-sm leading-relaxed text-white/90">
                        £5 for special offers
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                      <span className="text-sm leading-relaxed text-white/90">
                        £7 for Beach Yoga
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                      <span className="text-sm leading-relaxed text-white/90">
                        Perfect for trying out
                      </span>
                  </li>
                </ul>
                </CardContent>
              </Card>

              <Card className="bg-purple-100/80 backdrop-blur-sm hover:bg-purple-200/80 border-0 p-8 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-medium mb-4 text-foreground">
                    Unlimited Zoom-Only
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                      £25
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    monthly pass
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <a 
                    href="/zoom-booking"
                    className="w-full py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 inline-block text-center bg-purple-600 text-white hover:bg-purple-700"
                >
                  Book Pass
                </a>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                      <span className="text-sm leading-relaxed text-foreground">
                        Unlimited Zoom classes only
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                      <span className="text-sm leading-relaxed text-foreground">
                        All yoga styles included
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                      <span className="text-sm leading-relaxed text-foreground">
                        Perfect for home practice
                      </span>
                  </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" />
                      <span className="text-sm leading-relaxed text-foreground">
                        Great value for online sessions
                      </span>
                  </li>
                </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reflexology Pricing */}
        <section className="py-20 lg:py-32 bg-purple-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
                Reflexology Sessions
              </h2>
              <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Experience the healing power of aromatherapy reflexology in a peaceful setting. These 60-minute treatments focus on your feet to promote natural healing, stress relief, and improved wellbeing.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <Footprints className="w-6 h-6" />
                    Reflexology Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Availability
                      </h3>
                      <ul className="space-y-2 text-white/90">
                        <li>• Thursdays and Fridays</li>
                        <li>• During the day (last appointments at 3:30pm)</li>
                        <li>• Irvine studio (in-home)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Session Details
                      </h3>
                      <ul className="space-y-2 text-white/90">
                        <li>• 60-minute sessions</li>
                        <li>• Aromatherapy included</li>
                        <li>• Gentle, non-invasive</li>
                        <li>• All levels welcome</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center pt-4 border-t border-white/20">
                    <div className="text-3xl font-bold mb-2">£40</div>
                    <p className="text-white/80">per session</p>
                  </div>
                  <div className="text-center">
                    <a 
                      href="/#contact" 
                      className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-300 font-medium text-lg inline-block"
                    >
                      Book Session
                </a>
              </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone">
                Additional Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Special workshops, retreats, and corporate wellness programs available upon request.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-rocaone text-foreground mb-4">Special Events</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Bedtime Yoga & Sound Bath - Monthly</li>
                  <li>• Barassie Beach Yoga - Weather permitting</li>
                  <li>• Annual Wellness Weekend Retreat</li>
                  <li>• Corporate & Charity Workshops</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Prices vary by event. Contact for details and availability.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-rocaone text-foreground mb-4">Aromatics Products</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Essential oil blends</li>
                  <li>• Sleep blend aromatics</li>
                  <li>• Wellness gift sets</li>
                  <li>• Custom formulations</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Available at classes and by special order. Perfect for home wellness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone">
                Ready to Start Your Wellness Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join over 1,200 students who have transformed their wellbeing with Ange's holistic approach to yoga, reflexology, and aromatics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://bookwhen.com/yoga71withange" 
                  className="bg-wellness-green-600 text-white px-8 py-4 rounded-full hover:bg-wellness-green-700 transition-colors duration-300 font-medium text-lg"
                >
                  Book Your First Class
                </a>
                <a 
                  href="/#contact" 
                  className="border-2 border-wellness-green-600 text-wellness-green-600 px-8 py-4 rounded-full hover:bg-wellness-green-600 hover:text-white transition-all duration-300 font-medium text-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;
