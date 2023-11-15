import "./Hero.styles.css";
import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Add a class to trigger the animation on mount
    document.querySelector(".hero-content").classList.add("animate");
  }, []);
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Welcome to Wizard's Room</h1>
          <p>A place built by degens for degens.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <img
          src={require("./wizard_pepe_nft_card.jpeg")}
          alt="WIZARDS ROOM VIP NFT Card"
          className="nft-card"
        />
      </div>
    </section>
  );
};
export default HeroSection;
