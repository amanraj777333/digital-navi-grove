
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare } from 'lucide-react';
import BookConsultation from './BookConsultation';

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  imageUrl: string;
  technologies?: string[];
}

const ServiceDetail = ({ title, description, features, benefits, imageUrl, technologies }: ServiceDetailProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-navy/80" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-200">{description}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-purple-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-purple-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {technologies && (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="sticky top-24 space-y-4 bg-gray-50 p-6 rounded-xl"
            >
              <BookConsultation 
                buttonText="Schedule Consultation"
                className="w-full bg-purple-600 hover:bg-purple-700"
              />
              
              <Button 
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => {
                  const phoneNumber = "9354149726";
                  const message = `Hi, I'm interested in your ${title} service. Can you help me?`;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
                }}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Enquire Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
