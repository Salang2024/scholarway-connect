
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Shield, Calendar, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="About Salang School" 
          subtitle="Discover our rich history, mission, values, and the dedicated team behind our educational excellence."
          backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />
        
        {/* History Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Our History
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Founded in 1995, Salang School began as a small primary institution with just 50 students and 5 teachers. 
                  Our founder, Dr. Elizabeth Mutua, envisioned creating an educational environment where children could thrive academically 
                  while developing strong character and leadership skills.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Over the decades, we've grown into one of the region's most respected educational institutions, 
                  expanding our campus, adding a secondary school, and continually enhancing our curriculum to prepare students 
                  for the challenges of a rapidly changing world.
                </motion.p>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-salang-600 to-salang-400 opacity-30 blur-lg"></div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Historic photo of Salang School" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission and Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Mission & Values
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                At Salang School, we are guided by a clear mission and strong core values that shape everything we do.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Mission",
                  description: "To provide a holistic, inclusive, and challenging educational experience that empowers students to become responsible global citizens and lifelong learners.",
                  icon: BookOpen,
                  delay: 0.1
                },
                {
                  title: "Our Vision",
                  description: "To be the leading educational institution that nurtures innovative thinkers, compassionate leaders, and individuals committed to making a positive impact on society.",
                  icon: Shield,
                  delay: 0.2
                },
                {
                  title: "Core Values",
                  description: "Excellence, Integrity, Respect, Innovation, and Community. These values guide our decisions and actions every day.",
                  icon: Award,
                  delay: 0.3
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                >
                  <div className="w-12 h-12 bg-salang-100 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-salang-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Leadership Team
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Meet the experienced educators and administrators who lead Salang School with vision and dedication.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Sarah Kimani",
                  title: "School Director",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                  description: "With over 25 years in education, Dr. Kimani brings visionary leadership to Salang School.",
                  delay: 0.1
                },
                {
                  name: "Mr. David Ochieng",
                  title: "Head of Primary",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                  description: "An expert in early childhood education with a passion for creative teaching methods.",
                  delay: 0.2
                },
                {
                  name: "Mrs. Jane Mwangi",
                  title: "Head of Secondary",
                  image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                  description: "Specializing in curriculum development and preparing students for university success.",
                  delay: 0.3
                },
                {
                  name: "Mr. James Nyaga",
                  title: "Administrative Director",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                  description: "Ensuring smooth operations and managing the school's resources effectively.",
                  delay: 0.4
                }
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: leader.delay }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-salang-600 mb-4">{leader.title}</p>
                  <p className="text-gray-700">{leader.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-salang-100 text-salang-800 text-sm font-medium mb-6">
                  <Calendar className="h-4 w-4" />
                  Our Journey
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Milestones in Our History
              </motion.h2>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-salang-200"></div>
              
              {/* Timeline items */}
              <div className="relative space-y-16">
                {[
                  {
                    year: "1995",
                    title: "Salang School Founded",
                    description: "Established with 50 students and a vision to transform education.",
                    align: "right",
                    delay: 0.1
                  },
                  {
                    year: "2003",
                    title: "Secondary School Addition",
                    description: "Expanded to include secondary education, doubling our campus size.",
                    align: "left",
                    delay: 0.2
                  },
                  {
                    year: "2010",
                    title: "National Recognition",
                    description: "Received the National Excellence in Education Award for outstanding academic performance.",
                    align: "right",
                    delay: 0.3
                  },
                  {
                    year: "2015",
                    title: "Technology Integration",
                    description: "Launched our 1:1 computing program and smart classrooms initiative.",
                    align: "left",
                    delay: 0.4
                  },
                  {
                    year: "2023",
                    title: "Campus Expansion",
                    description: "Opened new sports facilities, science labs, and arts center.",
                    align: "right",
                    delay: 0.5
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${
                      item.align === 'left' ? 'flex-row' : 'flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: item.align === 'left' ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item.delay }}
                  >
                    <div className={`w-1/2 ${item.align === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <span className="text-xl font-bold text-salang-600 block mb-2">{item.year}</span>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-14 h-14 bg-salang-600 text-white rounded-full flex items-center justify-center z-10 relative">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
