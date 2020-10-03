const CURRENT_SHOP_CAR_STATE = "CURRENT_BUTTON_STATE";
const ADD_NEW_PRODUCT_SHOP_CAR = "ADD_NEW_PRODUCT_SHOP_CAR";

const initialData = {
  shoppingCartProducts: [
    // {
    //   id: "",
    //   name: "",
    //   data: "",
    //   quantity: "",
    //   image: "",
    //   totalAmount: "",
    //   price: "",
    //   type: "",
    // },
  ],
  shopCarState: false,
  amount: 0,
  user: {
    name: "",
    address: "",
    phone: "", // optional
    email: "",
  },
};

export default function ShoppingCartReducer(state = initialData, action) {
  switch (action.type) {
    case CURRENT_SHOP_CAR_STATE: {
      // console.log("action.payload", action.payload);
      return {
        ...state,
        shopCarState: action.payload,
      };
    }
    case ADD_NEW_PRODUCT_SHOP_CAR: {
      const shoppingCartProducts = state.shoppingCartProducts;
      const newProduct = action.payload;

      return {
        ...state,
        shoppingCartProducts: [...shoppingCartProducts, newProduct],
      };
    }
    default:
      return state;
  }
}

export const setShopCarState = (shopCarState) => async (dispatch) => {
  dispatch({
    type: CURRENT_SHOP_CAR_STATE,
    payload: shopCarState,
  });
};

export const addNewProductShopCar = (newProduct) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_PRODUCT_SHOP_CAR,
    payload: newProduct,
  });
};
