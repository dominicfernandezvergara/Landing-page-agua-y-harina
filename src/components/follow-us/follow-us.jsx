import React from "react";
import { Link } from "react-router-dom";

import styles from "./followUs.module.css";

function FollowUs() {
  const openNewWindow = (event) => {
    event.preventDefault();
    window.open("https://www.w3schools.com");
  };
  return (
    <div className={styles.containerFollowUs}>
      <div className={styles.containerLink}>
        <h1 className={styles.text}>Follow Us!</h1>
        <Link
          className={styles.link}
          to="https://www.instagram.com/factorynine/"
          onClick={openNewWindow}
        >
          @InstagramName
        </Link>
      </div>
      <div className={styles.containerImages}>
        <img
          className={styles.image}
          src="https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default FollowUs;
