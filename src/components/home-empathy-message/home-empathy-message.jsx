import React, { Fragment } from "react";
import { Parallax } from "react-parallax";

import styles from "./home-empathy-message.module.css";

const imageSmall = require("../../images/banner/logoConFondo.jpeg");
const imageLarge = require("../../images/logo/logoConFondo.jpeg");

function HomeEmpathyMessage() {
  return (
    <Fragment>
      <Parallax
        bgImage={imageSmall}
        bgImageAlt="empathyImage"
        strength={-100}
        className={styles.parallaxSmall}
      >
        <div className={styles.containerHomeEmpathyMessage}>
          <h3 className={styles.text}>
            Buscamos crear un producto que sea amigable entre lo nutritivo y que
            cuide tu alimentación.
          </h3>
        </div>
      </Parallax>
      <Parallax
        bgImage={imageLarge}
        bgImageAlt="empathyImage"
        strength={-100}
        className={styles.parallaxLarge}
      >
        <div className={styles.containerHomeEmpathyMessage}>
          <h3 className={styles.text}>
            Buscamos crear un producto que sea amigable entre lo nutritivo y que
            cuide tu alimentación.
          </h3>
        </div>
      </Parallax>
    </Fragment>
  );
}

export default HomeEmpathyMessage;
