import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function FormLogin() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      if (!email || !password.length) {
        alert("Email e senha obrigatórios !");
      } else {
        if (email && password.length >= 6) {
          history.push("/map");
        }
      }
    } catch (error) {
      alert("Algum erro ocorreu, estamos trabalhando para resolver!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-login">
        <h1>Login</h1>

        <div className="email-login">
          <label></label>
          <input
            type="email"
            name="emailLogin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          ></input>
        </div>

        <div className="password-login">
          <label></label>

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          ></input>
        </div>

        <button type="submit" className="btn-login">
          Entrar
        </button>
      </form>
    </>
  );
}

export default FormLogin;
