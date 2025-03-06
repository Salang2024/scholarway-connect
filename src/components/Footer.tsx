
import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

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
      { name: "Mission & Vision", href: "/mission" },
      { name: "Faculty & Staff", href: "/faculty" },
      { name: "Facilities", href: "/facilities" },
    ]
  },
  {
    title: "Admissions",
    links: [
      { name: "How to Apply", href: "/apply" },
      { name: "Tuition & Fees", href: "/tuition" },
      { name: "Scholarships", href: "/scholarships" },
      { name: "FAQs", href: "/faqs" },
    ]
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-salang-400" />
              <span className="font-display text-2xl font-bold">Salang School</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing quality education and nurturing young minds since 1995. Our commitment is to develop well-rounded individuals prepared for future success.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-salang-400 mt-0.5" />
                <span className="text-gray-300">
                  123 Education Avenue, Salang District<br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-salang-400" />
                <span className="text-gray-300">+254 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-salang-400" />
                <span className="text-gray-300">info@salangschool.edu</span>
              </div>
            </div>
          </div>
          
          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-xl mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Salang School. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
