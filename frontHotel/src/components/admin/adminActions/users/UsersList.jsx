/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getAllusers } from "../../../../utils/HandelApi.jsx";
import BdUserslist from "./../users/BdUserslist.jsx";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UsersList = () => {

  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    getAllusers(setAllusers);
  }, []);

  // Peticion al Backend para Eliminar el registo concatenando la ruta con el Id del usuario
  // ========================================================================================================
  const deleteUser = async (id) => {
    await axios.delete("http://localhost:5000/users/" + id)
    alert(" El Usuario: " + id + " ha si do Eliminado");
    getAllusers(setAllusers);
  }

  return (
    // ==== Creación de la tabla para mostrar todos los datos de os usuarios
    <div className="p-3 w-fit h-fit  shadow">
      <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

        {/* Estos son todos los encabezados */}
        {/* ================================================================================================= */}
        <thead className="text-xs text-white uppercase bg-[#003A70]">
          <tr className="place-content-center border-solid border-2">
            <th className="px-3 py-2 border-solid border-2 row-span-2"> Nombre </th>
            <th className="px-3 py-2 border-solid border-2 row-span-2"> Apellido </th>
            <th className="px-3 py-2 border-solid border-2 row-span-2"> Teléfono </th>
            <th className="px-3 py-2border-solid border-2 row-span-2"> E-mail </th>
            <th className="px-3 py-2  row-span-2"> País </th>
            <th className="px-3 py-2 border-solid border-2 col-span-2"> Documento</th>
            <th className="px-3 py-2 border-solid border-2 col-span-2"> Número</th>
            <th className="px-3 py-2 border-solid border-2 row-span-2"> Usuario </th>
            <th className="px-3 py-2 bg-transparent border-2 row-span-2"></th>
          </tr>
        </thead>
        <tbody>

          {/* se iteran todos los datos de la base de datos y se distribuyen en las celdas de la tabla */}
          {/* =============================================================================================== */}
          {allusers.map((item) => (
          <tr  key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-3 py-2"><BdUserslist name={item.name}/></td>
            <td className="px-3 py-2"><BdUserslist lastName={item.lastName}/></td>
            <td className="px-3 py-2"><BdUserslist phone={item.phone}/></td>
            <td className="truncate px-3 py-2 max-w-48"><BdUserslist email={item.email}/></td>
            <td className="px-3 py-2"><BdUserslist country={item.country}/></td>
            <td className="px-3 py-2"><BdUserslist docType={item.docType} /></td>
            <td className="px-3 py-2"><BdUserslist docNum={item.docNum}/></td>
            <td className="px-3 py-2"><BdUserslist username={item.username}/></td>
            <td className="px-3 py-2 space-x-3 bg-gray-100">
              <button className="hover:shadow hover:bg-[#003A70] hover:text-white p-3 text-black">

              {/* con este Link se para el codigo del usuario mediante la ruta 
              ==================================================================================================*/}
              <Link to={'../guests/' + item._id }>
                {/* <CiEdit /> es el icono de Editar */}
                <CiEdit />
              </Link> </button>

              {/* este boton elinina el usuario, onclick llama la funcion de eliminar el usuario especifico
              ==================================================================================================*/}
              <button className="hover:shadow hover:bg-[#003A70] hover:text-white p-3 text-black"
              onClick={() => deleteUser(item._id)}
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
  );
};

export default UsersList;