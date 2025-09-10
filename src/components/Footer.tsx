
import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <img 
                src="/Logo with ange.png" 
                alt="Ange Wellness" 
                className="h-12 w-auto mb-2 brightness-0 invert"
              />
            </div>
            <p className="text-purple-100 leading-relaxed max-w-md">
              I'm Ange, a 200 YTT qualified yoga teacher offering yoga classes, reflexology treatments, and aromatics products in Ayrshire. Perfect for beginners and those seeking holistic healing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-normal mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-purple-200 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-purple-200 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/classes-booking" className="text-purple-200 hover:text-white transition-colors duration-200">Classes & Booking</Link></li>
              <li><Link to="/services" className="text-purple-200 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/pricing" className="text-purple-200 hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-purple-200 hover:text-white transition-colors duration-200">Testimonials</Link></li>
              <li><Link to="/faq" className="text-purple-200 hover:text-white transition-colors duration-200">FAQs</Link></li>
              <li><Link to="/zoom-booking" className="text-purple-200 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-normal mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-purple-200 text-sm">Phone: 07814 487281</p>
                <p className="text-purple-200 text-sm">Email: yogawithange@outlook.com</p>
              </div>
              <div className="space-y-2">
                <a href="https://bookwhen.com/yoga71withange" className="block bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors duration-200 font-medium text-center text-sm">
                  Book Classes
                </a>
                <a href="https://www.facebook.com/yoga71withange" className="block bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors duration-200 font-medium text-center text-sm">
                  Facebook
                </a>
                <a href="https://wa.me/447814487281" className="block bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors duration-200 font-medium text-center text-sm">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-300/30 mt-8 pt-8 text-center">
          <p className="text-purple-200 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400" /> for your holistic wellness journey
          </p>
          <p className="text-purple-200 text-sm mt-2">
            © 2024 Holistics71 with Ange. Serving Troon, Irvine, and Kilwinning, Ayrshire.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
