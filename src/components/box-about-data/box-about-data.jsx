import React from "react";
import PropTypes from "prop-types";

import styles from "./boxAboutData.module.css";

function BoxAboutData({ title, icon, text }) {
  return (
    <div className={styles.boxAbout}>
      <div className={styles.imageboxAbout}> {icon}</div>
      <h3 className={styles.titleBoxAbout}>{title}</h3>
      <p className={styles.textBoxAbout}>{text}</p>
    </div>
  );
}

BoxAboutData.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default BoxAboutData;
