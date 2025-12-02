import React from "react";
import { Link } from "react-router-dom";

const BusinessCTA = ({
  title = "Ready to Take Your Business to the Next Level?",
  description = "From design and development to marketing automation — our team blends creativity, strategy, and technology to deliver measurable growth for your brand.",
  buttonText = "START YOUR PROJECT",
  buttonAction = () => console.log("Button clicked!"),
  imageUrl = "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
  altText = "AI Technology",
  removeBg = false, // 👈 NEW PROP
}) => {
  return (
    <div
      className="
        relative w-full 
        px-5 sm:px-8 lg:px-16 
        py-10 sm:py-12 lg:py-14
      "
    >
      {/* Background only when removeBg === false */}
      {!removeBg && (
        <>
          {/* BG THEME — Purple + Black */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#08000F] to-[#14001B]" />

          {/* Soft Purple Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-8 left-12 w-60 sm:w-72 h-60 sm:h-72 bg-purple-700/25 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-12 w-64 sm:w-80 h-64 sm:h-80 bg-purple-500/25 blur-[120px] rounded-full" />
          </div>
        </>
      )}

      {/* Main Card */}
      <div
      className="
    relative z-10 mx-auto 
    max-w-6xl w-full
    flex flex-col md:flex-row 
    items-center justify-between 
    gap-8 md:gap-10
    rounded-2xl
    bg-white/7 backdrop-blur-xl
    
    // 👇 Change 'border' to a thicker width, e.g., 'border-4' or 'border-8'
    border-8 border-purple-300/15 
    
    px-6 sm:px-10 lg:px-12 
    py-8 sm:py-10 
    transition-all duration-300
"
      >
        {/* LEFT : TEXT */}
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-200 mb-3 sm:mb-4 leading-snug">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-slate-200/85 leading-relaxed mb-5 sm:mb-6 max-w-xl">
            {description}
          </p>

          <Link to="/contact">
            <button
              onClick={buttonAction}
              className="
                px-5 sm:px-6 
                py-2.5 sm:py-3
                rounded-lg 
                font-semibold text-white text-sm sm:text-base
                bg-purple-600/30 
                border border-purple-400/30
               
                hover:bg-purple-600/40 
                hover:border-purple-300
                transition-all duration-200 
                backdrop-blur-md
              "
            >
              {buttonText}
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full flex justify-center">
          <div
            className="
              w-full max-w-md 
              aspect-[4/3]
              rounded-xl overflow-hidden
              border border-purple-300/20
              bg-white/5 backdrop-blur-lg
              shadow-[0_0_35px_rgba(120,0,255,0.35)]
              transition-all duration-300
            "
          >
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://cdn.pixabay.com/photo/2023/03/20/06/14/technology-7864851_1280.jpg";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCTA;
