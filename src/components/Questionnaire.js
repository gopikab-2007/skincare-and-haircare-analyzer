import React, { useState } from "react";

const Questionnaire = ({ skinType, onSubmit }) => {
  const [answers, setAnswers] = useState({
    hydration: "",
    sensitivity: "",
    hairType: "",
  });

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-pink-500 text-center">
        Skin & Hair Questionnaire
      </h2>
      <p className="text-center mb-4 text-gray-700">Detected Skin Type: {skinType}</p>

      <label className="block mb-2">
        How often do you moisturize your skin?
        <select
          name="hydration"
          value={answers.hydration}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mt-1 mb-4"
        >
          <option value="">Select</option>
          <option value="low">Rarely</option>
          <option value="medium">Sometimes</option>
          <option value="high">Daily</option>
        </select>
      </label>

      <label className="block mb-2">
        How sensitive is your skin to products?
        <select
          name="sensitivity"
          value={answers.sensitivity}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mt-1 mb-4"
        >
          <option value="">Select</option>
          <option value="low">Not sensitive</option>
          <option value="medium">Moderate</option>
          <option value="high">Very sensitive</option>
        </select>
      </label>

      <label className="block mb-2">
        What is your hair type?
        <select
          name="hairType"
          value={answers.hairType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mt-1 mb-4"
        >
          <option value="">Select</option>
          <option value="straight">Straight</option>
          <option value="wavy">Wavy</option>
          <option value="curly">Curly</option>
          <option value="coily">Coily</option>
        </select>
      </label>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
      >
        Get Recommendations
      </button>
    </form>
  );
};

export default Questionnaire;
