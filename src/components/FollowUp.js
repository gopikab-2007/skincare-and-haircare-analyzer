// src/components/FollowUp.js
import React from "react";

export default function FollowUp(){
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h3 className="text-xl font-bold text-pink-500 mb-4">Ongoing Follow-ups</h3>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700">
        <li>Week 1: Check-in — photos + diary entry</li>
        <li>Week 4: Progress review by dermatologist</li>
        <li>Month 2: Adjust products if needed</li>
        <li>Monthly: Subscription refills + check-ins</li>
      </ol>
      <div className="mt-6">
        <button className="bg-pink-500 text-white px-4 py-2 rounded">Request Follow-up</button>
      </div>
    </div>
  );
}
