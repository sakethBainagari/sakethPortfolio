import React from "react";
import ReactDOM from "react-dom/client";
import { init } from '@emailjs/browser';

import App from "./App";
import "./index.css";

// Initialize EmailJS with your public key directly
init("zqOB-nAaUsYdlbjNl");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
