import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import styles from "./error-payment.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

function ErrorPayment() {
  UseScrollToTop();
  const history = useHistory();
  const pathHome = "/products";
  const pathContact = "/contacto";

  const handleOnClick = (path) => {
    history.push(path);
  };

  return (
    <div className={styles.containerErrorPayment}>
      <div className={styles.containerIcon}>
        <ErrorOutlineIcon />
      </div>
      <h3 className={styles.title}>Lo sentimos, algo salio mal.</h3>
      <p className={styles.text}>
        Lamentablemente ocurrio un problema con el proceso de tu pago, por favor
        vuelve a intentar hacer la compra.
      </p>
      <div className={styles.containerButtons}>
        <Button variant="contained" onClick={() => handleOnClick(pathHome)}>
          Volver a intentar
        </Button>
        <Button variant="contained" onClick={() => handleOnClick(pathContact)}>
          Contactanos
        </Button>
      </div>
    </div>
  );
}

export default ErrorPayment;
