// TokensAdopted.js

import React from "react";
import "./TokensAdopted.styles.css"; // Import the stylesheet

const TokensAdopted = () => {
  return (
    <div className="tokens-adopted-container">
      <h1 className="tokens-adopted-heading">TOKENS ADOPTED</h1>
      <div className="tokens-adopted-content">
        <p className="tokens-adopted-left">$SKIB</p>
        <p className="tokens-adopted-right">
          Ticker $SKIB was abandoned by dev on November 2023 and same day wizard
          took over the community and launched own Telegram and Twitter socials
          for $SKIB.
        </p>
      </div>
    </div>
  );
};

export default TokensAdopted;
