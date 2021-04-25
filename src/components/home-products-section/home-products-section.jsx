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
        <h3 className={styles.title}>Productos</h3>
        <p className={styles.text}>
          Conoce toda nuestra variedad de Pan Pitas: integrales, linaza,
          aceituna, espinaca, curcuma y oregano con ajo.
        </p>
        <Button variant="contained" onClick={onClickButtonProductsHome}>
          Nuestros Productos aqui
        </Button>
      </div>
      <img alt="imageHomeMisionSection" className={styles.image} src={image1} />
    </div>
  );
}

export default HomeProductsSection;
