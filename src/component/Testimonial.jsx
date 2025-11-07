import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: `Arista is one of our best assets at Kith, without the Arista team working off-the-clock hours from our regular day-to-day times we wouldn’t be able to get half the things done that we’ve successfully accomplished over the years.

The most diligent workers who are always happy to help in any capacity possible and always willing to go the extra mile to ensure we hit all our KPIs.

Couldn’t do anything without the help of the entire Arista team!`,
      name: "Nicholas S.",
      company: "Kith",
    },
    {
      id: 2,
      text: `I have worked with Arista on various projects and they have been a pleasure to work with. Extremely professional, goal oriented and client focused. Highly flexible and agile in their approach towards problem solving the issues that come up for large e-com sellers and brands. Whether it be advertising, SEO or any sort of outsourcing process, there is someone you can rely on and trust that you are in good hands.`,
      name: "Yitz Y.",
      company: "Lijo Decor",
    },
    {
      id: 3,
      text: `I’ve had the pleasure of working closely with Arista Systems for the better part of the last three years. In that time, I’ve been fortunate to have a collaborative partner in Arista, who has consistently met business deadlines and delivered high-quality marketing, data entry, and website development. This has been imperative in growing Precision Painting Plus into a large multi-regional brand. Arista Systems always ensures its team delivers and bridges the gap in any potential communication issues by being proactive. The company is well-organized, professional, and very astute at managing a successful team while understanding its clients needs.`,
      name: "Vincent S.",
      company: "Precision Painting Plus",
    },
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    setIsTyping(true);
    setDisplayText("");
    const text = testimonials[index].text;
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [index, isVisible]);

  const nextTestimonial = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };
  const prevTestimonial = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section
     ref={sectionRef}
  className="relative text-white py-12 px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row items-start justify-center min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden"
  style={{
     minHeight:"50vh",
    background: "linear-gradient(to bottom, #000000 0%, #000000 20%, #2d0b57 80%, #000000 100%)",
  }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10vh] left-[5vw] w-[35vw] h-[35vw] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-[10vh] right-[5vw] w-[35vw] h-[35vw] bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Decorative quote */}
      <div className="absolute top-10 right-10 text-8xl md:text-9xl opacity-10 pointer-events-none select-none text-purple-400">
        "
      </div>

      {/* Left Section */}
      <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-white/10 pr-0 md:pr-10 pb-8 md:pb-0 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Testimonials
          </span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Discover how our clients passionately share their experiences,
          highlighting the impact our innovative solutions have had in
          transforming their online brand.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 md:pl-10 relative z-10 flex flex-col justify-between w-full">
        <div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-purple-400 fill-purple-400 mr-1"
                size={20}
              />
            ))}
          </div>

          <p
            className="text-gray-200 italic text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-300"
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-purple-400 font-semibold">
              {testimonials[index].name}
            </span>
            <span className="text-white">|</span>
            <span className="text-gray-300 font-semibold">
              {testimonials[index].company}
            </span>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end mt-8 md:mt-10">
          <div className="flex space-x-4">
            <button
              onClick={prevTestimonial}
              disabled={index === 0}
              className={`border border-purple-400 text-purple-400 rounded-full p-2 sm:p-3 hover:bg-purple-400 hover:text-white transition-all ${
                index === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              disabled={index === testimonials.length - 1}
              className={`border border-purple-400 text-purple-400 rounded-full p-2 sm:p-3 hover:bg-purple-400 hover:text-white transition-all ${
                index === testimonials.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
