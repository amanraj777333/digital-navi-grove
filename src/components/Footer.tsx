
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Create<span className="text-gold-500">Software</span></h3>
            <p className="text-gray-400 mb-4">
              Transform your business with cutting-edge technology solutions tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/app-development" className="text-gray-400 hover:text-white transition-colors">App Development</Link></li>
              <li><Link to="/services/crm-software" className="text-gray-400 hover:text-white transition-colors">Custom CRM Software</Link></li>
              <li><Link to="/services/cyber-security" className="text-gray-400 hover:text-white transition-colors">Cyber Security</Link></li>
              <li><Link to="/services/seo-marketing" className="text-gray-400 hover:text-white transition-colors">SEO & Marketing</Link></li>
              <li><Link to="/services/msme-tech-support" className="text-gray-400 hover:text-white transition-colors">MSME Tech Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">123 Tech Street, Digital City, IN 110001</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-purple-500" />
                <a href="tel:+919354149726" className="text-gray-400 hover:text-white transition-colors">+91 93541 49726</a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-purple-500" />
                <a href="mailto:info@createsoftware.com" className="text-gray-400 hover:text-white transition-colors">info@createsoftware.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500">
            © 2025 Create Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
