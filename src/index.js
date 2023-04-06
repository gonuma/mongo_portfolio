import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";

import Header from "./Header";
import Home from "./Home";
import Music from "./Music";
import Notes from "./Notes";
import Hobby from "./Hobby";
import Article from "./pages/Article";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/notes" element={<Notes />} />
        {/* Append article title or ID to /article endpoint */}
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
