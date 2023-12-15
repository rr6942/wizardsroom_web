// WhatWeDo.js
import CryptoExperienceImage from "./wizard_experience_isometric.jpeg"; // Replace with your actual image paths
import StrongCultureImage from "./merch1.jpeg"; // Replace with your actual image paths
import EntertainmentImage from "./club1.jpeg"; // Replace with your actual image paths
import React from "react";
import "./WhatWeDo.styles.css";

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="content-container">
        <h2>What We Do</h2>
        <p>
          We are passionate about delivering a high-quality crypto experience.
          Our core focus revolves around cultivating a strong culture and
          infusing entertainment into every aspect of what we do. These three
          pillars guide every product we release.
        </p>

        {/* Section 1: Crypto Experience */}
        <div className="section">
          <div className="image">
            <img src={CryptoExperienceImage} alt="Crypto Experience" />
          </div>
          <div className="text">
            <h2>Crypto Experience</h2>
            <p>
              Elevate your crypto journey with a seamless and secure crypto
              experience. Our innovative solutions provide a user-friendly and
              efficient way to engage with the crypto world.
            </p>
          </div>
        </div>

        {/* Section 2: Strong Culture */}
        <div className="section reverse">
          <div className="text">
            <h2>Strong Culture</h2>
            <p>
              Cultivate a sense of belonging in a community driven by shared
              values. Our culture fosters collaboration, diversity, and a
              passion for pushing the boundaries of what's possible.
            </p>
          </div>
          <div className="image">
            <img src={StrongCultureImage} alt="Strong Culture" />
          </div>
        </div>

        {/* Section 3: Entertainment */}
        <div className="section">
          <div className="image">
            <img src={EntertainmentImage} alt="Entertainment" />
          </div>
          <div className="text">
            <h2>Entertainment</h2>
            <p>
              Immerse yourself in entertainment that goes beyond expectations.
              Whether it's products, services, or experiences, we inject
              creativity and excitement into everything we offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
