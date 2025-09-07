import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Briefcase, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center py-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/2">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6">
                Social Media Strategist & Content Creator
              </p>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">influential</span> digital presence
            </h1>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Temple University Advertising graduate with proven expertise in growing and managing high-engagement social media accounts
                with combined following of over <span className="font-semibold text-purple-300">2.5 million+</span> followers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Link href="/experience" className="button-primary w-full sm:w-auto flex items-center justify-center">
                View My Work <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/contact" className="button-outline w-full sm:w-auto flex items-center justify-center">
                Get In Touch
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="glass-card rounded-xl p-4 border border-white/10">
                <Instagram className="text-pink-400 mb-2" size={24} />
                <h3 className="text-white font-bold text-2xl">2.5M+</h3>
                <p className="text-gray-400 text-sm">Combined Followers</p>
              </div>
              <div className="glass-card rounded-xl p-4 border border-white/10">
                <Briefcase className="text-purple-400 mb-2" size={24} />
                <h3 className="text-white font-bold text-2xl">10+</h3>
                <p className="text-gray-400 text-sm">Managed Accounts</p>
              </div>
              <div className="glass-card rounded-xl p-4 border border-white/10 col-span-2 md:col-span-1">
                <Award className="text-yellow-400 mb-2" size={24} />
                <h3 className="text-white font-bold text-2xl">Award-Winning</h3>
                <p className="text-gray-400 text-sm">Marketing Campaigns</p>
              </div>
            </div>
          </div>
          
          {/* Profile Image with Animated Elements */}
          <div className="lg:w-2/5 flex justify-center mb-8 lg:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Animated gradient circles */}
              <div className="absolute -left-20 -bottom-10 w-60 h-60 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
              <div className="absolute -right-10 -top-10 w-60 h-60 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Small decorative shapes */}
              <div className="absolute top-1/4 -left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg rotate-12 animate-float"></div>
              <div className="absolute bottom-10 -right-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-700 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image container */}
              <div className="relative z-10 animate-float" style={{ animationDelay: '2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-70"></div>
                
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
                  <img
                    src="/images/george-graduation.jpg"
                    alt="George Lock - Social Media Expert"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
