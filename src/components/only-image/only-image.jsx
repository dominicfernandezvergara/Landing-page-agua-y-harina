import React from "react";
import styles from "./only-image.module.css";
import PropTypes from "prop-types";

function OnlyImage({ image }) {
  return <img className={styles.image} src={image} alt="" />;
}

OnlyImage.propType = {
  image: PropTypes.string.isRequired,
};
export default OnlyImage;
