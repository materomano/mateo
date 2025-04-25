import Header from "./components/Header"

import Estudios from "./components/Estudios"
import React from "react"
import Portada from "./components/Portada"
import Proyectos from "./components/Proyectos"
import Footer from "./components/Footer"
import Sobremi from "./components/Sobremi.jsx"
import Tecnologias from "./components/Tecnologias.jsx"









function App() {
  return (
   
       <div>
          <Header/>
            <div id="portada">
              <Portada/>
            </div>
            <div id="sobremi">
            <Sobremi/>
          </div>
          <div id="tecnologias">
                <Tecnologias/>
           </div>
          
          
          <div id="estudios">
                <Estudios/>
           </div>
          <div id="proyectos">
            <Proyectos/>
          </div>
          <Footer/>
          
        </div>
    
  );
}
export default App

