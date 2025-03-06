
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Landmark, BookOpen, Clock, Award, Lightbulb, Music, Activity, MessagesSquare } from 'lucide-react';

const Primary = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Primary School" 
          subtitle="Providing a strong foundation for lifelong learning (Grades 1-6)"
          backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />
        
        {/* Overview Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Primary school classroom" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-salang-100 text-salang-800 text-sm font-medium mb-6">
                    <Landmark className="h-4 w-4" />
                    Primary Education
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Building Strong Foundations
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our primary school program provides a nurturing environment where young minds develop a love for learning. 
                  We focus on core literacy and numeracy skills while encouraging curiosity, creativity, and character development.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-700 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  With small class sizes and dedicated teachers, we ensure that each child receives the attention they need to thrive 
                  academically, socially, and emotionally.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button className="bg-salang-600 hover:bg-salang-700">Apply for Primary School</Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Curriculum Section */}
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
                  <BookOpen className="h-4 w-4" />
                  Our Curriculum
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Comprehensive Learning Experience
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our primary curriculum balances academic rigor with creative exploration and play-based learning.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Language Arts",
                  description: "Developing strong reading, writing, speaking, and listening skills through engaging literature and creative activities.",
                  icon: MessagesSquare,
                  delay: 0.1
                },
                {
                  title: "Mathematics",
                  description: "Building number sense, problem-solving abilities, and mathematical reasoning through hands-on activities and real-world applications.",
                  icon: Lightbulb,
                  delay: 0.2
                },
                {
                  title: "Science & Technology",
                  description: "Exploring the natural world through inquiry-based learning, experiments, and integrated technology projects.",
                  icon: BookOpen,
                  delay: 0.3
                },
                {
                  title: "Social Studies",
                  description: "Understanding communities, history, geography, and diverse cultures through interactive projects and field trips.",
                  icon: Landmark,
                  delay: 0.4
                },
                {
                  title: "Arts & Music",
                  description: "Developing creativity and self-expression through visual arts, music instruction, and performance opportunities.",
                  icon: Music,
                  delay: 0.5
                },
                {
                  title: "Physical Education",
                  description: "Promoting health, fitness, teamwork, and motor skills development through structured activities and play.",
                  icon: Activity,
                  delay: 0.6
                }
              ].map((subject, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: subject.delay }}
                >
                  <div className="w-12 h-12 bg-salang-100 rounded-full flex items-center justify-center mb-6">
                    <subject.icon className="w-6 h-6 text-salang-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{subject.title}</h3>
                  <p className="text-gray-700">{subject.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Daily Schedule Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-salang-100 text-salang-800 text-sm font-medium mb-6">
                    <Clock className="h-4 w-4" />
                    Daily Schedule
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  A Day in Our Primary School
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-700 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our balanced daily schedule ensures that students engage in focused academic learning while having 
                  plenty of time for creativity, physical activity, and social development.
                </motion.p>
                
                <div className="space-y-6">
                  {[
                    { time: "7:30 - 8:00 AM", activity: "Arrival & Morning Activities" },
                    { time: "8:00 - 10:00 AM", activity: "Literacy Block (Reading, Writing, Language)" },
                    { time: "10:00 - 10:30 AM", activity: "Break & Snack Time" },
                    { time: "10:30 - 12:00 PM", activity: "Mathematics & Science" },
                    { time: "12:00 - 1:00 PM", activity: "Lunch & Recess" },
                    { time: "1:00 - 2:30 PM", activity: "Specials (Art, Music, PE, Technology)" },
                    { time: "2:30 - 3:30 PM", activity: "Social Studies & Project Work" },
                    { time: "3:30 - 4:00 PM", activity: "Closing Circle & Dismissal" },
                    { time: "4:00 - 5:30 PM", activity: "After School Programs (Optional)" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                    >
                      <div className="w-32 font-bold text-salang-600">{item.time}</div>
                      <div className="flex-1 text-gray-700">{item.activity}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Students in classroom" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574562304195-64c79ab93c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Art class" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1564429097439-899ab20524d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Outdoor play" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Reading time" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Achievements Section */}
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
                  <Award className="h-4 w-4" />
                  Student Success
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Primary School Achievements
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our primary students consistently demonstrate excellence in academics, arts, and character development.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  stat: "97%",
                  description: "of our students read at or above grade level by the end of Grade 3",
                  delay: 0.1
                },
                {
                  stat: "94%",
                  description: "of parents report high satisfaction with their child's academic progress",
                  delay: 0.2
                },
                {
                  stat: "25+",
                  description: "regional and national awards in math competitions in the past 5 years",
                  delay: 0.3
                },
                {
                  stat: "100%",
                  description: "of our primary students participate in at least one arts or sports program",
                  delay: 0.4
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                >
                  <h3 className="text-4xl font-bold text-salang-600 mb-4">{item.stat}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-salang-600 text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Join Our Primary School?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/90 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Take the first step toward providing your child with an exceptional primary education.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button size="lg" variant="default" className="bg-white hover:bg-gray-100 text-salang-600 font-medium">
                  Apply for Admission
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a School Tour
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Primary;
