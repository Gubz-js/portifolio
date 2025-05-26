import "../formulario/form.css"
import ContactForm from "./formulario"

function Formulario() {
    return(
    <>
    <a id="contato"></a>
    <div className="main-container-formulario">
        <div className="formulario-content">    
            <p className="titulo-formulario">Para mais informações</p>
            <ContactForm />
            <span className="footer">Site desenvolvido por &copy;Gustavo Batista</span>
        </div>
    </div>
    </>
    )
}

export default Formulario