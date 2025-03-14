
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full overflow-hidden">
      <CardHeader>
        <motion.div 
          className="w-12 h-12 mb-4 text-purple-600 flex items-center justify-center bg-purple-100 rounded-lg"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        >
          {icon}
        </motion.div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
          <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0" asChild>
            <Link to={link}>
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
