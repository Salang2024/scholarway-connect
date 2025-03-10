
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Primary', href: '/primary' },
  { name: 'Secondary', href: '/secondary' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/995d0c97-4741-418b-a5b8-f516b220e4b2.png" 
            alt="Salang School" 
            className="h-12 w-12"
          />
          <span className="font-display text-2xl font-bold text-gray-900">Salang School</span>
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 hover:text-salang-600 transition-all py-2 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admissions">
            <Button className="bg-salang-600 hover:bg-salang-700 text-white">
              Apply Now
            </Button>
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
          >
            <div className="px-6 py-4 space-y-3 flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-salang-600 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-salang-600 hover:bg-salang-700 text-white w-full mt-4">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
