import React from "react";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import LibraryAddCheckOutlinedIcon from "@material-ui/icons/LibraryAddCheckOutlined";

import styles from "./list-icon-section.module.css";

function ListIconSection() {
  const dataListIconSection = [
    {
      title: "Calidad",
      text: "Utilizamos sólo ingredientes naturales de la mejor calidad",
      icon: <LoyaltyOutlinedIcon />,
    },
    {
      title: "Artesanal",
      text:
        "Todos nuestros productos son elaborados a mano de manera artesanal",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "Saludable",
      text:
        "Buscamos crear un producto que sea amigable entre lo nutritivo y que cuide tu alimentación.",
      icon: <LibraryAddCheckOutlinedIcon />,
    },
  ];
  return (
    <div className={styles.containerList}>
      {dataListIconSection.map((item) => {
        return (
          <div className={styles.wrapp} key={item.title}>
            <div className={styles.containerIcon}>{item.icon}</div>
            <h4 className={styles.title}>{item.title}</h4>
            <hr className={styles.line} />
            <p className={styles.textIcon}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ListIconSection;
