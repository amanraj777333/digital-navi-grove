
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

const PortfolioCard = ({ title, description, image, link, tags = [] }: PortfolioCardProps) => {
  return (
    <Link to="/portfolio" className="block h-full">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full cursor-pointer bg-white/70 backdrop-blur-sm border border-white/40">
        <motion.div 
          className="relative h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-navy bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div 
              className="p-2 bg-mint rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ rotate: 90, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="h-6 w-6 text-navy" />
            </motion.div>
          </div>
        </motion.div>
        <CardContent className="pt-6">
          <CardTitle className="text-xl font-poppins font-bold mb-2 text-navy">{title}</CardTitle>
          <CardDescription className="text-base text-gray-600 mb-3 font-inter">
            {description}
          </CardDescription>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <motion.span 
                  key={index} 
                  className="text-xs py-1 px-2 bg-mint/10 text-navy rounded-full font-poppins font-bold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <Button variant="ghost" className="text-mint hover:text-navy p-0 font-poppins font-bold">
              View Case Study <ExternalLink className="ml-1 h-4 w-4" />
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PortfolioCard;
