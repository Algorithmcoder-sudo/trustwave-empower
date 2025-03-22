
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
        isScrolled ? 'py-3 bg-background/90 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-saakh-blue rounded-full p-2 flex items-center justify-center">
                <span className="text-xl font-bold text-white">S</span>
              </div>
              <span className="text-xl font-bold text-white">Saakh</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About Us</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition">Testimonials</a>
            <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-saakh-blue hover:bg-saakh-blue-light transition text-white font-medium"
            >
              Get Started
            </a>
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg py-4 px-6 border-t border-white/10 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-white/80 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#services" 
              className="text-white/80 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-white/80 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-white/80 hover:text-white transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-saakh-blue hover:bg-saakh-blue-light transition text-white font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
