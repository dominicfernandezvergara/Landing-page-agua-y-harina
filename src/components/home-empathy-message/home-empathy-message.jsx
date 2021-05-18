import React, { Fragment } from "react";
import { Parallax } from "react-parallax";
import PropTypes from "prop-types";

import styles from "./home-empathy-message.module.css";

function HomeEmpathyMessage({ imageSmall, imageLarge, text }) {
  console.log(`object`, imageSmall);
  return (
    <Fragment>
      <Parallax
        bgImage={imageSmall}
        bgImageAlt="empathyImage"
        strength={-100}
        className={styles.parallaxSmall}
      >
        <div className={styles.containerHomeEmpathyMessage}>
          <h3 className={styles.text}>{text}</h3>
        </div>
      </Parallax>
      <Parallax
        bgImage={imageLarge}
        bgImageAlt="empathyImage"
        strength={-100}
        className={styles.parallaxLarge}
      >
        <div className={styles.containerHomeEmpathyMessage}>
          <h3 className={styles.text}>{text}</h3>
        </div>
      </Parallax>
    </Fragment>
  );
}
HomeEmpathyMessage.propTypes = {
  imageSmall: PropTypes.string.isRequired,
  imageLarge: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default HomeEmpathyMessage;
