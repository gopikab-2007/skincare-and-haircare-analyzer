import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SkinProblem() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSelect = (concern) => {
    navigate("/result", { state: { ...state, concern } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-yellow-600 mb-6">Select Your Skin Concern</h2>
      <div className="flex flex-col gap-4">
        {["Acne", "Dryness", "Pigmentation", "Aging", "Dullness"].map((concern) => (
          <button
            key={concern}
            onClick={() => handleSelect(concern)}
            className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition"
          >
            {concern}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SkinProblem;
