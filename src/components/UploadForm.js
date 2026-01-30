import React, { useState } from "react";

const UploadForm = ({ onSubmit }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onSubmit(file); // Pass the uploaded file to parent
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-pink-500 text-center">Upload Your Photo</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 w-full"
      />
      <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition">
        Analyze
      </button>
    </form>
  );
};

export default UploadForm;
