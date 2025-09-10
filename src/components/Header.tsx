
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent backdrop-blur-sm border-b border-border fixed top-0 left-0 right-0 z-50" style={{ margin: 0 }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-purp.png" 
              alt="Holistics71 with Ange" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              About
            </a>
            <a href="/classes-booking" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Classes & Booking
            </a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Services
            </a>
            <a href="/pricing" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Pricing
            </a>
            <a href="/#testimonials" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Testimonials
            </a>
            <a href="/#faq" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              FAQs
            </a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Contact
            </a>
            <a href="https://bookwhen.com/yoga71withange" className="text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium" style={{backgroundColor: '#7756a5'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6a4a8f'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7756a5'}>
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
                href="/about" 
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
                href="/#services" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="/pricing" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
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
              <a href="https://bookwhen.com/yoga71withange" className="text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium text-left" style={{backgroundColor: '#7756a5'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6a4a8f'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7756a5'}>
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
