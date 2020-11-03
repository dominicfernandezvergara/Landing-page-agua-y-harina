import React, { Fragment } from "react";

import styles from "./footer.module.css";
import SocialNetworks from "../social-networks/social-networks";

function Footer() {
  //   <div hidden>
  //   Iconos diseñados por
  //   <a
  //     href="https://www.flaticon.es/autores/those-icons"
  //     title="Those Icons"
  //   >
  //     Those Icons
  //   </a>
  //   from
  //   <a href="https://www.flaticon.es/" title="Flaticon">
  //     www.flaticon.es
  //   </a>
  // </div>
  return (
    <Fragment>
      <div className={styles.containerFooter}>
        <div className={styles.containerContactData}>
          <p className={styles.titleFooter}>Contacta con nosotros</p>
          <a href="tel:5551234567" className={styles.dataFooter}>
            Teléfono : +56222225473
          </a>
          <a href="mailto: abc@example.com" className={styles.dataFooter}>
            E-mail : info@aguayharina
          </a>
        </div>
        <SocialNetworks />
      </div>
    </Fragment>
  );
}

export default Footer;
