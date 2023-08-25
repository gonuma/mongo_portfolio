import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
// import "font-awesome/css/font-awesome.min.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faHand, faHandPointer } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Home from "./pages/Home";
import Music from "./components/Music";
import Test from "./pages/Test";
import Study from "./Study";
import Hobby from "./pages/Hobby";
import Article from "./pages/Article";

const root = ReactDOM.createRoot(document.getElementById("root"));
dom.watch();
library.add(faHandPointer);

root.render(
  <React.StrictMode>
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/study" element={<Study />} />
        <Route path="/test" element={<Test />} />
        {/* Append article title or ID to /article endpoint */}
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
