import React from "react";
import PropTypes from "prop-types";
import "./logo.css";
import { useHistory } from "react-router-dom";
import logo from "../../images/logo/logo Agua y Harina small.png";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function Logo({ width, height }) {
  const history = useHistory();
  const onClickButtonDrawerList = () => {
    history.push("/home");
  };
  return (
    <button
      type="button"
      className="logoButton"
      onClick={() => onClickButtonDrawerList()}
    >
      <img src={logo} alt="logo" width={width} height={height} />
    </button>
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Logo.defaultProps = {
  width: 50,
  height: 50,
};

export default Logo;
