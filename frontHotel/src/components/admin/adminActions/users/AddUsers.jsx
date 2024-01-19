/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

const AddUser = () => {
  // se crea un arreglo vacio como datos iniciales
  const newUserInit = { 
    name: "",
    lastName: "",
    phone: 0,
    email: "",
    DoB: "",
    country: "",
    docType: "",
    docNum: "",
    username: "",
    pwd: "",
  };

  // variable para obtener id del usuario a traves de Param
  let {id} = useParams ()

  // se asigna el arreglo vacio al estado inicial
  const [addUser, setAddUser] = useState(newUserInit);

  // variable de estado par capturar el Id que llega mediante url
  const [urlId, setUrlId] = useState (id);

  // se recolecta los datos a medida que se vaya cambiando par luego enviarlos a la BBDD
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAddUser({ ...addUser, [name]: value });
  };

  // aqui se almacenan los datos que se van a enviar a la BBDD
  const newUser = {
    name: addUser.name,
    lastName: addUser.lastName,
    phone: addUser.phone,
    email: addUser.email,
    DoB: addUser.DoB,
    country: addUser.country,
    docType: addUser.docType,
    docNum: addUser.docNum,
    username: addUser.username,
    pwd: addUser.pwd,
  };

 

  // Esta es la funcion para hacer el post y enviar los datos a MonoDB
  const saveUser = async (e) => {
    try {
      await axios.post("http://localhost:5000/users", newUser);
      console.log("Usuario registrado con éxito");
    } catch (error) {
      console.error("no se puede guardar el usuario");
    }
  };

const actualId = async(idValue) => {
  const res = await axios.get("http://localhost:5000/users/" + idValue)
  setAddUser({
    _id: res.data._id,
    name: res.data.name,
    lastName: res.data.lastName,
    phone: res.data.phone,
    email: res.data.email,
    DoB: res.data.DoB,
    country: res.data.country,
    docType: res.data.docType,
    docNum: res.data.docNum,
    username: res.data.username,
    pwd: res.data.pwd
  })

}

useEffect(() => {
  if(urlId !== ''){
    actualId(urlId)
  }
  },[urlId])

  return (
    <div>
      <form onSubmit={saveUser} className="flex flex-col px-5">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Datos Usuario 
        </h2>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Nombre
          <br />
          <input

          // En los inputs estan actualizados los "  value  ", ya estan relacionados con el arreglo que
          // se va a guardar en la BBDD
          // Todos los campos llaman a la funcion handlechange para que se vayan agregando al arreglo
          // antes de enviarlos a la BBDD
            className="px-5 border border-20 mb-3 shadow"
            type="text"
            name="name"
            value={addUser.name}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Apellidos
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="text"
            name="lastName"
            value={addUser.lastName}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Teléfono
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="number"
            name="phone"
            value={addUser.phone}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Email
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="email"
            name="email"
            value={addUser.email}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Fecha de Nacimiento
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="date"
            name="DoB"
            value={addUser.DoB}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          País
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="text"
            name="country"
            value={addUser.country}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Tipo de Documento
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="text"
            name="docType"
            value={addUser.docType}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Numero de Documento
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="text"
            name="docNum"
            value={addUser.docNum}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Nombre de Usuario
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="text"
            name="username"
            value={addUser.username}
            onChange={handleOnChange}
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Contraseña
          <br />
          <input
            className="px-5 border border-20 mb-3 shadow"
            type="password"
            name="pwd"
            value={addUser.pwd}
            onChange={handleOnChange}
          />
        </label>

        {/* se envian los datos a mongo con el onClick */}
        <button type="submit" onClick={saveUser} className="bg-[#003A70] text-white hover:bg-[#dadada] hover:text-[#003A70] h-8">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddUser;
