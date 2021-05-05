import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";

import styles from "./contentShoppingCart.module.css";
import formatNumber from "../../../utils/numbers.js";
import {
  updateShoppingCartSubtractQuantityActionDispacher,
  updateShoppingCartAddQuantityActionDispacher,
  updateShoppingRemoveOrderActionDispacher,
} from "../../../redux/shopping-cart-store";

function ContentShoppingCart({ close }) {
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
    close();
    history.push("/order");
  };
  // jh
  const ordersList = dataOrders.map((item) => {
    // To add a zero before a number
    const preffix = item.quantity / 10 < 1 ? "0" : "";
    return (
      <div className={styles.containerOrder} key={item.id}>
        <div className={styles.containerQuantityChange}>
          <button
            type="button"
            className={styles.buttonChange}
            onClick={() => upDateShoppingCartAddQuantity(item.id)}
          >
            <AddIcon style={{ fontSize: 30 }} />
          </button>
          <div className={styles.containerProductQuantity}>
            <div className={styles.preffix}>{preffix}</div>
            <div className={styles.productQuantity} min="0">
              {item.quantity}
            </div>
          </div>
          <button
            type="button"
            className={styles.buttonChange}
            onClick={() =>
              updateShoppingCartSubtractQuantity(item.quantity, item.id)
            }
          >
            <RemoveIcon style={{ fontSize: 30 }} />
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

  return (
    <div className={styles.responsiveSmall}>
      <div className={styles.containerHeaderOrders}>
        <button
          type="button"
          className={styles.closeShoppingCartButton}
          onClick={close}
        >
          <ArrowForwardIosIcon />
        </button>
        <p className={styles.title}>Tu Orden</p>
        <p className={styles.subTitle}>Sub total a pagar:</p>
        <p className={styles.amount}>TOTAL: ${formatNumber(cartTotalAmount)}</p>
      </div>
      {dataOrders.length === 0 ? (
        <div className={styles.emptyState}>
          No has agregado productos a tu orden
        </div>
      ) : (
        <Fragment>
          <div className={styles.containerAllOrders}>{ordersList}</div>
          <Button
            type="button"
            className={styles.buttonOrders}
            onClick={() => submitOrder()}
          >
            PROCEDER A ORDENAR
          </Button>
        </Fragment>
      )}
    </div>
  );
}

ContentShoppingCart.propTypes = {
  close: PropTypes.func.isRequired,
};
export default ContentShoppingCart;
