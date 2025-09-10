
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Are your Yoga classes suitable for beginners?",
      answer: "Yes all classes have mixed abilities and different levels of experience. I demonstrate and suggest modifications to everyone's needs."
    },
    {
      question: "What do I need to bring for Yoga?",
      answer: "A Yoga mat (I have spare ones you can borrow), a blanket for relaxation and a drink of water."
    },
    {
      question: "How do I book and pay for Yoga classes?",
      answer: "Please use our Bookwhen link and pay on-line via Stripe."
    },
    {
      question: "Do men come to the classes and treatments?",
      answer: "Yes we have a couple of men who attend Yoga and a few regular Reflexology clients."
    },
    {
      question: "Can I buy a monthly Yoga class pass?",
      answer: "Yes these are normally £48 per full calendar month for unlimited entry to classes excluding our Monthly Yin Yoga and Sound Bath, which is £10. Otherwise you can pay to drop in."
    },
    {
      question: "When do you offer Reflexology appointments?",
      answer: "Thursdays and Fridays during the day (last appointments are normally 3.30pm)"
    }
  ];

  return (
    <section id="faq" className="pt-8 pb-20 lg:pt-12 lg:pb-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Centered FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-border bg-white/30 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-foreground hover:text-primary text-left py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
