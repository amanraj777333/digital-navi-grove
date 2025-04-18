
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';

const AppDevelopment = () => {
  return (
    <>
      <Navbar />
      <ServiceDetail
        title="Mobile App Development"
        description="Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
        imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
        features={[
          "Native iOS Development",
          "Native Android Development",
          "Cross-Platform Solutions",
          "App Store Optimization",
          "Push Notifications",
          "Offline Functionality",
          "Analytics Integration",
          "Regular Updates & Maintenance"
        ]}
        benefits={[
          "Reach Mobile Users Effectively",
          "Improve Customer Engagement",
          "Increase Brand Loyalty",
          "Generate New Revenue Streams",
          "Enhance User Experience"
        ]}
        technologies={[
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Firebase",
          "GraphQL",
          "Redux",
          "MobX"
        ]}
      />
      <Footer />
    </>
  );
};

export default AppDevelopment;
