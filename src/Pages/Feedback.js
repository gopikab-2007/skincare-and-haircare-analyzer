import React, { useState, useEffect } from "react";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Load previous feedback if it exists
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setRating(savedFeedback.rating);
      setFeedback(savedFeedback.feedback);
      setSubmitted(true);
    }
  }, []);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please give a rating before submitting!");
      return;
    }

    const feedbackData = { rating, feedback };
    localStorage.setItem("feedback", JSON.stringify(feedbackData));
    setSubmitted(true);
  };

  // Reset feedback
  const resetFeedback = () => {
    localStorage.removeItem("feedback");
    setRating(0);
    setFeedback("");
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-white text-gray-800 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">💬 Feedback</h1>
        <p className="text-gray-600 mb-6">
          Tell us how accurate or helpful our AI analysis was!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* ⭐ Star Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setRating(currentRating)}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(rating)}
                    className="focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={
                        currentRating <= (hover || rating)
                          ? "#facc15"
                          : "none"
                      }
                      stroke="#facc15"
                      strokeWidth="2"
                      className="w-10 h-10 mx-1 transition-transform transform hover:scale-110"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.5l1.77 3.6 3.98.58-2.88 2.8.68 3.95-3.55-1.87-3.55 1.87.68-3.95-2.88-2.8 3.98-.58 1.77-3.6z"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* 💭 Comment Box */}
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              className="w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
              rows="4"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              Submit Feedback
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              🌟 Thank You!
            </h2>
            <p className="text-gray-700 mb-4">
              You rated us {rating} out of 5 stars.
            </p>
            {feedback && (
              <p className="italic text-gray-600 mb-6">“{feedback}”</p>
            )}
            <button
              onClick={resetFeedback}
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
            >
              Submit New Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feedback;
