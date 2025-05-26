import React from "react";
import "../sobre/sobre.css"
import {perfil, html, js, react, node, css} from "../../midia/icones/fotos-icon";


function Sobre() {
    return (
        <>
        <a id="sobre"></a>
        <div className="main-container-profile">
            <div className="profile-container">
                <div className="profile-card">
                    <img className="profile-img" src={perfil} alt="" /> 
                    <span className="nome"><b>Gustavo Batista</b></span>
                    <span className="texto">O esforçado vence o talentoso quando o talentoso deixa de ser esforçado.<br/> Consistencia é a chave do sucesso!!</span>
                    <div className="social-media">
                        <a href="https://github.com/Gubz-js" target="_blank" rel="noreferrer noopener">
                            <i className="fa-brands fa-github" ></i>
                        </a>                          
                        <a href="https://www.linkedin.com/in/gustavo-batista-9a1106113/" target="_blank" rel="noreferrer noopener">
                            <i className="fa-brands fa-linkedin-in" ></i>
                        </a>  
                    </div>
                    <div className="divider"></div>
                        <div classNames="icon-content">
                            <img className="icon-item" src={html} alt=""/>
                            <img className="icon-item" src={css} alt=""/>
                            <img className="icon-item" src={js} alt=""/>
                            <img className="icon-item" src={react} alt=""/>
                            <img className="icon-item" src={node} alt=""/> 
                        </div>
                </div>
                <div className="profile-text">
                    <span className="titulo-text">Sobre mim</span>
                        <p>
                            A tecnologia sempre despertou meu interesse, especialmente a programação, onde posso transformar ideias em soluções funcionais.<br/>
                            Sou formado em Frontend e tenho experiência em diversas linguagens e frameworks, incluindo JavaScript, React, Node.js e TypeScript. <br/>
                            Atualmente, sigo aprimorando meus conhecimentos para me tornar um desenvolvedor Full Stack.<br/>
                            Grande parte dos projetos em que atuei foram voltados para e-commerce, com foco em landing pages otimizadas para conversão. <br/>
                            Neste portfólio, apresento algumas das minhas experiências e qualificações, demonstrando minha trajetória e habilidades.

                        </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sobre;