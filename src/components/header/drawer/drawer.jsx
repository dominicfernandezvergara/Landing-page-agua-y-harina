import React, { useState } from "react";
import "./drawer.css";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import DrawerButtonList from "./drawer-button-list";

// Drawer API : https://material-ui.com/api/drawer/

export default function TemporaryDrawer() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <Button
        className="responsive-button"
        onClick={() => setDrawerState(true)}
      >
        <i className="material-icons reorder">reorder</i>
      </Button>
      <Drawer
        className="some"
        anchor="right"
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <DrawerButtonList toggleDrawer={setDrawerState} />
      </Drawer>
    </>
  );
}
