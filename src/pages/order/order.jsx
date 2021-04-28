import React from "react";

import styles from "./order.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

import OrderForm from "../../components/order-form";

function Order() {
  UseScrollToTop();

  return (
    <div className={styles.formOrderResposiveSmall}>
      <OrderForm />
    </div>
  );
}

export default Order;
