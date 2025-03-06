
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';

const ProgramCard = ({ 
  title, 
  description, 
  image, 
  index, 
  isInView 
}: { 
  title: string; 
  description: string; 
  image: string; 
  index: number; 
  isInView: boolean 
}) => {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 30 
      }}
      transition={{ duration: 0.7, delay: 0.2 + (index * 0.1) }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="ghost" className="text-salang-600 hover:text-salang-700 p-0 flex items-center gap-2 group">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [hasTriggered, setHasTriggered] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isInView, hasTriggered]);
  
  const programs = [
    {
      title: "Primary Education",
      description: "Our primary program focuses on building strong foundations in literacy, numeracy, sciences, and arts. We ensure every child develops essential skills while fostering curiosity and creativity.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Secondary Education",
      description: "Our comprehensive secondary program prepares students for higher education with advanced courses in sciences, mathematics, languages, humanities, and technology. We emphasize critical thinking and problem-solving.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Special Programs",
      description: "Discover our specialized programs including accelerated learning, arts and music, sports and athletics, and STEM education. These programs allow students to pursue their passions alongside academic subjects.",
      image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-salang-100 text-salang-800 text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              Our Academic Programs
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive Educational Pathways
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Salang School, we offer diverse educational programs designed to meet the unique needs and aspirations of every student, from primary through secondary education.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              index={index}
              isInView={hasTriggered}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
