import React from "react";

import styles from "./why-choose-us.module.css";
import ListIconSection from "./list-icon-section/list-icon-section";

function WhyChooseUs() {
  return (
    <div className={styles.containerThirdSection}>
      <h3 className={styles.title}>¿Por qué elegirnos?</h3>
      <ListIconSection />
    </div>
  );
}

export default WhyChooseUs;
