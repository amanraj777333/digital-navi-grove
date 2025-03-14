
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from './WhatsAppButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">Create<span className="text-gold-500">Software</span></span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600 font-medium">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-purple-600 font-medium">Portfolio</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <WhatsAppButton className="mr-4">Contact</WhatsAppButton>
            <Button
              variant="ghost"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Contact button on desktop */}
          <div className="hidden md:block">
            <WhatsAppButton>Get Started</WhatsAppButton>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-16 border-b border-gray-200 shadow-lg">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-purple-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-purple-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
