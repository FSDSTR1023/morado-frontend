/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { BsEye, BsEyeSlash} from "react-icons/bs";

const UserFormInputs = ( { addUser, handleOnChange } ) => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const isRegisterRoute = location.pathname === "/login/register";


  return (
    <div>
    <div className="border-b-black border-b-2 mb-3 md:mb-7 font-bold">
      Datos Personales
    </div>
    <div className="place-content-center px-5"> 
      <div className="flex flex-col gap-0 w-full md:flex-row md:gap-5"> {/* =================================================== */}
        <label className="block text-sm font-medium leading-6"> Nombre <br />
          <input className="px-2 border border-20 mb-3 shadow w-full md:w-72 text-gray-900" type="text" name="nameu" value={addUser.nameu} onChange={handleOnChange} />
        </label>
        {/* ------------------------- */}
        <label className="block text-sm font-medium leading-6"> Apellidos <br />
          <input className="px-2 border border-20 mb-3 shadow w-full md:w-72 text-gray-900" type="text" name="lastName" value={addUser.lastName} onChange={handleOnChange} />
        </label>
        </div> {/* ================================================================================== */}


      <label className="block text-sm font-medium leading-6 "> Fecha de Nacimiento <br />
        <input className="w-1/2 md:w-48 px-2 border border-20 mb-3 shadow pr-1 text-gray-900" type="date" name="DoB" value={addUser.DoB} onChange={handleOnChange} />
      </label>{/* ================================================================================== */}

      <div className="flex flex-col gap-0 md:flex-row md:gap-4">
          <label className="block text-sm font-medium leading-6"> País <br />
            <input className="px-2 border border-20 mb-3 shadow w-1/2 md:w-full text-gray-900" type="text" name="country" value={addUser.country} onChange={handleOnChange} />
          </label>{/* ================================================================================== */}
            <div className="flex flex-row gap-4">
              <label className="block text-sm font-medium leading-6 w-2/3 md:w-44"> Tipo de Documento <br />
                <select
                  className="px-2 border border-20 mb-3 shadow w-full text-gray-900"
                  name="docType"
                  value={addUser.docType}
                  onChange={handleOnChange}
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="DNI-NIF">DNI-NIF</option>
                  <option value="NIE">NIE</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
              </label>{/* ================================================================================== */}
              <label className="block text-sm font-medium leading-6"> Numero de Documento <br />
                <input className="px-2 border border-20 mb-3 shadow w-full text-gray-900" type="text" name="docNum" value={addUser.docNum} onChange={handleOnChange} />
              </label>{/* ================================================================================== */}
            </div>
      </div>

      <div className="flex flex-col gap-0 md:flex-row md:gap-4">
          <label className="block text-sm font-medium leading-6"> Teléfono <br />
            <input className="px-2 border border-20 mb-3 shadow text-gray-900 w-1/2 md:w-full" type="number" name="phone" value={addUser.phone} onChange={handleOnChange} />
          </label>{/* ================================================================================== */}
          <label className="block text-sm font-medium leading-6"> Email <br />
            <input className="px-2 border border-20 mb-3 shadow text-gray-900 w-full md:w-96" type="email" name="email" value={addUser.email} onChange={handleOnChange} />
          </label>{/* ================================================================================== */}
        </div>
      </div>

    {/* //////////////////////////////////////////////////////////////////////////////////////  */}

    <div className="border-b-black border-b-2 my-7 flex flex-row justify-between font-bold mb-3 md:mb-7">
      Información de Usuario
   </div>

    <div className="flex flex-col gap-0 md:flex-row md:gap-5 px-5"> 
      {/* ================================================================================== */}
      <label className="block text-sm font-medium leading-6"> Nombre de Usuario <br />
        <input className="px-2 border border-20 mb-3 shadow w-full text-gray-900" type="text" name="username" value={addUser.username} onChange={handleOnChange} />
      </label>
      {/* ================================================================================== */}

      <label className="block text-sm font-medium leading-6">
          Contraseña
          <br />
          <div className="relative">
            <input
              className="px-2 border border-20 mb-3 shadow w-full text-gray-900"
              type={showPassword ? "text" : "password"}
              name="pwd"
              value={addUser.pwd}
              onChange={handleOnChange}
            />
            <button
              type="button"
              className="absolute right-1 top-3 transform -translate-y-1/2 cursor-pointer p-1 text-black font-extrabold"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
        </label>


      {/* ================================================================================== */}
      {!isRegisterRoute &&(<label className="flex flex-row text-sm font-medium leading-6 items-center mb-2 md:mb-auto">
        <input className="mr-2 border border-gray-300 mx-3 text-gray-900" type="checkbox" name="isAdmin" checked={addUser.isAdmin} onChange={handleOnChange} />
        Administrador
      </label>)}
    </div>
    {/* //////////////////////////////////////////////////////////////////////////////////////  */}
  </div>
  );
};

export default UserFormInputs;
