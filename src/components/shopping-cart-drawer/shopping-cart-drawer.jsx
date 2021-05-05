import React, { useState } from "react";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styles from "./shoppingCartDrawer.module.css";
import ContentShoppingCart from "./content-shopping-cart";

// Drawer API : https://material-ui.com/api/drawer/

export default function ShoppingCartDrawer() {
  const [drawerState, setDrawerState] = useState(false);
  const arrayShoppingCartProducts = useSelector(
    (state) => state.shoppingCart.shoppingCartProducts
  );
  const numberShoppingCard = arrayShoppingCartProducts.length;

  return (
    <>
      <Badge badgeContent={numberShoppingCard} color="primary">
        <Button
          className={styles.responsiveButton}
          onClick={() => setDrawerState(true)}
        >
          <ShoppingCartIcon style={{ fontSize: 30 }} />
        </Button>
      </Badge>

      <Drawer
        className={styles.shoppingCartDrawer}
        anchor="right"
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <ContentShoppingCart close={() => setDrawerState(false)} />
      </Drawer>
    </>
  );
}
