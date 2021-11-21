import React from "react";
import Header from "../../components/header";
import FormProducts from "../../components/formProducts";

function ProductsRegistration() {
  return (
    <>
      <Header></Header>
      <div className="products-container">
        <FormProducts></FormProducts>
      </div>
    </>
  );
}

export default ProductsRegistration;
