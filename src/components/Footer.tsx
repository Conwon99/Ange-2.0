
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <img 
                src="/logo-purp.png" 
                alt="Holistics71 with Ange" 
                className="h-12 w-auto mb-2"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              I'm Ange, a 200 YTT qualified yoga teacher offering yoga classes, reflexology treatments, and aromatics products in Ayrshire. Perfect for beginners and those seeking holistic healing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-normal mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">About</a></li>
              <li><a href="/classes-booking" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Classes & Booking</a></li>
              <li><a href="/#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Services</a></li>
              <li><a href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Pricing</a></li>
              <li><a href="/#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Testimonials</a></li>
              <li><a href="/#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">FAQs</a></li>
              <li><a href="/#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-normal mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-primary-foreground/80 text-sm">Phone: 07814 487281</p>
                <p className="text-primary-foreground/80 text-sm">Email: yogawithange@outlook.com</p>
              </div>
              <div className="space-y-2">
                <a href="https://bookwhen.com/yoga71withange" className="block bg-primary-foreground text-primary px-4 py-2 rounded-full hover:bg-primary-foreground/90 transition-colors duration-200 font-medium text-center text-sm">
                  Book Classes
                </a>
                <a href="https://www.facebook.com/holistics71" className="block bg-primary-foreground text-primary px-4 py-2 rounded-full hover:bg-primary-foreground/90 transition-colors duration-200 font-medium text-center text-sm">
                  Facebook
                </a>
                <a href="https://wa.me/447814487281" className="block bg-primary-foreground text-primary px-4 py-2 rounded-full hover:bg-primary-foreground/90 transition-colors duration-200 font-medium text-center text-sm">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4" /> for your holistic wellness journey
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            © 2024 Holistics71 with Ange. Serving Troon, Irvine, and Kilwinning, Ayrshire.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
