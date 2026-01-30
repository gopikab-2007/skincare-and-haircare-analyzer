import React from "react";
import { useLocation, Link } from "react-router-dom";

function ResultSkin() {
  const location = useLocation();
  const answers = location.state || {};

  let title = "Your Personalized Skincare Routine";
  let description =
    "Based on your answers, we’ve created multiple routine options to suit your skin best.";

  // 🌸 Prepare multiple results based on answers
  let routines = [];

  if (answers.skinType === "Oily" && answers.concern?.includes("Acne")) {
    routines.push({
      name: "Anti-Acne & Oil Control Routine",
      desc:
        "Ideal for oily, acne-prone skin. Helps reduce breakouts and excess oil while keeping skin hydrated.",
      products: [
        "🧴 Salicylic Acid Cleanser (2%)",
        "💧 Niacinamide Serum (10%)",
        "🌿 Oil-Free Moisturizer",
        "☀ Matte Sunscreen SPF 50",
      ],
    });
  }

  if (answers.skinType === "Dry" || answers.concern?.includes("Dryness")) {
    routines.push({
      name: "Hydrating & Nourishing Routine",
      desc:
        "Perfect for dry or flaky skin. Deeply hydrates and restores your natural moisture barrier.",
      products: [
        "🫧 Creamy Cleanser with Ceramides",
        "💧 Hyaluronic Acid Serum",
        "🧴 Deep Moisture Cream",
        "☀ Hydrating Sunscreen SPF 30",
      ],
    });
  }

  if (answers.skinType === "Combination" || answers.concern?.includes("Dark spots")) {
    routines.push({
      name: "Brightening & Pigmentation Care",
      desc:
        "Best for dull or uneven skin tone. Reduces dark spots and adds natural radiance.",
      products: [
        "🧴 Vitamin C Face Wash",
        "💧 Vitamin C + Niacinamide Serum",
        "🌿 Lightweight Gel Moisturizer",
        "☀ Brightening Sunscreen SPF 50",
      ],
    });
  }

  if (answers.concern?.includes("Aging")) {
    routines.push({
      name: "Anti-Aging & Firming Routine",
      desc:
        "Designed for mature skin. Boosts elasticity and reduces fine lines for a youthful glow.",
      products: [
        "🧴 Gentle Cleanser",
        "💧 Retinol Serum (0.3%)",
        "🧴 Peptide Moisturizer",
        "🌙 Overnight Repair Cream",
      ],
    });
  }

  if (answers.sensitivity === "Yes") {
    routines.push({
      name: "Sensitive Skin Soothing Routine",
      desc:
        "Formulated to calm and protect sensitive skin. Fragrance-free and dermatologist-tested.",
      products: [
        "🧴 Fragrance-Free Gentle Cleanser",
        "💧 Aloe Vera or Centella Serum",
        "🌿 Barrier Repair Moisturizer",
        "☀ Mineral Sunscreen SPF 30",
      ],
    });
  }

  if (routines.length === 0) {
    routines.push({
      name: "Balanced Daily Skincare Routine",
      desc:
        "A simple and effective routine for maintaining healthy, glowing skin.",
      products: [
        "🧴 Gentle Face Wash",
        "💧 Hydrating Serum",
        "🌿 Moisturizer with Vitamin E",
        "☀ Daily Sunscreen SPF 30",
      ],
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">{title}</h2>
        <p className="text-gray-700 text-lg mb-6">{description}</p>

        {/* 🌸 Display all routines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {routines.map((routine, index) => (
            <div
              key={index}
              className="p-6 bg-pink-100 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">
                {routine.name}
              </h3>
              <p className="text-gray-700 mb-4">{routine.desc}</p>
              <ul className="text-left space-y-2">
                {routine.products.map((product, i) => (
                  <li key={i} className="text-gray-800">
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/skinquestionnaire"
            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
          >
            Retake Quiz
          </Link>
          <Link
            to="/"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResultSkin;