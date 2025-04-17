
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Laptop, RocketLaunch } from 'lucide-react';

const HowWeWorkSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  const steps = [
    {
      icon: <Lightbulb className="w-12 h-12 text-mint" />,
      title: "Discovery",
      description: "We dive deep into your business goals and challenges to understand your unique needs."
    },
    {
      icon: <Code className="w-12 h-12 text-mint" />,
      title: "Development",
      description: "Our expert team builds custom solutions designed to meet your specific requirements."
    },
    {
      icon: <Laptop className="w-12 h-12 text-mint" />,
      title: "Iteration",
      description: "We continuously refine and improve to ensure the solution perfectly fits your needs."
    },
    {
      icon: <RocketLaunch className="w-12 h-12 text-mint" />,
      title: "Delivery",
      description: "Your solution is launched with ongoing support to ensure long-term success."
    }
  ];

  return (
    <section className="py-20 bg-navy/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-mint/20 text-navy font-bold text-base mb-6">
            Our Process
          </span>
          <h2 className="text-4xl md:text-6xl font-space font-extrabold mb-4 text-navy">How We Work</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-poppins">
            A streamlined approach to turning your ideas into reality
          </p>
        </motion.div>

        {/* Process flow */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-mint/30 via-cta/50 to-mint/30 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }
                  }
                }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <div className="relative z-10 flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-white shadow-lg">
                    <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-mint/20 to-cta/20"></div>
                    <div className="relative">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-poppins font-bold mb-3 text-navy">{step.title}</h3>
                  <p className="text-center text-gray-600 font-inter">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-12 right-0 transform translate-x-1/2">
                      <svg className="w-8 h-8 text-mint animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
