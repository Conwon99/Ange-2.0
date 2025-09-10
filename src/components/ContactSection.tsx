
import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <div className="col-span-2 aspect-[4/3] rounded-full overflow-hidden">
                <img 
                  src="/Contact/yogapose.jpg"
                  alt="Yoga class in session"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Small circular images */}
              <div className="aspect-square rounded-full overflow-hidden">
                <img 
                  src="/Contact/sit.jpg"
                  alt="Yoga pose"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-square rounded-full overflow-hidden">
                <img 
                  src="/Contact/rock.jpg"
                  alt="Fitness training"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-square rounded-full overflow-hidden">
                <img 
                  src="/Contact/grass.jpg"
                  alt="Wellness activity"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-square rounded-full overflow-hidden">
                <img 
                  src="/Contact/bowl.jpg"
                  alt="Movement practice"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
                <span className="font-rocaone-light">Get in</span>{' '}
                <span className="italic font-playfair text-foreground">touch.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to start your wellness journey? Contact me to book a yoga class, reflexology treatment, or learn more about my aromatics products. I'm here to support your holistic healing.
              </p>
            </div>

            <form 
              action="https://formspree.io/f/xwpnyaog" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  Email (required)
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-white/70 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Message (required)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="bg-white/70 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <Button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-300"
              >
                Send
              </Button>
            </form>

            {/* Contact Information */}
            <div className="space-y-4 pt-6 border-t border-border">
              <div className="flex items-center space-x-3">
                <span className="text-foreground font-medium">Phone:</span>
                <a href="tel:07814487281" className="text-primary hover:text-primary/80">07814 487281</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-foreground font-medium">Email:</span>
                <a href="mailto:yogawithange@outlook.com" className="text-primary hover:text-primary/80">yogawithange@outlook.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-foreground font-medium">WhatsApp:</span>
                <a href="https://wa.me/447814487281" className="text-primary hover:text-primary/80">Message me</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-foreground font-medium">Book Classes:</span>
                <a href="https://bookwhen.com/yoga71withange" className="text-primary hover:text-primary/80">Bookwhen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
