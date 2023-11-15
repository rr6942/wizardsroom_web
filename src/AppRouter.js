import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
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
