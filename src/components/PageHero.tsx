
import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          filter: 'brightness(0.7)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
