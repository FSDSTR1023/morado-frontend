/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavAdmin from "../../admin/adminActions/adminSettings/NavAdmin";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Aquí puedes realizar la lógica de autenticación
    try {
      const response = await axios.post("http://localhost:5000/users/", { username, password });
      console.log("Respuesta del servidor:", response.data);
      // Puedes manejar la respuesta del servidor según tus necesidades
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response.data);
      // Puedes manejar el error según tus necesidades
    }
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
    // También puedes realizar una llamada a la API para autenticar al usuario
  };

  return (
    <div className="flex flex-col h-screen">
      <NavAdmin />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-xs rounded">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Iniciar sesión
          </h2>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Usuario:
              <br />
              <input
                className="px-5 border border-20 mb-3"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Contraseña:
              <br />
              <input
                className="px-5 border border-20 mb-3"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button
              type="button"
              onClick={handleLogin}
              className="px-5 bg-[#003A70] text-white hover:bg-[#dadada] hover:text-[#003A70] h-8"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Login;


