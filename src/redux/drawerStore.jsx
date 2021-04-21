const CURRENT_DRAWER_STATE = "CURRENT_DRAWER_STATE";
const MENU_ITEM_ACTIVE = "MENU_ITEM_ACTIVE";
const CURRENT_BUTTON_STATE = "CURRENT_BUTTON_STATE";

const initialData = {
  drawerInfo: [
    {
      name: "INICIO",
      path: "/home",
      data: "",
      active: true,
      id: 1,
    },
    {
      name: "MI HISTORIA",
      path: "/our-story",
      data: "",
      active: false,
      id: 2,
    },
    {
      name: "PRODUCTOS",
      path: "/products",
      data: ["Pan de molde", "Pan Pita"],
      active: false,
      id: 3,
    },
    {
      name: "CONTACTO",
      path: "/constact",
      data: "",
      active: false,
      id: 4,
    },
    {
      name: "MI PEDIDO",
      path: "/mi-pedido",
      data: "",
      active: false,
      id: 4,
    },
  ],
  drawerState: false,
};

export default function DrawerReducer(state = initialData, action) {
  switch (action.type) {
    case CURRENT_DRAWER_STATE: {
      return {
        ...state,
        drawerState: action.payload,
      };
    }
    case CURRENT_BUTTON_STATE: {
      return {
        ...state,
        drawerInfo: action.payload,
      };
    }
    case MENU_ITEM_ACTIVE: {
      return {
        ...state,
        drawerInfo: action.payload,
      };
    }
    default:
      return state;
  }
}

export const setDrawerState = (drawerState) => async (dispatch) => {
  dispatch({
    type: CURRENT_DRAWER_STATE,
    payload: drawerState,
  });
};

export const updateMenuItemsAction = (menuItemActive) => async (dispatch) => {
  dispatch({
    type: MENU_ITEM_ACTIVE,
    payload: menuItemActive,
  });
};

export const setButtonState = (buttonState) => async (dispatch) => {
  dispatch({
    type: CURRENT_BUTTON_STATE,
    payload: buttonState,
  });
};
