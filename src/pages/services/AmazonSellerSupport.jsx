import React, { useEffect, useState } from 'react';

const CaseStudyParallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- PARALLAX CALCULATIONS ---
  const calculateBlur = () => Math.min(scrollPosition / 50, 6);
  
  const calculateOpacity = () => {
    const startFade = window.innerHeight * 0.3;
    if (scrollPosition < startFade) return 1;
    return Math.max(0.2, 1 - (scrollPosition - startFade) / 500);
  };

  const calculateScale = () => {
    const scale = 1 - scrollPosition / 5000;
    return Math.max(0.85, scale);
  };

  const backgroundStyle = {
    filter: `blur(${calculateBlur()}px)`,
    opacity: calculateOpacity(),
    transform: `scale(${calculateScale()})`,
    transformOrigin: 'center top', 
    transition: 'transform 0.1s ease-out, filter 0.1s ease-out, opacity 0.1s ease-out',
  };

  return (
    <div 
      className="min-h-screen text-white overflow-x-hidden"
      // ✅ INTEGRATION: Applied your exact site gradient here
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #000000 20%, #2d0b57 80%, #000000 100%)"
      }}
    >
      {/* --- Fixed Parallax Background --- */}
      <div
        className="fixed top-0 left-0 w-full h-[50vh] md:h-[80vh] z-0 bg-center md:bg-[center_top_-100px] bg-no-repeat bg-cover" 
        style={{
          backgroundImage: "url('/images/glendale-cs-thumb.webp')",
          ...backgroundStyle,
        }}
      >
        {/* ✅ BLEND FIX: Overlay now fades to solid #000000 to match the start of your gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
      </div>

      {/* --- Content Container --- */}
      <div className="relative z-10 pt-[45vh] md:pt-[50vh] w-[90%] mx-auto pb-20 md:w-[70%]">
        
        {/* Header Section */}
        <div className="mb-16">
          <p className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest text-purple-300 uppercase bg-purple-900/30 border border-purple-700/50 rounded-full backdrop-blur-md">
            Case Study
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl"
            style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.9)' }}
          >
            Revenue Growth with a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Rebuilt PPC
            </span>
            <br />
            Strategy
          </h1>
        </div>

        {/* Image and Tools Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="bg-black/50 p-2 rounded-xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/glendale-cs-thumb.webp"
                alt="Glendale Case Study Thumbnail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Updated to neutral black/purple to match new theme */}
          <div className="bg-black/60 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-purple-100">Tools / Platforms Used</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <ToolsIcon />
                <span>Google Merchant Center</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>Google Analytics 4 (GA4)</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>Google Tag Manager</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Sections (Challenge / Solution) */}
        <div className="max-w-3xl mx-auto space-y-20">
           <div>

            <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-purple-400 mr-3">01.</span> The Challenge
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
                Before January 2025, Glendale's Google Ads account lacked campaign segmentation, proper conversion
                tracking, and feed optimization. The absence of data-driven decision-making and an unclear
                account structure led to inefficient ad spend, limited visibility across product categories, and
                underperforming remarketing efforts.
            </p>
           
           </div>

            <div>

            <h2 className="text-3xl font-bold mb-6 flex items-center">
                 <span className="text-purple-400 mr-3">02.</span> Our Solution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Arista Systems' PPC experts completely rebuilt Glendale's advertising ecosystem. We implemented a
                hybrid strategy combining Performance Max, Search, and Shopping campaigns to maximize reach and
                conversions.
            </p>

            {/* Updated to purple theme instead of blue to match your gradient */}
            <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-400 mb-8">
                <p className="text-white font-semibold mb-4">Key actions taken by the team:</p>
                <ul className="space-y-3">
                {[
                  "Integrated enhanced conversion tracking for more accurate attribution.",
                  "Enabled dynamic remarketing to re-engage high-intent users.",
                  "Optimized product feed sync with Google Merchant Center to improve ad relevance.",
                  "Conducted weekly audits and adjusted budgets based on product-level performance.",
                  "Performed A/B testing of ad copies to identify the most engaging messaging."
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-3 mt-1.5 text-xs">●</span>
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
                This strategic restructuring established a scalable and data-driven advertising model aligned with
                Glendale's growth objectives.
            </p>
            
                </div>

            <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
                 <span className="text-purple-400 mr-3">03.</span> The Result
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-10">
                Between January and April 2025, Glendale's revamped Google Ads strategy drove{' '}
                <span className="text-white font-bold bg-purple-500/20 px-1 rounded">287% growth in monthly revenue</span> and a{' '}
                <span className="text-white font-bold bg-purple-500/20 px-1 rounded">163% increase in ROAS</span>, leading to stronger
                efficiency and profitability.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-12">
                <StatCard number="287%" label="Growth in Monthly Revenue" />
                <StatCard number="163%" label="Increase in ROAS" />
            </div>
            </section>
        </div>
      </div>
    </div>
  );
};

// --- SUBCOMPONENTS ---

const ToolsIcon = () => (
    <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const StatCard = ({ number, label }) => (
    // Updated gradient to blend with new black/purple theme
    <div className="bg-gradient-to-br from-purple-900/30 to-black p-6 md:p-10 rounded-2xl border border-purple-500/20 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] text-center">
        <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3">
        {number}
        </div>
        <div className="text-gray-400 font-medium uppercase tracking-wider text-sm md:text-base">{label}</div>
    </div>
)

export default CaseStudyParallax;