// HeroSection.jsx
import React, { useEffect } from "react";
import "./Hero.styles.css";
import WizardPepeImage from "./wizard_pepe_nft_card.jpeg";

const HeroSection = () => {
  useEffect(() => {
    document.querySelector(".hero-content").classList.add("animate");
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Welcome to Wizard's Room</h1>
          <p>A place built by degens for degens.</p>
          <button className="cta-button">Join Us!</button>
        </div>
        <img
          src={WizardPepeImage}
          alt="WIZARDS ROOM VIP NFT Card"
          className="nft-card"
        />
      </div>
    </section>
  );
};

export default HeroSection;
