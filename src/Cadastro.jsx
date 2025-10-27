import React from "react";
import "./App.css";
import { Link } from "react-router";

function Cadastro() {
  return (
    <>
      <div className="container">
        <div className="conteudo">
          <header>
            <h1>Cadastro</h1>
          </header>
          <div className="inputs">
            <p className="info">Usuário</p>
            <div className='inputs-container'>
              <input type="text" />
            </div>
            <p className="info">Senha</p>
            <div className="inputs-container">
              <input type="password" />
            </div>
            <p className="info">Email</p>
            <div className="inputs-container">
              <input type="text" />
            </div>
            <button>Cadastrar</button>
            <div className="inscrever">
            <p>Já tem uma conta? <br />
              Voltar ao Login  <Link to="/">Ir para o Login</Link></p>
            </div>
          </div>
        
        </div> 
        
      </div>
    </>
  );
}

export default Cadastro;
