import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./contentShoppingCart.module.css";
import formatNumber from "../../../utils/numbers.js";
import {
  updateShoppingCartSubtractQuantityActionDispacher,
  updateShoppingCartAddQuantityActionDispacher,
  updateShoppingRemoveOrderActionDispacher,
} from "../../../redux/shopping-cart-store";

function ContentShoppingCart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const dataOrders = useSelector(
    (state) => state.shoppingCart.shoppingCartProducts
  );
  const cartTotalAmount = useSelector((state) => state.shoppingCart.amount);

  const updateShoppingCartSubtractQuantity = (quantity, id) => {
    if (!(quantity === 0)) {
      dispatch(updateShoppingCartSubtractQuantityActionDispacher(id));
    }
  };

  const upDateShoppingCartAddQuantity = (id) => {
    dispatch(updateShoppingCartAddQuantityActionDispacher(id));
  };

  const removeOrderButton = (id) => {
    dispatch(updateShoppingRemoveOrderActionDispacher(id));
  };

  const submitOrder = () => {
    history.push("/order");
  };
  const ordersList = dataOrders.map((item) => {
    const preffix = item.quantity / 10 < 1 ? "0" : "";

    return (
      <div className={styles.containerOrder} key={item.id}>
        <div className={styles.containerQuantityChange}>
          <button
            type="button"
            className={styles.buttonChange}
            onClick={() =>
              updateShoppingCartSubtractQuantity(item.quantity, item.id)
            }
          >
            -
          </button>
          <form className={styles.quantityFormInput}>
            <div className={styles.preffix}>{preffix}</div>
            <input
              type="number"
              className={styles.quantityInput}
              placeholder="0"
              onChange={() => {}}
              value={item.quantity}
              min="0"
            />
          </form>
          <button
            type="button"
            className={styles.buttonChange}
            onClick={() => upDateShoppingCartAddQuantity(item.id)}
          >
            +
          </button>
        </div>
        <div className={styles.containerDataOrder}>
          <img className={styles.orderImage} src={item.image} alt="" />
          <div className={styles.wraperData}>
            <p className={styles.orderName}>{item.name}</p>
            <p className={styles.orderPrice}>${formatNumber(item.price)}</p>
          </div>
        </div>
        <div className={styles.removeOrder}>
          <button
            type="button"
            className={styles.buttonRemoveOrder}
            onClick={() => removeOrderButton(item.id)}
          >
            <DeleteIcon style={{ fontSize: 30 }} />
          </button>
        </div>
      </div>
    );
  });
  // const emptyState = (
  //   <div className={styles.emptyState}>
  //     No has agregado productos a tu orden
  //   </div>
  // );
  return (
    <div className={styles.responsiveSmall}>
      <div className={styles.containerHeaderOrders}>
        <p className={styles.title}>Tu Orden</p>
        <p className={styles.subTitle}>Sub total a pagar:</p>
        <p className={styles.amount}>TOTAL: ${formatNumber(cartTotalAmount)}</p>
      </div>
      {dataOrders.length === 0 ? (
        <div className={styles.emptyState}>
          No has agregado productos a tu orden
        </div>
      ) : (
        <div className={styles.containerOrdersData}>
          <div className={styles.containerAllOrders}>{ordersList}</div>

          <button
            type="button"
            className={styles.buttonOrders}
            onClick={() => submitOrder()}
          >
            PROCEDER A ORDENAR
          </button>
        </div>
      )}
    </div>
  );
}

export default ContentShoppingCart;
