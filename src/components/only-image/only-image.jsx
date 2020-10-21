import React from "react";
import PropTypes from "prop-types";

import styles from "./only-image.module.css";

function OnlyImage({ image }) {
  return (
    <div className={styles.containerImage}>
      <img className={styles.image} src={image} alt="name" />
    </div>
  );
}

OnlyImage.propTypes = {
  image: PropTypes.string.isRequired,
};
export default OnlyImage;
