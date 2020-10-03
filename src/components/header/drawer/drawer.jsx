import React, { Fragment, useState } from "react";
import "./drawer.css";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import DrawerButtonList from "./drawer-button-list";

//Drawer API : https://material-ui.com/api/drawer/

export default function TemporaryDrawer() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <Fragment>
      <Button
        className="responsive-button"
        onClick={(e) => setDrawerState(true)}
      >
        <i className="material-icons reorder">reorder</i>
      </Button>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={(e) => setDrawerState(false)}
      >
        <DrawerButtonList toggleDrawer={setDrawerState} />
      </Drawer>
    </Fragment>
  );
}
