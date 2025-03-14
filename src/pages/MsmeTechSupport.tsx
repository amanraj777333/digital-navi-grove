
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedText from '@/components/AnimatedText';
import FaqItem from '@/components/FaqItem';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Wrench, 
  ServerCog, 
  ShieldCheck, 
  Cloud, 
  Clock, 
  Send,
  ChevronRight
} from 'lucide-react';

const MsmeTechSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Specialized <AnimatedText text="MSME Tech Support" animation="typing" className="inline-block" />
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Comprehensive technology support tailored for Micro, Small, and Medium Enterprises at affordable rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton 
                  customMessage="Hello, I'm interested in your MSME Tech Support services. I would like to discuss my business needs."
                  className="text-lg py-6 px-8"
                >
                  Get Started Now
                </WhatsAppButton>
              </div>
            </motion.div>
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="MSME Tech Support" 
                className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-2xl" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our MSME Tech Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technology solutions designed specifically for small and medium businesses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ServerCog className="h-10 w-10 text-purple-600" />,
                title: "IT Infrastructure Setup",
                description: "Complete setup and maintenance of servers, networks, and workstations for your business."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-purple-600" />,
                title: "Cyber Security",
                description: "Affordable security solutions to protect your business data and digital assets."
              },
              {
                icon: <Cloud className="h-10 w-10 text-purple-600" />,
                title: "Cloud Migration",
                description: "Seamless transition to cloud-based solutions for improved efficiency and accessibility."
              },
              {
                icon: <Wrench className="h-10 w-10 text-purple-600" />,
                title: "Technical Support",
                description: "24/7 helpdesk and technical support for all your IT-related issues."
              },
              {
                icon: <Clock className="h-10 w-10 text-purple-600" />,
                title: "Business Continuity",
                description: "Disaster recovery and business continuity planning to minimize downtime."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-purple-600" />,
                title: "Software Solutions",
                description: "Custom software solutions and integrations tailored to your business needs."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our MSME tech support services.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FaqItem 
              question="What size businesses do you serve?"
              answer="We specialize in serving micro, small, and medium enterprises (MSMEs) with up to 250 employees. Our solutions are scalable and can be tailored to match your business size and growth."
            />
            
            <FaqItem 
              question="How much do your tech support services cost?"
              answer="We offer flexible pricing models based on your business needs. Our packages start from as low as ₹5,000 per month for basic support. We provide customized quotes after understanding your specific requirements."
            />
            
            <FaqItem 
              question="Do you offer remote support or only on-site services?"
              answer="We offer both remote and on-site support depending on your needs. Most issues can be resolved remotely, which allows for faster response times. For hardware issues or complex setups, we provide on-site support."
            />
            
            <FaqItem 
              question="What kind of response times can I expect?"
              answer="Our standard support packages include response times of 4-8 hours for non-critical issues and 1-2 hours for critical issues. Premium support packages offer even faster response times with dedicated support specialists."
            />
          </div>
          
          <div className="text-center mt-12">
            <WhatsAppButton customMessage="Hello, I have a question about your MSME tech support services that wasn't answered in the FAQ section.">
              Still Have Questions?
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business Technology?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us today to get started with affordable tech support solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppButton 
              className="bg-white text-purple-700 hover:bg-gray-100"
              customMessage="Hello, I'm ready to improve my business technology with your MSME tech support services. Can we schedule a consultation?"
            >
              Get Started Now
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MsmeTechSupport;
