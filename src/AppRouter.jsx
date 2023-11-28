import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhatWeDo from "./components/WhatWeDo";
import Dice from "./components/Dice";
import IRLUtility from "./components/IRLUtility";
import MagicSoon from "./components/MagicSoon";
import TokensAdopted from "./components/TokensAdopted";

import "./AppRouter.styles.css";

const AppRouter = () => {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <Hero />
        <WhatWeDo />
        <Dice />
        <IRLUtility />
        <TokensAdopted />
        <MagicSoon />
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
