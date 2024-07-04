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
    // ==== Creación de la tabla para mostrar todos los datos de los usuarios
    <div className="flex flex-col w-full">

        <div className="flex flex-col shadow-md md:justify-between md:flex-row w-full">
          <div className="p-2 md:p-5 text-xl font-bold items-center">Listado Completo de Usuarios</div>
          <div>
            <Link className="flex h-14 items-center hover:text-[#003A70] pr-10" to="../guests/create">
            <HiUserAdd size={25} className="w-14"/> Agregar Usuario</Link>
          </div>
        </div>

        <div className="flex-col px-1 mt-3 max-h-[80vh] min-h-[80vh] h-4/5 shadow-lg items-center w-full">
          {/* <div className="flex justify-end"><SearchBar /></div> */}
          <div className="overflow-x-auto overflow-y-auto w-full max-h-[78vh]">
            <table className="text-sm text-left text-gray-700 w-full">
              {/* Estos son todos los encabezados */}
              {/* ================================================================================================= */}
              <thead className="text-xs text-white uppercase bg-[#003A70] sticky top-0 z-1 h-8">
                <tr className="border-solid border-2 w-full">
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> Nombre </th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> Apellido </th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> Teléfono </th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> E-mail </th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> País </th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> Nacimiento</th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> Documento</th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> Número</th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> Usuario </th>
                  <th className="px-1 md:px-3 py-2 border-solid border-2 text-center"> Admin </th>
                  <th className="px-1 md:px-3 py-2 bg-white border-white border-2"></th>
                </tr>
              </thead>
              <tbody className="max-w-px">
                {/* se iteran todos los datos de la base de datos y se distribuyen en las celdas de la tabla */}
                {/* =============================================================================================== */}
                {allusers.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b"
                  >
                    <td className="px-1 md:px-3"> <BdUserslist nameu={item.nameu} /> </td>
                    <td className="px-1 md:px-3"> <BdUserslist lastName={item.lastName} /> </td>
                    <td className="px-1 md:px-3"> <BdUserslist phone={item.phone} /> </td>
                    <td className="px-1 md:px-3 max-w-48 truncate"> <BdUserslist email={item.email} /> </td>
                    <td className="px-1 md:px-3"> <BdUserslist country={item.country} /> </td>
                    <td className="px-1 md:px-3"><BdUserslist DoB={item.DoB} /> </td>
                    <td className="px-1 md:px-3"><BdUserslist docType={item.docType} /></td>
                    <td className="px-1 md:px-3"><BdUserslist docNum={item.docNum} /></td>
                    <td className="px-1 md:px-3"><BdUserslist username={item.username} /></td>
                    <td className="px-1 md:px-3">
                      <div className="flex items-center justify-center w-full h-full">
                        <BdUserslist isAdmin={item.isAdmin} />
                        <input type="checkbox" checked={item.isAdmin} readOnly />
                      </div>
                    </td> 
                    <td className="px-1 md:px-3 bg-gray-100">
                      <div className="flex flex-row">
                        <button className="hover:shadow hover:bg-[#003A70] hover:text-white px-3 py-3 md:py-0 text-black">
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
                          className="hover:shadow hover:bg-[#003A70] hover:text-white px-3 py-3 md:py-0 text-black"
                          onClick={() => confirmDeleteUser(item._id, item.nameu, item.lastName, item.email)}
                        >
                          {/* <MdDeleteForever /> es el icono para eliminar */}
                          <MdDeleteForever />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );}