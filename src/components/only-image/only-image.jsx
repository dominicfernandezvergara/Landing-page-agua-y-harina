import React from "react";
import PropTypes from "prop-types";

import styles from "./only-image.module.css";

function OnlyImage({ image }) {
  return <img className={styles.image} src={image} alt="" />;
}

OnlyImage.propTypes = {
  image: PropTypes.string.isRequired,
};
export default OnlyImage;
