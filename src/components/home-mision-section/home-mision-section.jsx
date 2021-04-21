import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

import styles from "./home-mision-section.module.css";

function HomeMisionSection() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/products");
  };
  return (
    <div className={styles.containerHomeMisionSection}>
      <h1 className={styles.title}>Horneamos pensando en tu bienestar</h1>
      <p className={styles.text}>
        Todos los productos que utilizamos para elaborar nuestras pampitas son
        100% naturales
      </p>
      <Button variant="contained" onClick={handleClick}>
        Pruebalos hoy
      </Button>
    </div>
  );
}

export default HomeMisionSection;
