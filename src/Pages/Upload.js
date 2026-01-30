import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [skinType, setSkinType] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    const types = ["Oily", "Dry", "Sensitive", "Combination"];
    const randomType = types[Math.floor(Math.random() * types.length)];
    setSkinType(randomType);

    setTimeout(() => {
      navigate("/questionnaire", { state: { skinType: randomType } });
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded shadow text-center">
      <h2 className="text-2xl font-bold text-pink-500 mb-4">Upload Your Photo</h2>
      <input type="file" className="mb-4 w-full" accept="image/*" />
      <button onClick={handleAnalyze} className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
        Analyze
      </button>
      {skinType && <p className="text-pink-500 font-bold mt-2">Detected Skin Type: {skinType}</p>}
    </div>
  );
};

export default Upload;
