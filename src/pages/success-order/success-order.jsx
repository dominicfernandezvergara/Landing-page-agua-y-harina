import React from "react";
import { useSelector } from "react-redux";

import styles from "./successOrder.module.css";
import OrderSummary from "../../components/order-summary/order-summary";

function SuccessOrder() {
  const userData = useSelector((state) => state.shoppingCart.user);
  const commentaryData = useSelector((state) => state.shoppingCart.commentary);

  return (
    <div className={styles.containerSuccessOrder}>
      <div className={styles.successOrder}>
        <p className={styles.title}> Pedido realizado con exito!</p>
        <div className={styles.containerOrderData}>
          <p className={styles.subtitle}>Datos Personales:</p>
          <div className={styles.containerUserData}>
            <p>
              Nombre: {userData.name} {userData.lastName}
            </p>
            <p>Email: {userData.email} </p>
            <p>Telefono: {userData.telephone} </p>
            <p>Direccion: {userData.address} </p>
            <p>Fecha de entrega: {userData.date}</p>
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
          <p>Nº de Orden : 12345</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessOrder;
