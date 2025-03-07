
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Privacy Policy" 
          subtitle="Understanding how we collect, use, and protect your information"
          backgroundImage="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />
        
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>Privacy Policy for Salang School</h2>
              <p className="lead">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <p>
                At Salang School, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or interact with us.
              </p>
              
              <h3>Information We Collect</h3>
              <p>
                We collect information from you when you register on our site, fill out a form, or engage 
                with our services. The information may include:
              </p>
              <ul>
                <li>Personal information (name, email address, phone number, etc.)</li>
                <li>Student information for admissions and enrollment</li>
                <li>Information about your usage of our website</li>
              </ul>
              
              <h3>How We Use Your Information</h3>
              <p>We may use the information we collect from you for the following purposes:</p>
              <ul>
                <li>To personalize your experience</li>
                <li>To improve our website and services</li>
                <li>To process admissions applications</li>
                <li>To communicate with you about school activities, events, and updates</li>
                <li>To maintain student and parent records</li>
              </ul>
              
              <h3>Protection of Information</h3>
              <p>
                We implement a variety of security measures to maintain the safety of your personal 
                information. Your personal information is contained behind secured networks and is only 
                accessible by a limited number of persons who have special access rights.
              </p>
              
              <h3>Cookies</h3>
              <p>
                We use cookies to enhance your experience on our site. Cookies are small files that a site 
                or its service provider transfers to your computer's hard drive through your web browser 
                that enables the site to recognize your browser and remember certain information.
              </p>
              
              <h3>Third-Party Disclosure</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information 
                to outside parties unless we provide users with advance notice. This does not include 
                website hosting partners and other parties who assist us in operating our website, 
                conducting our business, or serving our users.
              </p>
              
              <h3>Changes to Privacy Policy</h3>
              <p>
                Salang School reserves the right to change this privacy policy at any time. 
                When changes are made, we will update the "Last Updated" date at the top of this policy.
              </p>
              
              <h3>Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:info@salangschool.edu">info@salangschool.edu</a><br />
                Phone: <a href="tel:+255123456789">+255 123 456 789</a><br />
                Address: 123 Education Avenue, Dar es Salaam, Tanzania
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
