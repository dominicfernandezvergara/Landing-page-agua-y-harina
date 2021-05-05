import React from "react";

import styles from "./boxAboutData.module.css";
import { dataBoxAbout } from "./data";

function BoxAboutData() {
  return (
    <div className={styles.containerBoxAboutData}>
      <h3 className={styles.title}>Sobre Nosotros</h3>
      <div className={styles.containerBoxs}>
        {dataBoxAbout.map((item) => (
          <div className={styles.box} key={item.title}>
            <div className={styles.icon}> {item.icon}</div>
            <h3 className={styles.subTitle}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoxAboutData;
