
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Transferring our children to Salang School was the best decision we've made for their education. The teachers are exceptional and the curriculum is challenging yet engaging.",
    name: "Sarah Johnson",
    role: "Parent of 2 students",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "As a former student, I can attest to the quality of education at Salang. The school prepared me well for university and instilled values that guide me to this day.",
    name: "Michael Chen",
    role: "Alumni, Class of 2020",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "The personalized attention my son receives at Salang has transformed his learning experience. The teachers identify his strengths and work on areas needing improvement.",
    name: "David Williams",
    role: "Parent of a 4th grader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "Salang's approach to education balances academic rigor with creativity and character development. My daughter has flourished both academically and personally.",
    name: "Rebecca Martinez",
    role: "Parent of a secondary student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  }
];

const TestimonialCard = ({ testimonial, index, isInView }: { testimonial: Testimonial; index: number; isInView: boolean }) => {
  return (
    <motion.div
      className="glass-card rounded-xl p-8 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 30 
      }}
      transition={{ duration: 0.7, delay: 0.2 + (index * 0.1) }}
    >
      <div className="mb-6">
        <Quote className="h-10 w-10 text-salang-400 mb-4" />
        <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
      </div>
      
      <div className="mt-auto flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-salang-100"
        />
        <div>
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [hasTriggered, setHasTriggered] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isInView, hasTriggered]);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-salang-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-salang-100 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            What Our Community Says
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover what parents, students, and alumni have to say about their experience with Salang School.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              isInView={hasTriggered}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
