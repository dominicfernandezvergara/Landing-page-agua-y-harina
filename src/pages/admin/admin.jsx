import React, { useState } from "react";
import useSWR from "swr";
import cn from "classnames";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

import styles from "./admin.module.css";
import Modal from "../../components/modal";
import ModalNewProduct from "../../components/modal/modal-new-product";
import SkeletonAdmin from "../../components/skeleton-admin";
import ErrorLoadingData from "../../components/error-loading-data";

function Admin() {
  const [modalState, setModalState] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const [active, setActive] = useState(true);
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://breads-api.herokuapp.com/api/v1/breads",
    // "https://warm-citadel-13428.herokuapp.com/api/v1/breads",
    fetcher
  );
  // if (error) return <SkeletonAdmin />;

  if (error) return <ErrorLoadingData />;

  /* loading Skeleton */
  if (!data) return <SkeletonAdmin />;

  const AddNewProduct = () => {
    setTitleModal("Crear un nuevo producto");
    setCurrentItem({});
    setModalState(true);
  };

  const onClickEditProduct = (item) => {
    setTitleModal("Editar Producto");
    setModalState(true);
    setCurrentItem(item);
    console.log("item", item);
  };

  const onClickActive = (item) => {
    setActive(!active);
    console.log("active", active);
    console.log("item", item);
  };

  async function postOrPutData(url = "", postData = {}, httpMethod) {
    const response = await fetch(url, {
      method: httpMethod, // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function handleFormSubmit(itemUpdated, httpMethod, idProduct) {
    console.log("idProduct", idProduct);

    const itemData = {
      title: itemUpdated.title,
      description: itemUpdated.description,
      type: itemUpdated.type,
      price: itemUpdated.price,
      // active: true,
      image:
        "https://www.recipetineats.com/wp-content/uploads/2020/05/No-Yeast-Sandwhich-Bread_9-1.jpg",
    };
    const postUrl = "https://breads-api.herokuapp.com/api/v1/breads";
    const putUrl = `https://breads-api.herokuapp.com/api/v1/breads/${idProduct}`;
    const url = httpMethod === "PUT" ? putUrl : postUrl;
    console.log("url despues", url);
    postOrPutData(url, itemData, httpMethod).then((res) => {
      console.log("rest", res); // JSON data parsed by `data.json()` call
    });
    console.log("itemUpdated", itemUpdated);
    console.log("httpMethod", httpMethod);
  }
  const productsList = data.data.map((item) => {
    return (
      <li key={item.id} className={styles.containerProduct}>
        <img className={styles.productImage} src={item.image} alt="" />
        <div className={styles.containerProductData}>
          <p className={styles.productName}>{item.title}</p>
          <p className={styles.productDescription}>{item.description}</p>
          <p className={styles.productPrice}>${item.price}</p>
        </div>
        <div className={styles.containerButton}>
          <Fab
            color="secondary"
            aria-label="edit"
            className={styles.productButton}
            onClick={() => onClickEditProduct(item)}
          >
            <EditIcon />
          </Fab>
          <Fab
            variant="extended"
            className={cn(
              active === true
                ? styles.productButtonActive
                : styles.productButtonDesactive
            )}
            onClick={() => onClickActive(item)}
          >
            {active === true ? "Activo" : "Desactivado"}
          </Fab>
        </div>
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className={styles.containerAdmin}>
        <h1 className={styles.adminTitle}>hola Administradora</h1>
        <div className={styles.containerButtonAddProduct}>
          <Fab
            variant="extended"
            className={styles.buttonAddProduct}
            onClick={() => AddNewProduct()}
          >
            <AddIcon /> Agregar producto
          </Fab>
        </div>
        <div className={styles.containerProductsList}>{productsList}</div>
      </div>
      <Modal
        open={modalState}
        close={() => setModalState(false)}
        footer={false}
        header={false}
      >
        <ModalNewProduct
          editData={currentItem}
          title={titleModal}
          close={() => setModalState(false)}
          onFormSubmit={handleFormSubmit}
        />
      </Modal>
    </React.Fragment>
  );
}

export default Admin;
