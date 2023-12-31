import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ExamProvider } from "./context/ExamContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ExamProvider>
        <App />
      </ExamProvider>
    </Router>
  </React.StrictMode>
);
