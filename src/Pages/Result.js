import React from "react";
import { useLocation, Link } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const { gender, age, concern } = state || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🌿 Your Personalized Routine</h1>

      <p className="text-lg text-gray-700 mb-6">
        For a <span className="font-semibold text-pink-600">{gender}</span> aged{" "}
        <span className="font-semibold text-pink-600">{age}</span> with{" "}
        <span className="font-semibold text-pink-600">{concern}</span> concern.
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md">
        <h2 className="text-2xl font-semibold text-green-500 mb-3">Recommended Care</h2>
        <ul className="text-left space-y-2">
          <li>✅ Cleanse gently twice a day</li>
          <li>✅ Moisturize with a lightweight formula</li>
          <li>✅ Apply sunscreen daily</li>
        </ul>
      </div>

      <Link
        to="/"
        className="mt-8 inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Result;
