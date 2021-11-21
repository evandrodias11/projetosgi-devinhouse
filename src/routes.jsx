import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./pages/productList";
import ProductsRegistration from "./pages/productsRegistration";
import CompaniesRegistration from "./pages/companiesRegistration";
import Map from "./pages/map";
import Login from "./pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/map" component={Map}></Route>
        <Route
          path="/productsRegistration"
          component={ProductsRegistration}
        ></Route>
        <Route
          path="/companiesRegistration"
          component={CompaniesRegistration}
        ></Route>
        <Route path="/productList" component={ProductList}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
