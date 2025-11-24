import React from "react";

// Define the expected props with default values for demonstration
const BusinessCTA = ({
  title = "Ready to Take Your Business to the Next Level?",
  description = "From design and development to marketing automation — our team blends creativity, strategy, and technology to deliver measurable growth for your brand.",
  buttonText = "START YOUR PROJECT",
  buttonAction = () => console.log("Button clicked!"), // Placeholder for a click handler
  imageUrl = "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
  altText = "AI Technology",
}) => {
  return (
    <section
      className="relative text-white px-6 sm:px-10 lg:px-20 py-10 w-full overflow-hidden"
      style={{
        minHeight: "37vh", 
      }}
    >
      {/* Glowing Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-purple-600/30 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-blue-600/25 blur-[100px] rounded-full"></div>
      </div>

      {/* Main Content Box */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.2)] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="flex-1">
          {/* Dynamic Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {title}
          </h2>

          {/* Dynamic Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            {description}
          </p>

          {/* Dynamic Button */}
       <button
  onClick={buttonAction}
  className="bg-black/30 backdrop-blur-lg border border-white/25 hover:border-purple/40 transition-all duration-300 text-white px-5 py-2.5 rounded-xl font-semibold shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:bg-black/40 hover:scale-105"
>
  {buttonText}
</button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          {/* Dynamic Image */}
          <img
            src={imageUrl}
            alt={altText}
            className="rounded-lg object-cover w-full max-w-md border border-white/10 shadow-lg"
            onError={(e) => {
              // Fallback image in case the main image fails to load
              e.target.src =
                "https://cdn.pixabay.com/photo/2023/03/20/06/14/technology-7864851_1280.jpg";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessCTA;