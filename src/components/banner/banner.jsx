import React from "react";

import styles from "./banner.module.css";
import ProductsButton from "../products-button/products-button";
import image from "../../images/banner/510x240 01 Artboard 1.png";

function Banner() {
  return (
    <div className={styles.containerBanner}>
      <div className={styles.containerText}>
        <img className={styles.image} src={image} alt="" />
        <h4 className={styles.text}>Pan Pitas 100% integrales</h4>
        <ProductsButton text="Hacer un pedido" />
      </div>
    </div>
  );
}

export default Banner;
