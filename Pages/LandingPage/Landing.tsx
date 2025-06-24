import React from "react";
import styles from "./Landing.module.css"; //CSS module for styles
import Header from "../../Components/Header/Header"; // Importing Header component
import Footer from "../../Components/Footer/Footer"; // Importing Footer component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Landing: React.FC = () => {
  return (
    <div className="">
      <Header />
      <Footer />
    </div>
  );
};

export default Landing;
