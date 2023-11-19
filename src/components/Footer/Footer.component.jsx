import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Wizard's Room. All rights reserved.
      </div>
      <div className="footer-social">
        <a
          href="https://twitter.com/wizardsroom"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="twitter-icon" />
        </a>

        <a
          href="https://discord.com/invite/C4ycxDSnGd"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord className="discord-icon" />
        </a>
        <a href="https://t.me/wizardsroom" target="_blank" rel="noreferrer">
          <FaTelegramPlane className="telegram-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
