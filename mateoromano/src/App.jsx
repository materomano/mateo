import Header from "./components/Header"

import Estudios from "./components/Estudios"
import React from "react"
import Portada from "./components/Portada"

import Footer from "./components/Footer"









function App() {
  return (
   
       <div>
          <Header/>
            <div id="portada">
              <Portada/>
            </div>
          
          
          <div id="estudios">
                <Estudios/>
           </div>
          
          <Footer/>
          
        </div>
    
  );
}
export default App

