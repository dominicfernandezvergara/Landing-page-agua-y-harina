import React from "react";
import "./drawer-button-list.css";
import cn from "classnames";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";
import { dataButtonsList } from "../../header";

// Icon API = https://google.github.io/material-design-icons/

const DrawerButtonList = ({ toggleDrawer }) => {
  const history = useHistory();

  const onClickButtonDrawerList = (item) => {
    toggleDrawer();
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
              key={index.id}
              type="button"
              className="button-drawer-list"
              onClick={() => onClickButtonDrawerList(item)}
            >
              {item.name}
            </button>
          );

          return (
            <li key={index.id} className={cn("button-drawer-list")}>
              {normalButtonDrawerList}
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
