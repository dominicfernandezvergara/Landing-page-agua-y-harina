import React from "react";

import styles from "./home-products-section.module.css";
import ProductsButton from "../products-button/products-button";
import image1 from "../../images/home/ImagePackPanPita.jpeg";

function HomeProductsSection() {
  return (
    <div className={styles.containerProductsHome}>
      <div className={styles.containerText}>
        <h4 className={styles.titleSmall}>Nuestros Productos</h4>

        <h3 className={styles.title}> Nuestros Productos</h3>
        <p className={styles.text}>
          Utilizamos sólo ingredientes naturales de la mejor calidad.
        </p>
        <p className={styles.text}>
          Todas nuestras Pan Pitas son elaborados a mano de manera artesanal.
        </p>

        <p className={styles.text}>
          Conoce toda nuestra variedad de Pan Pitas: integrales, linaza,
          aceituna, espinaca, curcuma y oregano con ajo.
        </p>
        <ProductsButton text=" Escoge tus pan pitas aquí" />
      </div>
      <img
        alt="imageHomeProductsSection"
        className={styles.image}
        src={image1}
      />
    </div>
  );
}

export default HomeProductsSection;
