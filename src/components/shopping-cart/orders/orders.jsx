import React, { useState } from "react";
import styles from "./orders.module.css";
import { useSelector } from "react-redux";

function Orders() {
  const dataOrders = useSelector(
    (state) => state.shoppingCart.shoppingCartProducts
  );
  const [quantity, setQuantity] = useState(0);
  const handleChange = (e) => {
    setQuantity({ value: e.target.value });
  };
  const ordersList = dataOrders.map((item, index) => {
    return (
      <div className={styles.containerOrders} key={index}>
        <div className={styles.containerQuantityChange}>
          <button
            className={styles.butttonChange}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
          <form className={styles.quantityFormInput}>
            <input
              className={styles.quantityInput}
              placeholder="0"
              onChange={(e) => handleChange(e)}
              value={quantity}
            />
          </form>
          <button
            className={styles.butttonChange}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <div className={styles.containerDataOrder}>
          <img className={styles.orderImage} src={item.image} alt=""></img>
          <div className={styles.wraperData}>
            <p className={styles.orderName}>{item.name}</p>
            <p className={styles.orderPrice}>${item.price}</p>
          </div>
        </div>
      </div>
    );
  });
  console.log("dataOrders", dataOrders);
  return (
    <div className={styles.responsiveSmall}>
      <div className={styles.containerHeaderOrders}>
        <p className={styles.title}>Tu Orden</p>
        <p className={styles.subTitle}>Sub total a pagar:</p>
        <p className={styles.amount}>$TOTAL</p>
      </div>
      {ordersList}
      <button className={styles.buttonOrders}>PROCEDER A ORDENAR</button>
    </div>
  );
}

export default Orders;
