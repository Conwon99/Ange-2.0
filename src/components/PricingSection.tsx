
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Unlimited Live/Zoom",
      price: "£48",
      period: "monthly pass",
      buttonText: "Book Pass",
      buttonVariant: "outline" as const,
      features: [
        "Unlimited live classes in Troon, Irvine & Kilwinning",
        "Unlimited Zoom classes",
        "All yoga styles included",
        "Perfect for regular practitioners"
      ],
      cardClass: "bg-card hover:bg-accent/20"
    },
    {
      name: "Drop-in Classes",
      price: "£9",
      period: "per class",
      buttonText: "Book Class",
      buttonVariant: "default" as const,
      features: [
        "£9 for regular classes",
        "£5 for special offers",
        "£7 for Beach Yoga",
        "Perfect for trying out"
      ],
      cardClass: "bg-primary text-primary-foreground",
      featured: true
    },
    {
      name: "Unlimited Zoom-Only",
      price: "£25",
      period: "monthly pass",
      buttonText: "Book Pass",
      buttonVariant: "outline" as const,
      features: [
        "Unlimited Zoom classes only",
        "All yoga styles included",
        "Perfect for home practice",
        "Great value for online sessions"
      ],
      cardClass: "bg-card hover:bg-accent/20"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
            <span className="font-rocaone-light">Transform</span>{' '}
            <span className="italic font-playfair text-purple-600">Your</span>
            <br />
            <span className="italic font-playfair text-purple-600">Wellness</span>{' '}
            <span className="font-rocaone-light">Journey</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground italic mb-8">
            holistic healing
          </p>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose the perfect wellness package for your journey. All prices include personalized attention and holistic healing approaches from Ange's 7+ years of experience in Ayrshire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`${plan.cardClass} border-0 p-8 transition-all duration-300 hover:scale-105 ${
                plan.featured ? 'transform scale-105' : ''
              }`}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className={`text-2xl font-medium mb-4 ${
                  plan.featured ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className={`text-5xl lg:text-6xl font-bold tracking-tight ${
                    plan.featured ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${
                  plan.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {plan.period}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <a 
                  href={plan.name === "Yoga Classes" ? "https://bookwhen.com/yoga71withange" : "/#contact"}
                  className={`w-full py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 inline-block text-center ${
                    plan.featured 
                      ? 'bg-background text-foreground hover:bg-background/90 border border-foreground/20' 
                      : 'bg-background text-foreground hover:bg-background/90 border border-foreground/20'
                  }`}
                >
                  {plan.buttonText}
                </a>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.featured ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                      <span className={`text-sm leading-relaxed ${
                        plan.featured ? 'text-primary-foreground/90' : 'text-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
