import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SkinQuestionnaire() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  
  const handleSubmit = () => {
  localStorage.setItem("resultType", "skin-oily"); // example
  window.location.href = "/result-skin";
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex flex-col items-center justify-center text-center p-6">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Select Your Gender</h2>
          <div className="flex gap-4">
            <button
              onClick={() => handleSelect("gender", "Male")}
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
            >
              Male
            </button>
            <button
              onClick={() => handleSelect("gender", "Female")}
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
            >
              Female
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Select Your Age</h2>
          <div className="flex flex-col gap-3">
            {["Below 20", "20–30", "30–40", "Above 40"].map((age) => (
              <button
                key={age}
                onClick={() => handleSelect("age", age)}
                className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
              >
                {age}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold mb-6">What is your skin type?</h2>
          <div className="flex flex-col gap-3">
            {["Oily", "Dry", "Combination", "Normal"].map((type) => (
              <button
                key={type}
                onClick={() => handleSelect("skinType", type)}
                className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
              >
                {type}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2 className="text-2xl font-bold mb-6">What is your main skin concern?</h2>
          <div className="flex flex-col gap-3">
            {[
              "Acne / Pimples",
              "Dark spots / Pigmentation",
              "Dryness / Flakiness",
              "Fine lines / Aging",
            ].map((concern) => (
              <button
                key={concern}
                onClick={() => handleSelect("concern", concern)}
                className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
              >
                {concern}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            Does your skin feel sensitive or irritated often?
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => handleSelect("sensitivity", "Yes")}
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onClick={() => handleSelect("sensitivity", "No")}
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
            >
              No
            </button>
          </div>
        </>
      )}

      {step === 6 && (
        <>
          <h2 className="text-2xl font-bold mb-6">How often do you apply sunscreen?</h2>
          <div className="flex flex-col gap-3">
            {[
              "Every day",
              "Only when going outside",
              "Rarely",
              "Never",
            ].map((freq) => (
              <button
                key={freq}
                onClick={() => handleSelect("sunscreen", freq)}
                className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
              >
                {freq}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 7 && (
        <>
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            ✨ Your Answers are Ready!
          </h2>
          <p className="text-gray-700 mb-4">
            Click below to view your personalized skincare routine 💆‍♀️
          </p>
          <button
            onClick={handleSubmit}
            className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600"
          >
            Show My Routine
          </button>
        </>
      )}
      
  

    </div>
   

  );
}

export default SkinQuestionnaire;
