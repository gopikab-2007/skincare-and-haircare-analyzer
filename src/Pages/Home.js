import React from "react";
import { Link } from "react-router-dom";
const userEmail = localStorage.getItem("userEmail");
<header className="flex justify-between items-center p-6 shadow-md bg-white">
  <h1 className="text-2xl font-bold text-green-900">Skincare and Haircare Analyzer</h1>
  <nav className="space-x-6 flex items-center">
    {userEmail && <span className="text-gray-600">Welcome, {userEmail}</span>}
    {userEmail && (
      <button
        className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    )}
  </nav>
</header>

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-6">
          India’s No.1 Customized Skin & Hair Care Regimen
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Dermatologist-formulated, paraben-free, and made just for you.
          Begin your glowing journey today!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/skinquestionnaire"
            className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition text-lg"
          >
            Know Your Skin
          </Link>

          <Link
            to="/hairquestionnaire"
            className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition text-lg"
          >
            Know Your Hair
          </Link>

          <Link
            to="/camera"
            className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition text-lg"
          >
            Open Camera Analyzer 📸
          </Link>

          <Link
            to="/progress"
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition text-lg"
          >
            Track My Progress 📅
          </Link>
        </div>
      </section>
    </div>
  );
}
