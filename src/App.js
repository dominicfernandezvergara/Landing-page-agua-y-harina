import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Products from "./pages/products/products";
import Order from "./pages/order";
import SuccessOrder from "./pages/success-order";
import About from "./pages/about";
import ContactUs from "./pages/contact-us";
import Admin from "./pages/admin";
import Test from "./pages/test";
import SuccessfullPayment from "./pages/successful-payment";
import ErrorPayment from "./pages/error-payment/error-payment";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/contacto">
            <ContactUs />
          </Route>
          <Route path="/succefull-Order">
            <SuccessOrder />
          </Route>
          <Route path="/successfull-payment">
            <SuccessfullPayment />
          </Route>
          <Route path="/error-payment">
            <ErrorPayment />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
