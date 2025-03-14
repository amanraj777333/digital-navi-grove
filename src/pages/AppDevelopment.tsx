
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedText from '@/components/AnimatedText';
import FaqItem from '@/components/FaqItem';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Code, 
  Smartphone, 
  Cpu, 
  Layers, 
  BarChart, 
  Send,
  ChevronRight
} from 'lucide-react';

const AppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStartProjectClick = () => {
    const message = "Hello, I'm interested in your App Development services. I would like to discuss my project requirements.";
    const phoneNumber = "9354149726";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 20 }).map((_, index) => (
              <div 
                key={index}
                className="absolute rounded-full bg-purple-500"
                style={{ 
                  width: `${Math.random() * 300}px`, 
                  height: `${Math.random() * 300}px`, 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5,
                  animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Innovative <AnimatedText text="App Development" animation="typing" className="inline-block" /> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                We design and develop feature-rich, user-friendly mobile and web applications that drive engagement and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton 
                  customMessage="Hello, I'm interested in your App Development services. I would like to discuss my project requirements."
                  className="text-lg py-6 px-8"
                >
                  Get Started Now
                </WhatsAppButton>
                <motion.button 
                  className="text-gray-700 font-medium flex items-center justify-center"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ChevronRight className="ml-1 h-5 w-5" />
                </motion.button>
              </div>
              <div className="mt-8 inline-flex items-center justify-center lg:justify-start gap-x-6 text-sm font-medium">
                <motion.div 
                  className="flex items-center gap-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>35+ Apps Delivered</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>100% Client Satisfaction</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3" 
                alt="Mobile App Development" 
                className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-2xl" 
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb" 
                  alt="Mobile App Interface" 
                  className="w-32 h-24 object-cover rounded" 
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our App Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our App Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured, collaborative approach to create applications that meet your business goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-purple-600" />,
                title: "Discovery & Planning",
                description: "We work closely with you to understand your business goals, target audience, and app requirements."
              },
              {
                icon: <Layers className="h-10 w-10 text-purple-600" />,
                title: "Design & Prototyping",
                description: "Our team creates intuitive, user-friendly designs and interactive prototypes for your approval."
              },
              {
                icon: <Cpu className="h-10 w-10 text-purple-600" />,
                title: "Development",
                description: "We develop your application using the latest technologies and best coding practices."
              },
              {
                icon: <BarChart className="h-10 w-10 text-purple-600" />,
                title: "Testing & Launch",
                description: "Rigorous testing ensures your app is bug-free before launching it to your users."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies to build high-performance, scalable applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", 
              "React.js", "Node.js", "Firebase", "AWS", "GraphQL", "MongoDB", "PostgreSQL", "TypeScript"
            ].map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <p className="font-medium text-gray-800">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our App Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent app development projects.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Fitness App",
                description: "A comprehensive mobile app for tracking fitness goals and nutrition.",
                image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
                tags: ["Mobile App", "React Native", "Firebase"]
              },
              {
                title: "E-commerce Platform",
                description: "A feature-rich e-commerce app with integrated payment gateway.",
                image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
                tags: ["Mobile App", "Flutter", "Node.js"]
              },
              {
                title: "Social Networking App",
                description: "A social media platform for connecting like-minded individuals.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
                tags: ["Mobile App", "iOS", "Android"]
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="relative h-60 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button 
              className="text-purple-600 font-medium flex items-center justify-center mx-auto hover:text-purple-700"
              whileHover={{ x: 5 }}
            >
              View More Projects <ChevronRight className="h-4 w-4 ml-1" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our app development services.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FaqItem 
              question="How long does it take to develop a mobile app?"
              answer="The timeline for app development varies depending on complexity. A simple app might take 2-3 months, while a complex app could take 4-6 months or more. We provide a detailed timeline during the consultation phase."
            />
            
            <FaqItem 
              question="Which platforms do you develop for?"
              answer="We develop for both iOS and Android platforms. We can create native apps specific to each platform or cross-platform apps that work on both, depending on your requirements and budget."
            />
            
            <FaqItem 
              question="How much does it cost to develop an app?"
              answer="App development costs vary widely based on features, complexity, and platforms. We provide detailed quotes after understanding your requirements during the initial consultation."
            />
            
            <FaqItem 
              question="Do you provide ongoing maintenance and support?"
              answer="Yes, we offer various maintenance and support packages to ensure your app continues to run smoothly after launch. Our team is always available to address any issues or implement updates as needed."
            />
            
            <FaqItem 
              question="Do you help with app store submission?"
              answer="Yes, we handle the entire process of submitting your app to the App Store and Google Play Store, ensuring it meets all guidelines and requirements for approval."
            />
          </div>
          
          <div className="text-center mt-12">
            <WhatsAppButton customMessage="Hello, I have a question about app development that wasn't answered in the FAQ section.">
              Still Have Questions?
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">Start Your App Project Today</h2>
              <p className="text-gray-600 mb-8 text-center">
                Tell us about your project and let's discuss how we can help bring your app idea to life.
              </p>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                handleStartProjectClick();
              }}>
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your phone number"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">App Project Details</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us about your app idea and requirements"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    type="submit" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md flex items-center justify-center w-full transition-all duration-300"
                  >
                    Submit <Send className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Your Next App?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us today to get started on your journey to digital success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppButton 
              className="bg-white text-purple-700 hover:bg-gray-100"
              customMessage="Hello, I'm ready to start my app development project. Can we schedule a consultation?"
            >
              Get Started Now
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopment;
