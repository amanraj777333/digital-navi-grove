
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookConsultation from '@/components/BookConsultation';

const Hero = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const services = ["Custom Software.", "AI Tools.", "Mobile Apps.", "Startup MVPs.", "Deep-Tech Innovation."];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

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

  // Matrix characters for background effect
  const generateMatrixCharacters = () => {
    const characters = [];
    for (let i = 0; i < 100; i++) {
      characters.push({
        id: i,
        char: String.fromCharCode(48 + Math.floor(Math.random() * 74)), // Random character
        x: Math.random() * 100, // Random x position
        y: Math.random() * 100, // Random y position
        duration: 5 + Math.random() * 10, // Random animation duration
        delay: Math.random() * 5 // Random animation delay
      });
    }
    return characters;
  };

  const matrixCharacters = generateMatrixCharacters();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-0 bg-navy">
      <div className="absolute inset-0 overflow-hidden">
        {/* Matrix effect */}
        <div className="absolute inset-0 opacity-10">
          {matrixCharacters.map((char) => (
            <div 
              key={char.id}
              className="absolute text-mint font-mono"
              style={{
                left: `${char.x}%`,
                top: `${char.y}%`,
                animation: `matrix-fall ${char.duration}s linear ${char.delay}s infinite`
              }}
            >
              {char.char}
            </div>
          ))}
        </div>
        
        {/* Animated blobs */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-mint/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-80 h-80 rounded-full bg-cta/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
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
          <div className="text-center lg:text-left text-white">
            <motion.div variants={logoVariants} className="mb-8">
              <h2 className="inline-flex items-center text-4xl font-space font-bold">
                <span className="text-mint">Create</span>
                <span className="text-mint/80">Software</span>
                <span className="text-mint/60">.in</span>
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full glass text-mint font-poppins font-semibold text-lg mb-6">
                AI-Driven • Business-Focused • Future-Ready
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-poppins font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Transforming ideas into <span className="text-gradient bg-gradient-to-r from-mint to-cta bg-clip-text text-transparent">AI-powered</span>, scalable realities
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="h-16 mb-8"
            >
              <div className="relative h-16">
                {services.map((service, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: serviceIndex === index ? 1 : 0,
                      y: serviceIndex === index ? 0 : 20
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-xl text-mint/90 font-poppins font-medium"
                  >
                    {service}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <BookConsultation 
                buttonText="Let's Talk" 
                className="ripple text-lg py-6 px-8 font-poppins font-semibold bg-gradient-to-r from-mint to-cta text-navy hover:shadow-lg hover:shadow-mint/20" 
              />
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="ripple text-lg py-6 px-8 font-poppins font-semibold border-mint text-mint hover:bg-mint/10"
                >
                  See Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-center glass p-4 rounded-lg">
                <motion.h3
                  className="text-3xl font-poppins font-bold text-mint mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  50+
                </motion.h3>
                <p className="text-white/80">Projects Delivered</p>
              </div>
              <div className="text-center glass p-4 rounded-lg">
                <motion.h3
                  className="text-3xl font-poppins font-bold text-mint mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  100%
                </motion.h3>
                <p className="text-white/80">Client Satisfaction</p>
              </div>
              <div className="text-center glass p-4 rounded-lg">
                <motion.h3
                  className="text-3xl font-poppins font-bold text-mint mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  24/7
                </motion.h3>
                <p className="text-white/80">Support</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <motion.div 
              className="absolute -z-10 top-0 right-0 w-96 h-96 rounded-full bg-mint/20 blur-3xl opacity-20"
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
                className="absolute top-0 left-0 w-72 h-72 bg-mint/30 rounded-full mix-blend-multiply filter blur-xl opacity-50"
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
                className="absolute top-0 right-0 w-72 h-72 bg-cta/30 rounded-full mix-blend-multiply filter blur-xl opacity-50"
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
                className="absolute bottom-0 right-24 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-50"
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
                className="relative p-8 glass neon-border backdrop-blur-lg rounded-2xl"
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
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1500&q=80" 
                    alt="Technology"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </motion.div>
                <h3 className="text-xl font-poppins font-bold mb-2 text-white">AI-Powered Solutions</h3>
                <p className="text-white/80 mb-4 font-inter">Transforming businesses with cutting-edge AI technology tailored to your specific needs.</p>
                <motion.button
                  className="w-full py-2 bg-gradient-to-r from-mint to-cta text-navy rounded-lg font-poppins font-medium ripple"
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
