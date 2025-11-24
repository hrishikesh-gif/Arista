import React from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessCTA from '../component/BusinessCTA';
import Footer from '../component/Footer';

const BACKGROUND_STYLE = {
  background: "linear-gradient(to bottom, #000000 0%, #000000 20%, #2d0b57 80%, #000000 100%)",
};

/**
 * MainCaseStudyCard component
 * UPDATED:
 * - Changed image border to 'border-4' (Thick Border).
 * - Used 'border-gray-600' for better visibility against the black.
 */
const MainCaseStudyCard = ({ title, path, navigate, imageSrc }) => (
  <div
    className="group flex flex-col sm:flex-row cursor-pointer transition-all duration-500 
               bg-black border border-gray-800 hover:border-purple-600 
               rounded-lg overflow-hidden list-none w-full h-full"
    onClick={() => navigate(path)}
  >
    {/* IMAGE SECTION FRAME 
       - Centers the image.
       - Has a border on the right (desktop) or bottom (mobile) to separate from text.
    */}
    <div className="relative w-full sm:w-[41%] shrink-0 bg-black 
                    flex items-center justify-center p-6
                    border-b sm:border-b-0 sm:border-r border-gray-800 group-hover:border-purple-500 transition-all duration-500">
      
      {/* THE IMAGE */}
      <img
        src={imageSrc}
        alt={title}
        // UPDATED: border-4 (Thick) and border-gray-600 (Visible)
        className="w-auto h-auto max-w-full max-h-[250px] sm:max-h-[300px] object-contain 
                   rounded-md shadow-lg border-4 border-gray-600" 
      />
      
      {/* Optional Glow Effect on Frame */}
       <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>

    {/* Content Section */}
    <div className="bg-black flex flex-col justify-center px-6 py-6 sm:px-8 relative overflow-hidden w-full sm:w-[59%]">
      <div className="relative z-10 flex flex-col items-start justify-center h-full">
        <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[22px] font-medium leading-snug mb-5 lg:mb-6 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        
        <button
          className="px-[16px] py-[6px] border border-purple-400 text-purple-400 rounded-md text-[13px] sm:text-[15px] font-normal 
                     hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 whitespace-nowrap"
          onClick={(e) => { e.stopPropagation(); navigate(path); }}
        >
          Read Full Case Study
        </button>
      </div>
      
      {/* Bottom Line Animation */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-700"></div>
    </div>
  </div>
);

const CaseStudiesMain = () => {
  const navigate = useNavigate();

  const studies = [
    { 
      title: "Driving 55% Gross Profit Growth on Amazon", 
      path: "/casestudies/grossprofit",
      imageSrc: "/images/ohnuts-cs-thumb1.png",
    },
    { 
      title: "Vendor Invoice Reconciliation & Compliance Management", 
      path: "/casestudies/kith",
      imageSrc: "/images/kith-cs-new.png", 
    },
    { 
      title: "How Arista Systems Drove a 387% Growth in Amazon Sales", 
      path: "/casestudies/AmazonSalesGrowth",
      imageSrc: "/images/halolux-cs-new.png", 
    },
    { 
      title: "Revenue Growth with a Rebuilt PPC Strategy", 
      path: "/casestudies/Glendale",
      imageSrc: "/images/glendale-cs-thumb.webp", 
    },
  ];

  return (
    <div className="min-h-screen text-white" style={BACKGROUND_STYLE}>
      
      {/* HERO SECTION */}
      <div className="relative w-full pt-28 pb-16 px-6 md:px-16 lg:px-24">
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Case Studies
            </span>
          </h1>

          <p className="text-white text-lg md:text-xl font-semibold leading-relaxed max-w-3xl mb-10">
            Discover how we’ve helped businesses overcome challenges and achieve measurable results.
          </p>

          <button
            className="px-8 py-3.5 bg-blue-500 rounded text-white font-bold text-sm tracking-wider shadow-lg hover:bg-blue-600 transition-colors duration-200 uppercase"
            onClick={() => navigate('/contact')}
          >
            LET'S TALK
          </button>
        </div>
      </div>

      {/* CASE STUDY GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-8 lg:gap-y-10 p-6 pb-20">
        {studies.map((study, index) => (
          <MainCaseStudyCard key={index} {...study} navigate={navigate} />
        ))}
      </div>

      <BusinessCTA 
        title="Ready to Experience Exceptional Support?"
        description="Our team is eager to assist you. Reach out through your preferred channel, and let us show you the Arista difference."
        buttonText="Let's Talk"
        imageUrl="/images/CS.avif"
        altText="Let's Talk"
      />
      <Footer/>
    </div>
  );
};

export default CaseStudiesMain;