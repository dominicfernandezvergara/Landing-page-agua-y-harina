import React, { useState } from "react";
import useSWR from "swr";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Fade, Slide } from "react-awesome-reveal";

import styles from "./Products.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import Modal from "../../components/modal/modal";
import ModalNewOrder from "../../components/modal/modal-new-order";
import SkeletonProducts from "../../components/skeleton-products";
import ErrorLoadingData from "../../components/error-loading-data";

// API SWR: https://swr.vercel.app/

const fetcher = (url) => fetch(url).then((res) => res.json());

function Products() {
  UseScrollToTop();

  const [modalState, setModalState] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  const { data, error } = useSWR(
    "https://breads-api.herokuapp.com/api/v1/breads",
    // "https://warm-citadel-13428.herokuapp.com/api/v1/breads",
    fetcher
  );

  if (error) {
    return <ErrorLoadingData />;
    // return <div>failed to load</div>;
    // return <SkeletonProducts />;
  }

  if (!data) return <SkeletonProducts />;

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
      <Fade>
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
            <Fab className={styles.iconImageProductButton} aria-label="add">
              <AddIcon />
            </Fab>
          </button>
        </li>
      </Fade>
    );
  });

  return (
    <div className={styles.containerProducts}>
      <Slide
        triggerOnce
        direction="down"
        style={{ zIndex: 2 }}
        childStyle={{ zIndex: 2 }}
      >
        <p className={styles.productTitle}>PRODUCTOS</p>
      </Slide>
      <ul className={styles.containerProductsList}>{productsList}</ul>
      <Modal
        open={modalState}
        close={() => setModalState(false)}
        footer={false}
        header={false}
      >
        <ModalNewOrder data={currentItem} close={() => setModalState(false)} />
      </Modal>
    </div>
  );
}

export default Products;
