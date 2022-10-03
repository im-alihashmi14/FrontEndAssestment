import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Screen/Home";
import Event from "./Screen/Event";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
