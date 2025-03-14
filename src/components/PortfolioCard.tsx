
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

const PortfolioCard = ({ title, description, image, link, tags = [] }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardContent className="pt-6">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base text-gray-600 mb-3">
          {description}
        </CardDescription>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs py-1 px-2 bg-purple-100 text-purple-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0" asChild>
          <Link to={link}>
            View Case Study <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
