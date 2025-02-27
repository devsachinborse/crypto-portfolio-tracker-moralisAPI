import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import CryptoPortfolio from "./component/CryptoPortfolio.jsx";
import LandingPage from "./component/LandingPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<CryptoPortfolio />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
