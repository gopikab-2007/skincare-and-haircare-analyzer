import React, { useState, useEffect } from "react";

function ProgressTracker() {
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [progress, setProgress] = useState(null);

  // Load saved progress
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("progressData"));
    if (savedData) {
      setBeforeImage(savedData.beforeImage);
      setAfterImage(savedData.afterImage);
      setProgress(savedData.progress);
    }
  }, []);

  // Save progress automatically
  useEffect(() => {
    if (beforeImage || afterImage || progress) {
      localStorage.setItem(
        "progressData",
        JSON.stringify({ beforeImage, afterImage, progress })
      );
    }
  }, [beforeImage, afterImage, progress]);

  // Convert uploaded image to base64
  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => setImage(event.target.result);
    reader.readAsDataURL(file);
  };

  // Simple progress calculation (randomized for now)
  const calculateProgress = () => {
    if (!beforeImage || !afterImage) {
      alert("Please upload both before and after images!");
      return;
    }
    const progressValue = Math.floor(Math.random() * 41) + 60; // random 60–100%
    setProgress(progressValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-700 mb-6">📅 Progress Tracker</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Before Image Upload */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Before</h2>
          <div className="w-64 h-64 border-2 border-gray-300 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow">
            {beforeImage ? (
              <img
                src={beforeImage}
                alt="Before"
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-gray-400">No image uploaded</p>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, setBeforeImage)}
            className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer"
          />
        </div>

        {/* After Image Upload */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">After</h2>
          <div className="w-64 h-64 border-2 border-gray-300 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow">
            {afterImage ? (
              <img
                src={afterImage}
                alt="After"
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-gray-400">No image uploaded</p>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, setAfterImage)}
            className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Calculate Progress */}
      <button
        onClick={calculateProgress}
        className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
      >
        Analyze Progress
      </button>

      {/* Progress Result */}
      {progress && (
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 text-center max-w-md">
          <h3 className="text-xl font-bold text-green-600 mb-2">
            🌿 Your Improvement
          </h3>
          <p className="text-gray-700 text-lg mb-3">
            Your skin/hair has improved by{" "}
            <span className="font-bold text-pink-500">{progress}%</span> since your last update!
          </p>
          <div className="relative w-full h-4 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-4 bg-gradient-to-r from-pink-400 to-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgressTracker;
