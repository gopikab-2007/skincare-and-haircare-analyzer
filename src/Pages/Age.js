import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Age() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSelect = (age) => {
    navigate("/skinproblem", { state: { ...state, age } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Select Your Age Range</h2>
      <div className="flex flex-col gap-4">
        {["Under 18", "18-25", "26-35", "36-50", "50+"].map((age) => (
          <button
            key={age}
            onClick={() => handleSelect(age)}
            className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
          >
            {age}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Age;
