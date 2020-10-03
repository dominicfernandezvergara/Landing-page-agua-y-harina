import React, { Fragment } from "react";
import "./footer.css";

function Footer() {
  return (
    <Fragment>
      <div className="footer-responsive-small">
        <p className="data-footer">Teléfono : +56222225473</p>
        <p className="data-footer">E-mail : info@aguayharina</p>
      </div>
      <div className="footer-responsive-large">
        <p className="data-footer phone">Teléfono : +56222225473</p>
        <p className="data-footer email">E-mail : info@aguayharina</p>
      </div>
    </Fragment>
  );
}

export default Footer;
