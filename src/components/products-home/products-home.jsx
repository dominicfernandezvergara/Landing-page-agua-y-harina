import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import styles from "./productsHome.module.css";

function ProductsHome() {
  const history = useHistory();
  const onClickButtonProductsHome = () => {
    history.push("/products");
  };
  //   <button
  //   type="button"
  //   className={styles.buttonProductsHome}
  //   onClick={onClickButtonProductsHome}
  // >
  //   PRODUCTOS
  // </button>
  return (
    <div className={styles.containerProductsHome}>
      <h1 className={styles.textProductsHome}>
        Conoce nuestros productos haciendo click aquí
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
