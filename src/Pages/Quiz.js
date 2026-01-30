// src/pages/Quiz.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  { id: 1, title: "Skin basics", questions: [
      { name: "skinType", label: "What is your skin type?", options:["Oily","Dry","Combination","Sensitive"] },
      { name: "concern", label: "Primary concern", options:["Acne","Aging","Pigmentation","Dehydration"] },
    ]},
  { id: 2, title: "Hair basics", questions: [
      { name: "hairType", label: "Hair type", options:["Straight","Wavy","Curly","Coily"] },
      { name: "hairConcern", label: "Primary hair concern", options:["Hairfall","Dandruff","Dryness","Frizz"] },
    ]},
  { id: 3, title: "Lifestyle", questions: [
      { name: "sleep", label: "How many hours do you sleep?", options:["<5","5-7","7-9",">9"] },
      { name: "diet", label: "Diet", options:["Vegetarian","Non-veg","Mixed","Vegan"] },
    ]},
];

export default function Quiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const step = steps[stepIndex];

  function handleChange(e){
    setAnswers(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  function next(){
    if(stepIndex < steps.length - 1) setStepIndex(s => s + 1);
    else finish();
  }

  function back(){
    if(stepIndex > 0) setStepIndex(s => s - 1);
  }

  function finish(){
    // For now simulate regimen creation and navigate to results page (you can create /results)
    // Store answers in localStorage or pass via state - we'll pass via state
    navigate("/results", { state: { answers } });
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8">
      <h2 className="text-2xl font-bold text-pink-500 mb-4">Take the Dermatological Quiz</h2>
      <div className="bg-white rounded shadow p-6">
        <h3 className="font-semibold mb-4">{step.title}</h3>

        {step.questions.map(q => (
          <div key={q.name} className="mb-4">
            <label className="block mb-2 font-medium">{q.label}</label>
            <select
              name={q.name}
              value={answers[q.name] || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              {q.options.map(opt => <option value={opt} key={opt}>{opt}</option>)}
            </select>
          </div>
        ))}

        <div className="flex justify-between mt-6">
          <button onClick={back} disabled={stepIndex===0} className="px-4 py-2 rounded border disabled:opacity-50">Back</button>
          <div>
            <button onClick={next} className="bg-pink-500 text-white px-4 py-2 rounded mr-3">{
              stepIndex < steps.length -1 ? "Next" : "Finish"
            }</button>
            <button onClick={() => { setAnswers({}); setStepIndex(0); }} className="px-3 py-2 rounded border">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
