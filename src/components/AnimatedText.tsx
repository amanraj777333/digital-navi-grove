
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'fade' | 'typing' | 'gradient';
  delay?: number;
}

const AnimatedText = ({ 
  text, 
  className = '', 
  animation = 'gradient',
  delay = 0
}: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  // Split text into words for word-by-word animation
  const words = text.split(' ');
  
  // Typing animation config
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Fade animation config
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: delay
      }
    }
  };

  if (animation === 'typing') {
    return (
      <motion.div
        className={className}
        variants={typingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-2">
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    );
  }

  if (animation === 'fade') {
    return (
      <motion.div
        className={className}
        variants={fadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-gold-500 to-purple-600">
          {text}
        </span>
      </motion.div>
    );
  }

  // Default gradient animation
  return (
    <motion.div
      ref={elementRef}
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-gold-500 to-purple-600 bg-size-200 animate-gradient">
        {text}
      </span>
    </motion.div>
  );
};

export default AnimatedText;
