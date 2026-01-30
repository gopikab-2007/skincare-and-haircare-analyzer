import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = localStorage.getItem("userEmail");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Hide Navbar on Login & Signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
      <Link to="/" className="text-2xl font-bold text-pink-600">
       Skincare and Haircare Analyzer
      </Link>

      <nav className="flex items-center gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-pink-500">Home</Link>
        <Link to="/skinquestionnaire" className="hover:text-pink-500">Skin</Link>
        <Link to="/hairquestionnaire" className="hover:text-pink-500">Hair</Link>

        {/* ✅ Show user greeting + logout when logged in */}
        {isLoggedIn && (
          <>
            <span className="text-gray-600">
              Welcome, {userEmail}
            </span>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
