
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  children: React.ReactNode;
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
  const handleWhatsAppRedirect = () => {
    const finalMessage = customMessage || message;
    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleWhatsAppRedirect}
        className={`fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${className}`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <Button 
      onClick={handleWhatsAppRedirect}
      className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
    >
      {children} <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default WhatsAppButton;
