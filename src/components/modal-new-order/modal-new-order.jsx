import React, { useState } from "react";
import styles from "./modalNewOrder.module.css";
import { addNewProductShopCar } from "../../redux/shopping-cart-store";
import { useDispatch } from "react-redux";

function ModalNewOrder({ data, close }) {
  console.log("data", data);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const totalAmount = quantity * data.price;

  const onClickAddProductShopCar = () => {
    const newProduct = {
      id: data.id,
      name: data.title,
      data: "",
      quantity: quantity,
      image: data.image,
      totalAmount: totalAmount,
      price: data.price,
      type: data.type,
    };
    console.log("newProduct", newProduct);
    dispatch(addNewProductShopCar(newProduct));
    close();
  };

  const handleChange = (e) => {
    setQuantity({ value: e.target.value });
  };

  return (
    <div className={styles.containerModalNewOrder}>
      <div className={styles.newOrderProductTitle}>{data.title}</div>
      <img className={styles.newOrderProductImage} src={data.image} alt="" />
      <div className={styles.newOrderProductText}>
        Agrega la cantidad que deseas ordenar
      </div>
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
      <button
        className={styles.addProductButton}
        onClick={() => onClickAddProductShopCar()}
      >
        AGREGAR AL PEDIDO ${totalAmount}
      </button>
    </div>
  );
}

export default ModalNewOrder;
