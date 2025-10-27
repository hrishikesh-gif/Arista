import React from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <>
      {/* New CTA Section with Animated Background */}
      <section
        className="relative bg-black text-white overflow-hidden"
        style={{ minHeight: "60vh" }}
      >
        <div
          className="relative z-10 max-w-4xl mx-auto h-full flex flex-col items-center justify-center px-6"
          style={{ minHeight: "60vh" }}
        >
          {/* Animated Background Text - Above */}
          <div className="absolute top-10 left-0 w-full flex items-center pointer-events-none">
            <div className="flex space-x-16 animate-scroll-left">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="text-8xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-700"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
                >
                  ARISTASYSTEMS
                </span>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turn ideas into measurable results.
            </h2>
            <button className="group relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 rounded-lg overflow-hidden">
              <span className="relative z-10">GET A CUSTOM QUOTE TODAY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            </button>
          </div>

          {/* Animated Background Text - Below */}
          <div className="absolute bottom-10 left-0 w-full flex items-center pointer-events-none">
            <div className="flex space-x-16 animate-scroll-right">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="text-8xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-700"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
                >
                  ARISTASYSTEMS
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes scroll-left {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 35s linear infinite;
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 via-transparent to-pink-900 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {/* Logo + Address */}
          <div className="group">
            <Link to="/">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                Arista Systems
              </h2>
            </Link>
            <div className="mt-4 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              <div className="flex items-start gap-2 hover:text-white transition-colors duration-200">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <p>
                  Infotech Tower, Ground Floor, South Ambazari Rd,
                  <br /> Gayatri Nagar IT Park, Nagpur, Maharashtra 440022
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <span className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer">
                Shopify Partner
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-pink-600 hover:scale-105 transition-all duration-300 cursor-pointer">
                Shopify Expert
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
              SERVICES
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "Creative Production", path: "/services/photo-editing" },
                { name: "Website Development", path: "/services/shopify-development" },
                { name: "Digital Marketing", path: "/services/seo" },
                { name: "Finance & Reconciliation", path: "/services/finance-reconciliation" },
                { name: "Amazon & Marketplace Management", path: "/services/amazon-seller-support" },
                { name: "Customer Experience & Support", path: "/services/customer-service" },
              ].map((service, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group"
                >
                  <Link to={service.path} className="relative z-10">
                    {service.name}
                  </Link>
                  <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-purple-600 to-transparent opacity-20 group-hover:w-full transition-all duration-300 -z-10"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Work", path: "/case-studies" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/#contact" },
                { name: "Information Security Policy", path: "#" },
              ].map((link, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group"
                >
                  <Link to={link.path} className="relative z-10">
                    {link.name}
                  </Link>
                  <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-pink-600 to-transparent opacity-20 group-hover:w-full transition-all duration-300 -z-10"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch + Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <FiPhone className="text-green-400" />
                <a href="tel:+917028001906">(+91) 702-8001-906</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <FiPhone className="text-green-400" />
                <a href="tel:+919178298442">(+91) 917-829-8442</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <FiMail className="text-blue-400" />
                <a href="mailto:hr@aristasystems.in">hr@aristasystems.in</a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Follow us on</p>
              <div className="flex gap-4 text-xl">
                {[
                  { icon: FiGithub, color: "hover:text-gray-300 hover:bg-gray-800", link: "#" },
                  { icon: FiTwitter, color: "hover:text-blue-400 hover:bg-blue-900/30", link: "#" },
                  { icon: FiInstagram, color: "hover:text-pink-400 hover:bg-pink-900/30", link: "#" },
                  { icon: FiLinkedin, color: "hover:text-blue-500 hover:bg-blue-900/30", link: "#" },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 p-2 rounded-full border border-transparent hover:border-current transition-all duration-300 hover:scale-110 hover:rotate-6 ${social.color}`}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 relative">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-300 items-center justify-center">
              Copyright © 2025 Arista Systems Pvt. Ltd. All rights reserved.
            </p>
          </div>
          {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-20"></div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
