import React from "react";
import "./dice.styles.css";
import diceImage from "./pepedice.jpeg"; // Replace with the actual path to your dice image

const DiceSection = () => {
  // Mock circulating supply data, replace with actual data
  const circulatingSupply = 100000000;

  return (
    <section className="dice-section">
      <div className="header-section">
        <h1>MEET $DICE</h1>
        <p>{circulatingSupply} Circulating Supply</p>
      </div>
      <div className="content-section">
        <img src={diceImage} alt="DICE Token" className="dice-image" />
        <div className="text-content">
          <p>
            Prepare for the ultimate gaming experience with $DICE, our
            soon-to-be-released native crypto casino token. As the heartbeat of
            our casino ecosystem, $DICE will unlock unprecedented features,
            exclusive bonuses, and VIP privileges, redefining the way you play
            and win.
          </p>
          <p>Claim 1,000,000 $DICE here.</p>
        </div>
      </div>
    </section>
  );
};

export default DiceSection;
