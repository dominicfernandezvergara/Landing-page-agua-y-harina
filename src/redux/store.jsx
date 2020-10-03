import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import LoginReducer from "./usersStore";
import DrawerReducer from "./drawerStore";
import ShoppingCartReducer from "./shopping-cart-store";

const rootReducer = combineReducers({
  users: LoginReducer,
  drawer: DrawerReducer,
  shoppingCart: ShoppingCartReducer,
});

// para configurar la extension de google chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = [thunk]
export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
