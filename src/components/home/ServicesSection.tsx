
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { Code2, Brain, Rocket, LineChart, GraduationCap, Bot } from 'lucide-react';

const ServicesSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-base mb-6">
            Our Services
          </span>
          <h2 className="text-4xl font-bold mb-4">Unified Digital Powerhouse</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized service divisions combining AI, automation, and software expertise to help startups, SMEs, and legacy businesses scale intelligently.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <ServiceCard 
              icon={<Code2 size={24} />}
              title="Custom Development"
              description="From custom software to business workflow automation, we build scalable solutions tailored to your needs."
              link="/services/custom-development"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ServiceCard 
              icon={<Brain size={24} />}
              title="AI/ML Prototyping"
              description="Leverage cutting-edge AI technology with custom models, NLP, Vision AI, and prediction engines."
              link="/services/ai-ml"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ServiceCard 
              icon={<Rocket size={24} />}
              title="Startup Services"
              description="From MVPs to investor-ready products, we help startups launch and scale quickly and efficiently."
              link="/services/startup-services"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ServiceCard 
              icon={<LineChart size={24} />}
              title="Marketing Solutions"
              description="Comprehensive digital marketing services to boost your online presence and drive growth."
              link="/services/marketing"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ServiceCard 
              icon={<GraduationCap size={24} />}
              title="Industry Solutions"
              description="Specialized solutions for Jewelry, Healthcare, Warehousing, and more sectors."
              link="/services/industry-solutions"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ServiceCard 
              icon={<Bot size={24} />}
              title="Deep-Tech & AI Lab"
              description="Advanced AI solutions, LLM applications, and smart automation for your business."
              link="/services/deep-tech"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
