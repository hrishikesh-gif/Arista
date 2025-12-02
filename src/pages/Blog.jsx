import React, { useState, useEffect } from "react";
import { ArrowRight, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { createClient } from "contentful";
import BusinessCTA from "../component/BusinessCTA";
import Footer from "../component/Footer";

// Contentful client setup
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: "-fields.date",
    });

    return response.items.map((item) => ({
      id: item.sys.id,
      category: item.fields.category,
      title: item.fields.title,
      description: item.fields.description,
      image: item.fields.featuredImage?.fields?.file?.url
        ? `https:${item.fields.featuredImage.fields.file.url}`
        : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      date: new Date(item.fields.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      slug: item.fields.slug,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- PAGINATION STATE ---
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const posts = await getBlogPosts();
        setArticles(posts);
        setError(null);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // --- PAGINATION LOGIC ---
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(articles.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  return (
    <div
      className="bg-black text-white min-h-screen w-full overflow-x-hidden relative font-sans selection:bg-purple-500/30"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #1e0a3c 50%, #000000 100%)",
      }}
    >
      {/* Background Orbs (same style as About) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30vw] h-[30vw] bg-blue-900/20 rounded-full blur-[100px] opacity-50"></div>
      </div>

      {/* Grid Texture (same as About) */}
      <div
        className="fixed inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* All page content above background layers */}
      <div className="relative z-10 w-full">
        {/* --- HERO SECTION --- */}
       
        <div className="relative w-full pt-48 md:pt-64 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">

            <div className="relative z-10 max-w-5xl animate-fadeInUp">
              <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-extrabold mb-8 tracking-tight leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Blogs
                </span>
              </h1>

              <div
                className="max-w-3xl animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                  Discover the Latest Trends, Expert Insights, and Practical
                  Tips. Our blogs are packed with stories, strategies, and
                  resources designed to inspire, inform, and empower you to make
                  smarter decisions every day.
                </p>
              </div>
            </div>
          </div>
       

        {/* --- ARTICLES SECTION --- */}
        <div className="px-6 pt-10 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12 animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Recent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Articles
                </span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                <p className="text-gray-400 text-lg">
                  Loading amazing content...
                </p>
              </div>
            )}

            {error && !loading && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-center">
                <p className="text-red-400 text-lg">{error}</p>
              </div>
            )}

            {!loading && !error && articles.length === 0 && (
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-12 text-center">
                <p className="text-gray-400 text-lg">
                  No blog posts available yet.
                </p>
              </div>
            )}

            {!loading && !error && currentPosts.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {currentPosts.map((article) => (
                    <div
                      key={article.id}
                      className="group flex flex-col bg-[#0a0a0a] rounded-2xl overflow-hidden 
                                 border border-gray-800 hover:border-purple-500/50 
                                 hover:shadow-lg hover:shadow-purple-900/20
                                 transition-all duration-300 cursor-pointer"
                      onClick={() =>
                        (window.location.href = `/blog/${article.slug}`)
                      }
                    >
                      {/* Image Wrapper */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                        {article.category && (
                          <span
                            className="absolute top-4 left-4 
                                           bg-black/40 backdrop-blur-md text-purple-300 
                                           text-[11px] font-bold px-3 py-1.5 
                                           rounded-full uppercase tracking-widest 
                                           border border-purple-500/30 shadow-lg"
                          >
                            {article.category}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-grow p-6">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-purple-400/80 text-xs font-semibold uppercase tracking-wider">
                            {article.date}
                          </div>
                        </div>

                        <h3
                          className="text-white text-xl font-bold mb-3 leading-snug line-clamp-2 
                                       group-hover:text-purple-300 transition-colors duration-300"
                        >
                          {article.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                          {article.description}
                        </p>

                        <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between">
                          <span className="text-sm text-purple-400 font-semibold group-hover:text-white transition-colors">
                            Read Article
                          </span>
                          <span className="p-2 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- PAGINATION CONTROLS --- */}
                {totalPages > 1 && (
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                      className={`px-5 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 font-medium
                      ${
                        currentPage === 1
                          ? "border-gray-800 text-gray-600 cursor-not-allowed bg-transparent"
                          : "border-purple-500/30 text-gray-300 hover:border-purple-500 hover:text-white hover:bg-purple-500/10"
                      }`}
                    >
                      <ChevronLeft size={18} /> Prev
                    </button>

                    {Array.from(
                      { length: totalPages },
                      (_, i) => i + 1
                    ).map((number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`w-12 h-12 rounded-lg border text-sm font-bold transition-all duration-300
                        ${
                          currentPage === number
                            ? "border-purple-500 text-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                            : "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white bg-transparent"
                        }`}
                      >
                        {number}
                      </button>
                    ))}

                    <button
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className={`px-5 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 font-medium
                      ${
                        currentPage === totalPages
                          ? "border-gray-800 text-gray-600 cursor-not-allowed bg-transparent"
                          : "border-purple-500/30 text-gray-300 hover:border-purple-500 hover:text-white hover:bg-purple-500/10"
                      }`}
                    >
                      Next <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>

        <BusinessCTA
          title="Ready to Take Your Business to the Next Level?​"
          description="Partner with Arista Systems and get a dedicated offshore team that understands your goals, executes with precision, and drives real growth."
          buttonText="BUILD YOUR DREAM TEAM HERE"
          imageUrl="\images\CS.avif"
          altText="Let's Talk"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
