import React from "react";

import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";

import styles from "./how-it-work.module.css";
import ProductsButton from "../products-button/products-button";

function HowItWork() {
  return (
    <div className={styles.containerHowItWork}>
      <h3 className={styles.title}>¿Cómo funciona?</h3>
      <p className={styles.subtitle}>
        3 sencillos pasos para conseguir tus Pan Pitas
      </p>
      <div className={styles.containerIconsSection}>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <ShoppingCartIcon />
          </div>
          <div className={styles.textIcon}>
            <h4 className={styles.step}>Paso Uno</h4>
            <p className={styles.descriptionStep}>
              Selecciona y agrega tus Pan Pitas al carrito de compras.
            </p>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <EventAvailableIcon />
          </div>
          <div className={styles.textIcon}>
            <h4 className={styles.step}>Paso Dos</h4>
            <p className={styles.descriptionStep}>
              Ingresa tus datos y envianos tu pedido.
            </p>
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <DirectionsBikeIcon />
          </div>
          <div className={styles.textIcon}>
            <h4 className={styles.step}>Paso tres</h4>
            <p className={styles.descriptionStep}>
              Recibe tus Pan Pitas frescas en la puerta de tu hogar.
            </p>
          </div>
        </div>
      </div>
      <ProductsButton text="Hacer un pedido" />
    </div>
  );
}

export default HowItWork;
