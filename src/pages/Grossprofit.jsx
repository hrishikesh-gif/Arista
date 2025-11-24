import React, { useEffect, useState } from "react";
import BusinessCTA from "../component/BusinessCTA";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

/* ---------------------------------------
   GRADIENT BUTTON COMPONENT (REUSABLE STYLE)
----------------------------------------- */
const GradientButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="self-start px-6 py-2 text-sm font-semibold text-white rounded-full 
                 bg-gradient-to-r from-fuchsia-600 to-pink-500 
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
    {/* Using a cog/settings icon for 'Tools' */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35-.683.164-1.118.91-1.065 2.572-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573 1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35.683-.164 1.118-.91 1.065-2.572.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 00-1.065 2.572c-1.756-.426-1.756-2.924 0-3.35z"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// ---- STAT CARD (COLOR REFINEMENT) ----
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

// ---- CASE STUDY CARD (SQUARE ASPECT RATIO FIX + PREMIUM STYLING) ----
const CaseStudyCard = ({ imageSrc, path, title }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="relative rounded-xl overflow-hidden group cursor-pointer shadow-2xl 
                        transform transition-all duration-500 
                        hover:scale-[1.03] border-2 border-transparent hover:border-fuchsia-500/50 
                        bg-black/80 group-hover:shadow-[0_0_80px_-15px_rgba(192,38,211,0.4)]"
    >
      {/* Intrinsic Aspect Ratio Box (Square 1:1) */}
      <div className="w-full pb-[100%] relative">
        {/* Subtle glow effect layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

        {/* Image Container: Stretches to fill the 1:1 container */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>

        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
          {title && (
            <div className="text-xl font-extrabold mb-4 drop-shadow-lg text-fuchsia-200">
              {title}
            </div>
          )}
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

// ---- MORE CASE STUDIES ----
const MoreCaseStudies = () => {
  const studies = [
    {
      title: "Kith Invoice Reconciliation",
      imageSrc: "/images/kith-cs-new.png",
      path: "/casestudies/kith",
    },
    {
      title: "Glendale PPC Strategy",
      imageSrc: "/images/glendale-cs-thumb.webp",
      path: "/casestudies/Glendale",
    },
    {
      title: "Amazon Sales Growth",
      imageSrc: "/images/halolux-cs-new.png",
      path: "/casestudies/AmazonSalesGrowth",
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
        {studies.map((study, index) => (
          <CaseStudyCard
            key={index}
            imageSrc={study.imageSrc}
            path={study.path}
            title={study.title}
          />
        ))}
      </div>
    </div>
  );
};

// ---- MAIN COMPONENT ----
const Grossprofit = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
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
    const scale = 1 - scrollPosition / 5000;
    return Math.max(0.85, scale);
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
    /* 1. MAIN WRAPPER */
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #000000 20%, #1c053d 80%, #000000 100%)", // Deeper background
      }}
    >
      {/* BACKGROUND */}
      <div
        className="fixed top-0 left-0 w-full h-[50vh] md:h-[120vh] z-0 bg-center md:bg-[center_top_-100px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/ohnuts-cs-thumb1.png')",
          ...backgroundStyle,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
      </div>

      {/* 2. CONTENT WRAPPER (Width Constrained to 70% / 90%) */}
      <div className="relative z-10 pt-[45vh] md:pt-[50vh] w-[90%] mx-auto pb-20 md:w-[70%]">
        {/* HEADER */}
        <div className="mb-16">
          <p className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest text-fuchsia-300 uppercase bg-fuchsia-900/30 border border-fuchsia-700/50 rounded-full backdrop-blur-md">
            Case Study
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
          >
            Driving{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400">
              55% Gross Profit Growth
            </span>{" "}
            on Amazon
          </h1>
        </div>

        {/* IMAGE + TOOLS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="bg-black/50 p-2 rounded-xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/ohnuts-cs-thumb1.png"
                alt="Amazon Strategy Thumbnail"
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
                <span>Helium 10</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>Campaign Manager</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>FBA Planning</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>Listing Quality Dashboard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CHALLENGE / SOLUTION / RESULT */}
        <div className="max-w-3xl mx-auto space-y-20">
          {/* CHALLENGE */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              The Challenge?
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Oh! Nuts operated in a highly competitive food and gifting
              category and faced multiple challenges on Amazon. Their catalog
              was poorly structured, with under-optimized ASINs, and ad
              campaigns were inefficient, resulting in high ACoS. Inventory
              planning gaps also led to missed sales opportunities. Listing
              suppressions, inconsistent customer responses, and seasonal
              competition during key gifting periods further impacted
              performance.
            </p>
          </div>

          {/* SOLUTION */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              Our Solution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Arista Systems implemented a comprehensive marketplace management
              strategy:
            </p>

            <div className="bg-fuchsia-900/20 p-6 rounded-xl border-l-4 border-fuchsia-400 mb-8">
              <p className="text-white font-semibold mb-4">Key actions:</p>
              <ul className="space-y-3">
                {[
                  "Catalog Optimization: Created and optimized hundreds of listings with SEO-friendly content.",
                  "Bundle Strategy: Developed strategic product bundles to capture the Buy Box and improve visibility.",
                  "Inventory Management: Managed FBA replenishment forecasting, shipment planning, and variation listings.",
                  "Advertising Efficiency: Launched low-ACoS campaigns focused on profitability and performance.",
                  "Listing Health & Customer Support: Monitored suppressions, fixed warnings, and handled seller support cases while ensuring timely customer responses.",
                  "Reporting & Insights: Delivered monthly reports, product-level trackers, and quarterly growth reviews to guide decisions.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-fuchsia-400 mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              This resulted in a transparent, scalable Amazon profitability
              framework.
            </p>
          </div>

          {/* RESULTS */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-fuchsia-400 mr-3">03.</span> The Result
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-10">
              Oh! Nuts increased units sold by 28.5% and revenue by 39.4% while
              boosting profitability, with net profit nearly doubling and
              advertising efficiency improving significantly. Listings ranked
              higher, suppressions dropped, and ACoS/TACoS were optimized for a
              healthier, more profitable Amazon operation.
            </p>

            {/* Adding Stat Cards for visual impact */}
            <div className="grid grid-cols-2 gap-6 md:gap-12">
              <StatCard number="55%" label="Gross Profit Growth" />
              <StatCard number="28.5%" label="Units Sold Increase" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <BusinessCTA
          title="Unlock Hidden Profitability in Your Amazon Channel"
          description="Use our expertise to reduce fees, optimize vendor terms, and boost your margins."
          buttonText="SCHEDULE A CONSULTATION"
          imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
          altText="Consulting Team"
        />

        {/* MORE CASE STUDIES */}
        <MoreCaseStudies />
      </div>
      {/* ^^^ THIS CLOSING DIV ENDS THE WIDTH RESTRICTION (70%) ^^^ */}

      {/* 3. FOOTER WRAPPER (Full Width) */}
      {/* Placed outside the 70% wrapper, but inside the main background */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Grossprofit;