import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BusinessCTA from "../component/BusinessCTA";
import Footer from "../component/Footer";

/* ---------------------------------------
   GRADIENT BUTTON COMPONENT (REUSABLE STYLE)
----------------------------------------- */
const GradientButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="self-start px-6 py-2 text-sm font-semibold text-white rounded-full 
                 bg-gradient-to-r from-fuchsia-600 to-pink-500 // Rich, consistent gradient
                 hover:from-fuchsia-700 hover:to-pink-600 
                 transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/50 transform hover:scale-[1.05]"
    >
      {children}
    </button>
);


/* ---------------------------------------
   ICON COMPONENT (UPDATED STYLE)
----------------------------------------- */
const ToolsIcon = () => (
  <svg
    className="w-5 h-5 text-fuchsia-400 mr-3" // Consistent color palette
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35-.683.164-1.118.91-1.065 2.572-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573 1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35.683-.164 1.118-.91 1.065-2.572.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 00-1.065 2.572c-1.756-.426-1.756-2.924 0-3.35z"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);


/* ---------------------------------------
   RESULT CARD (COLOR REFINEMENT)
----------------------------------------- */
const StatCard = ({ number, label }) => (
  <div className="bg-gradient-to-br from-indigo-900/30 to-black p-6 md:p-10 rounded-2xl border border-fuchsia-500/20 shadow-[0_0_40px_-10px_rgba(192,38,211,0.3)] text-center">
    <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 mb-3">
      {number}
    </div>
    <div className="text-gray-400 font-medium uppercase tracking-wider text-sm md:text-base">
      {label}
    </div>
  </div>
);

/* --------------------------------------
   CaseStudyCard (SQUARE ASPECT RATIO FIX + PREMIUM STYLING)
--------------------------------------- */
const CaseStudyCard = ({ imageSrc, path, title }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="relative rounded-xl overflow-hidden group cursor-pointer shadow-2xl 
                 transform transition-all duration-500 
                 hover:scale-[1.03] border-2 border-transparent hover:border-fuchsia-500/50 
                 bg-black/80 group-hover:shadow-[0_0_80px_-15px_rgba(192,38,211,0.4)]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? navigate(path) : null)}
    >
        {/* Intrinsic Aspect Ratio Box (Square 1:1) */}
        <div className="w-full pb-[100%] relative"> 
            
            {/* Subtle glow effect layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

            {/* Image Container: Stretches to fill the 1:1 container */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url(${imageSrc})` }}
                aria-hidden
            />

            {/* Overlay and Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end text-white"> 
                {title && <div className="text-xl font-extrabold mb-4 drop-shadow-lg text-fuchsia-200">{title}</div>}
                <GradientButton
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(path);
                    }}
                >
                    View Case Study →
                </GradientButton>
            </div>
        </div>
    </div>
  );
};

/* --------------------------------------
   MoreCaseStudies for Kith page
--------------------------------------- */
const MoreCaseStudies = () => {
  const studies = [
    {
      title: "Amazon Sales Growth",
      imageSrc: "/images/halolux-cs-new.png",
      path: "/casestudies/AmazonSalesGrowth",
    },
    {
      title: "Glendale",
      imageSrc: "/images/glendale-cs-thumb.webp",
      path: "/casestudies/glendale",
    },
    {
      title: "Gross Profit Growth",
      imageSrc: "/images/ohnuts-cs-thumb1.png",
      path: "/casestudies/Grossprofit",
    },
  ];

  return (
    <div className="mt-32">
      <h2 className="text-4xl font-extrabold mb-12 text-center">
        More{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400">
          Case Studies
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {studies.map((s, i) => (
          <CaseStudyCard key={i} imageSrc={s.imageSrc} path={s.path} title={s.title} />
        ))}
      </div>
    </div>
  );
};

/* --------------------------------------
   MAIN PAGE COMPONENT: Kith
--------------------------------------- */
const Kith = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateBlur = () => Math.min(scrollPosition / 50, 6);
  const calculateOpacity = () => {
    const startFade = window.innerHeight * 0.3;
    if (scrollPosition < startFade) return 0.98;
    return Math.max(0.85, 0.98 - (scrollPosition - startFade) / 500);
  };
  const calculateScale = () => Math.max(0.85, 1 - scrollPosition / 5000);

  const backgroundStyle = {
    filter: `blur(${calculateBlur()}px)`,
    opacity: calculateOpacity(),
    transform: `scale(${calculateScale()})`,
    transformOrigin: "center top",
    transition: "transform 0.1s ease-out, filter 0.1s ease-out, opacity 0.1s ease-out",
  };

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #000000 20%, #1c053d 80%, #000000 100%)", // Deeper background
      }}
    >
      {/* Parallax Background */}
      <div
        className="fixed top-0 left-0 w-full h-[50vh] md:h-[120vh] z-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/kith-cs-new.png')",
          
          ...backgroundStyle,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
      </div>

      {/* Content container */}
      <div className="relative z-10 pt-[45vh] md:pt-[50vh] w-[90%] mx-auto pb-20 md:w-[70%]">
        {/* Header */}
        <div className="mb-16">
          <p className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest text-fuchsia-300 uppercase bg-fuchsia-900/30 border border-fuchsia-700/50 rounded-full backdrop-blur-md">
            Case Study
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}>
            Vendor Invoice <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400">Reconciliation</span> & Compliance Management
          </h1>
        </div>

        {/* Image + Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="bg-black/50 p-2 rounded-xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="rounded-lg overflow-hidden">
              <img src="/images/kith-cs-new.png" alt="KITH Thumbnail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg" />
            </div>
          </div>

          <div className="bg-black/60 p-8 rounded-2xl border border-fuchsia-500/20 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-fuchsia-100">Tools / Platforms Used</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <ToolsIcon />
                <span>Macros</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>MS Excel</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>ChatGPT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content sections */}
        <div className="max-w-3xl mx-auto space-y-20">
  
         <div className="challenge">

            <h2 className="text-3xl font-bold mb-6 flex items-center">
               The Challenge?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
             The client faced key gaps in invoice management:
            </p>

            <div className="bg-fuchsia-900/20 p-6 rounded-xl border-l-4 border-fuchsia-400 mb-8">
              
              <ul className="space-y-3">
                {[
                    "Unorganized invoices with no structured queue or standard format.",
                    "Duplicate invoices and repeated numbers.",
                    "Unnecessary vendor charges.",
                    "Lack of reporting tools for validation.",
                    "No bulk data upload, creating backlogs and inefficiencies.",
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-fuchsia-400 mr-3 mt-1.5 text-xs">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
               <p className="text-gray-300 leading-relaxed mt-4 text-lg">
           These issues led to errors, slow processing, limited visibility, and challenges in trade compliance.
            </p>
            </div>
                </div>
       


        
            <div className="solution">
                
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-fuchsia-400 mr-3">02.</span> Our Solution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
             Arista Systems implemented a complete end-to-end invoice reconciliation and compliance management framework:
            </p>

            <div className="bg-fuchsia-900/20 p-6 rounded-xl border-l-4 border-fuchsia-400 mb-8">
              
              <ul className="space-y-3">
                {[
                    "Centralized all vendors into a single structured workflow.",
                    "Created a local invoice database to manage backlogs and real-time reconciliation.",
                    "Reconciled all backdated invoices to ensure records were current.",
                    "Introduced standardized invoice formats with vendors to prevent duplicates and irregularities.",
                    "Eliminated duplicate billing, mismatched charges, and missing entries.",
                    "Leveraged automation tools, including Excel macros, formulas, and ChatGPT, for process drafting, validation, and reporting.",
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-fuchsia-400 mr-3 mt-1.5 text-xs">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
               <p className="text-gray-300 leading-relaxed mt-4 text-lg">
           This framework improved accuracy, transparency, and scalability, making the client’s operations audit-ready and future-proof.


            </p>
            </div>
                </div>
          

        <div className="result">

            <h2 className="text-3xl font-bold mb-6 flex items-center">
               The Result
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-10">
             The reconciliation project delivered tangible results, with over 4,000 invoices processed worth $15M+ across multiple categories. By implementing structured workflows and automation, the team achieved an{" "}
                <span className="text-white font-bold bg-fuchsia-500/20 px-1 rounded">85% reduction in errors</span> and cleared the entire backlog, enabling 100% real-time compliance. All invoices were systematically categorized, ensuring full transparency, accurate cost tracking, and scalability, while also establishing a framework that is audit-ready and future-proof.
            </p>
        </div>
        
        {/* Added Stat Cards to break up the result text, as Kith's page currently has no StatCard usage */}
        <div className="grid grid-cols-2 gap-6 md:gap-12">
            <StatCard number="4,000+" label="Invoices Processed" />
            <StatCard number="85%" label="Reduction in Errors" />
        </div>

        </div>

        {/* CTA */}
        <BusinessCTA
          title="Automate Your Finance Operations and Ensure Compliance"
          description="Stop losing time and money to manual reconciliation. Let us build a centralized, automated system for your business."
          buttonText="DISCOVER AUTOMATION SOLUTIONS"
          imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
          altText="Finance Automation Team"
        />

        {/* More case studies (routes fixed) */}
        <MoreCaseStudies />
      </div>
<Footer/>
    </div>
  );
};

export default Kith;