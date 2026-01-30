import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HairQuestionnaire() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const handleSubmit = () => {
  localStorage.setItem("resultType", "hairfall"); // example
  window.location.href = "/result-hair";
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col items-center justify-center text-center p-6">
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
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
              >
                {age}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold mb-6">What is your hair type?</h2>
          <div className="flex flex-col gap-3">
            {["Straight", "Wavy", "Curly"].map((type) => (
              <button
                key={type}
                onClick={() => handleSelect("hairType", type)}
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
              >
                {type}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2 className="text-2xl font-bold mb-6">What is the thickness of your hair?</h2>
          <div className="flex flex-col gap-3">
            {["Thin", "Medium", "Thick"].map((thickness) => (
              <button
                key={thickness}
                onClick={() => handleSelect("thickness", thickness)}
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
              >
                {thickness}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h2 className="text-2xl font-bold mb-6">What is your hair volume?</h2>
          <div className="flex flex-col gap-3">
            {["Low", "Medium", "High"].map((volume) => (
              <button
                key={volume}
                onClick={() => handleSelect("volume", volume)}
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
              >
                {volume}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 6 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Do you currently have dandruff?</h2>
          <div className="flex gap-4">
            <button
              onClick={() => handleSelect("dandruff", "Yes")}
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onClick={() => handleSelect("dandruff", "No")}
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
            >
              No
            </button>
          </div>
        </>
      )}

      {step === 7 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            If you shampoo in the morning, how does your scalp feel the same night?
          </h2>
          <div className="flex flex-col gap-3">
            {["Oily", "Dry", "Normal"].map((scalp) => (
              <button
                key={scalp}
                onClick={() => handleSelect("scalpFeel", scalp)}
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
              >
                {scalp}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 8 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            When did your hair fall issue start?
          </h2>
          <div className="flex flex-col gap-3">
            {["Less than 2 months", "More than 3 months"].map((duration) => (
              <button
                key={duration}
                onClick={() => handleSelect("hairFallDuration", duration)}
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
              >
                {duration}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 9 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            How much hair fall do you see every time you brush your hair?
          </h2>
          <div className="flex flex-col gap-3">
            {[
              "Less hair",
              "Less visible hair fall (50–100 hair strands)",
              "Very visible hair fall (more than 100 hair strands)",
            ].map((amount) => (
              <button
                key={amount}
                onClick={() => handleSelect("hairFallAmount", amount)}
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
              >
                {amount}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 10 && (
        <>
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            ✨ Your Answers are Ready!
          </h2>
          <p className="text-gray-700 mb-4">
            Click below to view your personalized hair care routine 💇‍♀️
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

export default HairQuestionnaire;
