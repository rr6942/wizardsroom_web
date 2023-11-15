import React, { useState, useEffect } from "react";
import "./MagicSoon.styles.css";

const MagicSoon = () => {
  const phrases = ["$M A G I C    S O O N !", "B E     R E A D Y..."];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // Delay for half a second before changing the text
    }, 2000); // Change every 2000 milliseconds (2 seconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Run only once on component mount

  return (
    <section className="magic-soon-section">
      <div className={`magic-soon-text ${isVisible ? "appear" : ""}`}>
        {phrases[currentPhraseIndex]}
      </div>
    </section>
  );
};

export default MagicSoon;
