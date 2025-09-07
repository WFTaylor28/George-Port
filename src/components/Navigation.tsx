import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, User, Mail, Menu, X, ChevronRight } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-950/10 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full 
                flex items-center justify-center transform transition-all duration-300 
                ${isScrolled ? 'scale-90' : 'scale-100'} 
                group-hover:shadow-lg group-hover:shadow-purple-500/30`}>
              <span className="text-white font-bold text-xl">GL</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-white font-bold transition-all duration-300 
                ${isScrolled ? 'text-xl' : 'text-2xl'}`}>George Lock</span>
              <span className="text-purple-300 text-sm">Social Media Expert</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className={`nav-link text-gray-200 hover:text-white transition-colors ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`nav-link text-gray-200 hover:text-white transition-colors ${isActive('/about') ? 'active' : ''}`}
            >
              About Me
            </Link>
            <Link 
              href="/experience" 
              className={`nav-link text-gray-200 hover:text-white transition-colors ${isActive('/experience') ? 'active' : ''}`}
            >
              Work Experience
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link text-gray-200 hover:text-white transition-colors ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-purple-300" />
            ) : (
              <Menu size={24} className="text-purple-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20
          transform transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 border-t border-purple-500/20' : 'max-h-0'
          }`}
      >
        <div className="py-4 px-6 space-y-4">
          <Link 
            href="/" 
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive('/') 
                ? 'bg-purple-500/20 text-white font-medium' 
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <Home size={18} className="mr-3" />
            <span>Home</span>
            <ChevronRight size={16} className="ml-auto" />
          </Link>
          
          <Link 
            href="/about" 
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive('/about') 
                ? 'bg-purple-500/20 text-white font-medium' 
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <User size={18} className="mr-3" />
            <span>About Me</span>
            <ChevronRight size={16} className="ml-auto" />
          </Link>
          
          <Link 
            href="/experience" 
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive('/experience') 
                ? 'bg-purple-500/20 text-white font-medium' 
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <Briefcase size={18} className="mr-3" />
            <span>Work Experience</span>
            <ChevronRight size={16} className="ml-auto" />
          </Link>
          
          <Link 
            href="/contact" 
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive('/contact') 
                ? 'bg-purple-500/20 text-white font-medium' 
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <Mail size={18} className="mr-3" />
            <span>Contact</span>
            <ChevronRight size={16} className="ml-auto" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
