import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../formulario/form.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("xqaeqrgb");
  if (state.succeeded) {
      return (
        <div className='content-agradecimento'>
          <p className='agradecimento'>Obrigado!<br/> Breve entrarei em contato!</p>
        </div>
      );
  }
  return (
    <form className="formulario" onSubmit={handleSubmit}>
        <label>Nome</label> 
        <input id="nome" type="text" name="name"/>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label>Número de contato</label>
        <input id="telefone" type="text"/>    

        <label>Mensagem</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <div id="button">
        <button type="submit" disabled={state.submitting}>Enviar</button>
        </div>
    </form>
  );
}

export default ContactForm;
