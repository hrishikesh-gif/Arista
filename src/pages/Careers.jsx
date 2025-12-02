import React, { useState, useEffect, useRef } from "react";
import Footer from "../component/Footer.jsx";
import { ArrowRight, Sparkles, ChevronDown, ChevronUp, Loader2, Briefcase, X } from "lucide-react";
import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

// --- Contentful Configuration ---
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

// --- Fetch Function ---
const getJobPositions = async () => {
  try {
    const response = await client.getEntries({
      content_type: "jobPosition",
    });

    return response.items.map((item) => ({
      id: item.sys.id,
      category: item.fields.category,
      title: item.fields.title,
      type: item.fields.type,
      experience: item.fields.experience,
      description: item.fields.description, 
      tags: item.fields.tags || [],
    }));
  } catch (error) {
    console.error("Error fetching job positions:", error);
    return [];
  }
};

// --- Rich Text Styling Configuration ---
const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-2 text-gray-300 leading-snug text-sm md:text-base">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-5 mb-2 text-gray-300 text-sm md:text-base">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-5 mb-2 text-gray-300 text-sm md:text-base">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-1 leading-snug">{children}</li>
    ),
    [BLOCKS.HEADING_1]: (node, children) => <h3 className="text-xl font-bold text-white mb-2 mt-4">{children}</h3>,
    [BLOCKS.HEADING_2]: (node, children) => <h4 className="text-lg font-bold text-white mb-2 mt-3">{children}</h4>,
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-bold text-white">{text}</span>,
  }
};

