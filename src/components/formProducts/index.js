import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";

const FormProducts = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [providers, setProviders] = useState([]);
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!url || !name || !description || !unitCost || !provider || !group) {
        alert("Por favor preencha todos os campos!");
      } else {
        if (url && name && description && unitCost && provider && group) {
          await fetch("http://localhost:5555/produtos", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              url: url,
              name: name,
              unitCost: unitCost,
              description: description,
              provider: provider,
              group: group,
            }),
          });

          alert("Produto castrado com sucesso !");

          history.push("/ProductList");
        }
      }
    } catch (error) {
      alert("Algum erro ocorreu, estamos trabalhando para resolver!");
    }
  };

  useEffect(() => {
    async function getProviders() {
      const result = await fetch("http://localhost:5555/fornecedores");
      const data = await result.json();
      setProviders(data);
    }

    getProviders();
  }, []);

  useEffect(() => {
    async function getGroups() {
      const result = await fetch("http://localhost:5555/categorias");
      const data = await result.json();
      setGroups(data);
    }

    getGroups();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="form-products">
        <section className="header-form">
          <h1>Cadastrar Novo Produto</h1>
          <div>
            <Link to="/ProductList">
              <button className="btn-products">Produtos Cadastrados</button>
            </Link>
          </div>
        </section>

        <section className="img-url">
          {setUrl && (
            <div id="imageProduct" className="image-container view ">
              <img id="img" src={url} alt={url} className="image-product"></img>
            </div>
          )}
          {!setUrl && (
            <div id="imageProduct" className="image-container">
              <img id="img" src={url} alt={url} className="image-product"></img>
            </div>
          )}

          <label></label>

          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL da Imagem: https://imagem.com.br"
          ></input>
        </section>

        <section className="name-cost">
          <div>
            <label></label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do produto"
            ></input>
          </div>

          <div>
            <label></label>
            <input
              type="text"
              name="cost"
              value={unitCost}
              onChange={(e) => setUnitCost(e.target.value)}
              placeholder="Preço unitário (R$)"
            ></input>
          </div>
        </section>

        <section className="description">
          <textarea
            rows={5}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição breve do produto"
          ></textarea>
        </section>
        <hr />
        <section className="selects">
          <div>
            <span>Fornecedor</span>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            >
              <option value="" selected disabled>
                Selecione uma opção
              </option>

              {providers.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <span>Categoria</span>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              <option value="" selected disabled>
                {" "}
                Selecione uma opção{" "}
              </option>

              {groups.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <Link to="/map">
              <button className="btn-cancel">Cancelar</button>
            </Link>
            <button type="submit" onClick={handleSubmit} className="btn-save">
              Cadastrar
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default FormProducts;
