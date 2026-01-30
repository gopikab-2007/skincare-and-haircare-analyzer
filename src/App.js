import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Pages/Home";
import SkinQuestionnaire from "./Pages/SkinQuestionnaire";
import HairQuestionnaire from "./Pages/HairQuestionnaire";
import CameraAnalyze from "./Pages/CameraAnalyze";
import ProgressTracker from "./Pages/ProgressTracker";
import Feedback from "./Pages/Feedback";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ResultSkin from "./Pages/ResultSkin";
import ResultHair from "./Pages/ResultHair";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skinquestionnaire"
          element={
            <ProtectedRoute>
              <SkinQuestionnaire />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hairquestionnaire"
          element={
            <ProtectedRoute>
              <HairQuestionnaire />
            </ProtectedRoute>
          }
        />
        <Route
          path="/camera"
          element={
            <ProtectedRoute>
              <CameraAnalyze />
            </ProtectedRoute>
          }
        />
        <Route path="/result-skin" element={<ResultSkin />} />
<Route path="/result-hair" element={<ResultHair />} />
<Route path="/Feedback" element={<Feedback />} />
        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <ProgressTracker />
            </ProtectedRoute>
          }
        />
      </Routes>
      

    </Router>
  );
}