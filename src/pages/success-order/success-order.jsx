import React from "react";
import { useSelector } from "react-redux";

import styles from "./successOrder.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

import OrderSummary from "../../components/order-summary/order-summary";

function SuccessOrder() {
  UseScrollToTop();

  const userData = useSelector((state) => state.shoppingCart.user);
  const commentaryData = useSelector((state) => state.shoppingCart.commentary);

  return (
    <div className={styles.containerSuccessOrder}>
      <div className={styles.successOrder}>
        <h3 className={styles.title}> Pedido realizado con exito!</h3>
        <div className={styles.containerOrderData}>
          <p className={styles.subtitle}>Datos Personales:</p>
          <div className={styles.containerUserData}>
            <p className={styles.text}>
              Nombre: {userData.name} {userData.lastName}
            </p>
            <p className={styles.text}>Email: {userData.email} </p>
            <p className={styles.text}>Telefono: {userData.telephone} </p>
            <p className={styles.text}>Direccion: {userData.address} </p>
            <p className={styles.text}>Fecha de entrega: {userData.date}</p>
          </div>
          <div className={styles.containerProductsData}>
            <OrderSummary />
          </div>
          {commentaryData ? (
            <div>
              <p className={styles.subtitle}>Comentarios:</p>
              <div className={styles.containerCommentary}>
                <p>{commentaryData}</p>
              </div>
            </div>
          ) : null}
          <p className={styles.text}>Nº de Orden : 12345</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessOrder;
