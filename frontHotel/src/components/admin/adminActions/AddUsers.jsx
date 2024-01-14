/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [DoB, setDoB] = useState('');
  const [country, setCountry] = useState('');
  const [docType, setDocType] = useState('');
  const [docNum, setDocNum] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de autenticación
    // También puedes realizar una llamada a la API para autenticar al usuario
  };

  return (
    <div>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>Datos Usuario</h2>
      <form className='flex flex-col px-5'>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Nombre 
        <br />
      <input className='px-5 border border-20 mb-3' 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Apellidos
        <br />
        <input className='px-5 border border-20 mb-3'
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Teléfono
        <br />
        <input className='px-5 border border-20 mb-3'
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Email
        <br />
        <input className='px-5 border border-20 mb-3'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Fecha de Nacimiento
        <br />
        <input className='px-5 border border-20 mb-3'
            type="date"
            value={DoB}
            onChange={(e) => setDoB(e.target.value)}
          />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        País
        <br />
        <input className='px-5 border border-20 mb-3'
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Tipo de Documento  
        <br />    
        <input className='px-5 border border-20 mb-3'
            type="text"
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
          />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Numero de Documento
        <br />
        <input className='px-5 border border-20 mb-3'
            type="text"
            value={docNum}
            onChange={(e) => setDocNum(e.target.value)}
          />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Nombre de Usuario
        <br />
        <input className='px-5 border border-20 mb-3'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        Contraseña
        <br />
        <input className='px-5 border border-20 mb-3'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
      </label>
      </form>
    </div>
  );
};

export default AddUser;