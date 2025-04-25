import React from 'react';
import rental from '/images/rentall.jpg'
import petro from '/images/Petrobus.png'
import { principal } from '../Estilos/proyectos.module.css';

const Proyectos = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Imagen clickeada");
    window.location.href = "http://3.82.145.148:3000/";
  };

  const handleeClick = (event) => {
    event.preventDefault();
    console.log("Imagen clickeada");
    window.location.href = "https://www.petrobus.org/";
  };


  return (
    
    <div className={principal}>
      
      <h1>PROJECTS</h1>
      <h2>Car Rental En Digital House</h2>
      <a href="" onClick={handleClick}>
        <img src={rental} alt="Proyecto" />
        
      </a>

      <h2> Web para empresa familiar </h2>
      <a href="" onClick={handleeClick}>
        <img src={petro} alt="Proyecto" />
        
      </a>
      
    </div>
    
  );
};

export default Proyectos;