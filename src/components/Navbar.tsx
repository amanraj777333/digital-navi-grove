
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookConsultation from './BookConsultation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.span 
              className="text-2xl font-extrabold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-purple-600">Create</span>
              <span className="text-gold-500">Software</span>
              <span className="text-gold-500">.in</span>
            </motion.span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path} 
                className={`transition-colors duration-300 font-bold ${
                  isActive(link.path) 
                    ? 'text-purple-600 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Contact buttons on desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <BookConsultation buttonText="Book Consultation" />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white absolute left-0 right-0 top-16 border-b border-gray-200 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className={`font-bold py-2 ${
                    isActive(link.path) ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <BookConsultation buttonText="Book Consultation" className="mt-4" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
