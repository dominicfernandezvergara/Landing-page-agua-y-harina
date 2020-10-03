import React from "react";
import styles from "./modal.module.css";

function Modal({ open, children, close = null, footer = true, header = true }) {
  if (!open) {
    return null;
  }
  function handleClose() {
    close();
  }

  return (
    <div className={styles.shadowModal} onClick={handleClose}>
      <div
        className={styles.containerModal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeModalButton} onClick={close}>
          X
        </button>
        {header && <div className={styles.modalHeader}>Header</div>}
        {children}
        {footer && <div className={styles.modalFooter}>FOOTER</div>}
      </div>
    </div>
  );
}

export default Modal;
