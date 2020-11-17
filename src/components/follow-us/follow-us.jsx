import React from "react";
import { Link } from "react-router-dom";

import styles from "./followUs.module.css";
import emptyStateImage from "../../images/empty-state/undraw_bug_fixing_oc7a.png";

function FollowUs() {
  const openNewWindow = (event) => {
    event.preventDefault();
    window.open("https://www.w3schools.com");
  };
  console.log("emptyStateImage", emptyStateImage);
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
        <button type="button" className={styles.buttonImage}>
          <img
            className={styles.image}
            src="https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg"
            alt=""
          />
        </button>
        <button type="button" className={styles.buttonImage}>
          <img
            className={styles.image}
            src="https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg"
            alt=""
          />
        </button>
        <button type="button" className={styles.buttonImage}>
          <img
            className={styles.image}
            src="https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg"
            alt=""
          />
        </button>
        <button type="button" className={styles.buttonImage}>
          <img className={styles.image} src={emptyStateImage} alt="" />
        </button>
      </div>
    </div>
  );
}

export default FollowUs;
