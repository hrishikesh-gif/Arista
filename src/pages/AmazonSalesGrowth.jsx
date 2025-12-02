import React, { useEffect, useState } from "react";
import BusinessCTA from "../component/BusinessCTA";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

/* ---------------------------------------
   GRADIENT BUTTON COMPONENT
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
   ICON COMPONENT
----------------------------------------- */
const ToolsIcon = () => (
  <svg
    className="w-5 h-5 text-fuchsia-400 mr-3"
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
   RESULT CARD
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
      title: "Gross Profit Growth",
      imageSrc: "/images/ohnuts-cs-thumb1.png",
      path: "/casestudies/grossprofit",
    },
    {
      title: "Glendale PPC Strategy",
      imageSrc: "/images/glendale-cs-thumb.webp",
      path: "/casestudies/glendale",
    },
    {
      title: "Kith Invoice Reconciliation",
      imageSrc: "/images/kith-cs-new.png",
      path: "/casestudies/kith",
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
   MAIN COMPONENT: AmazonSalesGrowth
--------------------------------------- */

const AmazonSalesGrowth = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

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
          backgroundImage: "url('/images/halolux-cs-new.png')",
          ...backgroundStyle,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-[35vh] md:pt-[50vh] w-[90%] mx-auto pb-20 md:w-[70%]">
        {/* Header */}
        <div className="mb-16">
          <p className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest text-fuchsia-300 uppercase bg-fuchsia-900/30 border border-fuchsia-700/50 rounded-full backdrop-blur-md">
            Case Study
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl"
            style={{ textShadow: "0 4px 30px rgba(0, 0, 0, 0.9)" }}
          >
            How Arista Systems Drove a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400">
              Growth in Amazon Sales
            </span>
          </h1>
        </div>

        {/* Image + Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <div className="bg-black/50 p-2 rounded-xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/halolux-cs-new.png"
                alt="Amazon Sales Strategy Thumbnail"
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
                <span>ChatGPT</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>Shopify</span>
              </li>
              <li className="flex items-center">
                <ToolsIcon />
                <span>Gorgias</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Challenge, Solution, Result */}
        <div className="max-w-3xl mx-auto space-y-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              The Challenge?
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Haloluxe had no prior Amazon account, and everything needed to be
              set up from scratch, including Seller Central verification and
              trademark registration for Brand Registry. Their product catalog
              was large but unstructured, making listing and optimization
              difficult. As a new account, the brand also faced the typical
              challenges of low visibility, limited sales, and establishing
              credibility on the platform.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              Our Solution
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              To establish Haloluxe on Amazon, Arista Systems set up and
              verified the Seller Central account, secured Brand Registry
              access, and organized the product catalog. We created SEO-friendly
              listings with branded images, developed a Brand Story and Amazon
              Storefront, and launched targeted PPC campaigns to drive
              visibility and sales. Product variations, bundles, and multipacks
              were structured for easier shopping, and weekly monitoring and
              performance reviews ensured the account remained healthy and
              continued to grow.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              The Result
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Although the account was created in July 2023, active selling
              began in January 2024:
            </p>

            <div className="bg-fuchsia-900/20 p-6 rounded-xl border-l-4 border-fuchsia-400 mb-8">
              <p className="text-white font-semibold mb-4">Key actions:</p>
              <ul className="space-y-3">
                {[
                  "2024: $830 revenue from 23 units sold.",
                  "2025 (Jan–June): $4,048 revenue from 130 units sold.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-fuchsia-400 mr-3 mt-1.5 text-xs">
                      ●
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4 text-lg">
              This represents a 387% increase in revenue and a 465% increase in
              units sold, showing steady growth year over year.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 md:gap-12">
              <StatCard number="387%" label="Revenue Increase" />
              <StatCard number="465%" label="Units Sold Increase" />
            </div>
          </div>
        </div>

       
        {/* More Case Studies */}
        <MoreCaseStudies />
      </div>
       {/* CTA */}
        <BusinessCTA
          title="Ready to Double Your Amazon Revenue?"
          description="Our Amazon experts transform stagnant accounts into high-growth assets."
          buttonText="START YOUR GROWTH AUDIT"
          imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
          altText="Ecommerce Strategy Team"
          removeBg
        />

      <Footer />
    </div>
  );
};

export default AmazonSalesGrowth;