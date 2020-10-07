import React from "react";
import { useSelector } from "react-redux";

import styles from "./successOrder.module.css";

function SuccessOrder() {
  const dataOrders = useSelector(
    (state) => state.shoppingCart.shoppingCartProducts
  );
  return (
    <div className={styles.successOrderResponsiveSmall}>
      <p className={styles.title}> Pedido realizado con exito!</p>
    </div>
  );
}

export default SuccessOrder;
