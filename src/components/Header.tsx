
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent backdrop-blur-sm fixed top-0 left-0 right-0 z-50" style={{ margin: 0 }}>
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
            <Link to="/services" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Services
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Pricing
            </Link>
            <Link to="/testimonials" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Testimonials
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              FAQs
            </Link>
            <Link to="/zoom-booking" className="text-foreground hover:text-primary transition-colors duration-200 drop-shadow-sm">
              Contact
            </Link>
          </nav>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <Link to="/classes-booking" className="text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium" style={{backgroundColor: '#7756a5'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6a4a8f'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7756a5'}>
              Book Now
            </Link>
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
              <Link 
                to="/services" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/testimonials" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/faq" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link 
                to="/zoom-booking" 
                className="text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            {/* Mobile Book Now Button */}
            <div className="mt-6 pt-4 border-t border-border">
              <Link 
                to="/classes-booking" 
                className="text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium text-center block" 
                style={{backgroundColor: '#7756a5'}} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#6a4a8f'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#7756a5'}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
