import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import Product from "./pages/product";
import Header from "./components/header";
import Footer from "./components/footer";
import Products from "./pages/products";
import Modal from "./components/modal/modal";

function App() {
  return (
    <React.Fragment>
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
          <Route path="/modal">
            <Modal />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
