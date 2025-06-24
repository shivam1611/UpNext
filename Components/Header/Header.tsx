import React from "react";
import styles from "./Header.module.css"; // Importing CSS module for styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="h-8 bg-[var(--primary)] flex justify-around items-center text-white">
      <div className="left">
        <p className="text-sm flex items-center gap-2">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-[var(--gray-disabled)]"
          />
          <span className="text-[var(--gray-disabled)] ml-2">
            +91 12345 67890
          </span>
        </p>
      </div>
      <div className="center">
        <p className="text-sm text-[var(--accent)]">
          India's Next Generation Jobs Portal
        </p>
      </div>
      <div className="right flex justify-around items-center gap-4 ">
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-[var(--gray-disabled)] hover:text-[var(--accent)]  hover:cursor-pointer transition-colors duration-300"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-[var(--gray-disabled)] hover:text-[var(--accent)] hover:cursor-pointer transition-colors duration-300"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-[var(--gray-disabled)] hover:text-[var(--accent)] hover:cursor-pointer transition-colors duration-300"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-[var(--gray-disabled)] hover:text-[var(--accent)] hover:cursor-pointer transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default Header;
