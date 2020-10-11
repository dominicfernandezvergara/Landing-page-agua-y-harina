import React, { Fragment, useState } from "react";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import styles from "./header.module.css";
import Logo from "../logo/logo";
import Drawer from "./drawer";
import ShoppingCart from "../shopping-cart";
import ContentShoppingCart from "../shopping-cart/content-shopping-cart";

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
    path: "/somos",
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
  const [shoppingCartState, setShoppingCartState] = useState(false);
  const onClickHeaderButton = (itemSelected) => {
    const newHeaderData = buttonHeaderData.map((item) => ({
      ...item,
      active: item.id === itemSelected.id,
    }));

    setButtonHeaderData(newHeaderData);
    history.push(itemSelected.path);
  };
  const onClickOpenShoppingCart = () => {
    setShoppingCartState(true);
  };

  return (
    <Fragment>
      <header className={styles.headerResponsiveSmall}>
        <div className={styles.containerLogo}>
          <Logo />
        </div>
        <div className={styles.containerButton}>
          <button
            type="button"
            className={styles.shoppingCartButton}
            onClick={onClickOpenShoppingCart}
          >
            <ShoppingCartIcon style={{ fontSize: 30 }} />
          </button>

          <Drawer />
        </div>
        <ShoppingCart
          open={shoppingCartState}
          close={() => setShoppingCartState(false)}
          footer={false}
          header={false}
        >
          <ContentShoppingCart close={() => setShoppingCartState(false)} />
        </ShoppingCart>
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
        <button
          type="button"
          className={styles.shoppingCartButton}
          onClick={onClickOpenShoppingCart}
        >
          <ShoppingCartIcon style={{ fontSize: 30 }} />
        </button>

        <ShoppingCart
          open={shoppingCartState}
          close={() => setShoppingCartState(false)}
          footer={false}
          header={false}
        >
          <ContentShoppingCart close={() => setShoppingCartState(false)} />
        </ShoppingCart>
      </header>
    </Fragment>
  );
}

export default Header;
