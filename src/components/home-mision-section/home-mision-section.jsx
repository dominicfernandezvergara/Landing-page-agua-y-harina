import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

import styles from "./home-mision-section.module.css";
import image1 from "../../images/home/home-image-1.jpeg";

function HomeMisionSection() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/products");
  };
  return (
    <div className={styles.containerHomeMisionSection}>
      <div className={styles.containerImage}>
        <img
          alt="imageHomeMisionSection"
          className={styles.image}
          src={image1}
        />
      </div>
      <div className={styles.containerText}>
        <h3 className={styles.title}>Horneamos pensando en tu bienestar</h3>

        <p className={styles.text}>
          Todos los productos que utilizamos para elaborar nuestras pampitas son
          100% naturales
        </p>
        <Button variant="contained" onClick={handleClick}>
          Pruebalos hoy
        </Button>
      </div>
    </div>
  );
}

export default HomeMisionSection;
