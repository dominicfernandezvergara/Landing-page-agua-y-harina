import React from "react";
import "./logo.css";
import { useHistory } from "react-router-dom";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function Logo() {
  const history = useHistory();
  const onClickButtonDrawerList = () => {
    history.push("/home");
  };
  return (
    <button
      type="button"
      className="containerLogo"
      onClick={() => onClickButtonDrawerList()}
    >
      <img
        className="logo-image-logo-small"
        src="https://aguayharinavalencia.com/wp-content/uploads/2019/10/logo-agua-y-harina-web.png"
        alt="logo"
        width="80"
        height="80"
      />
    </button>
  );
}

export default Logo;
