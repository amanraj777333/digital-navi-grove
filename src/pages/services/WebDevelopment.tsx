
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';

const WebDevelopment = () => {
  return (
    <>
      <Navbar />
      <ServiceDetail
        title="Web Development"
        description="Custom web solutions built with modern technologies and best practices to help your business grow online."
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        features={[
          "Responsive Design for All Devices",
          "Custom Frontend Development",
          "Secure Backend Integration",
          "Performance Optimization",
          "SEO-friendly Architecture",
          "Database Design & Implementation",
          "API Development & Integration",
          "Content Management Systems"
        ]}
        benefits={[
          "Increase Online Visibility",
          "Improve User Experience",
          "Boost Conversion Rates",
          "Scale Your Business Online",
          "Reduce Maintenance Costs"
        ]}
        technologies={[
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "MongoDB",
          "PostgreSQL",
          "AWS",
          "Docker"
        ]}
      />
      <Footer />
    </>
  );
};

export default WebDevelopment;
