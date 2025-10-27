import React from "react";

const CustomerService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="px-8 py-16 max-w-7xl mx-auto">
        <div className="max-w-5xl">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-none">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Customer Service
            </span>
          </h1>

          <div className="mb-8">
            <p className="text-lg text-gray-300 mb-4">Email. Chat. Voice.</p>
            <p className="text-gray-400 max-w-2xl text-base leading-relaxed">
              At Arista Systems, we turn complex client into seamless
              <br />
              inquiries experiences that captivate customers and drive
              satisfaction.
              <br />
              Our cutting-edge multi-channel customer service solutions are
              designed
              <br />
              with one goal: to delight your customers at every interaction.
              Through
              <br />
              strategic thinking and cutting-edge creativity to build
              <br />
              websites that catch and they perform.
            </p>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors">
            GET STARTED
          </button>
        </div>

        {/* Service Icons Row */}
        <div className="flex gap-4 mt-16">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">Ps</span>
          </div>
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="px-8 py-12 max-w-7xl mx-auto">
        {/* Website Redesign */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-orange-400 leading-tight">
              Website
              <br />
              Redesign
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              In today's digital landscape, you have just 15 seconds to make a
              memorable impression. First impressions matter, and your
              opportunity to communicate and earn trust begins the moment a
              visitor arrives at your site.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Through strategic design thinking, modern UI animations, and
              user-centered solutions that work, along with your unique brand
              messaging, we help you create an experience that inspires clarity
              performance, and proposes your brand as a thought leader.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              We believe that the best designs reflect brand identity,
              engagement, and results leaving audit our! Our approach integrates
              aesthetics that align with your business goals. Before any pixels
              hit the screen, we gain clarity on objectives and frameworks of
              better conversions.
            </p>
          </div>
        </div>

        {/* B2B Websites */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-orange-400">B2B Websites</h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-sm leading-relaxed">
              In the complex world of B2B, your website should be more than just
              a digital brochure: it should be a business development tool that
              drives qualified leads, nurtures client relationships, and
              showcase your expertise. Our strategic approach to B2B website
              design and development conversion-focused that executives
              convinced to choose your expertise. By understanding your target
              audience, their pain points, and the decision-making journey, we
              create websites that not only establish your brand as an industry
              leader but also streamline the path from visitor to qualifying
              lead — making your business development process more effective and
              confident.
            </p>
          </div>
        </div>

        {/* Visual Design */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-orange-400">
              Visual Design
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-sm leading-relaxed">
              At Arista Systems, we have worked with emerging brands to large
              enterprises side with strategic brands that leverage vision of
              strategy. We've collaborated with organizations many design
              elements from over and above what most are special creating
              beautiful and more appealing that and their brand systems. By
              applying principles of color psychology, typography, and emotional
              connections, we develop visual identity systems ensure that every
              element enhances your appeal. Everything we design from logo
              development to complete visual brand systems, ensuring that every
              element in your business goals. Everything we create whether it's
              your brand elements connects with users to achieve your goals.
            </p>
          </div>
        </div>

        {/* Custom Web Design */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-orange-400 leading-tight">
              Custom Web
              <br />
              Design
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-sm leading-relaxed">
              In a world of templates and cookie-cutter solutions, your unique
              value deserves something built as unique as you are. We specialize
              in building custom web experiences that reflect your brand
              personality, engage your target audience, and achieve your
              business objectives. Our design process begins with discovery
              which includes understanding your ideal goals, objectives, and
              pain challenges of business. We then translate those insights into
              starting purposes built designs that capture attention,
              communicate your value proposition, and guide users towards taking
              action. Every element from typography to interactive features is
              custom crafted to support your specific goals and support your
              brand and meet your business objectives.
            </p>
          </div>
        </div>

        {/* Responsive Design */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-orange-400 leading-tight">
              Responsive
              <br />
              Design
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-sm leading-relaxed">
              In today's fast-moving digital world, your website must perform
              flawlessly across all devices and screen sizes. With mobile
              traffic accounting for over half of all web traffic, delivering
              consistent and native experiences that keep visitors engaged and
              drive conversions is more critical than ever. Our responsive
              design approach ensures that your brand message, functionality,
              and user experience remain consistent and optimized across
              smartphones, tablets, and desktop devices. While many agencies may
              trap clients in one-size-fits-all solutions, we create custom
              responsive experiences that adapt beautifully to any screen size,
              giving your users a world-class, compact.
            </p>
          </div>
        </div>
      </div>

      {/* Purple Gradient CTA Section */}
      <div className="px-8 py-20 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-3xl p-16 overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Digital experiences that don't just tell your story—they make your
              brand the life of the online party.
            </h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors">
              GET STARTED
            </button>
          </div>

          {/* Circular Design Element */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-64 h-64">
            <div className="w-full h-full rounded-full border-4 border-white border-opacity-20 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-4 border-white border-opacity-40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Case Studies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* KITH Case Study */}
          <div className="bg-gray-900 rounded-2xl p-8 relative">
            <div className="mb-6">
              <div className="bg-white text-black px-4 py-2 font-bold text-lg rounded inline-block">
                KITH
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
              <h3 className="text-lg font-semibold leading-tight">
                How KITH Grew Up Market
                <br />
                We Engineer Projects For Superior
                <br />
                Performance
              </h3>
            </div>

            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-400">32%</div>
                <div className="text-gray-400 text-sm">Index</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">20%</div>
                <div className="text-gray-400 text-sm">Index</div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors block">
                READ THE CASE STUDY
              </button>
              <button className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded text-sm font-semibold transition-colors block">
                VIEW ALL CASE STUDIES
              </button>
            </div>
          </div>

          {/* Glendale Case Study */}
          <div className="bg-gradient-to-br from-green-400 via-teal-400 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="mb-6">
              <div className="text-2xl font-bold">Glendale</div>
            </div>

            <div className="mb-8">
              <div className="text-lg font-semibold mb-4">Little Spoon</div>
            </div>

            <div className="bg-black bg-opacity-30 px-4 py-2 rounded-full inline-block">
              <span className="text-white font-bold">2021</span>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-8 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 max-w-2xl mx-auto">
          Turn ideas into measurable results.
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors">
          GET A CUSTOM QUOTE TODAY
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded mr-3"></div>
                <span className="text-xl font-bold">Arista</span>
              </div>
              <address className="text-gray-400 text-sm not-italic mb-4">
                Arista Communication
                <br />
                Crystal Tower Standard
                <br />
                Chartered Floor – 13-14
                <br />
                Laxmi Nagar
                <br />
                NEW DELHI
              </address>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">
                SERVICES
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Digital Strategy</li>
                <li>Website Development</li>
                <li>eCommerce</li>
                <li>Web Design</li>
                <li>Brand Identity</li>
                <li>Marketing</li>
                <li>Customer Experience & Support</li>
                <li>Technology</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">
                QUICK LINKS
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Case Studies</li>
                <li>Work with Us</li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">
                GET IN TOUCH
              </h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>📞 +91-70-42352</p>
                <p>📞 +91-70-42353</p>
                <p>✉️ hello@aristasystems.in</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Arista Systems All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerService;
