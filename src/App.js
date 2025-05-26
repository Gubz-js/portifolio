import React from "react";
import Menu from "../src/components/menu/index";
import Sobre from "./components/sobre/sobre";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Experiencias from "./components/experiencias/experiencias";
import Formulario from "./components/formulario/form";


function App() {
  return (
    <>
      <Menu />
      <Sobre />
      <Experiencias />
      <Formulario />
      <script src="https://kit.fontawesome.com/59b1d76fd1.js" crossorigin="anonymous"></script>
    </>
  );
}

export default App;
