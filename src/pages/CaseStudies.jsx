import React from 'react';
import { Mail } from 'lucide-react';
 import { motion } from "framer-motion";
 import Footer from '../component/Footer';

const CaseStudiesHero = () => {
  return (<>
  
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Main Heading with Gradient and Animation */}
      

<motion.h1
  className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight hero-title"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <span className="bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
    Case Studies
  </span>
</motion.h1>

       
        {/* Description Text with Animation */}
        <div className="max-w-3xl mb-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-2">
            Discover how we've helped businesses overcome challenges and achieve measurable results.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Each case study highlights real-world problems, our tailored solutions, and the impact delivered.
          </p>
        </div>
       
        {/* CTA Button with Animation */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Mail size={20} />
          LET'S TALK
        </button>
      </div>
     
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
       
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
     

     
    </div>
    <Footer/>
    </>
    
  );
};

export default CaseStudiesHero;