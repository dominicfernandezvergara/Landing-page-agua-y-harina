import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

import styles from "./home-mision-section.module.css";
import image1 from "../../images/home/home-image-1.jpeg";
import ProductsButton from "../products-button/products-button";

function HomeMisionSection() {
  return (
    <div className={styles.containerHomeMisionSection}>
      <img alt="imageHomeMisionSection" className={styles.image} src={image1} />
      <div className={styles.containerText}>
        <h4 className={styles.titleSmall}>
          Horneamos pensando en tu bienestar
        </h4>
        <h3 className={styles.title}>Horneamos pensando en tu bienestar</h3>
        <p className={styles.text}>
          En agua y harina ofrecemos Pan pitas artesanales y de variedades de
          las cuales solo trabajamos harinas integrales o multigranos.
        </p>
        <p className={styles.text}>
          Seleccionamos los ingredientes más naturales posibles, orgánicos y con
          nuestro proceso artesanal creamos nuestras pan pita único e
          inconfundible.
        </p>
        <ProductsButton text="Pruébalos hoy" />
      </div>
    </div>
  );
}

export default HomeMisionSection;
