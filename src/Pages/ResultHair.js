import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ResultHair() {
  const navigate = useNavigate();

  // What the quiz should set before navigating here:
  // localStorage.setItem("resultType", "hairfall" | "dandruff" | "oily-scalp" | "dry-hair");

  const type = localStorage.getItem("resultType") || "hairfall";

  const PLANS = {
    "hairfall": {
      badge: "Balanced Anti-Hairfall Routine",
      blurb:
        "Strengthen roots, reduce breakage, and improve scalp health for visible reduction in hair fall.",
      steps: [
        { icon: "🧴", text: "Gentle anti-hairfall shampoo (2–3× / week)" },
        { icon: "🧪", text: "Biotin + Peptide leave-in serum (daily on scalp)" },
        { icon: "🪄", text: "Lightweight conditioner mid-lengths → ends" },
        { icon: "🌿", text: "Nourishing hair oil massage (1–2× / week)" },
        { icon: "🍽", text: "Diet support: protein + iron + omega-3" },
      ],
    },
    "dandruff": {
      badge: "Flake-Control Scalp Care",
      blurb:
        "Calm itch and remove flakes while keeping your scalp barrier healthy.",
      steps: [
        { icon: "🧴", text: "Anti-dandruff shampoo (zinc pyrithione/ketoconazole) 2–3× / week" },
        { icon: "💧", text: "Scalp hydrating tonic on non-wash days" },
        { icon: "🪮", text: "Conditioner only from ear length to ends" },
        { icon: "🧊", text: "Avoid heavy oils on scalp; use light serum instead" },
        { icon: "🧼", text: "Wash pillowcases & brushes weekly" },
      ],
    },
    "oily-scalp": {
      badge: "Oil-Balance Routine",
      blurb:
        "Control excess sebum without over-drying to keep scalp fresh and roots lifted.",
      steps: [
        { icon: "🫧", text: "Balancing shampoo (tea tree/salicylic) on scalp" },
        { icon: "💆‍♀", text: "Scalp exfoliating serum 1× / week" },
        { icon: "🪄", text: "Lightweight conditioner on lengths only" },
        { icon: "💨", text: "Avoid very hot water & tight hairstyles" },
        { icon: "📅", text: "Wash on a schedule: alternate wash / co-wash" },
      ],
    },
    "dry-hair": {
      badge: "Deep-Hydration Hair Routine",
      blurb:
        "Restore moisture, smooth frizz, and add shine without weighing hair down.",
      steps: [
        { icon: "🧴", text: "Moisturizing shampoo (sulfate-free), 2–3× / week" },
        { icon: "🧈", text: "Rich conditioner; 2–3 min before rinse" },
        { icon: "🧖‍♀", text: "Mask or hot-oil treatment 1× / week" },
        { icon: "✨", text: "Leave-in cream/serum on damp hair lengths" },
        { icon: "🌞", text: "Heat protectant before styling; reduce heat" },
      ],
    },
  };

  const data = PLANS[type];

  if (!data) {
    return (
      <div className="min-h-screen grid place-items-center bg-green-50 p-6">
        <div className="bg-white rounded-2xl shadow p-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-2">No Result Found</h2>
          <p className="text-gray-600 mb-6">Please complete the hair questionnaire.</p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/hairquestionnaire"
              className="px-5 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
            >
              Retake Quiz
            </Link>
            <Link
              to="/"
              className="px-5 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-green-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left card like your screenshot */}
          <div className="bg-green-50/70 rounded-2xl p-6 md:p-8 border border-green-100">
            <h3 className="text-xl md:text-2xl font-extrabold text-pink-600 leading-snug">
              {data.badge}
            </h3>

            <p className="text-gray-600 mt-3 mb-5">
              {data.blurb}
            </p>

            <ul className="space-y-3">
              {data.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-gray-800">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side title + description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600">
              Your Personalized Haircare Routine
            </h2>
            <p className="text-gray-700 mt-4">
              Based on your answers, we’ve created a routine tailored to your hair &
              scalp needs. Follow this for 6–8 weeks and adjust with our quiz anytime.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/hairquestionnaire")}
                className="px-5 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
              >
                Retake Quiz
              </button>
              <Link
                to="/"
                className="px-5 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Optional: tiny footer tips */}
        <div className="mt-8 text-sm text-gray-500 text-center">
          Tip: Take a progress photo weekly to track improvements.
        </div>
      </div>
    </div>
  );
}