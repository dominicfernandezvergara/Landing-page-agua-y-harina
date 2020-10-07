const CURRENT_SHOP_CAR_STATE = "CURRENT_BUTTON_STATE";
const ADD_NEW_PRODUCT_SHOP_CAR = "ADD_NEW_PRODUCT_SHOP_CAR";
const UPDATE_SUBTRACT_QUANTITY_PRODUCT_SHOPPING_CART =
  "UPDATE_SUBTRACT_QUANTITY_PRODUCT_SHOPPING_CART";
const UPDATE_ADD_QUANTITY_PRODUCT_SHOPPING_CART =
  "UPDATE_ADD_QUANTITY_PRODUCT_SHOPPING_CART";
const UPDATE_REMOVE_PRODUCT_SHOPPING_CART =
  "UPDATE_REMOVE_PRODUCT_SHOPPING_CART";

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
      return {
        ...state,
        shopCarState: action.payload,
      };
    }
    case ADD_NEW_PRODUCT_SHOP_CAR: {
      const { shoppingCartProducts } = state;
      const newProduct = action.payload;

      return {
        ...state,
        shoppingCartProducts: [...shoppingCartProducts, newProduct],
        amount: [...shoppingCartProducts, newProduct].reduce((number, item) => {
          number += item.totalAmount;
          return number;
        }, 0),
      };
    }
    case UPDATE_SUBTRACT_QUANTITY_PRODUCT_SHOPPING_CART: {
      const itemId = action.payload;
      const { shoppingCartProducts } = state;

      const newShoppingCartProducts = shoppingCartProducts.map((item) => {
        if (itemId === item.id) {
          const quantityItem = item.quantity - 1;

          return {
            ...item,
            quantity: quantityItem,
            totalAmount: quantityItem * Number(item.price),
          };
        }

        return item;
      });

      return {
        ...state,
        shoppingCartProducts: newShoppingCartProducts,
        amount: newShoppingCartProducts.reduce((number, item) => {
          number += item.totalAmount;
          return number;
        }, 0),
      };
    }
    case UPDATE_ADD_QUANTITY_PRODUCT_SHOPPING_CART: {
      const itemId = action.payload;
      const { shoppingCartProducts } = state;

      const newShoppingCartProducts = shoppingCartProducts.map((item) => {
        if (itemId === item.id) {
          const quantityItem = item.quantity + 1;

          return {
            ...item,
            quantity: quantityItem,
            totalAmount: quantityItem * Number(item.price),
          };
        }

        return item;
      });

      return {
        ...state,
        shoppingCartProducts: newShoppingCartProducts,
        amount: newShoppingCartProducts.reduce((number, item) => {
          number += item.totalAmount;
          return number;
        }, 0),
      };
    }
    case UPDATE_REMOVE_PRODUCT_SHOPPING_CART: {
      const { shoppingCartProducts } = state;
      const idProduct = action.payload;
      const newShoppingCartProducts = shoppingCartProducts.filter(
        (item) => !(item.id === idProduct)
      );

      return {
        ...state,
        shoppingCartProducts: newShoppingCartProducts,
        amount: newShoppingCartProducts.reduce((number, item) => {
          number += item.totalAmount;
          return number;
        }, 0),
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

export const updateShoppingCartSubtractQuantityActionDispacher = (id) => async (
  dispatch
) => {
  dispatch({
    type: UPDATE_SUBTRACT_QUANTITY_PRODUCT_SHOPPING_CART,
    payload: id,
  });
};

export const updateShoppingCartAddQuantityActionDispacher = (id) => async (
  dispatch
) => {
  dispatch({
    type: UPDATE_ADD_QUANTITY_PRODUCT_SHOPPING_CART,
    payload: id,
  });
};

export const updateShoppingRemoveOrderActionDispacher = (id) => async (
  dispatch
) => {
  dispatch({
    type: UPDATE_REMOVE_PRODUCT_SHOPPING_CART,
    payload: id,
  });
};
