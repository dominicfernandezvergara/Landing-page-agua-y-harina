import React, { useState } from "react";
import useSWR from "swr";

import styles from "./Products.module.css";
import Modal from "../../components/modal/modal";
import ModalNewOrder from "../../components/modal/modal-new-order";

// API SWR: https://swr.vercel.app/

const fetcher = (url) => fetch(url).then((res) => res.json());

function Products() {
  const [modalState, setModalState] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  const { data, error } = useSWR(
    "https://breads-api.herokuapp.com/api/v1/breads",
    // "https://warm-citadel-13428.herokuapp.com/api/v1/breads",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // ejemplo de como usar id para enviar informacion de una pagina a otra usando UseHistory
  // const onClickProductButton = (item) => {
  //   history.push(`/product/${item.id}`, {
  //     item,
  //   });
  // };
  // <AddCircleIcon style={{ fontSize: 30 }} />

  const onClickOpenModalNewOrder = (item) => {
    // const productData = { item };
    setModalState(true);
    setCurrentItem(item);
  };

  const productsList = data.data.map((item) => {
    return (
      <li key={item.id} className={styles.containerProduct}>
        <img className={styles.productImage} src={item.image} alt="" />
        <p className={styles.productName}>{item.title}</p>
        <p className={styles.productDescription}>{item.description}</p>
        <p className={styles.productPrice}>${item.price}</p>

        <button
          type="button"
          className={styles.productButton}
          onClick={() => onClickOpenModalNewOrder(item)}
        >
          <img
            className={styles.iconImageProductButton}
            src="https://www.factorynine.cl/images/order-icon.svg"
            alt=""
          />
        </button>
      </li>
    );
  });
  return (
    <>
      <div className={styles.containerProductsResponsiveSmall}>
        <p className={styles.productTitle}>PRODUCTOS</p>
        <ul className={styles.containerProductsList}>{productsList}</ul>
        <Modal
          open={modalState}
          close={() => setModalState(false)}
          footer={false}
          header={false}
        >
          <ModalNewOrder
            data={currentItem}
            close={() => setModalState(false)}
          />
        </Modal>
      </div>
    </>
  );
}

export default Products;
