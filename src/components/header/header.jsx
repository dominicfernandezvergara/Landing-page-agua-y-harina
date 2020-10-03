import React, { Fragment, useState } from "react";
import "./header.css";
import cn from "classnames";
import Logo from "../logo/logo";
import Drawer from "./drawer";
import { useHistory } from "react-router-dom";
import ShoppingCart from "../shopping-cart";
import Orders from "../shopping-cart/orders";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//Github : https://github.com/akiran/react-slick
//Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

export const dataButtonsList = [
  {
    name: "INICIO",
    path: "/home",
    data: "",
    active: true,
    id: 1,
  },
  {
    name: "SOMOS",
    path: "/somos",
    data: "",
    active: false,
    id: 2,
  },
  {
    name: "PRODUCTOS",
    path: "/productos",
    data: ["Pan de molde", "Pan Pita"],
    active: false,
    id: 3,
  },
  {
    name: "CONTACTO",
    path: "/contacto",
    data: "",
    active: false,
    id: 4,
  },
  {
    name: "MI PEDIDO",
    path: "/mi-pedido",
    data: "",
    active: false,
    id: 5,
  },
];

function Header() {
  const history = useHistory();
  const [buttonHeaderData, setButtonHeaderData] = useState(dataButtonsList);
  const [shoppingCartState, setShoppingCartState] = useState(false);
  const onClickHeaderButton = (itemSelected) => {
    const newHeaderData = buttonHeaderData.map((item) => ({
      ...item,
      active: item.id === itemSelected.id ? true : false,
    }));

    setButtonHeaderData(newHeaderData);
    history.push(itemSelected.path);
  };
  const onClickOpenShoppingCart = () => {
    setShoppingCartState(true);
  };

  return (
    <Fragment>
      <header className="header-responsive-small">
        <div className="header-title">PANADERIA AGUA Y HARINA</div>
        <button
          className="shoppingCartButton"
          onClick={onClickOpenShoppingCart}
        >
          <ShoppingCartIcon style={{ fontSize: 40 }} />
        </button>

        <Drawer />
        <ShoppingCart
          open={shoppingCartState}
          close={() => setShoppingCartState(false)}
          footer={false}
          header={false}
        >
          <Orders />
        </ShoppingCart>
      </header>

      <header className="header-responsive-large">
        <Logo />
        <div className="container-header-buttons">
          {buttonHeaderData.map((item, index) => {
            return (
              <button
                className={cn(
                  "header-buttons",
                  item.active === true ? "active" : null
                )}
                key={index}
                onClick={() => onClickHeaderButton(item)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
