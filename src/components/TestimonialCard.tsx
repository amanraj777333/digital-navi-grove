
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, company, image }: TestimonialCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <Quote className="h-8 w-8 text-purple-200 mb-4" />
        <CardDescription className="text-base text-gray-700 italic">
          "{quote}"
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-purple-100 text-purple-600 font-bold text-xl">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
