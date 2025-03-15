
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-purple-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Company Info */}
          <motion.div variants={fadeIn}>
            <h3 className="text-2xl font-bold mb-4">Create<span className="text-gold-500">Software</span><span className="text-gold-500">.in</span></h3>
            <p className="text-purple-200 mb-4">
              Transform your business with cutting-edge technology solutions tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-purple-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/services" className="text-purple-300 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/portfolio" className="text-purple-300 hover:text-white transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/about" className="text-purple-300 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-purple-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-800 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-purple-300 hover:text-white transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/services/app-development" className="text-purple-300 hover:text-white transition-colors duration-300">App Development</Link></li>
              <li><Link to="/services/crm-software" className="text-purple-300 hover:text-white transition-colors duration-300">Custom CRM Software</Link></li>
              <li><Link to="/services/cyber-security" className="text-purple-300 hover:text-white transition-colors duration-300">Cyber Security</Link></li>
              <li><Link to="/services/seo-marketing" className="text-purple-300 hover:text-white transition-colors duration-300">SEO & Marketing</Link></li>
              <li><Link to="/services/msme-tech-support" className="text-purple-300 hover:text-white transition-colors duration-300">MSME Tech Support</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-purple-400" />
                <span className="text-purple-300">123 Tech Street, Digital City, IN 110001</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-purple-400" />
                <a href="tel:+919354149726" className="text-purple-300 hover:text-white transition-colors duration-300">+91 93541 49726</a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-purple-400" />
                <a href="mailto:info@createsoftware.com" className="text-purple-300 hover:text-white transition-colors duration-300">info@createsoftware.com</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-purple-800 mt-12 pt-8">
          <p className="text-center text-purple-400">
            © 2025 Create Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
