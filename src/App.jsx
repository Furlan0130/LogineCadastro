import React from "react";
import { Link } from "react-router-dom";
import gogle from './assets/gogle.png'
import fb from './assets/fb.png'
import aple from './assets/aple.png'
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="conteudo">
          <header>
            <h1>
              Login
            </h1>
          </header>
          <div className='espaco'>
            <div className="inputs">
              <p className='info'>Usuário:</p>
              <div className='inputs-container'>
                <input type="text"/>
              </div>
              <p className='info'>Senha:</p>
              <div className='inputs-container'>
                <input type="password" />
              </div>
              <div className="mantir"> 
                <div>
                  <input type="checkbox" id="Manter Conectado" />
                  <label htmlFor="Manter Conectado">Manter Conectado</label>
                </div>
                <a href="">Esqueceu a Senha?</a>
              </div>
              <button>Entrar</button>
              <p className='opcoes'>Entrar Com</p>
              <div className='icons'>
                <img src={gogle} alt="" className='gogle'/>
                <img src={fb} alt="" className='fb' />
                <img src={aple} alt="" className='aple' />
              </div>
              <p className='inscrever'>Não Tem Conta? <Link to="/cadastro">Inscreva-se</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
