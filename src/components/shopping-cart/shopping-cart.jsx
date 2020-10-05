import React from "react";
import PropTypes from "prop-types";

import styles from "./shoppingCart.module.css";

const NOOP = () => {};

function ShoppingCart({ open, children, close = NOOP }) {
  if (!open) {
    return null;
  }
  function handleClose() {
    close();
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-hidden="true"
      className={styles.shadowShoppingCart}
      onClick={handleClose}
    >
      <div
        role="button"
        tabIndex={0}
        aria-hidden="true"
        className={styles.containerShoppingCart}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeShoppingCartButton}
          onClick={close}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default ShoppingCart;
