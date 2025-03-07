
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const TermsOfService = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Terms of Service" 
          subtitle="The rules and guidelines governing your use of our website and services"
          backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />
        
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>Terms of Service for Salang School</h2>
              <p className="lead">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <p>
                Welcome to Salang School. By accessing this website, you agree to be bound by these Terms of Service, 
                all applicable laws and regulations, and agree that you are responsible for compliance with any 
                applicable laws.
              </p>
              
              <h3>Use License</h3>
              <p>
                Permission is granted to temporarily view the materials on Salang School's website for personal, 
                non-commercial use. This is the grant of a license, not a transfer of title, and under this license 
                you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h3>Disclaimer</h3>
              <p>
                The materials on Salang School's website are provided on an 'as is' basis. Salang School makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for a particular 
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h3>Limitations</h3>
              <p>
                In no event shall Salang School be liable for any damages (including, without limitation, damages 
                for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on Salang School's website, even if Salang School has been notified orally or 
                in writing of the possibility of such damage.
              </p>
              
              <h3>Accuracy of Materials</h3>
              <p>
                The materials appearing on Salang School's website could include technical, typographical, or 
                photographic errors. Salang School does not warrant that any of the materials on its website are 
                accurate, complete or current. Salang School may make changes to the materials contained on its 
                website at any time without notice.
              </p>
              
              <h3>Links</h3>
              <p>
                Salang School has not reviewed all of the sites linked to its website and is not responsible for 
                the contents of any such linked site. The inclusion of any link does not imply endorsement by 
                Salang School of the site. Use of any such linked website is at the user's own risk.
              </p>
              
              <h3>Modifications</h3>
              <p>
                Salang School may revise these terms of service for its website at any time without notice. By 
                using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
              
              <h3>Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Tanzania 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
              
              <h3>Contact Us</h3>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
