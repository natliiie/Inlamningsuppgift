import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Education from "./Routes/Education";
import Family from "./Routes/Family";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="family" element={<Family />} />
      <Route path="education" element={<Education />} />
    </Routes>
  </BrowserRouter>
);
