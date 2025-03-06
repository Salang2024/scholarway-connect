
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { School, BookOpen, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay to ensure animations start after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMGgydjJoLTJ2LTJ6bTggMGgydjJoLTJ2LTJ6bS0xMiA0aDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] -z-10" />
      
      {/* Content container */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column (text content) */}
          <div className="space-y-8 max-w-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-salang-100 text-salang-800 text-sm font-medium mb-6">
                Excellence in Education
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Empowering Minds <br/> 
              <span className="text-salang-600">Shaping Futures</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Salang School, we provide comprehensive primary and secondary education focused on academic excellence, character development, and preparing students for a successful future.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" className="bg-salang-600 hover:bg-salang-700 text-white">
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="border-salang-600 text-salang-600">
                Explore Programs
              </Button>
            </motion.div>
          </div>
          
          {/* Right column (image) */}
          <motion.div
            className="relative mx-auto lg:mr-0 max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-salang-600 to-salang-400 opacity-30 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Students in a classroom" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats or features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: School, 
              title: "Comprehensive Education", 
              description: "From primary to secondary levels with modern curriculum", 
              delay: 0.6 
            },
            { 
              icon: BookOpen, 
              title: "Expert Teachers", 
              description: "Dedicated educators with years of experience", 
              delay: 0.7 
            },
            { 
              icon: Users, 
              title: "Small Class Sizes", 
              description: "Personalized attention for every student", 
              delay: 0.8 
            },
            { 
              icon: Award, 
              title: "High Achievement", 
              description: "Consistently excellent academic results", 
              delay: 0.9 
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: feature.delay }}
            >
              <div className="w-12 h-12 bg-salang-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-salang-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
