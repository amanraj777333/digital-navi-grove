
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
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

  const features = [
    {
      title: "Expertise",
      description: "3+ years of industry experience serving over 35 startups."
    },
    {
      title: "Custom Solutions",
      description: "Tailored solutions to fit your specific business needs."
    },
    {
      title: "Client Success",
      description: "Proven track record of delivering results and building long-term partnerships."
    },
    {
      title: "Innovative Technology",
      description: "Stay ahead with the latest technology and trends."
    },
    {
      title: "Dedicated Support",
      description: "Personalized support from our expert team."
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden costs."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-base mb-6">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Why Choose Create Software Solutions?</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-bold">
            We stand out from the competition with our unique approach and commitment to excellence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </motion.div>
              <h3 className="text-2xl font-extrabold mb-3">{feature.title}</h3>
              <p className="text-lg text-gray-600 font-bold">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
