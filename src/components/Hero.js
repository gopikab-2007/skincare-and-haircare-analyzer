import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-pink-500">
            Glow Inside & Out
          </h2>
          <p className="text-gray-700 mb-6">
            Discover personalized skincare & haircare solutions just for you.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          {/* Image removed to avoid errors */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
