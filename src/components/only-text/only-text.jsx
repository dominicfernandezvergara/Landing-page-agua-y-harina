import React from "react";
import styles from "./only-text.module.css";
import PropTypes from "prop-types";

function OnlyText({ text }) {
  return (
    <div className={styles.containerOnlyText}>
      <h1 className={styles.text}>{text}</h1>
      <img
        className={styles.starsImage}
        src="https://www.factorynine.cl/images/stars-home.png"
        alt=""
      />
    </div>
  );
}

OnlyText.propType = {
  image: PropTypes.string.isRequired,
};
export default OnlyText;
