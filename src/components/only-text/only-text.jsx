import React from "react";
import PropTypes from "prop-types";
import { Zoom } from "react-awesome-reveal";

import styles from "./only-text.module.css";

function OnlyText({ text }) {
  return (
    <div className={styles.containerOnlyText}>
      <Zoom triggerOnce>
        <h1 className={styles.text}>{text}</h1>
      </Zoom>
    </div>
  );
}

OnlyText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default OnlyText;
