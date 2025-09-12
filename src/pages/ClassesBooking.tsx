import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, Clock, MapPin, Users, Star, Footprints, Check } from 'lucide-react';
import { trackBooking, trackContact } from '../lib/analytics';

const ClassesBooking = () => {
  const [activeTab, setActiveTab] = useState<'yoga' | 'reflexology'>('yoga');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [searchParams] = useSearchParams();

  // Check URL parameters on component mount
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'reflexology') {
      setActiveTab('reflexology');
    }
  }, [searchParams]);
  const classTypes = [
    {
      name: "Hatha Yoga",
      description: "Gentle, slower-paced practice focusing on basic postures and breathing techniques. Perfect for beginners and those seeking a calming practice.",
      duration: "60 minutes",
      level: "All levels",
      benefits: ["Improved flexibility", "Stress reduction", "Better posture", "Mind-body connection"]
    },
    {
      name: "Yin Yoga",
      description: "Deep, meditative practice holding poses for longer periods to target connective tissues. Ideal for relaxation and flexibility.",
      duration: "60 minutes",
      level: "All levels",
      benefits: ["Deep relaxation", "Increased flexibility", "Stress relief", "Joint mobility"]
    },
  ];

  const locations = [
    {
      name: "Woodlands Centre Irvine",
      address: "Irvine, Ayrshire",
      day: "Monday",
      time: "7:00 PM",
      type: "£9",
      zoom: true
    },
    {
      name: "Troon Old Parish Church",
      address: "Troon, Ayrshire",
      day: "Wednesday",
      time: "10:00 AM",
      type: "£9"
    },
    {
      name: "St Meddan's Church",
      address: "Troon, Ayrshire",
      day: "Wednesday",
      time: "7:00 PM",
      type: "£9",
      weather: "Alternative to beach",
      zoom: true
    },
    {
      name: "Corespace Kilwinning",
      address: "Kilwinning, Ayrshire",
      day: "Thursday",
      time: "6:00 PM",
      type: "£9"
    },
    {
      name: "Corespace Kilwinning",
      address: "Kilwinning, Ayrshire",
      day: "Thursday",
      time: "7:15 PM",
      type: "£9",
      zoom: true
    }
  ];

  // Filter locations based on selected filter
  const filteredLocations = locations.filter(location => {
    if (locationFilter === 'all') return true;
    if (locationFilter === 'zoom') return location.zoom;
    if (locationFilter === 'troon') return location.address.includes('Troon');
    if (locationFilter === 'irvine') return location.address.includes('Irvine');
    if (locationFilter === 'kilwinning') return location.address.includes('Kilwinning');
    return true;
  });

  const specialSessions = [
    {
      name: "Monthly Bedtime Yoga & Sound Bath",
      location: "Kilwinning",
      description: "A special monthly session combining gentle yoga with sound healing for deep relaxation and better sleep.",
      price: "£10",
      duration: "60 minutes"
    },
    {
      name: "Beach Yoga Sessions",
      location: "Barassie Beach, Troon",
      description: "Outdoor yoga practice by the sea, weather permitting. A unique experience connecting with nature.",
      price: "£7",
      duration: "60 minutes"
    }
  ];

  const reflexologyInfo = {
    description: "Experience the healing power of aromatherapy reflexology in my peaceful Irvine studio. These 60-minute treatments focus on your feet to promote natural healing, stress relief, and improved wellbeing.",
    details: "Reflexology is a gentle, non-invasive therapy that works by applying pressure to specific points on the feet that correspond to different organs and systems in the body. Combined with aromatherapy, it creates a deeply relaxing and therapeutic experience.",
    benefits: [
      "Stress relief and relaxation",
      "Improved sleep quality",
      "Increased energy levels",
      "Natural healing support",
      "Enhanced circulation",
      "Better overall wellbeing"
    ],
    availability: {
      days: "Thursdays and Fridays",
      times: "During the day (last appointments at 3:30pm)",
      location: "Irvine studio (in-home)",
      price: "£40 per session"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Full-width fixed header */}
      <Header />
      
      {/* Main content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16 px-6">
            <h1 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tighter">
              Classes & Booking
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {activeTab === 'yoga' 
                ? "Join me for weekly yoga classes across Troon, Irvine, and Kilwinning. All levels welcome - from complete beginners to advanced practitioners."
                : "Experience the healing power of aromatherapy reflexology in my peaceful Irvine studio. Gentle, non-invasive treatments for natural healing and wellbeing."
              }
            </p>
            
            {/* Toggle Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('yoga')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'yoga'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-purple-100/80 text-foreground hover:bg-purple-200/80 border border-purple-200'
                }`}
              >
                <Star className="w-5 h-5" />
                Yoga Classes
              </button>
              <button
                onClick={() => setActiveTab('reflexology')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'reflexology'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-purple-100/80 text-foreground hover:bg-purple-200/80 border border-purple-200'
                }`}
              >
                <Footprints className="w-5 h-5" />
                Reflexology
              </button>
            </div>
          </section>

          {/* Yoga Content */}
          {activeTab === 'yoga' && (
            <>

          {/* Weekly Schedule */}
          <section className="mb-16 px-6">
            <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-8 text-center font-rocaone tracking-tight">
              Weekly Class Schedule
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                onClick={() => setLocationFilter('all')}
                variant={locationFilter === 'all' ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  locationFilter === 'all' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                All Classes
              </Button>
              <Button
                onClick={() => setLocationFilter('zoom')}
                variant={locationFilter === 'zoom' ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  locationFilter === 'zoom' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                Zoom Classes
              </Button>
              <Button
                onClick={() => setLocationFilter('troon')}
                variant={locationFilter === 'troon' ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  locationFilter === 'troon' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                Troon
              </Button>
              <Button
                onClick={() => setLocationFilter('irvine')}
                variant={locationFilter === 'irvine' ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  locationFilter === 'irvine' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                Irvine
              </Button>
              <Button
                onClick={() => setLocationFilter('kilwinning')}
                variant={locationFilter === 'kilwinning' ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  locationFilter === 'kilwinning' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                Kilwinning
              </Button>
            </div>

            <div className="grid gap-4 max-w-4xl mx-auto">
              {filteredLocations.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No classes found for the selected filter.
                  </p>
                </div>
              ) : (
                filteredLocations.map((location, index) => (
                <Card key={index} className="bg-purple-100/80 backdrop-blur-sm border-purple-200 hover:bg-purple-200/80 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-purple-600" />
                          <h3 className="font-semibold text-foreground">{location.name}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{location.address}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-purple-600" />
                            {location.day}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-purple-600" />
                            {location.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-purple-600 font-semibold">£9</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <a 
                          href="https://bookwhen.com/yoga71withange" 
                          className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-all duration-300 font-medium text-sm hover:scale-105 transform whitespace-nowrap text-center w-24 flex items-center justify-center"
                        >
                          Book
                        </a>
                        {location.zoom && (
                          <a 
                            href="/zoom-booking" 
                            className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-200 transition-all duration-300 font-medium text-sm hover:scale-105 transform whitespace-nowrap text-center border border-purple-300 w-24 flex items-center justify-center"
                          >
                            Book Zoom
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                ))
              )}
            </div>
          </section>

          {/* Special Sessions */}
          <section className="mb-16 px-6">
            <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-8 text-center font-rocaone tracking-tight">
              Special Sessions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {specialSessions.map((session, index) => (
                <Card key={index} className="bg-purple-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{session.name}</CardTitle>
                    <div className="flex items-center gap-2 text-white/80">
                      <MapPin className="w-4 h-4" />
                      {session.location}
                    </div>
                    {session.name === "Beach Yoga Sessions" && (
                      <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3 mt-3">
                        <div className="flex items-center gap-2 text-yellow-200">
                          <span className="text-lg">⚠️</span>
                          <span className="font-medium text-sm">Weather Dependent</span>
                        </div>
                        <p className="text-yellow-100/90 text-xs mt-1">
                          Sessions may be cancelled or moved indoors due to weather conditions
                        </p>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      {session.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/80">
                        Duration: {session.duration}
                      </div>
                      <div className="font-semibold">
                        {session.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16 px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
                Pricing
              </h2>
              <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Choose the perfect wellness package for your journey. All prices include personalized attention and holistic healing approaches from Ange's 7+ years of experience in Ayrshire.
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
          </section>

              {/* Booking CTA */}
              <section className="text-center px-6">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h2 className="text-2xl lg:text-3xl font-normal text-foreground mb-4 font-rocaone tracking-tight">
                    Ready to Start Your Yoga Journey?
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Book your first class today and experience the benefits of yoga in a supportive, nurturing environment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://bookwhen.com/yoga71withange/passes" 
                      className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 font-medium text-lg hover:scale-105 transform whitespace-nowrap"
                      onClick={() => trackBooking('Book Your Class', 'Classes Booking Page - Yoga CTA')}
                    >
                      Book Your Class
                    </a>
                    <a 
                      href="tel:07814487281" 
                      className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105 transform"
                    >
                      Call 07814 487281
                    </a>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Reflexology Content */}
          {activeTab === 'reflexology' && (
            <>
              {/* Reflexology Overview */}
              <section className="mb-16 px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-normal text-foreground font-rocaone tracking-tight">
                      Aromatherapy Reflexology
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {reflexologyInfo.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {reflexologyInfo.details}
                    </p>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src="/assetsnew/reflex.png"
                        alt="Reflexology treatment in peaceful Irvine studio"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-300 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-wellness-cream-300 rounded-full opacity-40"></div>
                  </div>
                </div>
              </section>


              {/* Availability & Pricing */}
              <section className="mb-16 px-6">
                <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-8 text-center font-rocaone tracking-tight">
                  Availability & Pricing
                </h2>
                <div className="max-w-2xl mx-auto">
                  <Card className="bg-purple-600 text-white">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-center">Reflexology Sessions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Availability
                          </h3>
                          <ul className="space-y-2 text-white/90">
                            <li>• {reflexologyInfo.availability.days}</li>
                            <li>• {reflexologyInfo.availability.times}</li>
                            <li>• {reflexologyInfo.availability.location}</li>
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
                        <div className="text-3xl font-bold mb-2">{reflexologyInfo.availability.price}</div>
                        <p className="text-white/80">per session</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Booking CTA */}
              <section className="text-center px-6">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h2 className="text-2xl lg:text-3xl font-normal text-foreground mb-4 font-rocaone tracking-tight">
                    Ready to Experience Reflexology?
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Book your reflexology treatment today and discover the natural healing benefits in my peaceful Irvine studio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/zoom-booking" 
                      className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 font-medium text-lg hover:scale-105 transform whitespace-nowrap"
                      onClick={() => trackContact('Book Treatment', 'Classes Booking Page - Reflexology CTA')}
                    >
                      Book Treatment
                    </a>
                    <a 
                      href="tel:07814487281" 
                      className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105 transform"
                    >
                      Call 07814 487281
                    </a>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
      
      <Footer />
    </div>
  );
};

export default ClassesBooking;
