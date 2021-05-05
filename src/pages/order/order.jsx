import React from "react";

import styles from "./order.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

import OrderForm from "../../components/order-form";

function Order() {
  UseScrollToTop();

  return (
    <div className={styles.containeOrder}>
      <h3 className={styles.title}>Finalizar Pedido</h3>
      <OrderForm />
    </div>
  );
}

export default Order;
