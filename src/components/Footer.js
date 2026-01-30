import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; 2025 Skincare & Haircare. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-pink-500">Facebook</a>
          <a href="#" className="hover:text-pink-500">Instagram</a>
          <a href="#" className="hover:text-pink-500">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
