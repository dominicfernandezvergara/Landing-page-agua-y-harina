import React from "react";

import styles from "./about.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

import BoxAboutData from "../../components/box-about-data/box-about-data";
import Team from "../../components/team";
import HomeEmpathyMessage from "../../components/home-empathy-message/home-empathy-message";

const imageSmall = require("../../images/team/Eli&Raul.jpeg");
const imageLarge = require("../../images/team/Eli&Raul.jpeg");

const textEmpathyMessage = "TODO LO HACEMOS CON AMOR";

function About() {
  UseScrollToTop();

  return (
    <div className={styles.containerAbout}>
      <h3 className={styles.title}>Nuestro Equipo</h3>
      <Team />
      <HomeEmpathyMessage
        imageSmall={imageSmall}
        imageLarge={imageLarge}
        text={textEmpathyMessage}
      />
      <BoxAboutData />
    </div>
  );
}

export default About;
