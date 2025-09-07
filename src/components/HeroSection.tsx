import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              George Lock
            </h1>
            <p className="text-2xl text-purple-300 mb-8">
              Social Media & Advertising Expert
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Temple University Advertising graduate with extensive experience in social media management, 
              content creation, and digital marketing strategies that drive engagement and growth.
            </p>
          </div>
          
          {/* Profile Image */}
          <div className="md:w-2/5 flex justify-center mb-8 md:mb-0">
            <div className="relative">
              {/* Circular gradient background for the photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-70"></div>
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="/images/george-graduation.jpg"
                  alt="George Lock - Graduation Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
