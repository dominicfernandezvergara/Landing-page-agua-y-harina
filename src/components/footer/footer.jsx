import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import cn from "classnames";
import { useHistory } from "react-router-dom";

import styles from "./footer.module.css";
import SocialMedia from "../social-media";

function Footer() {
  const history = useHistory();

  const onClickButtonPeopleServices = () => {
    history.push({
      pathname: "/home",
    });
  };
  const onClickButtonProfesionalServices = () => {
    history.push({
      pathname: "/about",
    });
  };
  const onClickButtonCompanieServices = () => {
    history.push({
      pathname: "/products",
    });
  };
  const onClickButtonTerapieServices = () => {
    history.push({
      pathname: "/contacto",
    });
  };
  return (
    <div className={styles.containerFooter}>
      <div className={styles.footerBody}>
        <div className={cn(styles.data, styles.containerServices)}>
          <h3 className={styles.title}>Menu</h3>
          <div className={styles.containerText}>
            <div className={styles.icon}>
              <ArrowForwardIosIcon />
            </div>
            <button
              type="button"
              onClick={onClickButtonPeopleServices}
              className={styles.button}
            >
              Inicio
            </button>
          </div>

          <div className={styles.containerText}>
            <div className={styles.icon}>
              <ArrowForwardIosIcon />
            </div>
            <button
              type="button"
              onClick={onClickButtonProfesionalServices}
              className={styles.button}
            >
              Somos
            </button>
          </div>
          <div className={styles.containerText}>
            <div className={styles.icon}>
              <ArrowForwardIosIcon />
            </div>
            <button
              type="button"
              onClick={onClickButtonCompanieServices}
              className={styles.button}
            >
              Productos
            </button>
          </div>
          <div className={styles.containerText}>
            <div className={styles.icon}>
              <ArrowForwardIosIcon />
            </div>
            <button
              type="button"
              onClick={onClickButtonTerapieServices}
              className={styles.button}
            >
              Contacto
            </button>
          </div>
        </div>
        <div className={styles.data}>
          <h3 className={styles.title}>Contacto</h3>
          <div className={styles.containerText}>
            <div className={styles.iconLink}>
              <PhoneIcon />
            </div>
            <a href="tel:420776212480" className={styles.text}>
              987862687
            </a>
          </div>
          <div className={styles.containerText}>
            <div className={styles.iconLink}>
              <EmailIcon />
            </div>
            <a
              href="mailto: asesorias.profesionales.holistic@gmail.com"
              className={styles.text}
            >
              aguayharina@gmail.com
            </a>
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
export default Footer;
