import React from "react";
import useSWR from "swr";
import Skeleton from "@material-ui/lab/Skeleton";

import styles from "./admin.module.css";

function Admin() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const skeletonTab = (
    <div className={styles.loadingProduct}>
      <Skeleton variant="rect" width={150} height={300} />
    </div>
  );
  const { data, error } = useSWR(
    "https://breads-api.herokuapp.com/api/v1/breads",
    // "https://warm-citadel-13428.herokuapp.com/api/v1/breads",
    fetcher
  );
  if (error) return <div>failed to load</div>;

  if (!data)
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingTitle}>
          <Skeleton variant="rect" width={500} height={50} />
        </div>
        <div className={styles.loadingContainerProducts}>
          {skeletonTab}
          {skeletonTab}
          {skeletonTab}
          {skeletonTab}
          {skeletonTab}
          {skeletonTab}
        </div>
      </div>
    );

  const onClickEditProduct = (item) => {
    console.log("item", item);
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
          className={styles.editButton}
          onClick={() => onClickEditProduct(item)}
        >
          Edit
        </button>
        <button
          type="button"
          className={styles.enableButton}
          onClick={() => onClickEditProduct(item)}
        >
          Enable
        </button>
      </li>
    );
  });

  return (
    <div className={styles.containerAdmin}>
      <div>hola Administradora, ¿Que deseas hacer hoy?</div>
      <div className={styles.containerAddProduct}>
        <button type="button" className={styles.buttonAddProduct}>
          Add a new product
        </button>
      </div>
      <div className={styles.containerAllProduct}>{productsList}</div>

      <div className={styles.containerDisableProduct}>
        <div className={styles.titleDisableProduct}>
          Disable or Enable a product
        </div>
      </div>
      <div className={styles.containerUpDateProduct}>
        <div className={styles.titleAddProduct}>Modify a product</div>
      </div>
    </div>
  );
}

export default Admin;
