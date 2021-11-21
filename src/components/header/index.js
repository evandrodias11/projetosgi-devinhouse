import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header2 = () => {
  return (
    <>
      <nav>
        <div>
          <h1>SGI DevInHouse</h1>
        </div>
        <ul>
          <li>
            <Link to="/map">
              <p>Mapa</p>
            </Link>
          </li>
          <li>
            <Link to="/productsRegistration">
              <p>Cadastrar produto</p>
            </Link>
          </li>
          <li>
            <Link to="/companiesRegistration">
              <p>Cadastrar empresa</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>Sair</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header2;
