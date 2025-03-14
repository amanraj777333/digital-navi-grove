
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  children: React.ReactNode;
  className?: string;
}

const WhatsAppButton = ({
  phoneNumber = "9354149726",
  message = "Hello, I'm interested in your services. Can you help me?",
  children,
  className = "",
}: WhatsAppButtonProps) => {
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppRedirect}
      className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold ${className}`}
    >
      {children} <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default WhatsAppButton;
