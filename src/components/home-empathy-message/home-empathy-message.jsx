import React from "react";
import { Parallax } from "react-parallax";

import styles from "./home-empathy-message.module.css";

const image = require("../../images/home/ImagehomeEmpathyMessage2.jpeg");

function HomeEmpathyMessage() {
  return (
    <Parallax
      bgImage={image}
      bgImageAlt="the dog"
      strength={-100}
      bgClassName="containerParallax"
    >
      <div className={styles.containerHomeEmpathyMessage}>
        <p className={styles.text}>
          Buscamos crear un producto que sea amigable entre lo nutritivo y que
          cuide tu alimentación.
        </p>
      </div>
    </Parallax>
  );
}

export default HomeEmpathyMessage;
