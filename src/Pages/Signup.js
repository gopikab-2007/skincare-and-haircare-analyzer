import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Account Created! Please Login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-green-100 flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-80 space-y-4 text-center"
      >
        <h2 className="text-3xl font-bold text-green-600 mb-4">Sign Up</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create Password"
          className="w-full p-3 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Sign Up
        </button>

        <p className="text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
