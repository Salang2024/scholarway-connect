
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Calendar, FileText, ClipboardCheck, PencilRuler, DollarSign, BadgeHelp, Award } from 'lucide-react';

const Admissions = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Admissions" 
          subtitle="Join our vibrant community of learners and begin your educational journey at Salang School"
          backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />
        
        {/* Application Process Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-salang-100 text-salang-800 text-sm font-medium mb-6">
                  <ClipboardCheck className="h-4 w-4" />
                  Admissions Process
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                How to Apply to Salang School
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our admissions process is designed to identify students who will thrive in our challenging and supportive educational environment.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Complete our online application form with basic information about your child and family.",
                  icon: FileText,
                  delay: 0.1
                },
                {
                  step: "2",
                  title: "Assessment",
                  description: "Students take age-appropriate assessments to determine their academic readiness.",
                  icon: PencilRuler,
                  delay: 0.2
                },
                {
                  step: "3",
                  title: "Interview",
                  description: "Parents and prospective students meet with admissions staff for a personal interview.",
                  icon: Calendar,
                  delay: 0.3
                },
                {
                  step: "4",
                  title: "Review",
                  description: "Our admissions committee reviews all applications to ensure appropriate placement.",
                  icon: ClipboardCheck,
                  delay: 0.4
                },
                {
                  step: "5",
                  title: "Decision",
                  description: "Families are notified of admissions decisions within 2-3 weeks of completing the process.",
                  icon: CheckCircle,
                  delay: 0.5
                },
                {
                  step: "6",
                  title: "Enrollment",
                  description: "Accepted students secure their place by completing enrollment forms and paying the deposit.",
                  icon: DollarSign,
                  delay: 0.6
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-salang-600 text-white rounded-full flex items-center justify-center">
                    <span className="font-bold">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-salang-100 rounded-full flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-salang-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button size="lg" className="bg-salang-600 hover:bg-salang-700">
                  Start Your Application
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Tuition & Fees Section */}
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
                  <DollarSign className="h-4 w-4" />
                  Tuition & Fees
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Investment in Your Child's Future
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We are committed to providing exceptional education at reasonable fees, with scholarships and financial aid available for qualifying families.
              </motion.p>
            </div>
            
            <Tabs defaultValue="primary" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="primary">Primary School</TabsTrigger>
                <TabsTrigger value="secondary">Secondary School</TabsTrigger>
              </TabsList>
              
              <TabsContent value="primary">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">Primary School Fees (Grades 1-6)</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Tuition Fees</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Grades 1-3</span>
                            <span className="font-medium">KSh 150,000 per term</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Grades 4-6</span>
                            <span className="font-medium">KSh 180,000 per term</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">One-Time Fees</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Application Fee</span>
                            <span className="font-medium">KSh 5,000 (non-refundable)</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Admission Fee</span>
                            <span className="font-medium">KSh 50,000 (one-time)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Additional Fees</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Lunch Program</span>
                          <span className="font-medium">KSh 25,000 per term</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Transportation (optional)</span>
                          <span className="font-medium">KSh 30,000 - 45,000 per term</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Uniform (initial set)</span>
                          <span className="font-medium">KSh 20,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Books & Supplies</span>
                          <span className="font-medium">KSh 15,000 per term</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-salang-50 border border-salang-100 rounded-lg text-sm">
                    <p>* Fees are subject to annual review. A sibling discount of 10% is available for the second and subsequent children enrolled.</p>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="secondary">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">Secondary School Fees (Grades 7-12)</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Tuition Fees</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Grades 7-9</span>
                            <span className="font-medium">KSh 200,000 per term</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Grades 10-12</span>
                            <span className="font-medium">KSh 240,000 per term</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-lg mb-2">One-Time Fees</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Application Fee</span>
                            <span className="font-medium">KSh 5,000 (non-refundable)</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Admission Fee</span>
                            <span className="font-medium">KSh 75,000 (one-time)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Additional Fees</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Lunch Program</span>
                          <span className="font-medium">KSh 30,000 per term</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Transportation (optional)</span>
                          <span className="font-medium">KSh 30,000 - 45,000 per term</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Uniform (initial set)</span>
                          <span className="font-medium">KSh 25,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Books & Supplies</span>
                          <span className="font-medium">KSh 20,000 per term</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Technology Fee</span>
                          <span className="font-medium">KSh 15,000 per term</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Laboratory Fee (science courses)</span>
                          <span className="font-medium">KSh 10,000 per term</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-salang-50 border border-salang-100 rounded-lg text-sm">
                    <p>* Fees are subject to annual review. A sibling discount of 10% is available for the second and subsequent children enrolled.</p>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button variant="outline" className="border-salang-600 text-salang-600">
                  Download Complete Fee Structure
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Scholarships Section */}
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
                    <Award className="h-4 w-4" />
                    Financial Aid
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Scholarships & Financial Assistance
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  At Salang School, we believe that financial circumstances should not be a barrier to 
                  receiving a quality education. We offer several scholarship programs and financial aid options 
                  for qualifying families.
                </motion.p>
                
                <div className="space-y-6 mt-8">
                  {[
                    {
                      title: "Academic Excellence Scholarships",
                      description: "Awarded to students who demonstrate exceptional academic potential and achievements.",
                      delay: 0.3
                    },
                    {
                      title: "Talent Scholarships",
                      description: "For students showing extraordinary abilities in arts, sports, or other specific areas.",
                      delay: 0.4
                    },
                    {
                      title: "Need-Based Financial Aid",
                      description: "Available to families who demonstrate financial need through our assessment process.",
                      delay: 0.5
                    },
                    {
                      title: "Community Service Scholarships",
                      description: "For students who show exceptional commitment to community service and leadership.",
                      delay: 0.6
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item.delay }}
                    >
                      <div className="mr-4 mt-1">
                        <CheckCircle className="h-5 w-5 text-salang-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Button className="bg-salang-600 hover:bg-salang-700">
                    Apply for Financial Aid
                  </Button>
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
                      src="https://images.unsplash.com/photo-1627556704290-2b1f9e774408?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Students receiving scholarship" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
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
                  <BadgeHelp className="h-4 w-4" />
                  FAQs
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Frequently Asked Questions
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Find answers to common questions about our admissions process and requirements.
              </motion.p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What is the best age to apply to Salang School?",
                  answer: "We accept applications for all grade levels, but many families find that starting at the beginning of primary (Grade 1) or secondary (Grade 7) provides the smoothest transition. However, we welcome students at any grade level where spaces are available.",
                  delay: 0.1
                },
                {
                  question: "How competitive is the admissions process?",
                  answer: "Our admissions process is selective but holistic. We consider not only academic potential but also character, interests, and fit with our school community. We typically have more applicants than available spaces, especially for certain grade levels.",
                  delay: 0.2
                },
                {
                  question: "Do you accept mid-year transfers?",
                  answer: "Yes, we accept mid-year transfers when spaces are available. The application process remains the same, though decisions may be expedited based on urgent needs.",
                  delay: 0.3
                },
                {
                  question: "What documents are required for application?",
                  answer: "Required documents include previous school records, birth certificate, immunization records, passport-sized photographs, and any relevant assessments or evaluations. International students may need additional documentation.",
                  delay: 0.4
                },
                {
                  question: "Is there a waiting list if my child is not accepted immediately?",
                  answer: "Yes, qualified applicants who cannot be accommodated immediately due to space constraints may be placed on a waiting list. We contact families as spaces become available.",
                  delay: 0.5
                },
                {
                  question: "What support is available for students with learning differences?",
                  answer: "We have a dedicated Student Support Services team that provides various levels of support for students with mild to moderate learning differences. During the application process, we assess whether we can meet each student's needs effectively.",
                  delay: 0.6
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: faq.delay }}
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-lg mb-4">Still have questions? Contact our admissions team.</p>
              <Button className="bg-salang-600 hover:bg-salang-700">
                Contact Admissions
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Visit Us Section */}
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
                Visit Our Campus
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/90 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Experience Salang School firsthand by scheduling a campus tour or attending an open house event.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button size="lg" variant="default" className="bg-white hover:bg-gray-100 text-salang-600 font-medium">
                  Schedule a Tour
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Open House Dates
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

export default Admissions;
