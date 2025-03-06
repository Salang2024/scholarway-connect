
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Award, Lightbulb, Users, Globe, Code, Brain } from 'lucide-react';

const Secondary = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Secondary School" 
          subtitle="Preparing students for university success and lifelong achievement (Grades 7-12)"
          backgroundImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />
        
        {/* Overview Section */}
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
                    <GraduationCap className="h-4 w-4" />
                    Secondary Education
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Excellence in Secondary Education
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our secondary school program provides a challenging academic environment that prepares students 
                  for university studies and future careers. We emphasize critical thinking, research skills, 
                  and independent learning while supporting students through the challenges of adolescence.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-700 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  With a comprehensive curriculum, specialized teachers, and excellent facilities, 
                  our secondary school provides a platform for students to discover their passions and develop their talents.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button className="bg-salang-600 hover:bg-salang-700">Apply for Secondary School</Button>
                </motion.div>
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
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Secondary school students" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Academic Pathways Section */}
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
                  Academic Pathways
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Specialized Learning Tracks
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our secondary program offers specialized tracks that allow students to explore their interests 
                and prepare for future studies in their chosen fields.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "STEM Excellence",
                  description: "Advanced courses in mathematics, sciences, engineering principles, and technology, with hands-on laboratory experiences and research opportunities.",
                  icon: Brain,
                  delay: 0.1
                },
                {
                  title: "Humanities & Social Sciences",
                  description: "In-depth exploration of literature, history, economics, psychology, and other social sciences with emphasis on research and analytical writing.",
                  icon: Users,
                  delay: 0.2
                },
                {
                  title: "Global Studies",
                  description: "Focus on international relations, world languages, global economics, and cultural studies with opportunities for exchange programs.",
                  icon: Globe,
                  delay: 0.3
                },
                {
                  title: "Technology & Innovation",
                  description: "Specialized coursework in computer science, digital media, entrepreneurship, and design thinking with real-world project applications.",
                  icon: Code,
                  delay: 0.4
                }
              ].map((track, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: track.delay }}
                >
                  <div className="w-12 h-12 bg-salang-100 rounded-full flex items-center justify-center mb-6">
                    <track.icon className="w-6 h-6 text-salang-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{track.title}</h3>
                  <p className="text-gray-700">{track.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Core Curriculum Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Science lab" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Group project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Classroom discussion" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1520695287272-b7f8af46d367?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Computer lab" 
                    className="w-full h-full object-cover"
                  />
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
                    <Lightbulb className="h-4 w-4" />
                    Core Curriculum
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Comprehensive Education
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Regardless of their chosen specialization, all secondary students at Salang School 
                  receive a comprehensive education in core subjects to ensure well-rounded development.
                </motion.p>
                
                <div className="space-y-6 mt-8">
                  {[
                    {
                      subject: "Language & Literature",
                      description: "Advanced reading, writing, and analytical skills across multiple genres and texts.",
                      delay: 0.3
                    },
                    {
                      subject: "Mathematics",
                      description: "From algebra and geometry to calculus and statistics based on student readiness.",
                      delay: 0.4
                    },
                    {
                      subject: "Sciences",
                      description: "Biology, chemistry, and physics with laboratory components and research opportunities.",
                      delay: 0.5
                    },
                    {
                      subject: "Social Sciences",
                      description: "History, geography, economics, and civic education with critical perspectives.",
                      delay: 0.6
                    },
                    {
                      subject: "Languages",
                      description: "Multiple foreign language options with focus on fluency and cultural understanding.",
                      delay: 0.7
                    },
                    {
                      subject: "Arts & Physical Education",
                      description: "Continued development in creative arts and physical well-being.",
                      delay: 0.8
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item.delay }}
                    >
                      <h3 className="font-bold text-salang-600">{item.subject}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* University Placement Section */}
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
                  Student Outcomes
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                University Placement & Achievements
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our graduates are accepted to prestigious universities worldwide and excel in their chosen fields.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  stat: "98%",
                  description: "of our graduates are accepted to their first or second choice university",
                  delay: 0.1
                },
                {
                  stat: "85%",
                  description: "of graduates receive merit-based scholarships for university studies",
                  delay: 0.2
                },
                {
                  stat: "100+",
                  description: "different universities worldwide where our alumni are currently studying",
                  delay: 0.3
                },
                {
                  stat: "15+",
                  description: "national academic competition medals won by our students in the past year",
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
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-8">Our Graduates Attend Universities Such As:</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {["Harvard University", "University of Oxford", "MIT", "Stanford University", "University of Nairobi", "University of Cape Town", "London School of Economics"].map((university, index) => (
                  <div key={index} className="px-6 py-3 bg-white shadow rounded-lg">
                    <span className="font-medium">{university}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
                Prepare for Future Success
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/90 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Join our secondary school and open doors to prestigious universities and future opportunities.
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
                  Download Prospectus
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

export default Secondary;
