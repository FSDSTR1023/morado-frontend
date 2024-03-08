/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getAllusers } from "../../../../utils/HandelApiUsers.jsx";
import BdUserslist from "./../users/BdUserslist.jsx";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiUserAdd } from "react-icons/hi";
import SearchBar from "./SearchBar.jsx"

// const UsersList = () => {
  export default function UsersList() {

  const [allusers, setAllusers] = useState([]);
  console.log('allusers == ', allusers)
  const urlUser = import.meta.env.VITE_BACKEND_USER_URL;

  useEffect(() => {
    getAllusers(setAllusers);
  }, []);

  // Peticion al Backend para Eliminar el registo concatenando la ruta con el Id del usuario
  // ========================================================================================================
  const deleteUser = async (id) => {
    await axios.delete(`${urlUser}/${id}`)
    alert(" El Usuario: " + id + " ha sido Eliminado");
    getAllusers(setAllusers);
  }

  const confirmDeleteUser= (id, nameu, lastName, email) => {
    const shouldDelete = window.confirm(`Estás seguro de que deseas eliminar al Usuario: \n ${id}\n ${nameu} ${lastName}\n ${email}`);
    if (shouldDelete) {
      deleteUser(id);
    }
  };

  return (
    // ==== Creación de la tabla para mostrar todos los datos de os usuarios
    <div className="flex flex-col items-center w-full">

      <div className="flex w-full shadow-md justify-between">
        <div className="p-5 text-xl font-bold self-start">Listado Completo de Usuarios</div>
        <div className="flex">
          <Link className="flex h-14 items-center hover:text-[#003A70] pr-10" to="../guests/create">
          <HiUserAdd size={25} className="w-14"/> Agregar Usuario</Link>
        </div>
      </div>

      <div className="flex-col p-4 mt-5 w-auto max-h-[80vh] min-h-[80vh] h-4/5 shadow-lg">
        {/* <div className="flex justify-end"><SearchBar /></div> */}
        <table className="text-sm text-left rtl:text-right text-gray-700">
          {/* Estos son todos los encabezados */}
          {/* ================================================================================================= */}
          <thead className="text-xs text-white uppercase bg-[#003A70]">
            <tr className="place-content-center border-solid border-2">
              <th className="px-3 py-2 border-solid border-2"> Nombre </th>
              <th className="px-3 py-2 border-solid border-2"> Apellido </th>
              <th className="px-3 py-2 border-solid border-2"> Teléfono </th>
              <th className="px-3 py-2border-solid border-2"> E-mail </th>
              <th className="px-3 py-2  row-span-2"> País </th>
              <th className="px-3 py-2 border-solid border-2"> Nacimiento</th>
              <th className="px-3 py-2 border-solid border-2"> Documento</th>
              <th className="px-3 py-2 border-solid border-2"> Número</th>
              <th className="px-3 py-2 border-solid border-2"> Usuario </th>
              <th className="px-3 py-2 border-solid border-2"> Admin </th>
              <th className="px-3 py-2 bg-transparent border-2"></th>
            </tr>
          </thead>
          <tbody>
            {/* se iteran todos los datos de la base de datos y se distribuyen en las celdas de la tabla */}
            {/* =============================================================================================== */}
            {allusers.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-3 py-2"> <BdUserslist nameu={item.nameu} /> </td>
                <td className="px-3 py-2"> <BdUserslist lastName={item.lastName} /> </td>
                <td className="px-3 py-2"> <BdUserslist phone={item.phone} /> </td>
                <td className="px-3 py-2 max-w-48 min-w-48 truncate"> <BdUserslist email={item.email} /> </td>
                <td className="px-3 py-2"> <BdUserslist country={item.country} /> </td>
                <td className="px-3 py-2">
                  <BdUserslist DoB={item.DoB} />
                </td>
                <td className="px-3 py-2">
                  <BdUserslist docType={item.docType} />
                </td>
                <td className="px-3 py-2">
                  <BdUserslist docNum={item.docNum} />
                </td>
                <td className="px-3 py-2">
                  <BdUserslist username={item.username} />
                </td>
                <td className="flex px-3 py-2 justify-center">
                  <BdUserslist isAdmin={item.isAdmin} />
                  <input type="checkbox" checked={item.isAdmin} readOnly  />
                </td>
                <td className="px-3 py-2 space-x-3 bg-gray-100">
                  <button className="hover:shadow hover:bg-[#003A70] hover:text-white p-3 text-black">
                    {/* con este Link se pasa el codigo del usuario mediante la ruta 
              ==================================================================================================*/}
                    <Link to={"../guests/edit/" + item._id}>
                      {/* <CiEdit /> es el icono de Editar */}
                      <CiEdit />
                    </Link>{" "}
                  </button>

                  {/* este boton elinina el usuario, onclick llama la funcion de eliminar el usuario especifico
              ==================================================================================================*/}
                  <button
                    className="hover:shadow hover:bg-[#003A70] hover:text-white p-3 text-black"
                    onClick={() => confirmDeleteUser(item._id, item.nameu, item.lastName, item.email)}
                  >
                    {/* <MdDeleteForever /> es el icono para eliminar */}
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );}