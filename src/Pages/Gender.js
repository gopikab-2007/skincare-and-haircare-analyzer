import React from "react";
import { useNavigate } from "react-router-dom";

function Gender() {
  const navigate = useNavigate();

  const handleSelect = (gender) => {
    navigate("/age", { state: { gender } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Select Your Gender</h2>
      <div className="flex gap-6">
        <button
          onClick={() => handleSelect("female")}
          className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"
        >
          Female
        </button>
        <button
          onClick={() => handleSelect("male")}
          className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition"
        >
          Male
        </button>
      </div>
    </div>
  );
}

export default Gender;
