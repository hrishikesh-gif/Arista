import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import Footer from "../component/Footer";

const BlogsPage = () => {
  const articles = [
    {
      category: "Digital Marketing",
      title:
        "Digital Email Rapy.cc: Experts, Tracking, and Reporting Excellence",
      description:
        "Discover how Rapy.cc revolutionizes email marketing with advanced tracking, expert insights, and comprehensive reporting. Stay ahead in the digital...",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      date: "March 15, 2024",
    },
    {
      category: "Business Strategy",
      title: "The Insider's Guide to Maha Ads Manager",
      description:
        "Master the art of advertising with Maha Ads Manager. Learn advanced strategies, optimization techniques, and best practices for maximum ROI...",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      date: "March 12, 2024",
    },
    {
      category: "E-Commerce",
      title:
        "Yaant vs Blok Math: Which WordPress SEO Plugin Is Best for Your Site?",
      description:
        "Choosing the right SEO plugin can make or break your WordPress site's visibility. Compare Yaant and Blok Math to find the perfect fit for your needs...",
      image:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500&h=300&fit=crop",
      date: "March 10, 2024",
    },
    {
      category: "Technology",
      title:
        "OpenAI Shopping Integration: Visual, Shopify Sales, and Browsing Power",
      description:
        "Explore how OpenAI's latest integration transforms e-commerce with visual search, enhanced Shopify capabilities, and powerful browsing features...",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      date: "March 8, 2024",
    },
    {
      category: "SEO",
      title: "The Ultimate Guide to Google Maps SEO in 2024",
      description:
        "Dominate local search with our comprehensive guide to Google Maps SEO. Learn proven strategies to boost your visibility and attract more customers...",
      image:
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&h=300&fit=crop",
      date: "March 5, 2024",
    },
    {
      category: "Marketing",
      title: "How Email Marketing Can Lead Generation: Expert Strategies",
      description:
        "Unlock the power of email marketing for lead generation. Discover expert tactics and data-driven strategies that deliver results...",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&h=300&fit=crop",
      date: "March 3, 2024",
    },
    {
      category: "Development",
      title: "AI No Baseball: What It Is & How It Works",
      description:
        "Dive deep into AI No Baseball technology. Understand its mechanisms, applications, and how it's changing the game in tech innovation...",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      date: "March 1, 2024",
    },
    {
      category: "Branding",
      title:
        "AI in Email Marketing: 5 Ways to Automate, Personalize and Scale Your Campaigns",
      description:
        "Revolutionize your email campaigns with AI. Learn 5 powerful ways to automate workflows, personalize content, and scale your marketing efforts...",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=500&h=300&fit=crop",
      date: "February 28, 2024",
    },
    {
      category: "Analytics",
      title: "Why Semantic SEO is Crucial for Modern Digital Marketing Success",
      description:
        "Semantic SEO is no longer optional. Discover why understanding search intent and context is essential for ranking higher and driving quality traffic...",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&h=300&fit=crop",
      date: "February 25, 2024",
    },
    {
      category: "Design",
      title: "Boosting Campaign Performance with Lit Leads",
      description:
        "Lit Leads is transforming how brands generate and nurture leads. Explore strategies to supercharge your campaign performance...",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&h=300&fit=crop",
      date: "February 22, 2024",
    },
    {
      category: "Web Design",
      title: "New Web Design Trends 2025: Every Brand Needs to Know Today",
      description:
        "Stay ahead of the curve with 2025's hottest web design trends. From immersive experiences to minimalist interfaces, discover what's shaping...",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
      date: "February 20, 2024",
    },
    {
      category: "E-Commerce",
      title: "How Social Commerce is Redefining Online Shopping in 2025",
      description:
        "Social commerce is revolutionizing retail. Learn how platforms are integrating shopping experiences and what it means for your business...",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      date: "February 18, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="flex items-center justify-center px-6 py-20 min-h-screen">
        <div className="max-w-6xl w-full ">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold mb-8  leading-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-200 bg-clip-text text-transparent inline-block">
              Blogs
            </span>
          </h1>

          <div
            className="max-w-3xl mb-10 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Stay updated with the latest trends, expert insights, and
              practical tips from our team. Explore articles, stories, and
              resources designed to inform, inspire, and help you make smarter
              decisions.
            </p>
          </div>

          {/* <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <Mail size={20} />
            LET'S TALK
          </button> */}
        </div>
      </div>

      {/* Articles Section */}
      <div className="px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            Our Recent <span className="text-blue-500">Articles</span>
          </h2>
          <div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-12 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          ></div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fadeInUp group"
                style={{ animationDelay: `${0.1 * (index % 6)}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-2">{article.date}</p>
                  <h3 className="text-white text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      <Footer/>
    </div>
  );
};

export default BlogsPage;
