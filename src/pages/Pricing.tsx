import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

        {/* Pricing Cards */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Unlimited Live/Zoom */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-rocaone text-foreground mb-4">Unlimited Live/Zoom</h3>
                  <div className="text-4xl font-bold text-wellness-green-600 mb-2">£48</div>
                  <p className="text-muted-foreground">monthly pass</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    Unlimited live classes in Troon, Irvine & Kilwinning
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    Unlimited Zoom classes
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    All yoga styles included
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    Perfect for regular practitioners
                  </li>
                </ul>
                <a 
                  href="https://bookwhen.com/yoga71withange" 
                  className="w-full bg-wellness-green-600 text-white py-3 px-6 rounded-full hover:bg-wellness-green-700 transition-colors duration-300 font-medium text-center block"
                >
                  Book Pass
                </a>
              </div>

              {/* Unlimited Zoom-Only */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-wellness-green-600 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="bg-wellness-green-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-rocaone text-foreground mb-4">Unlimited Zoom-Only</h3>
                  <div className="text-4xl font-bold text-wellness-green-600 mb-2">£25</div>
                  <p className="text-muted-foreground">monthly pass</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    Unlimited Zoom classes only
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    All yoga styles included
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    Perfect for home practice
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    Great value for online sessions
                  </li>
                </ul>
                <a 
                  href="https://bookwhen.com/yoga71withange" 
                  className="w-full bg-wellness-green-600 text-white py-3 px-6 rounded-full hover:bg-wellness-green-700 transition-colors duration-300 font-medium text-center block"
                >
                  Book Pass
                </a>
              </div>

              {/* Drop-in Classes */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-rocaone text-foreground mb-4">Drop-in Classes</h3>
                  <div className="text-4xl font-bold text-wellness-green-600 mb-2">£9</div>
                  <p className="text-muted-foreground">per class</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    £9 for regular classes
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    £5 for special offers
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    £7 for Beach Yoga
                  </li>
                  <li className="flex items-center">
                    <span className="text-wellness-green-600 mr-3">✓</span>
                    Perfect for trying out
                  </li>
                </ul>
                <a 
                  href="https://bookwhen.com/yoga71withange" 
                  className="w-full bg-wellness-green-600 text-white py-3 px-6 rounded-full hover:bg-wellness-green-700 transition-colors duration-300 font-medium text-center block"
                >
                  Book Class
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 lg:py-32 bg-wellness-green-50">
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
