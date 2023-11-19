import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Wizard's Room. All rights reserved.
      </div>
      <div className="footer-social">
        <a
          href="https://wizards-room.gitbook.io/wizards-room/"
          target="_blank"
          rel="noreferrer"
        >
          <SiGitbook className="gitbook-icon" />
        </a>

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
