import React, { Fragment } from "react";
import "./footer.css";

function Footer() {
  return (
    <Fragment>
      <div className="footer-responsive-small">
        <a href="tel:5551234567">Teléfono : +56222225473</a>
        <a href="mailto: abc@example.com" className="data-footer email">
          E-mail : info@aguayharina
        </a>
      </div>
      <div hidden>
        Iconos diseñados por{" "}
        <a
          href="https://www.flaticon.es/autores/those-icons"
          title="Those Icons"
        >
          Those Icons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.es/" title="Flaticon">
          www.flaticon.es
        </a>
      </div>
    </Fragment>
  );
}

export default Footer;
