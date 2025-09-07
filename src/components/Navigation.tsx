import React from 'react';
import Link from 'next/link';
import { Home, Briefcase, Users, Mail } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">GL</span>
            </div>
            <span className="text-white text-xl font-bold">George Lock</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About Me
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
              Work Experience
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
