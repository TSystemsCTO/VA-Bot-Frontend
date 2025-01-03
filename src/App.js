import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ChatAI from "./components/ChatAI";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat-ai" element={<ChatAI />} />
      </Routes>
    </Router>
  );
};

export default App;
