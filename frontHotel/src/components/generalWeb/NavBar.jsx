/* eslint-disable no-unused-vars */
import React from 'react'
function NavBar() {
  return (
    <div className="App">
      <header className="App-nav">
        <img className="App-logo" alt="logo" />
        <div className="minombre">Hotel Manzanares</div>
        <ul className="barNav">
          <li className="menu"><a href="#ElHotel">El Hotel</a></li>
          <li className="menu"><a href="#Habitaciones">Habitaciones</a></li>
          <li className="menu"><a href="#Ubicacion">Ubicación</a></li>
          <li className="menu"><a href="#Resenas">Reseñas</a></li>
          <li className="menu"><a href="#PreguntasFrecuentes">Preguntas Frecuentes</a></li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
