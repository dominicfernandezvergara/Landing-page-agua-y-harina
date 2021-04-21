import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import styles from "./home-products-section.module.css";

function ProductsHome() {
  const history = useHistory();
  const onClickButtonProductsHome = () => {
    history.push("/products");
  };

  return (
    <div className={styles.containerProductsHome}>
      <h1 className={styles.textProductsHome}>
        Conoce la variedad de nuestras pampitas
      </h1>
      <Button
        variant="contained"
        className={styles.buttonProductsHome}
        onClick={onClickButtonProductsHome}
      >
        PRODUCTOS
      </Button>
    </div>
  );
}

export default ProductsHome;
