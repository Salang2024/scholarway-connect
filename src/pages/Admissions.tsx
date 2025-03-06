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
          subtitle="Join Salang School and unlock your potential. Apply today!"
          backgroundImage="https://images.unsplash.com/photo-1623942707553-592b91640654?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />

        {/* Admission Form Section */}
        <section className="py-20">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

        {/* Additional Info Section */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Salang School?</h2>
              <p className="text-gray-700">
                Discover the reasons why Salang School is the perfect place for your child's education.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {[
                { title: "Experienced Faculty", description: "Learn from dedicated and experienced teachers." },
                { title: "Modern Facilities", description: "Benefit from state-of-the-art facilities and resources." },
                { title: "Comprehensive Curriculum", description: "Engage with a curriculum designed for academic excellence." },
                { title: "Supportive Environment", description: "Thrive in a nurturing and inclusive community." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-salang-600 text-white">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
              <p className="text-lg opacity-80 mb-8">
                Take the next step towards your child's bright future.
              </p>
              <Button onClick={handleAdmissionSubmit} size="lg" className="bg-white hover:bg-gray-100 text-salang-600 font-medium">
                Apply Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Admissions;
