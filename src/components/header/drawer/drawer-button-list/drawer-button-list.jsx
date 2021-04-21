import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import styles from "./drawer-button-list.module.css";
import Logo from "../../../logo/logo";
import { dataButtonsList } from "../../header";

// Icon API = https://google.github.io/material-design-icons/

const DrawerButtonList = ({ toggleDrawer }) => {
  const history = useHistory();

  const onClickButtonDrawerList = (item) => {
    toggleDrawer();
    const pathItem = item.path;
    history.push(pathItem);
  };
  //   <div className={styles.headerDrawerList}>
  //   <div className={styles.containerButtonCloseDrawer}>
  //     <button
  //       type="button"
  //       className={styles.buttonCloseDrawer}
  //       onClick={() => toggleDrawer(false)}
  //     >
  //       <i className="material-icons md-36">clear</i>
  //     </button>
  //   </div>
  //   <div className={styles.containerLogoDrawerList}>
  //     <Logo width={50} height={50} />
  //   </div>
  // </div>
  return (
    <div className={styles.containerDrawerList}>
      <div className={styles.containerHeaderDrawerList}>
        <div className={styles.containerLogoDrawerList}>
          <Logo width={50} height={50} />
        </div>
        <h3 className={styles.titleHeader}>Agua y Harina</h3>
        <button
          type="button"
          className={styles.buttonCloseDrawer}
          onClick={() => toggleDrawer(false)}
        >
          <i className="material-icons md-36">clear</i>
        </button>
      </div>

      <ul className={styles.drawerList}>
        {dataButtonsList.map((item, index) => {
          console.log("item.icon", item.icon);
          return (
            <li key={index.id} className={cn(styles.buttonDrawerList)}>
              <button
                type="button"
                className={styles.buttonDrawerList}
                onClick={() => onClickButtonDrawerList(item)}
              >
                <div className={styles.icon}> {item.icon}</div>
                <div className={styles.name}> {item.name}</div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DrawerButtonList.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
export default DrawerButtonList;
