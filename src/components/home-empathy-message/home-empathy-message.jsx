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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in.
        </p>
      </div>
    </Parallax>
  );
}

export default HomeEmpathyMessage;
