import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import styles from "./successful-payment.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

function SuccessfullPayment() {
  UseScrollToTop();
  const history = useHistory();
  const pathHome = "/home";
  const pathContact = "/contacto";

  const handleOnClick = (path) => {
    history.push(path);
  };

  return (
    <div className={styles.containerSuccessfullPayment}>
      <div className={styles.shadowIcon}>
        <div className={styles.containerIcon}>
          <CheckIcon />
        </div>
      </div>
      <h3 className={styles.title}>¡Listo!</h3>
      <p className={styles.text}>
        Tu compra fue procesada con éxito. Te enviaremos el detalle de tu compra
        a tu correo electrónico. Si no lo recibes, recuerda revisar tu bandeja
        de correos no deseado o spam.
      </p>
      <p className={styles.subtitle}>¡Muchas gracias por tu compra!</p>
      <div className={styles.containerButtons}>
        <Button variant="contained" onClick={() => handleOnClick(pathHome)}>
          Volver al inicio
        </Button>
        <Button variant="contained" onClick={() => handleOnClick(pathContact)}>
          Contactanos
        </Button>
      </div>
    </div>
  );
}

export default SuccessfullPayment;
