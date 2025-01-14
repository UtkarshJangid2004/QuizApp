import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter,Routes,  Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} ></Route>
    <Route path="/leaderboard" element={<Leaderboard />}></Route>
  </Routes>
  </BrowserRouter>
);
