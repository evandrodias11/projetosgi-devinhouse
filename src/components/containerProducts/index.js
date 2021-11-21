import React from "react";
import "./style.css";

const ContainerProducts = ({
  url,
  name,
  description,
  unitCost,
  provider,
  group,
}) => {
  return (
    <section className="product-container">
      <div id="image-product">
        <img src={url} alt={name}></img>
      </div>

      <div id="details-product">
        <h2>{name}</h2>
        <h4>{`Decsrição: ${description}`}</h4>
        <p>{`Preço unitário: R$${unitCost}`}</p>
        <p>{`Fornecedor: ${provider}`}</p>
        <p>{`Categoria: ${group}`}</p>
      </div>
    </section>
  );
};

export default ContainerProducts;
