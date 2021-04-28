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
        <h1 className={styles.title}>Agua & Harina Bakery</h1>
        <h4 className={styles.text}>Pan Pitas 100% integrales</h4>
        <Button variant="contained" onClick={handleClick}>
          Hacer un pedido
        </Button>
      </div>
    </div>
  );
}

export default Banner;
