
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-normal text-primary">
            Holistics71
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors duration-200">
              Home
            </a>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="/classes-booking" className="text-foreground hover:text-primary transition-colors duration-200">
              Classes & Booking
            </a>
            <a href="/#products" className="text-foreground hover:text-primary transition-colors duration-200">
              Products
            </a>
            <a href="/#testimonials" className="text-foreground hover:text-primary transition-colors duration-200">
              Testimonials
            </a>
            <a href="/#faq" className="text-foreground hover:text-primary transition-colors duration-200">
              FAQs
            </a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </a>
            <a href="https://bookwhen.com/yoga71withange" className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium">
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/#about" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/classes-booking" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Classes & Booking
              </a>
              <a 
                href="/#products" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="/#testimonials" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="/#faq" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </a>
              <a 
                href="/#contact" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a href="https://bookwhen.com/yoga71withange" className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium text-left">
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
