import React from "react";

import styles from "./about.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

import BoxAboutData from "../../components/box-about-data/box-about-data";
import image1 from "../../images/images-slider/foto-pampitas.jpeg";

function About() {
  UseScrollToTop();

  return (
    <div className={styles.containerAbout}>
      <h3 className={styles.title}>Agua & Harina Bakery</h3>
      <div className={styles.containerTeam}>
        <img
          alt="imageHomeMisionSection"
          className={styles.image}
          src={image1}
        />
        <div className={styles.containerText}>
          <h3 className={styles.name}>Horneamos pensando en tu bienestar</h3>
          <p className={styles.text}>
            En agua y harina ofrecemos Pan pitas artesanales y de variedades de
            las cuales solo trabajamos harinas integrales o multigranos.
          </p>
          <p className={styles.text}>
            Seleccionamos los ingredientes más naturales posibles, orgánicos y
            con nuestro proceso artesanal creamos nuestras pan pita único e
            inconfundible.
          </p>
        </div>
      </div>
      <div className={styles.containerBoxes}>
        <BoxAboutData />
      </div>
    </div>
  );
}

export default About;
