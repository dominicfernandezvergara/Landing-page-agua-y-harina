import React, { useState } from "react";
import useSWR from "swr";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Fade } from "react-awesome-reveal";
import cn from "classnames";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./products-list.module.css";

import UseScrollToTop from "../../hooks/use-scroll-to-top";
import Modal from "../modal/modal";
import ModalNewOrder from "../modal/modal-new-order";
import SkeletonProducts from "../skeleton-products";
import ErrorLoadingData from "../error-loading-data";
import imageBread from "../../images/home/home-image-1-removebg.png";
// ejemplo de como usar id para enviar informacion de una pagina a otra usando UseHistory
// const onClickProductButton = (item) => {
//   history.push(`/product/${item.id}`, {
//     item,
//   });
// };
// API SWR: https://swr.vercel.app/

// const fetcher = (url) => fetch(url).then((res) => res.json());

const products = [
  {
    id: 1,
    title: "Pan pita artesanal integral",
    description:
      "agua, harina integral, levadura natural, aceite de oliva, sal de mar y aceitunas de selección.",
    price: "2500",
    gramos: "60g c/u",
    image: imageBread,
  },
  {
    id: 2,
    title: "Pan pita aceitunas integral",
    description:
      "agua, harina integral, levadura natural, aceite de oliva, sal de mar, ajo y orégano de huerta orgánica.",
    price: "3000",
    gramos: "60g c/u",
    image: imageBread,
  },
  {
    id: 3,
    title: "Pan pita ajo orégano integral",
    description:
      "agua, harina integral, levadura natural, aceite de oliva, sal de mar, espinaca de la huerta orgánica.",
    price: "3000",
    gramos: "60g c/u",
    image: imageBread,
  },
  {
    id: 4,
    title: "Pan pita espinaca integral",
    description:
      "agua, harina integral, levadura natural, aceite de oliva, sal de mar, linaza de selección.",
    price: "3000",
    gramos: "60g c/u",
    image: imageBread,
  },
  {
    id: 5,
    title: "Pan pita linaza integral",
    description:
      "agua, harina integral, levadura natural, aceite de oliva, sal de mar, cúrcuma o curry de selección.",
    price: "3000",
    gramos: "60g c/u",
    image: imageBread,
  },
  {
    id: 6,
    title: "Pan pita cúrcuma o curry integral",
    description:
      "agua, harina integral, levadura natural, aceite de oliva, sal de mar",
    price: "3000",
    gramos: "60g c/u",
    image: imageBread,
  },
];
function ProductsList() {
  UseScrollToTop();

  const [modalState, setModalState] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [itemPosition, setItemPosition] = useState(null);

  // const { data, error } = useSWR(
  // "https://breads-api.herokuapp.com/api/v1/breads",
  // "https://warm-citadel-13428.herokuapp.com/api/v1/breads",
  //   fetcher
  // );
  // if (error) {
  //   return <ErrorLoadingData />;
  // }
  // if (!data) return <SkeletonProducts />;
  const onClickOpenInfo = (i) => {
    setItemPosition(i);
    console.log(`onClickOpenInfo`, itemPosition);
    console.log(`index`, i);
  };
  const handleClickAway = () => {
    setItemPosition(null);
    console.log(`handleClickAway`, itemPosition);
  };
  const onClickCloseInfo = () => {
    setItemPosition(null);
  };

  const onClickOpenModalNewOrder = (item) => {
    // const productData = { item };
    setModalState(true);
    setCurrentItem(item);
  };
  // const productsList = data.data.map((item) => {
  const productsList = products.map((item, i) => {
    return (
      <Fade key={item.id}>
        <li className={styles.containerProduct}>
          <img className={styles.productImage} src={item.image} alt="" />
          <div className={styles.containerProductData}>
            <div className={cn(styles.wrappBoxs, styles.wrappBoxsAbove)}>
              <p className={styles.boxRight}>${item.price} x 10und</p>
              <p className={styles.boxLeft}>{item.gramos}</p>
            </div>
            <div className={styles.wrappBoxs}>
              <p className={cn(styles.boxRight, styles.boxName)}>
                {item.title}
              </p>
              <button
                type="button"
                className={cn(styles.addButton, styles.boxLeft)}
                onClick={() => onClickOpenModalNewOrder(item)}
              >
                <Fab className={styles.iconImageProductButton} aria-label="add">
                  <AddIcon />
                </Fab>
              </button>
            </div>
          </div>
          <div className={styles.root}>
            <button
              type="button"
              className={styles.infoButton}
              onClick={() => onClickOpenInfo(i)}
            >
              i
            </button>
            {itemPosition === i ? (
              <div className={styles.containerInfoProduct}>
                <p className={styles.textIngredients}>
                  <strong>Ingredientes:</strong> {item.description}
                </p>
                <div className={styles.containerCloseIcon}>
                  <button
                    type="button"
                    className={styles.closeIcon}
                    onClick={onClickCloseInfo}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </li>
      </Fade>
    );
  });

  return (
    <div className={styles.containerProducts}>
      <div className={styles.shadow}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <ul className={styles.containerProductsList}>{productsList}</ul>
        </ClickAwayListener>

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
    </div>
  );
}

export default ProductsList;
