import React, { Fragment, useState } from "react";
import cn from "classnames";
import { useHistory } from "react-router-dom";

import styles from "./header.module.css";
import Logo from "../logo/logo";
import Drawer from "./drawer";
import ShoppingCartDrawer from "../shopping-cart-drawer";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

export const dataButtonsList = [
  {
    name: "INICIO",
    path: "/home",
    active: true,
    id: 1,
  },
  {
    name: "SOMOS",
    path: "/about",
    active: false,
    id: 2,
  },
  {
    name: "PRODUCTOS",
    path: "/products",
    active: false,
    id: 3,
  },
  {
    name: "CONTACTO",
    path: "/contacto",
    active: false,
    id: 4,
  },
  // {
  //   name: "MI PEDIDO",
  //   path: "/mi-pedido",
  //   active: false,
  //   id: 5,
  // },
];

function Header() {
  const history = useHistory();
  const [buttonHeaderData, setButtonHeaderData] = useState(dataButtonsList);
  const onClickHeaderButton = (itemSelected) => {
    const newHeaderData = buttonHeaderData.map((item) => ({
      ...item,
      active: item.id === itemSelected.id,
    }));

    setButtonHeaderData(newHeaderData);
    history.push(itemSelected.path);
  };

  return (
    <Fragment>
      <header className={styles.headerResponsiveSmall}>
        <div className={styles.containerLogo}>
          <Logo />
        </div>
        <div className={styles.containerButton}>
          <ShoppingCartDrawer />
          <Drawer />
        </div>
      </header>

      <header className={styles.headerResponsiveLarge}>
        <div className={styles.containerLogo}>
          <Logo />
        </div>
        <div className={styles.containerHeaderButton}>
          {buttonHeaderData.map((item) => {
            return (
              <button
                type="button"
                className={cn(
                  styles.headerButton,
                  item.active === true ? styles.active : null
                )}
                key={item.id}
                onClick={() => onClickHeaderButton(item)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <ShoppingCartDrawer />
      </header>
    </Fragment>
  );
}

export default Header;
