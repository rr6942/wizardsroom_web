// HeroSection.jsx
import React, { useEffect } from "react";
import "./Hero.styles.css";
import WizardPepeImage from "./wizard_pepe_nft_card.jpeg";

const HeroSection = () => {
  useEffect(() => {
    document.querySelector(".hero-content").classList.add("animate");
  }, []);
  const redirectToTelegram = () => {
    // Replace 'YOUR_TELEGRAM_URL' with the actual URL of your Telegram channel
    const telegramUrl = "";
    window.location.href = telegramUrl;
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Welcome to Wizard's Room</h1>
          <p>A place built by degens for degens.</p>
          <button className="cta-button">
            <a
              href="https://t.me/wizardsroom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us!
            </a>
          </button>
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
