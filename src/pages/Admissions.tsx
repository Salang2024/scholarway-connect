import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Calendar, FileText, ClipboardCheck, PencilRuler, DollarSign, BadgeHelp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleAdmissionSubmit = async () => {
    try {
      // This would be replaced with your actual form submission logic
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR-WEB3FORMS-KEY", // You'll need to get this
          to_email: "salangachambanenje@gmail.com",
          subject: "New Admission Application",
          message: "A new admission application has been submitted.",
        }),
      });

      toast({
        title: "Application Submitted",
        description: "Thank you for applying to Salang School. We will review your application and contact you soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    }
  };

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
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Application Process</h2>
              <p className="text-gray-700 mb-8">
                Learn about our simple and straightforward application process.
              </p>
            </motion.div>

            <Tabs defaultValue="explore" className="w-full">
              <TabsList className="justify-center">
                <TabsTrigger value="explore" className="data-[state=active]:bg-salang-500 data-[state=active]:text-white">
                  <CheckCircle className="mr-2 h-4 w-4" /> Explore
                </TabsTrigger>
                <TabsTrigger value="apply" className="data-[state=active]:bg-salang-500 data-[state=active]:text-white">
                  <FileText className="mr-2 h-4 w-4" /> Apply
                </TabsTrigger>
                <TabsTrigger value="visit" className="data-[state=active]:bg-salang-500 data-[state=active]:text-white">
                  <Calendar className="mr-2 h-4 w-4" /> Visit
                </TabsTrigger>
                <TabsTrigger value="decide" className="data-[state=active]:bg-salang-500 data-[state=active]:text-white">
                  <ClipboardCheck className="mr-2 h-4 w-4" /> Decide
                </TabsTrigger>
              </TabsList>
              <TabsContent value="explore" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Explore Salang School</h3>
                  <p className="text-gray-600">
                    Discover our academic programs, campus life, and community.
                  </p>
                </motion.div>
              </TabsContent>
              <TabsContent value="apply" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Submit Your Application</h3>
                  <p className="text-gray-600">
                    Complete the online application form and submit all required documents.
                  </p>
                </motion.div>
              </TabsContent>
              <TabsContent value="visit" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Schedule a Visit</h3>
                  <p className="text-gray-600">
                    Take a tour of our campus and meet our faculty and students.
                  </p>
                </motion.div>
              </TabsContent>
              <TabsContent value="decide" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Make Your Decision</h3>
                  <p className="text-gray-600">
                    Review your admission offer and confirm your enrollment.
                  </p>
                </motion.div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button 
                  size="lg" 
                  className="bg-salang-600 hover:bg-salang-700"
                  onClick={() => {
                    document.getElementById('application-form')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Start Your Application
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Tuition & Fees Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Tuition & Fees</h2>
              <p className="text-gray-700">
                Find information about our tuition fees and payment options.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {[
                { title: "Primary School", amount: "Tsh 1,500,000", description: "Annual tuition fee for primary school students." },
                { title: "Secondary School", amount: "Tsh 2,500,000", description: "Annual tuition fee for secondary school students." },
                { title: "Other Fees", amount: "Tsh 300,000", description: "Includes registration, books, and other materials." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <p className="text-2xl font-bold">{item.amount}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Scholarships Section */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Scholarships & Financial Aid</h2>
              <p className="text-gray-700">
                Explore scholarship opportunities and financial aid options.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {[
                { title: "Academic Scholarships", description: "Merit-based scholarships for outstanding academic performance.", icon: Award },
                { title: "Need-Based Grants", description: "Financial aid for students with demonstrated financial need.", icon: DollarSign },
                { title: "Community Support", description: "Scholarships funded by local businesses and community members.", icon: BadgeHelp },
                { title: "STEM Scholarships", description: "Scholarships for students pursuing studies in science, technology, engineering, and mathematics.", icon: PencilRuler },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  <item.icon className="w-6 h-6 text-salang-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-700">
                Find answers to common questions about admissions.
              </p>
            </motion.div>

            <div className="mt-10 space-y-4">
              {[
                { question: "What are the admission requirements?", answer: "Applicants must have completed the previous level of education and meet our academic standards." },
                { question: "When is the application deadline?", answer: "The application deadline is July 15th for the upcoming academic year." },
                { question: "How do I apply for financial aid?", answer: "You can apply for financial aid by completing the financial aid application form on our website." },
                { question: "What programs do you offer?", answer: "We offer primary and secondary education programs with a focus on academic excellence and character development." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Visit Us Section */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Visit Salang School</h2>
              <p className="text-gray-700">
                Schedule a visit to our campus and experience our community firsthand.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Salang School Campus"
                  className="rounded-lg shadow-md"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                />
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Schedule a Tour</h3>
                  <p className="text-gray-700 mb-4">
                    We offer campus tours every Wednesday and Friday at 10:00 AM.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="border-salang-600 text-salang-600">
                      Book a Visit
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Form Section */}
        <section id="application-form" className="py-20">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Apply for Admission</CardTitle>
                  <CardDescription>
                    Fill out the form below to start your application process.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+255 7XXXXXXXX" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Program of Interest</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">Primary School</SelectItem>
                          <SelectItem value="secondary">Secondary School</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleAdmissionSubmit} className="w-full bg-salang-600 hover:bg-salang-700 text-white">
                    Submit Application
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Admissions;
