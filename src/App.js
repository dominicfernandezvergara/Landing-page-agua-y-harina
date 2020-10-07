import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import Product from "./pages/product";
import Header from "./components/header";
import Footer from "./components/footer";
import Products from "./pages/products";
import Order from "./pages/order";
import SuccessOrder from "./pages/success-order";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/succefull-Order">
            <SuccessOrder />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
