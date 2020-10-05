import React from "react";

import styles from "./order.module.css";

import OrderForm from "../../components/order-form";

function Order() {
  return (
    <div className={styles.formOrderResposiveSmall}>
      <OrderForm />
    </div>
  );
}

export default Order;
