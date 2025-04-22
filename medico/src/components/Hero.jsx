import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#15a7c4] to-[#043f47] text-white pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#efa8a8] rounded-full"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-[#ffffff] rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#cdd4ff] rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Trusted <span className="bg-gradient-to-l from-slate-800 via-blue-900 to-red-600 text-transparent bg-clip-text">Digital Health</span> Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Using cutting-edge AI, we analyze your symptoms to uncover potential illnesses and offer customized health guidance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/symptoms" className="btn btn-primary flex items-center justify-center">
                Check Symptoms <ArrowRight size={18} className="ml-2" />
              </Link>
              <a href="#how-it-works" className="btn btn-outline flex items-center justify-center">
                How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://chronicle.lu/images/2020/Apr/20200429_doctor-shutterstock-600-400.jpg" 
              alt="Medical AI Technology" 
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
