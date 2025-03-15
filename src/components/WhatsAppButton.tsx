
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'floating';
  customMessage?: string;
}

const WhatsAppButton = ({
  phoneNumber = "9354149726",
  message = "Hello, I'm interested in your services. Can you help me?",
  children,
  className = "",
  variant = "default",
  customMessage,
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppRedirect = () => {
    const finalMessage = customMessage || message;
    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (variant === "floating") {
    return (
      <motion.button
        onClick={handleWhatsAppRedirect}
        className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 20, 0, -20, 0] }}
        transition={{ 
          scale: { duration: 0.3 }, 
          rotate: { repeat: 2, duration: 1, delay: 1 }
        }}
        aria-label="Contact us on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6" />
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className="absolute -top-16 right-0 bg-white text-green-600 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                Chat on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Button 
        onClick={handleWhatsAppRedirect}
        className={`bg-green-600 hover:bg-green-700 text-white font-bold transition-all duration-300 ${className}`}
      >
        {children || "Chat on WhatsApp"} <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-green-600 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            Connect on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WhatsAppButton;
