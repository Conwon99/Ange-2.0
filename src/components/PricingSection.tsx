
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "$14",
      period: "per user, per month",
      buttonText: "Join Membership",
      buttonVariant: "outline" as const,
      features: [
        "8 yoga classes per month",
        "2 fitness training sessions per month",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      cardClass: "bg-card hover:bg-accent/20"
    },
    {
      name: "Basic plan",
      price: "$29",
      period: "per user, per month",
      buttonText: "Start My 15-day Trial",
      buttonVariant: "default" as const,
      features: [
        "Unlimited yoga classes",
        "4 fitness training sessions per month",
        "1 personalized coaching session per month",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      cardClass: "bg-primary text-primary-foreground",
      featured: true
    },
    {
      name: "Premium plan",
      price: "$139",
      period: "per user, per month",
      buttonText: "Join Membership",
      buttonVariant: "outline" as const,
      features: [
        "4 personalized coaching sessions per month",
        "Customized fitness and yoga plans",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      cardClass: "bg-card hover:bg-accent/20"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone">
            Transform{' '}
            <span className="font-playfair italic text-wellness-green-600">Your</span>
            <br />
            <span className="font-playfair italic text-wellness-green-600">Body</span>{' '}
            and Mind
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground italic mb-8">
            sweat classes
          </p>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            If you're looking to supplement your current fitness routine with small group training or just want to join a few classes a month then take a look at our class pass options below.
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
                  <span className={`text-5xl lg:text-6xl font-bold ${
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
                <Button 
                  variant={plan.featured ? "secondary" : plan.buttonVariant}
                  className={`w-full py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                    plan.featured 
                      ? 'bg-background text-foreground hover:bg-background/90 border border-foreground/20' 
                      : 'bg-background text-foreground hover:bg-background/90 border border-foreground/20'
                  }`}
                >
                  {plan.buttonText}
                </Button>

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
