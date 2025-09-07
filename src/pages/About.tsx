import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
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
                About Ange
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                My journey from discovering yoga in Edinburgh to becoming a holistic wellness practitioner in Ayrshire.
              </p>
            </div>
          </div>
        </section>

        {/* Main Story Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Text content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-rocaone text-foreground mb-6">
                    My Yoga Journey
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      I first discovered Yoga in my 20s while living in Edinburgh, seeking calm in a fast-paced life. It quickly became clear that the most important relationship we have is with ourselves—and Yoga offered a powerful way to nurture, heal, and reconnect with my body and mind. I was hooked.
                    </p>
                    <p>
                      In 2018, I completed my first Yoga Teacher Training and instantly knew I'd love teaching. Seven years on, I still feel honoured to share Yoga with our growing community in Ayrshire and beyond.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/assetsnew/About Ange.jpg" 
                    alt="Ange - Yoga teacher and holistic wellness practitioner" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Holistic Approach Section */}
        <section className="py-20 lg:py-32 bg-wellness-green-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/assetsnew/Landing page small image.jpg" 
                    alt="Ange teaching yoga in a peaceful setting" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right side - Text content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-rocaone text-foreground mb-6">
                    Holistic Wellness Approach
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      My passion for holistic wellbeing led me to train in Reflexology and Aromatherapy, both of which beautifully complement Yoga. Together, these therapies support the body and mind—encouraging balance, easing stress, improving sleep, and enhancing energy.
                    </p>
                    <p>
                      With over 25 years' experience teaching in Further Education (English and Support for Learning), I bring a strong understanding of how to create inclusive, supportive learning environments. It's important to me that everyone who joins us feels welcome, empowered, and in tune with their own body.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-primary text-primary-foreground p-12 rounded-2xl">
                <h2 className="text-3xl lg:text-4xl font-rocaone mb-8">
                  My Philosophy
                </h2>
                <blockquote className="text-2xl lg:text-3xl font-playfair italic mb-8 leading-relaxed">
                  "The most important relationship we have is with ourselves"
                </blockquote>
                <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                  At Holistics71, I simply aim to guide and support your journey with compassion, knowledge, and care. Yoga and Reflexology have been life-changing for me—and I hope they offer the same for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://bookwhen.com/yoga71withange" 
                    className="bg-primary-foreground text-primary px-8 py-4 rounded-full hover:bg-primary-foreground/90 transition-colors duration-300 font-medium text-lg"
                  >
                    Book Your First Class
                  </a>
                  <a 
                    href="/#contact" 
                    className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full hover:bg-primary-foreground hover:text-primary transition-all duration-300 font-medium text-lg"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications & Experience Section */}
        <section className="py-20 lg:py-32 bg-wellness-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone">
                  Qualifications & Experience
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Over 25 years of teaching experience combined with specialized training in holistic wellness.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Yoga Training */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-wellness-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🧘‍♀️</span>
                    </div>
                    <h3 className="text-2xl font-rocaone text-foreground mb-4">Yoga Teacher Training</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      200 YTT qualified yoga teacher since 2018. Specializing in Hatha, Yin, and Ashtanga styles with 7+ years of teaching experience.
                    </p>
                  </div>
                </div>

                {/* Reflexology */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-wellness-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🦶</span>
                    </div>
                    <h3 className="text-2xl font-rocaone text-foreground mb-4">Reflexology & Aromatherapy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Qualified and insured reflexologist with training in aromatherapy. Offering 60-minute treatments with warmed crystals and Thai foot massage techniques.
                    </p>
                  </div>
                </div>

                {/* Education Experience */}
                <div className="bg-white rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-1">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-wellness-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="text-2xl font-rocaone text-foreground mb-4">Education Background</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      25+ years teaching in Further Education (English and Support for Learning). Expert in creating inclusive, supportive learning environments.
                    </p>
                  </div>
                </div>
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
                Join our growing community in Ayrshire and experience the transformative power of yoga, reflexology, and aromatics with Ange's compassionate guidance.
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
                  Contact Ange
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

export default About;