export default function Careers() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPositions, setExpandedPositions] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    comments: ''
  });
  const containerRef = useRef();

  // --- 1. Fetch Data ---
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        setLoading(true);
        const jobs = await getJobPositions();
        setPositions(jobs);
        setError(null);
      } catch (err) {
        setError("Failed to load job positions. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPositions();
  }, []);

  // --- 2. Toggle Expand/Collapse ---
  const toggleExpanded = (positionId) => {
    setExpandedPositions((prev) => ({
      ...prev,
      [positionId]: !prev[positionId],
     }));
  };

  // --- Handle Apply Button Click ---
  const handleApplyClick = (position) => {
    setSelectedJob(position);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  // --- Handle General Application Button Click ---
  const handleGeneralApplyClick = () => {
    setSelectedJob({ title: "Future Opportunities" }); 
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // --- Close Popup ---
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedJob(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      resume: null,
      comments: ''
    });
    document.body.style.overflow = 'unset';
  };

  // --- Handle Form Input Change ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // --- Handle File Upload ---
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  // --- Handle Form Submit ---
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add actual form submission logic (e.g., API call) here
    console.log('Form submitted:', formData, 'For job:', selectedJob?.title);
    alert(`Application for ${selectedJob?.title} submitted successfully! (Check console for data)`);
    closePopup();
  };

  // --- 3. Scroll Animation Observer (Existing functionality) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const elements = document.querySelectorAll('.scroll-section, .scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [positions, loading]);

  // --- 4. Hero Animations (Existing functionality) ---
  useEffect(() => {
    const heroElements = ['title', 'subtitle', 'text', 'cta', 'image'];
    heroElements.forEach((ref, index) => {
      const element = document.getElementById(`hero-${ref}`);
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = ref === 'image' ? 'translateX(0)' : 'translateY(0)';
        }, index * 200);
      }
    });

    const particles = document.querySelectorAll('.floating-particle');
    particles.forEach((particle, index) => {
      particle.style.animation = `float 4s ease-in-out ${index * 0.5}s infinite alternate`;
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen text-white overflow-x-hidden bg-black w-full">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .scroll-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s;
        }
        .rich-text-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-pattern {
            background-image: radial-gradient(rgba(120, 53, 255, 0.15) 1px, transparent 1px);
            background-size: 30px 30px;
        }
        @media (min-width: 768px) {
            .bg-grid-pattern {
                background-size: 40px 40px;
            }
        }
        /* Custom styling for inputs and file input */
        .input-line-gradient {
            background-color: transparent;
            border: none;
            border-bottom: 2px solid;
            border-image: linear-gradient(to right, #6d28d9, #8b5cf6, #ec4899) 1;
            padding: 0.6rem 0.25rem; /* Reduced padding */
            color: white;
            transition: border-image 0.3s ease-in-out;
        }
        .input-line-gradient:focus {
            outline: none;
            border-image: linear-gradient(to right, #a855f7, #ec4899, #22d3ee) 1;
        }
        .input-line-gradient::placeholder {
            color: #a0aec0;
        }

        /* Custom file input */
        .custom-file-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            height: 40px; /* Reduced height */
            border-bottom: 2px solid;
            border-image: linear-gradient(to right, #6d28d9, #8b5cf6, #ec4899) 1;
            padding-bottom: 5px; /* Added padding to clear bottom border */
        }
        .custom-file-input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        .custom-file-button {
            background: #6d28d9;
            color: white;
            border-radius: 6px;
            padding: 6px 14px; /* Reduced padding */
            font-weight: 600;
            white-space: nowrap;
            z-index: 10;
            font-size: 0.875rem; /* text-sm */
        }
        .custom-file-button:hover {
            background: #5b21aa;
        }
        .custom-file-text {
            color: #a0aec0;
            margin-left: 0.75rem; /* Reduced margin */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.875rem; /* text-sm */
        }
      `}</style>

      {/* Hero Section - Modified for responsive ordering */}
      <div
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24 py-16 relative z-10 pt-28 md:pt-32"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #1a0536 50%, #000000 100%)",
          minHeight: "70vh",
        }}
      >
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.15),transparent_70%)]"></div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="floating-particle absolute w-1 h-1 bg-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Left Section - Content - Now appears first on mobile */}
        <div className="w-full max-w-2xl relative z-10 lg:mr-10 order-1 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 md:mb-6 leading-tight opacity-0 -translate-x-10 transition-all duration-1000"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Join Us
            </span>
            <Sparkles className="inline-block ml-2 md:ml-4 text-purple-400 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 animate-pulse" />
          </h1>

          <h2 
            id="hero-subtitle"
            className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-300 opacity-0 translate-y-10 transition-all duration-1000"
          >
            Welcome to Arista Systems where innovation meets opportunity.
          </h2>

          <p 
            id="hero-text"
            className="text-sm md:text-base lg:text-lg text-gray-400 mb-6 leading-relaxed max-w-3xl opacity-0 translate-y-10 transition-all duration-1000 mx-auto lg:mx-0"
          >
            As a leading digital experience agency, we're a community of
            passionate professionals and craftspeople dedicated to pushing
            boundaries and achieving excellence.
          </p>

          <div 
            id="hero-cta"
            className="opacity-0 scale-90 transition-all duration-1000"
          >
            <a
              href="#open-positions"
              className="group inline-flex items-center px-6 py-3 md:px-8 md:py-3 bg-white/5 border border-purple-500/30 hover:bg-purple-600/20 hover:border-purple-500 text-white rounded-full transition-all duration-300 text-sm md:text-base font-semibold backdrop-blur-sm"
            >
              View Open Positions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-purple-400" size={18} />
            </a>
          </div>
        </div>

        {/* Right Section - Image - Now appears second on mobile with increased gap */}
        <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-2 mb-8 lg:mb-0 mt-12 lg:mt-0">
          <div 
            className="relative w-full max-w-md md:max-w-xl lg:max-w-full xl:max-w-2xl opacity-0 translate-x-10 transition-all duration-1000"
            id="hero-image"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/images/career.png"
                alt="Arista Systems Team"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div
        id="values-section"
        className="scroll-section scroll-animate px-4 md:px-12 lg:px-24 pt-12 md:pt-20 pb-4 md:pb-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center lg:text-left">
              Why Join Arista Systems?
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl border-l-4 border-purple-500 pl-6">
              Our diverse team thrives on collaboration, innovation, and continuous growth. 
              Working at Arista Systems means being part of an environment where strategic 
              thinking meets modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="scroll-animate p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300 flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7]"></div>
                Meaningful Work
              </h3>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                From crafting intuitive user experiences to developing robust digital platforms, 
                we empower our team members to leave their mark on meaningful projects.
              </p>
            </div>
            <div className="scroll-animate p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300" style={{transitionDelay: '0.2s'}}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-300 flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                Exceeding Expectations
              </h3>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                We believe in fostering an environment where creativity flourishes, skills are 
                regularly developed, and every team member contributes to game-changing experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <section
        id="open-positions"
        className="scroll-section scroll-animate px-4 md:px-12 lg:px-24 pt-8 md:pt-16 pb-16 md:pb-24 relative z-10"
      >
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                Open Positions
              </h2>
            </div>
            <div className="hidden md:block text-purple-500/50">
              <Briefcase size={48} strokeWidth={1} />
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 border border-white/10 rounded-xl bg-white/5">
              <Loader2 className="w-10 h-10 text-purple-500 animate-spin mb-4" />
              <p className="text-gray-400">Loading open positions...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6 text-center">
              <p className="text-red-300">{error}</p>
            </div>
          )}

          {/* No Positions */}
          {!loading && !error && positions.length === 0 && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center backdrop-blur-sm">
              <p className="text-gray-400 text-lg">
                No open positions available at the moment.
              </p>
            </div>
          )}

          {/* Positions List */}
          {!loading && !error && positions.length > 0 && (
            <div className="space-y-6">
              {positions.map((position) => {
                const isExpanded = expandedPositions[position.id];

                return (
                  <div
                    key={position.id}
                    className="group relative border border-white/10 bg-zinc-900/50 backdrop-blur-md p-6 rounded-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-900/80"
                  >
                    <div className="hidden md:block absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/100 transition-all duration-500"></div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div className="flex flex-col gap-2 md:gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-medium">
                          <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">{position.type}</span>
                          <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">{position.experience}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleApplyClick(position)}
                        className="relative px-5 py-2 md:px-6 md:py-2.5 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold tracking-wide uppercase rounded-lg overflow-hidden transition-all duration-300 hover:text-black hover:border-cyan-400 group/btn w-full md:w-fit mt-2 md:mt-0"
                      >
                        <span className="relative z-10">Apply Now</span>
                        <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                      </button>
                    </div>

                    <div className={`mb-4 relative text-sm md:text-base ${!isExpanded ? 'rich-text-clamp' : ''}`}>
                      {documentToReactComponents(position.description, richTextOptions)}
                    </div>

                    <button
                      onClick={() => toggleExpanded(position.id)}
                      className="text-gray-400 group-hover:text-purple-400 text-sm font-medium flex items-center gap-2 transition-all duration-300 mt-2"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                      {isExpanded ? 
                        <ChevronUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" /> : 
                        <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                      }
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Future Openings Box */}
          <div className="mt-12 md:mt-20 scroll-animate">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 md:p-8 lg:p-12 border border-white/10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]">
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/0 via-purple-900/5 to-cyan-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:pr-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Not aligned with any current openings, but interested in being considered for future opportunities?
                </h3>
                <p className="text-gray-400 mb-8 text-base md:text-lg">
                  We are always looking for talent. Send your resume to{" "}
                  <a
                    href="mailto:hr@aristasystems.in"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold border-b border-cyan-500/30 hover:border-cyan-400 pb-0.5"
                  >
                    hr@aristasystems.in
                  </a>
                </p>
                <button 
                  onClick={handleGeneralApplyClick}
                  className="w-full md:w-auto border border-purple-500/50 text-purple-300 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 font-medium hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                  SEND GENERAL APPLICATION
                </button>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
                <div className="relative w-full max-w-xs lg:max-w-sm transform transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src="/career-future.png" 
                    alt="Future Opportunities"
                    className="w-full h-auto object-cover rounded-xl shadow-2xl"
                    onError={(e) => { e.target.src = "/images/ai-logo-1536x1236.avif" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Application Popup Modal – Arista Style (Tailwind/Inline Only, Adjusted Height) */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closePopup}
          ></div>

          {/* Main gradient card (Wider width) */}
          <div className="relative z-[10000] w-full max-w-2xl">
            <div
              className="rounded-xl overflow-hidden shadow-2xl"
              style={{
                // Specific gradient
                background: "linear-gradient(135deg, #100035 0%, #300065 25%, #501095 65%, #9e1aa3 100%)", 
              }}
            >
              {/* Close button (blue X icon) */}
              <button
                onClick={closePopup}
                className="absolute top-2.5 right-2.5 p-2 bg-blue-500 rounded-full text-white leading-none hover:bg-blue-600 transition-colors"
                aria-label="Close application form"
              >
                <X size={16} />
              </button>

              {/* Content (Reduced top/bottom padding: pt-6 pb-6) */}
              <div className="px-10 pt-6 pb-6 text-white max-[480px]:px-6">
                
                {/* TITLE STRUCTURE */}
                <h2 className="text-[38px] md:text-[45px] leading-tight font-bold mb-4 text-white text-left">
                  Applying For <br />
                  <span className="text-[38px] md:text-[45px] font-bold">
                    {selectedJob?.title?.replace(" Job", "") || "Graphic Designer"} Job 
                  </span>
                </h2>
                
                {/* Form with reduced space-y for tighter packing (space-y-5) */}
                <form onSubmit={handleSubmit} className="mt-4 space-y-5 text-base">
                  
                  {/* Full Name (Single instance) */}
                  <div>
                    <label className="block mb-1 text-white/90 font-medium text-sm sr-only">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Full Name*"
                      // Input line gradient simulation with inline style
                      className="w-full bg-transparent outline-none pb-1.5 text-white placeholder-white/80"
                      style={{ 
                        border: 'none',
                        borderBottom: '2px solid',
                        borderImage: 'linear-gradient(to right, #6d28d9, #8b5cf6, #ec4899) 1',
                        padding: '0.4rem 0.25rem',
                        fontSize: '15px' 
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-1 text-white/90 font-medium text-sm sr-only">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email*"
                      // Input line gradient simulation with inline style
                      className="w-full bg-transparent outline-none pb-1.5 text-white placeholder-white/80"
                      style={{ 
                        border: 'none',
                        borderBottom: '2px solid',
                        borderImage: 'linear-gradient(to right, #6d28d9, #8b5cf6, #ec4899) 1',
                        padding: '0.4rem 0.25rem',
                        fontSize: '15px' 
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block mb-1 text-white/90 font-medium text-sm sr-only">Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone*"
                      // Input line gradient simulation with inline style
                      className="w-full bg-transparent outline-none pb-1.5 text-white placeholder-white/80"
                      style={{ 
                        border: 'none',
                        borderBottom: '2px solid',
                        borderImage: 'linear-gradient(to right, #6d28d9, #8b5cf6, #ec4899) 1',
                        padding: '0.4rem 0.25rem',
                        fontSize: '15px' 
                      }}
                    />
                  </div>

                  {/* Upload Resume (custom look with inline styles) */}
                  <div>
                    <label className="block mb-1 text-white/90 font-medium text-sm">
                      Upload Resume
                    </label>
                    {/* Custom File Wrapper: Simulated with position relative and border-bottom inline styles */}
                    <div 
                      className="relative flex items-center w-full"
                      style={{
                        height: '40px',
                        paddingBottom: '5px',
                        borderBottom: '2px solid',
                        borderImage: 'linear-gradient(to right, #6d28d9, #8b5cf6, #ec4899) 1',
                      }}
                    >
                      {/* Custom File Button */}
                      <span className="bg-[#6d28d9] hover:bg-[#5b21aa] text-white rounded-md py-1.5 px-4 font-semibold whitespace-nowrap z-10 text-xs transition-colors cursor-pointer">
                        Choose file
                      </span>
                      {/* File Name Text */}
                      <span className="text-gray-300 ml-3 whitespace-nowrap overflow-hidden text-ellipsis text-xs">
                        {formData.resume ? formData.resume.name : "No file chosen"}
                      </span>
                      {/* Invisible File Input */}
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        required
                        accept=".pdf,.doc,.docx"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="!mt-6"> {/* Adjusted margin top */}
                    <label className="block mb-1 text-white/90 font-medium text-sm sr-only">Comments</label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      rows={4} 
                      placeholder="Comments"
                      // Box-style field matching the screenshot
                      className="w-full bg-transparent border border-white/40 focus:border-purple-400/50 outline-none p-3 text-sm resize-none rounded-sm transition-colors placeholder-white/80"
                    ></textarea>
                  </div>

                  {/* Apply button (Reduced margin top) */}
                  <div className="pt-4 flex justify-center !mt-6"> 
                    <button
                      type="submit"
                      // Custom button styling: light blue gradient
                      style={{
                        background: 'linear-gradient(to bottom, #50a0ff, #2080ff)',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                      }}
                      className="px-10 py-3 text-white font-semibold rounded-md text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      APPLY NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}