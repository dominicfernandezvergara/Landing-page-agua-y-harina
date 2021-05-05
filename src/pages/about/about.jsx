import React from "react";

import styles from "./about.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

import BoxAboutData from "../../components/box-about-data/box-about-data";
import Team from "../../components/team";

function About() {
  UseScrollToTop();

  return (
    <div className={styles.containerAbout}>
      <h3 className={styles.title}>Nuestro Equipo</h3>
      <Team />
      <BoxAboutData />
    </div>
  );
}

export default About;
