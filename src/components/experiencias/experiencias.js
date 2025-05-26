import React from "react";
import "../experiencias/experiencias2.css"
import {react, node, mysql} from "../../midia/icones/fotos-icon"

function Experiencias() {
    return (
    <>
    <a id="experiencias"></a>    
    <div className="main-container-experience">
        <div className="span-experiencias top">Minhas experiências</div>
            <div className="experience-content">
                <div className="L">
                    <div className="experiencias">
                        <img className="img-experiencias" src={react} alt="" /> 
                        <p className="paragrafo-experiencias">
                            <h3>FRONT-END</h3>
                            Experiência em React, HTML, CSS, JavaScript e TypeScript, criando interfaces dinâmicas e responsivas.<br/>
                            Desenvolvo componentes reutilizáveis, gerencio estados e utilizo hooks para manipulação eficiente no React. <br/>
                            Estruturo páginas semânticas e aplico CSS Grid, Flexbox e media queries para compatibilidade. <br/>
                            Uso TypeScript para segurança e escalabilidade do código.

                        </p>
                    </div>
                </div>
                <div className="R">
                    <div className="experiencias">     
                        <img className="img-experiencias-mobile" src={node} alt="" />          
                        <p className="paragrafo-experiencias">
                            <h3>BACK-END</h3>
                            Experiência em Node.js, desenvolvendo aplicações server-side eficientes. 
                            Utilizo Express.js para estruturar rotas, gerenciar middleware e autenticação. <br/>
                            Trabalho na integração entre backend e frontend, garantindo comunicação fluida via APIs RESTful (fetch e axios) e manipulação otimizada de dados.
                        </p>
                        <img className="img-experiencias mobile" src={node} alt="" />
                    </div>
                </div>
                <div className="L">
                    <div className="experiencias">
                        <img className="img-experiencias" src={mysql} alt=""/> 
                        <p className="paragrafo-experiencias">
                            <h3>BANCO DE DADOS</h3>
                            Experiência em MariaDB e MySQL, utilizando-os para gerenciamento eficiente de dados em aplicações backend.<br/>
                            Trabalho com modelagem de banco, criação de tabelas e consultas SQL otimizadas para garantir desempenho e escalabilidade.
                        </p>
                    </div>
                </div>
            </div>
            <div className="span-experiencias">Conheça um pouco mais dos projetos acessando meu GitHub 
              <a href="https://github.com/Gubz-js" target="_blank" rel="noreferrer noopener">
                <i className="fa-brands fa-github" id="git"></i>
              </a>
            </div>
    </div>
    </>
    )
}

export default Experiencias