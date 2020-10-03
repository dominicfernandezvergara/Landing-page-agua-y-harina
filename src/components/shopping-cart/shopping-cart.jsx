import React from "react";
import styles from "./shoppingCart.module.css";

function ShoppingCart({ open, children, close = null }) {
  if (!open) {
    return null;
  }
  function handleClose() {
    close();
  }

  return (
    <div className={styles.shadowShoppingCart} onClick={handleClose}>
      <div
        className={styles.containerShoppingCart}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeShoppingCartButton} onClick={close}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default ShoppingCart;
