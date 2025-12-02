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
   UPDATED CASE STUDY CARD
   - Aspect Ratio 1.4 (Rectangle)
   - Stylish Gradient Border
   - Stationary (No pop-up)
--------------------------------------- */
const CaseStudyCard = ({ imageSrc, path, title }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      // Outer wrapper handles the border gradient
      className="group relative w-full rounded-2xl cursor-pointer aspect-[1.4]
                 p-[3px] bg-gradient-to-br from-white/10 via-white/5 to-white/10
                 hover:from-cyan-400 hover:via-fuchsia-500 hover:to-pink-500
                 shadow-md hover:shadow-[0_0_30px_-5px_rgba(192,38,211,0.5)]
                 transition-all duration-500 ease-out"
    >
      {/* Inner Content Container */}
      <div className="relative h-full w-full bg-gray-900 rounded-[calc(1rem-3px)] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-md group-hover:text-fuchsia-100 transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 group-hover:text-white transition-colors">
            <span className="w-5 h-[2px] bg-fuchsia-500 group-hover:w-10 transition-all duration-300"></span>
            View Case Study
          </div>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------------
   UPDATED MORE CASE STUDIES SECTION
   - Uses the new Card design
   - Uses the correct Responsive Grid
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
    <div className="mt-32 w-full mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white">
        More{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400">
          Case Studies
        </span>
      </h2>

      {/* RESPONSIVE GRID:
          - Mobile: 1 col
          - Tablet: 2 cols
          - Desktop: 3 cols
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {studies.map((s, i) => (
          <CaseStudyCard
            key={i}
            imageSrc={s.imageSrc}
            path={s.path}
            title={s.title}
          />
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
  const calculateScale = () => {
  const maxZoom = 1.1; // slightly zoomed in at top
  const progress = Math.min(scrollPosition / 800, 1); // adjust 800 for speed
  return maxZoom - (maxZoom - 1) * progress; // goes from 1.1 → 1
};


  const backgroundStyle = {
    filter: `blur(${calculateBlur()}px)`,
    opacity: calculateOpacity(),
    transform: `scale(${calculateScale()})`,
    transformOrigin: "center top",
    transition:
      "transform 0.1s ease-out, filter 0.1s ease-out, opacity 0.1s ease-out",
  };

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #000000 20%, #1c053d 80%, #000000 100%)", // Deeper background
      }}
    >
      {/* Parallax Background */}
      <div
       className="fixed top-0 left-0 w-full
           h-[80vh] sm:h-[90vh] md:h-screen
           z-0 bg-top bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/kith-cs-new.png')",

          ...backgroundStyle,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
      </div>

      {/* Content container */}
      <div className="relative z-10 pt-[35vh] md:pt-[50vh] w-[90%] mx-auto pb-20 md:w-[70%]">
       <div className="mb-16">
  <p className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest text-fuchsia-300 uppercase bg-fuchsia-900/30 border border-fuchsia-700/50 rounded-full backdrop-blur-md">
    Case Study
  </p>
  <h1
    // Removed max-w-3xl to let the text flow wider, if possible
    className="text-4xl md:text-6xl font-extrabold leading-tight" 
    style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
  >
    {/* Line 1 */}
    Vendor Invoice{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400">
      Reconciliation
    </span>
    {/* Explicit Line Break Here */}
    <br /> 
    
    {/* Line 2 */}
    & Compliance Management
  </h1>
</div>

        {/* Image + Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="bg-black/50 p-2 rounded-xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/kith-cs-new.png"
                alt="KITH Thumbnail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
          </div>

          <div className="bg-black/60 p-8 rounded-2xl border border-fuchsia-500/20 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-fuchsia-100">
              Tools / Platforms Used
            </h3>
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
                    <span className="text-fuchsia-400 mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4 text-lg">
                These issues led to errors, slow processing, limited visibility,
                and challenges in trade compliance.
              </p>
            </div>
          </div>

          <div className="solution">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-fuchsia-400 mr-3">02.</span> Our Solution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Arista Systems implemented a complete end-to-end invoice
              reconciliation and compliance management framework:
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
                    <span className="text-fuchsia-400 mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4 text-lg">
                This framework improved accuracy, transparency, and scalability,
                making the client’s operations audit-ready and future-proof.
              </p>
            </div>
          </div>

          <div className="result">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              The Result
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-10">
              The reconciliation project delivered tangible results, with over
              4,000 invoices processed worth $15M+ across multiple categories.
              By implementing structured workflows and automation, the team
              achieved an{" "}
              <span className="text-white font-bold bg-fuchsia-500/20 px-1 rounded">
                85% reduction in errors
              </span>{" "}
              and cleared the entire backlog, enabling 100% real-time
              compliance. All invoices were systematically categorized, ensuring
              full transparency, accurate cost tracking, and scalability, while
              also establishing a framework that is audit-ready and
              future-proof.
            </p>
          </div>

          {/* Added Stat Cards */}
          <div className="grid grid-cols-2 gap-6 md:gap-12">
            <StatCard number="4,000+" label="Invoices Processed" />
            <StatCard number="85%" label="Reduction in Errors" />
          </div>
        </div>

       

        {/* More case studies (Updated Styling) */}
        <MoreCaseStudies />
      </div>
       {/* CTA */}
        <BusinessCTA
          title="Automate Your Finance Operations and Ensure Compliance"
          description="Stop losing time and money to manual reconciliation. Let us build a centralized, automated system for your business."
          buttonText="DISCOVER AUTOMATION SOLUTIONS"
          imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
          altText="Finance Automation Team"
          removeBg
        />
      <Footer />
    </div>
  );
};

export default Kith;