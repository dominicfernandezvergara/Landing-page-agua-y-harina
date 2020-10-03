import React, { Fragment } from "react";
import styles from "./product.module.css";
import { useParams, useLocation } from "react-router-dom";

function Product() {
  let { id } = useParams();
  let { state } = useLocation();
  console.log("item", state.item);
  console.log("id", id);

  return (
    <Fragment>
      <div className={styles.containerProductResponsiveSmall}>
        <img
          className={styles.productImage}
          src={state.item.image}
          // height="150px"
          // width="300px"
          alt=""
        ></img>
        <h1 className={styles.productTitle}>{state.item.title}</h1>
        <div className={styles.productInfo}>
          <p className={styles.productSubTitle}>DESCRIPCIÓN</p>
          <p className={styles.productText}> {state.item.description}</p>
          <p className={styles.productSubTitle}>INGREDIENTES:</p>
          <p className={styles.productText}>
            harina integral, sal, sesamo, agua y mucho mucho amor
            {state.item.ingredient}
          </p>
          <p className={styles.productSubTitle}>PRECIO:</p>
          <p className={styles.productText}> ${state.item.price}</p>
        </div>
      </div>
      <div className={styles.containerProductResponsiveMedium}>
        <h1 className={styles.productTitle}>{state.item.title}</h1>
        <img
          className={styles.productImage}
          src={state.item.image}
          height="150px"
          width="500px"
          alt=""
        />
        <div className={styles.productInfo}>
          <p className={styles.productSubTitle}>DESCRIPCIÓN</p>
          <p className={styles.productText}> {state.item.description}</p>
          <p className={styles.productSubTitle}>INGREDIENTES:</p>
          <p className={styles.productText}>
            harina integral, sal, sesamo, agua y mucho mucho amor
            {state.item.ingredient}
          </p>
          <p className={styles.productSubTitle}>PRECIO:</p>
          <p className={styles.productText}> ${state.item.price}</p>
        </div>
      </div>
      <div className={styles.containerProductResponsiveLarge}>
        <div className={styles.containerProductLarge}>
          <img
            className={styles.productImage}
            src={state.item.image}
            height="150px"
            width="500px"
            alt=""
          />
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{state.item.title}</h1>
            <p className={styles.productSubTitle}>DESCRIPCIÓN</p>
            <p className={styles.productText}> {state.item.description}</p>
            <p className={styles.productSubTitle}>INGREDIENTES:</p>
            <p className={styles.productText}>
              harina integral, sal, sesamo, agua y mucho mucho amor
              {state.item.ingredient}
            </p>
            <p className={styles.productSubTitle}>PRECIO:</p>
            <p className={styles.productText}> ${state.item.price}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Product;
