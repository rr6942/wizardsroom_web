import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RoadmapPage from "./pages/RoadmapPage";
import AboutPage from "./pages/AboutPage";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhatWeDo from "./components/WhatWeDo";
import Dice from "./components/Dice";
import IRLUtility from "./components/IRLUtility";
import MagicSoon from "./components/MagicSoon";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <WhatWeDo />
      <Dice />
      <IRLUtility />
      <MagicSoon />
      <Footer />
    </Router>
  );
};

export default AppRouter;
