import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import styles from "./home-products-section.module.css";
import image1 from "../../images/home/ImagePackPanPita.jpeg";

function HomeProductsSection() {
  const history = useHistory();
  const onClickButtonProductsHome = () => {
    history.push("/products");
  };

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
        <Button variant="contained" onClick={onClickButtonProductsHome}>
          Escoge tus pan pitas aquí
        </Button>
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
