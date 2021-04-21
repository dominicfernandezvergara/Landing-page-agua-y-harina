import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./banner.module.css";

function Banner() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/products");
  };
  return (
    <div className={styles.containerBanner}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>Agua y Harina</h1>
        <p className={styles.text}>Pampitas 100% integrales</p>
        <Button variant="contained" onClick={handleClick}>
          Conoce nuestros productos
        </Button>
      </div>
    </div>
  );
}

export default Banner;
