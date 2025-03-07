
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Programs",
    links: [
      { name: "Primary School", href: "/primary" },
      { name: "Secondary School", href: "/secondary" },
      { name: "Special Programs", href: "/programs" },
      { name: "Extracurricular", href: "/extracurricular" },
    ]
  },
  {
    title: "About Us",
    links: [
      { name: "Our History", href: "/about" },
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "Faculty & Staff", href: "/about#leadership" },
      { name: "Facilities", href: "/about#facilities" },
    ]
  },
  {
    title: "Admissions",
    links: [
      { name: "How to Apply", href: "/admissions" },
      { name: "Tuition & Fees", href: "/admissions#fees" },
      { name: "Scholarships", href: "/admissions#scholarships" },
      { name: "FAQs", href: "/admissions#faqs" },
    ]
  },
];

const Footer = () => {
  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    
    // In a real implementation, this would connect to a backend API
    console.log('Subscribing email:', email);
    
    // Clear the form
    e.currentTarget.reset();
    
    // Show success message (in a real app, you'd use a toast notification)
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-salang-400" />
              <span className="font-display text-2xl font-bold">Salang School</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing quality education and nurturing young minds since 1995. Our commitment is to develop well-rounded individuals prepared for future success.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-salang-400 mt-0.5" />
                <span className="text-gray-300">
                  123 Education Avenue<br />
                  Dar es Salaam, Tanzania
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-salang-400" />
                <a href="tel:+255123456789" className="text-gray-300 hover:text-white transition-colors">+255 123 456 789</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-salang-400" />
                <a href="mailto:info@salangschool.edu" className="text-gray-300 hover:text-white transition-colors">info@salangschool.edu</a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-salang-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-salang-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-salang-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-salang-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-xl mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Stay updated with school news, events, and announcements</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                required
                className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-salang-400 flex-grow"
              />
              <button 
                type="submit"
                className="bg-salang-600 hover:bg-salang-700 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Salang School. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
