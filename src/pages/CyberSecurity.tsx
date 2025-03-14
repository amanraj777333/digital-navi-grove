
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedText from '@/components/AnimatedText';
import FaqItem from '@/components/FaqItem';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  Shield,
  Lock,
  EyeOff,
  FileWarning,
  Scan,
  Send,
  ChevronRight
} from 'lucide-react';

const CyberSecurity = () => {
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
                Enterprise-Grade <AnimatedText text="Cyber Security" animation="typing" className="inline-block" /> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Protect your data and ensure compliance with our robust cybersecurity solutions tailored for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton 
                  customMessage="Hello, I'm interested in your Cyber Security services. I would like to discuss my security requirements."
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
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3" 
                alt="Cyber Security" 
                className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-2xl" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cyber Security Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your business from evolving threats.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-purple-600" />,
                title: "Security Assessment",
                description: "Identify vulnerabilities and risks in your infrastructure through comprehensive security assessments."
              },
              {
                icon: <Lock className="h-10 w-10 text-purple-600" />,
                title: "Data Protection",
                description: "Implement robust data protection measures to safeguard sensitive information."
              },
              {
                icon: <EyeOff className="h-10 w-10 text-purple-600" />,
                title: "Threat Monitoring",
                description: "24/7 monitoring and detection of security threats to prevent breaches before they occur."
              },
              {
                icon: <FileWarning className="h-10 w-10 text-purple-600" />,
                title: "Incident Response",
                description: "Rapid response to security incidents to minimize damage and restore operations quickly."
              },
              {
                icon: <Scan className="h-10 w-10 text-purple-600" />,
                title: "Compliance Solutions",
                description: "Ensure compliance with industry regulations and security standards."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-purple-600" />,
                title: "Security Training",
                description: "Educate your team on security best practices to create a security-conscious culture."
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
              Find answers to common questions about our cyber security services.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FaqItem 
              question="How can I determine my business's security needs?"
              answer="We conduct a comprehensive security assessment to identify vulnerabilities and recommend appropriate security measures based on your business type, size, and specific requirements."
            />
            
            <FaqItem 
              question="How often should security assessments be conducted?"
              answer="We recommend conducting security assessments at least annually, or whenever significant changes are made to your IT infrastructure. For businesses in regulated industries, more frequent assessments may be necessary."
            />
            
            <FaqItem 
              question="What compliance standards do you support?"
              answer="We help businesses comply with various standards and regulations, including GDPR, HIPAA, PCI DSS, ISO 27001, and more, depending on your industry and location."
            />
            
            <FaqItem 
              question="What happens if a security breach occurs?"
              answer="Our incident response team will immediately investigate the breach, contain the threat, eradicate it, and help recover affected systems. We also provide guidance on notification requirements and steps to prevent future breaches."
            />
          </div>
          
          <div className="text-center mt-12">
            <WhatsAppButton customMessage="Hello, I have a question about your cyber security services that wasn't answered in the FAQ section.">
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
            Ready to Secure Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us today to get started with a comprehensive security assessment.
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
              customMessage="Hello, I'm interested in securing my business with your cyber security services. Can we schedule a consultation?"
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

export default CyberSecurity;
