
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  CheckCircle, 
  Calendar, 
  Trophy, 
  Users, 
  Heart, 
  Target
} from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const teamMembers = [
    {
      name: "Rajiv Kumar",
      position: "Founder & CEO",
      bio: "15+ years of experience in software development and business leadership.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      name: "Priya Sharma",
      position: "CTO",
      bio: "Expert in web and mobile technologies with a passion for innovation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "Ajay Singh",
      position: "Lead Developer",
      bio: "Full-stack developer with expertise in modern web frameworks.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Meera Patel",
      position: "UX/UI Designer",
      bio: "Creating intuitive and beautiful user experiences for over 8 years.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "3+", icon: <Calendar className="h-6 w-6 text-purple-600" /> },
    { label: "Projects Completed", value: "100+", icon: <Trophy className="h-6 w-6 text-purple-600" /> },
    { label: "Clients Served", value: "35+", icon: <Users className="h-6 w-6 text-purple-600" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Heart className="h-6 w-6 text-purple-600" /> }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton variant="floating">I'd like to know more about your company</WhatsAppButton>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Create Software</h1>
              <p className="text-xl mb-8">
                We are a team of passionate technologists dedicated to helping businesses thrive in the digital world through innovative software solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team collaboration" 
                className="rounded-lg shadow-2xl w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Company origins" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">From Idea to Impact</h3>
              <p className="text-gray-700 mb-4">
                Founded in 2021, Create Software Solutions began with a simple mission: to make cutting-edge technology accessible to businesses of all sizes, particularly startups and MSMEs.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Rajiv Kumar, recognized that many small businesses were being left behind in the digital transformation because they couldn't afford enterprise-level solutions. He assembled a team of talented developers, designers, and strategists to change that.
              </p>
              <p className="text-gray-700">
                Today, we've helped over 35 startups build their digital presence and scale their operations with custom software solutions that don't break the bank.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with innovative technology solutions that drive growth, improve efficiency, and create exceptional customer experiences.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading technology partner for startups and MSMEs in India, known for our expertise, innovation, and commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate experts behind our success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with technology."
              },
              {
                title: "Integrity",
                description: "We're honest, transparent, and committed to doing what's right."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code to customer service."
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork, both within our company and with our clients."
              },
              {
                title: "Client Success",
                description: "Your success is our success. We're invested in helping you achieve your goals."
              },
              {
                title: "Continuous Learning",
                description: "We're always learning, growing, and evolving to stay at the forefront of technology."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's start a conversation about how we can help you achieve your business goals.
          </p>
          <WhatsAppButton className="bg-white text-purple-700 hover:bg-gray-100" customMessage="Hello, I've been reading about your company and I'm interested in working with you.">
            Get in Touch
          </WhatsAppButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
