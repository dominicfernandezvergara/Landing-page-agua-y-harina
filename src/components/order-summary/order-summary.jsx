import React from "react";
import { useSelector } from "react-redux";

import styles from "./orderSummary.module.css";

import formatNumber from "../../utils/numbers";

function OrderSummary() {
  const dataOrders = useSelector(
    (state) => state.shoppingCart.shoppingCartProducts
  );
  const paymentDetail = useSelector((state) => state.shoppingCart.amount);
  const summaryOrderProductsList = dataOrders.map((item) => {
    return (
      <div key={item.id} className={styles.productOrder}>
        <div className={styles.productImageInfoContainer}>
          <img className={styles.productImage} src={item.image} alt="" />
        </div>
        <div className={styles.productNameInfoContainer}>
          <p className={styles.productName}>{item.name}</p>
        </div>
        <div className={styles.productInfoContainer}>
          <p className={styles.productPrice}>${formatNumber(item.price)}</p>
        </div>
        <div className={styles.productInfoContainer}>
          <p className={styles.productQuantity}>x{item.quantity} </p>
        </div>
        <div className={styles.productTotalAmountInfoContainer}>
          <p className={styles.productTotalAmount}>
            ${formatNumber(item.totalAmount)}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.orderSummaryResponsiveSmall}>
      <div className={styles.containerProducts}>
        <div className={styles.subtitle}>Productos</div>
        <div className={styles.wrapperOrdenSummaryProductList}>
          {summaryOrderProductsList}
        </div>
      </div>
      <div className={styles.subtitle}>Pago</div>
      <div className={styles.containerPaymentDetail}>
        <p className={styles.text}>Total a pagar:</p>
        <div className={styles.totalAmount}>${formatNumber(paymentDetail)}</div>
      </div>
    </div>
  );
}

export default OrderSummary;
