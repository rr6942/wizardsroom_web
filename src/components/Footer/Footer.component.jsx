import React from "react";
import { FaTwitter } from "react-icons/fa";
import { ReactComponent as CustomIcon } from "./etherscan-logo-circle.svg";
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
        <a href="" target="_blank" rel="noreferrer">
          <CustomIcon className="custom-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
