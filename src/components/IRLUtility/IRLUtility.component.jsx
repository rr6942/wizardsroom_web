// IRLUtility.js
import React from "react";
import "./IRLUtility.styles.css";
import utilityImage from "./isometric2.jpeg"; // Replace with the actual path to your utility image

const IRLUtility = () => {
  return (
    <section className="irl-utility-section">
      <div className="image-container">
        <img
          src={utilityImage}
          alt="IRL Utility Image"
          className="utility-image"
        />
      </div>
      <div className="text-container">
        <h2>IRL UTILITY</h2>
        <p>
          Unlock a world of unparalleled experiences with our NFT pass. Holding
          this exclusive key grants you VIP access to high-profile events and a
          treasure trove of extraordinary perks. Elevate your journey with us,
          where every moment is tailored to celebrate your unique status within
          our community
        </p>
        {/* Add more text content or components as needed */}
      </div>
    </section>
  );
};

export default IRLUtility;
