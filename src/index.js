import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";

import Header from "./Header";
import Home from "./Home";
import Music from "./Music";
import Tech from "./Tech";
import Cycling from "./Cycling";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/cycling" element={<Cycling />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
