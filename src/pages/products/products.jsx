import React from "react";

import styles from "./Products.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import ProductsList from "../../components/products-list";

function Products() {
  UseScrollToTop();
  return (
    <div className={styles.containerProducts}>
      <h3 className={styles.title}>Nuestros Productos</h3>
      <ProductsList />
    </div>
  );
}

export default Products;
