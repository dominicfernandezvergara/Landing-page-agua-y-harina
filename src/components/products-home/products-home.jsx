import React from "react";
import styles from "./productsHome.module.css";
import { useHistory } from "react-router-dom";

function ProductsHome() {
  const history = useHistory();
  const onClickButtonProductsHome = () => {
    history.push("/products");
  };
  return (
    <div className={styles.containerProductsHome}>
      <h1 className={styles.textProductsHome}>
        Conoce nuestros productos haciendo click aquí
      </h1>
      <button
        className={styles.buttonProductsHome}
        onClick={onClickButtonProductsHome}
      >
        PRODUCTOS
      </button>
    </div>
  );
}

export default ProductsHome;
