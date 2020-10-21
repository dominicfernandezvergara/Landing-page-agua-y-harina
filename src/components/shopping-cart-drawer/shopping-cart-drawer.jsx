import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styles from "./shoppingCartDrawer.module.css";
import ContentShoppingCart from "./content-shopping-cart";

// Drawer API : https://material-ui.com/api/drawer/

export default function ShoppingCartDrawer() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <Button
        className={styles.responsiveButton}
        onClick={() => setDrawerState(true)}
      >
        <ShoppingCartIcon style={{ fontSize: 30 }} />
      </Button>
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
