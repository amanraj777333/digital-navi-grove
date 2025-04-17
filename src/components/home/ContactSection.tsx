
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Redirecting you to WhatsApp for immediate consultation.",
      variant: "default",
    });
    
    const phoneNumber = "9354149726";
    const message = "Hello, I'm interested in your services. I've submitted the form on your website. Can you help me?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8">
            <h2 className="text-3xl font-poppins font-extrabold mb-4 text-center text-navy">Get a Free Consultation</h2>
            <p className="text-xl text-gray-600 mb-8 text-center font-space font-bold">
              Tell us about your project and let's discuss how we can help.
            </p>
            
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-base font-poppins font-extrabold text-navy mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent font-inter"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-base font-poppins font-extrabold text-navy mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent font-inter"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-base font-poppins font-extrabold text-navy mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent font-inter"
                  placeholder="Your phone number"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-base font-poppins font-extrabold text-navy mb-1">Project Details</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent font-inter"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <motion.button 
                  type="submit" 
                  className="ripple bg-gradient-to-r from-mint to-cta text-navy font-poppins font-extrabold py-3 px-6 rounded-md flex items-center justify-center w-full text-lg hover:shadow-lg hover:shadow-mint/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit <Send className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
