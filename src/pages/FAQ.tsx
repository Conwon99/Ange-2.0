import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '../components/ui/accordion';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Full-width fixed header */}
      <Header />
      
      {/* Main content */}
      <main className="pt-24">
        {/* FAQ Section - Centered */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight text-foreground mb-6 font-rocaone tracking-tight">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Are your Yoga classes suitable for beginners?",
                    answer: "Yes all classes have mixed abilities and different levels of experience. I demonstrate and suggest modifications to everyone's needs."
                  },
                  {
                    question: "What do I need to bring for Yoga?",
                    answer: "A Yoga mat (I have spare ones you can borrow), a blanket for relaxation and a drink of water."
                  },
                  {
                    question: "How do I book a class?",
                    answer: "You can book classes through Bookwhen at bookwhen.com/yoga71withange or contact me directly for more information."
                  },
                  {
                    question: "What is Reflexology?",
                    answer: "Reflexology is a complementary therapy that applies pressure to specific points on the feet to promote healing and relaxation throughout the body."
                  },
                  {
                    question: "How long are Reflexology sessions?",
                    answer: "Reflexology sessions are 60 minutes long and include aromatherapy and Thai foot massage techniques."
                  },
                  {
                    question: "Where are your classes held?",
                    answer: "I teach classes in Troon, Irvine, and Kilwinning. I also offer online Zoom classes for those who prefer to practice from home."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-purple-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-medium text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
