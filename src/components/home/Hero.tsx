
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookConsultation from '@/components/BookConsultation';

const Hero = () => {
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

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-16 lg:py-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white opacity-70"></div>
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1500&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center lg:text-left">
            <motion.div variants={logoVariants} className="mb-8">
              <h2 className="inline-flex items-center text-4xl font-bold">
                <span className="text-purple-600">Create</span>
                <span className="text-purple-700">Software</span>
                <span className="text-purple-800">.in</span>
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-lg mb-6">
                AI-Driven • Business-Focused • Future-Ready
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Transforming ideas into AI-powered, scalable realities
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 font-medium"
            >
              Custom Software • AI/ML Tools • Mobile Apps • Startup MVPs • Deep-Tech Innovation
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <BookConsultation buttonText="Schedule a Free Consultation" className="text-lg py-6 px-8 font-semibold" />
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg py-6 px-8 font-semibold">
                  See Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">50+</h3>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <motion.div 
              className="absolute -z-10 top-0 right-0 w-96 h-96 rounded-full bg-purple-300 blur-3xl opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
                animate={{
                  x: [0, 30, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute bottom-0 right-24 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
                animate={{
                  x: [0, -20, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div
                className="relative p-8 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                    alt="Technology"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
                <p className="text-gray-700 mb-4">Transforming businesses with cutting-edge technology tailored to your specific needs.</p>
                <motion.button
                  className="w-full py-2 bg-purple-600 text-white rounded-lg font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
