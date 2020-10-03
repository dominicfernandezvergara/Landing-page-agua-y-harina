import React from "react";
import "./logo.css";
import cn from "classnames";

//Github : https://github.com/akiran/react-slick
//Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function Logo() {
  return (
    <div className="containerLogo">
      <img
        className="logo-image-logo-small"
        src="https://aguayharinavalencia.com/wp-content/uploads/2019/10/logo-agua-y-harina-web.png"
        alt="logo"
        width="60"
        height="60"
      />
      <div className={cn("logo-title")}>AGUA Y HARINA</div>
      <div className={cn("logo-subtitle")}>Entre moldes y pan pitas</div>
    </div>
  );
}

export default Logo;
