
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import WhatsAppButton from '@/components/WhatsAppButton';

const TestimonialsSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-mint/20 text-navy font-bold text-base mb-6">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-space font-extrabold mb-4 text-navy">What Our Clients Say</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-inter font-bold">
            Hear from our satisfied clients who have experienced the difference.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          <motion.div variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}>
            <TestimonialCard 
              quote="Working with Create Software Solutions transformed our business. The custom CRM they built has streamlined our operations and boosted productivity."
              name="Rajiv Sharma"
              company="TechStart India"
              className="glass hover:shadow-lg transition-all"
            />
          </motion.div>
          
          <motion.div variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}>
            <TestimonialCard 
              quote="Their web development team created a stunning website that perfectly represents our brand and has significantly improved our online presence."
              name="Ananya Patel"
              company="Innovate Solutions"
              className="glass hover:shadow-lg transition-all"
            />
          </motion.div>
          
          <motion.div variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}>
            <TestimonialCard 
              quote="The SEO and digital marketing strategies implemented by their team have resulted in a 200% increase in organic traffic to our website."
              name="Vikram Singh"
              company="Growth Partners"
              className="glass hover:shadow-lg transition-all"
            />
          </motion.div>

          <motion.div variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}>
            <TestimonialCard 
              quote="Their app development team delivered an amazing product that exceeded our expectations. The user experience is flawless and our customers love it!"
              name="Priya Kapoor"
              company="NextGen Apps"
              className="glass hover:shadow-lg transition-all"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <WhatsAppButton className="ripple bg-gradient-to-r from-mint to-cta hover:shadow-lg hover:shadow-mint/20 text-navy font-space font-extrabold py-4 px-8 rounded-md inline-flex items-center">
            Get Your Free Consultation
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
