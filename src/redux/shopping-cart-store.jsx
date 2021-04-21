const CURRENT_SHOP_CAR_STATE = "CURRENT_BUTTON_STATE";
const ADD_NEW_PRODUCT_SHOP_CAR = "ADD_NEW_PRODUCT_SHOP_CAR";
const UPDATE_SUBTRACT_QUANTITY_PRODUCT_SHOPPING_CART =
  "UPDATE_SUBTRACT_QUANTITY_PRODUCT_SHOPPING_CART";
const UPDATE_ADD_QUANTITY_PRODUCT_SHOPPING_CART =
  "UPDATE_ADD_QUANTITY_PRODUCT_SHOPPING_CART";
const UPDATE_REMOVE_PRODUCT_SHOPPING_CART =
  "UPDATE_REMOVE_PRODUCT_SHOPPING_CART";
const ADD_USER_INFORMATION = "ADD_USER_INFORMATION";
const ADD_COMMENTARY = "ADD_COMMENTARY";

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
  commentary: "",
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
      let noRepeatedShoppingCartProduct;

      if (shoppingCartProducts.length === 0) {
        noRepeatedShoppingCartProduct = [...shoppingCartProducts, newProduct];
      } else {
        const repeatedProduct = shoppingCartProducts.find(
          (item) => item.id === newProduct.id
        );

        if (repeatedProduct) {
          noRepeatedShoppingCartProduct = shoppingCartProducts.map((item) => {
            if (item.id === newProduct.id) {
              return {
                ...item,
                quantity: item.quantity + newProduct.quantity,
                totalAmount: item.totalAmount + newProduct.totalAmount,
              };
            }
            return item;
          });
        } else {
          noRepeatedShoppingCartProduct = [...shoppingCartProducts, newProduct];
        }
      }

      return {
        ...state,
        shoppingCartProducts: noRepeatedShoppingCartProduct,
        amount: noRepeatedShoppingCartProduct.reduce((number, item) => {
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
      const newShoppingCartProductsFilted = newShoppingCartProducts.filter(
        (item) => !(item.quantity === 0)
      );

      return {
        ...state,
        shoppingCartProducts: newShoppingCartProductsFilted,
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
    case ADD_USER_INFORMATION: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ADD_COMMENTARY: {
      return {
        ...state,
        commentary: action.payload,
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

export const addPersonalDataOrderActionDispacher = (userInformation) => async (
  dispatch
) => {
  dispatch({
    type: ADD_USER_INFORMATION,
    payload: userInformation,
  });
};

export const addCommentaryOrderActionDispacher = (commentary) => async (
  dispatch
) => {
  dispatch({
    type: ADD_COMMENTARY,
    payload: commentary,
  });
};
