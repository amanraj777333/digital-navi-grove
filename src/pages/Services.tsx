
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  BarChart, 
  Headphones
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeIn}>
              <ServiceCard 
                icon={<Globe size={24} />}
                title="Web Development"
                description="From consultation to launch, our expert team delivers high-performance, scalable web solutions tailored to your business needs."
                link="/services/web-development"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <ServiceCard 
                icon={<Smartphone size={24} />}
                title="App Development"
                description="We design and develop user-friendly, feature-rich mobile and web apps that drive engagement and growth."
                link="/services/app-development"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <ServiceCard 
                icon={<Database size={24} />}
                title="Custom CRM Software"
                description="Enhance your business operations with custom CRM solutions that fit your unique processes and scale with your growth."
                link="/services/crm-software"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <ServiceCard 
                icon={<Shield size={24} />}
                title="Cyber Security"
                description="Protect your data and ensure compliance with our robust cybersecurity solutions."
                link="/services/cyber-security"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <ServiceCard 
                icon={<BarChart size={24} />}
                title="SEO and Marketing"
                description="Boost your online presence and drive organic traffic with our comprehensive SEO and digital marketing services."
                link="/services/seo-marketing"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <ServiceCard 
                icon={<Headphones size={24} />}
                title="MSME Tech Support"
                description="We provide dedicated tech support solutions tailored to the unique needs of MSMEs."
                link="/services/msme-tech-support"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <Link to="/contact" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium inline-block transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
