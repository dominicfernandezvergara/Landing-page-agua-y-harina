import React, { useState, Fragment } from "react";
import "./drawer-button-list.css";
import cn from "classnames";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";
import { dataButtonsList } from "../../header";

// Icon API = https://google.github.io/material-design-icons/

const DrawerButtonList = ({ toggleDrawer }) => {
  const history = useHistory();
  const [plusMinusSing, setplusMinusSing] = useState("+");

  const onClickViewProductsList = (e) => {
    e.stopPropagation();
    if (plusMinusSing === "+") {
      setplusMinusSing("-");
    } else {
      setplusMinusSing("+");
    }
  };

  // data: productSubList ==> renombrando la variable "data" en el destructuring
  const ProductButtonDrawerList = ({ data: productSubList, name, path }) => {
    const productsList = productSubList.map((item) => (
      <button key={item.id} type="button" className="product-button-drawer">
        {item}
      </button>
    ));
    const onClickButtonProductDrawerList = () => {
      history.push(path);
    };
    return (
      <Fragment>
        <div className="container-products-button">
          <button
            type="button"
            className="button-drawer-list button-drawer-list-products"
            onClick={() => onClickButtonProductDrawerList(path)}
          >
            {name}
          </button>
          <button
            type="button"
            className="button-products-list"
            onClick={(e) => onClickViewProductsList(e)}
          >
            {plusMinusSing}
          </button>
        </div>
        <div className="container-product-list">
          {plusMinusSing === "-" ? productsList : null}
        </div>
      </Fragment>
    );
  };

  ProductButtonDrawerList.propTypes = {
    data: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  };

  const onClickButtonDrawerList = (item) => {
    const pathItem = item.path;
    history.push(pathItem);
  };

  return (
    <div className="container-drawer-list">
      <div className="container-button-close-drawer">
        <button
          type="button"
          className="button-close-drawer"
          onClick={() => toggleDrawer(false)}
        >
          <i className="material-icons md-36">clear</i>
        </button>
      </div>
      <ul className="drawer-list">
        {dataButtonsList.map((item, index) => {
          const normalButtonDrawerList = (
            <button
              type="button"
              className="button-drawer-list"
              onClick={() => onClickButtonDrawerList(item)}
            >
              {item.name}
            </button>
          );

          return (
            <li
              key={index.id}
              className={cn("button-drawer-list", {
                "button-drawer-list-open": plusMinusSing === "-",
              })}
            >
              {item.data
                ? // enviando la variable global "item" para que la funcion "productButtonDrawerList" la use
                  ProductButtonDrawerList(item)
                : normalButtonDrawerList}
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
