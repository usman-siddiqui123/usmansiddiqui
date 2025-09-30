import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";   // 👈 Important: ensure this line exists
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
