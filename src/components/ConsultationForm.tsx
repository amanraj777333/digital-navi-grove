
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import WhatsAppButton from './WhatsAppButton';

const ConsultationForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted Successfully",
      description: "We'll redirect you to WhatsApp for immediate consultation.",
    });
    
    const phoneNumber = "9354149726";
    const message = "Hi, I've submitted the consultation form on your website. I'd like to discuss my project requirements.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-8">
        <motion.h3 
          className="text-3xl font-poppins font-extrabold mb-4 text-center text-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get Your Free Consultation
        </motion.h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <label className="block text-base font-poppins font-bold text-navy mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mint focus:border-transparent transition-all duration-200"
              placeholder="Enter your name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label className="block text-base font-poppins font-bold text-navy mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mint focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label className="block text-base font-poppins font-bold text-navy mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mint focus:border-transparent transition-all duration-200"
              placeholder="Enter your phone number"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <label className="block text-base font-poppins font-bold text-navy mb-2">
              Project Details
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mint focus:border-transparent transition-all duration-200"
              placeholder="Tell us about your project requirements"
            ></textarea>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <WhatsAppButton className="w-full ripple bg-gradient-to-r from-mint to-cta text-navy font-space font-extrabold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-mint/20">
              Get Your Free Consultation <Send className="ml-2 h-5 w-5" />
            </WhatsAppButton>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default ConsultationForm;
