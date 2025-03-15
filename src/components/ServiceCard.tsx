
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "9354149726";
    const message = `Hello, I'm interested in your ${title} services. Can you help me?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Link to={link} className="block h-full">
      <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full overflow-hidden border hover:border-purple-200 cursor-pointer">
        <CardHeader>
          <motion.div 
            className="w-12 h-12 mb-3 text-purple-600 flex items-center justify-center bg-purple-100 rounded-xl"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0 text-sm">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Button 
              variant="ghost" 
              className="text-green-600 hover:text-green-700 p-0 text-sm"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsAppRedirect();
              }}
            >
              Connect Now <MessageSquare className="ml-1 h-4 w-4" />
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
