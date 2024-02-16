/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

const UserFormInputs = ( { addUser, handleOnChange } ) => {
  return (
    <div>
    <div className="border-b-black border-b-2 mb-7">
      Datos Personales
    </div>
    <div className="place-content-center px-5"> 
      <div className="flex flex-row gap-5"> {/* =================================================== */}
        <label className="block text-sm font-medium leading-6 text-gray-900"> Nombre <br />
          <input className="px-2 border border-20 mb-3 shadow w-72" type="text" name="nameu" value={addUser.nameu} onChange={handleOnChange} />
        </label>
        {/* ------------------------- */}
        <label className="block text-sm font-medium leading-6 text-gray-900"> Apellidos <br />
          <input className="px-2 border border-20 mb-3 shadow w-72" type="text" name="lastName" value={addUser.lastName} onChange={handleOnChange} />
        </label>
        </div> {/* ================================================================================== */}


      <label className="block text-sm font-medium leading-6 text-gray-900"> Fecha de Nacimiento <br />
        <input className="px-2 border border-20 mb-3 shadow pr-1" type="date" name="DoB" value={addUser.DoB} onChange={handleOnChange} />
      </label>{/* ================================================================================== */}

      <div className="flex flex-row gap-4">
          <label className="block text-sm font-medium leading-6 text-gray-900"> País <br />
            <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="country" value={addUser.country} onChange={handleOnChange} />
          </label>{/* ================================================================================== */}
          <label className="block text-sm font-medium leading-6 text-gray-900"> Tipo de Documento <br />
            <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="docType" value={addUser.docType} onChange={handleOnChange} />
          </label>{/* ================================================================================== */}
          <label className="block text-sm font-medium leading-6 text-gray-900"> Numero de Documento <br />
            <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="docNum" value={addUser.docNum} onChange={handleOnChange} />
          </label>{/* ================================================================================== */}
      </div>

      <div className="flex flex-row gap-4 w-full">
          <label className="block text-sm font-medium leading-6 text-gray-900"> Teléfono <br />
            <input className="px-2 border border-20 mb-3 shadow " type="number" name="phone" value={addUser.phone} onChange={handleOnChange} />
          </label>{/* ================================================================================== */}
          <label className="block text-sm font-medium leading-6 text-gray-900"> Email <br />
            <input className="px-2 border border-20 mb-3 shadow w-[208%]" type="email" name="email" value={addUser.email} onChange={handleOnChange} />
          </label>{/* ================================================================================== */}
        </div>
      </div>

    {/* //////////////////////////////////////////////////////////////////////////////////////  */}

    <div className="border-b-black border-b-2 my-7 flex flex-row justify-between">
      Información de Usuario
   </div>

    <div className="flex gap-5 px-5"> 
      {/* ================================================================================== */}
      <label className="block text-sm font-medium leading-6 text-gray-900"> Nombre de Usuario <br />
        <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="username" value={addUser.username} onChange={handleOnChange} />
      </label>
      {/* ================================================================================== */}
      <label className="block text-sm font-medium leading-6 text-gray-900"> Contraseña <br />
        <input className="px-2 border border-20 mb-3 shadow w-full" type="password" name="pwd" value={addUser.pwd} onChange={handleOnChange} />
      </label>
      {/* ================================================================================== */}
      <label className="flex text-sm font-medium leading-6 text-gray-900 align-middle">
        <input className="px-2 border border-20 mx-3 w-full" type="checkbox" name="isAdmin" checked={addUser.isAdmin} onChange={handleOnChange} />
        Administrador
      </label>
    </div>
    {/* //////////////////////////////////////////////////////////////////////////////////////  */}
  </div>
  );
};

export default UserFormInputs;
