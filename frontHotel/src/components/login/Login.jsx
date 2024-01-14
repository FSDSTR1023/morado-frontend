/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavAdmin from "../admin/NavAdmin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de autenticación
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
    // También puedes realizar una llamada a la API para autenticar al usuario
  };

  return (
    <div>
      <NavAdmin />
      <h2>Iniciar sesión</h2>
      <form>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
