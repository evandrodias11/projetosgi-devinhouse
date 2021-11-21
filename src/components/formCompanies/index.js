import "./style.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const FormCompanies = () => {
  const [corporateName, setCorporateName] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [complement, setComplement] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (
        !corporateName ||
        !fantasyName ||
        !cnpj ||
        !email ||
        !cep ||
        !address ||
        !number ||
        !district ||
        !city ||
        !latitude ||
        !longitude
      ) {
        alert("Por favor preencha todos os campos!");
      } else {
        if (
          corporateName &&
          fantasyName &&
          cnpj &&
          email &&
          cep &&
          address &&
          number &&
          district &&
          city &&
          complement &&
          latitude &&
          longitude
        ) {
          await fetch("http://localhost:5555/empresas", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              corporateName: corporateName,
              fantasyName: fantasyName,
              cnpj: cnpj,
              email: email,
              cep: cep,
              address: address,
              number: number,
              district: district,
              city: city,
              complement: complement,
              latitude: latitude,
              longitude: longitude,
            }),
          });

          alert("Empresa cadastrada com sucesso !");

          history.push("/map");
        }
      }
    } catch (error) {
      alert("Algum erro ocorreu, estamos trabalhando para resolver!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-companies">
        <section className="header-form">
          <h1>Cadastrar Nova Empresa</h1>
        </section>

        <section className="container-dados">
          <section className="company-name">
            <div>
              <label></label>
              <input
                type="text"
                name="corporate"
                value={corporateName}
                onChange={(e) => setCorporateName(e.target.value)}
                placeholder="Razão social"
              ></input>
            </div>

            <div>
              <label></label>
              <input
                type="text"
                name="fantasy"
                value={fantasyName}
                onChange={(e) => setFantasyName(e.target.value)}
                placeholder="Nome fantasia"
              ></input>
            </div>
          </section>
          <section className="cnpj-email">
            <div>
              <label></label>
              <input
                type="text"
                name="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                placeholder="CNPJ: 00.000.000/0000-00"
              ></input>
            </div>

            <div>
              <label></label>
              <input
                type="email"
                name="emailCompany"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@email.com"
              ></input>
            </div>
          </section>
        </section>

        <hr />

        <section className="address-details">
          <section className="cep-address">
            <div className="cep">
              <label></label>
              <input
                type="text"
                name="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="CEP: 00000-000"
              ></input>
            </div>
            <div className="address">
              <label></label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Endereço"
              ></input>
            </div>
          </section>

          <section className="number-district-city">
            <div>
              <label></label>
              <input
                type="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Número"
              ></input>
            </div>
            <div>
              <label></label>
              <input
                type="text"
                name="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="Bairro"
              ></input>
            </div>
            <div>
              <label></label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cidade"
              ></input>
            </div>
          </section>

          <div className="complement">
            <label></label>

            <input
              type="text"
              name="complement"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              placeholder="Complemento/Referência"
            ></input>
          </div>
        </section>
        <hr />
        <section className="latitude-longitude">
          <div>
            <label></label>
            <input
              type="number"
              name="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="Latitude"
            ></input>
          </div>

          <div>
            <label></label>
            <input
              type="number"
              name="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="Longitude"
            ></input>
          </div>
        </section>
        <div className="btn-comp-container">
          <Link to="/map">
            <button className="btn-cancel">Cancelar</button>
          </Link>
          <button type="submit" onClick={handleSubmit} className="btn-save">
            Cadastrar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormCompanies;
