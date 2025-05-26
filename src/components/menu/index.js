import React from "react"
import "./style.css"

function Menu() {
    return (
        <div className="main-container">
            <div className="hero-container">
                <header>
                    <nav>
                        <ul>
                                <li>Menu</li>
                            <a href="#sobre">
                                <li>Sobre</li>                        
                            </a>
                            <a href="#experiencias">
                                <li>Tecnologias</li>
                            </a>
                            <a href="#contato">
                                <li>Contato</li>
                            </a>
                        </ul>
                    </nav>
                </header>
        
                <h1>Procurando um desenvolvedor FullStack?</h1>
                <svg className="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
        </div>    
    )

}

export default Menu