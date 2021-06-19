import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import styles from "./products-button.module.css";

function ProductsButton({ text }) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/products");
  };
  return (
    <div className={styles.containerButton}>
      <Button variant="contained" onClick={handleClick}>
        {text}
      </Button>
    </div>
  );
}
ProductsButton.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ProductsButton;
