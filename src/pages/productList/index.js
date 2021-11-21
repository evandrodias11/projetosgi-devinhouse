import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import ProductsContainer from "../../components/containerProducts";
import "./style.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const result = await fetch("http://localhost:5555/produtos");
      const data = await result.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="list-container">
        <section className="list-products">
          <h1>Produtos cadastrados</h1>
          {products.map((item) => (
            <ProductsContainer
              url={item.url}
              name={item.name}
              description={item.description}
              unitCost={item.unitCost}
              provider={item.provider}
              group={item.group}
            ></ProductsContainer>
          ))}
        </section>
      </div>
    </>
  );
}

export default ProductList;
