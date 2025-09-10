
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="flex items-center">
              <img 
                src="/Logo with ange.png" 
                alt="Ange Wellness" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              About
            </Link>
            <Link to="/classes-booking" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Classes & Booking
            </Link>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Services
            </a>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Pricing
            </Link>
            <a href="/#testimonials" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Testimonials
            </a>
            <a href="/#faq" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              FAQs
            </a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Contact
            </a>
          </nav>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <a href="https://bookwhen.com/yoga71withange" className="text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium" style={{backgroundColor: '#7756a5'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6a4a8f'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7756a5'}>
              Book Now
            </a>
          </div>

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
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/classes-booking" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Classes & Booking
              </Link>
              <a 
                href="/#services" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <Link 
                to="/pricing" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
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
            </div>
            {/* Mobile Book Now Button */}
            <div className="mt-6 pt-4 border-t border-border">
              <a 
                href="https://bookwhen.com/yoga71withange" 
                className="text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium text-center block" 
                style={{backgroundColor: '#7756a5'}} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#6a4a8f'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#7756a5'}
                onClick={() => setIsMenuOpen(false)}
              >
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
