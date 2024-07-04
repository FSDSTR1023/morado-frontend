/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getAllRooms } from "../../../../utils/HandleApiRooms.jsx";
import BdRooms from "./BdRooms.jsx";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiUserAdd } from "react-icons/hi";

  export default function UsersList() {

  const [allRooms, setAllRooms] = useState([]);
  const urlRooms = import.meta.env.VITE_BACKEND_ROOM_URL;

  useEffect(() => {
    getAllRooms(setAllRooms);
  }, []);

  // Peticion al Backend para Eliminar el registo concatenando la ruta con el Id del usuario
  // ========================================================================================================
  const deleteRoom = async (id) => {
    await axios.delete(`${urlRooms}/${id}`)
    alert(" La Habitación: " + id + " ha sido Eliminada");
    getAllRooms(setAllRooms);
  }

  const confirmDeleteRoom = (id, title, roomNum) => {
    const shouldDelete = window.confirm(`¿Estás seguro de que deseas eliminar la habitación:\n ${title}\n${roomNum}?\n`);
    if (shouldDelete) {
      deleteRoom(id);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">

      <div className="flex flex-col shadow-md md:justify-between md:flex-row w-full">
        <div className="p-2 md:p-5 text-xl font-bold items-center">Listado Completo de Habitaciones</div>
        <div>
          <Link className="flex h-14 items-center hover:text-[#003A70] pr-10" to="../habitaciones/create">
          <HiUserAdd size={25} className="w-14"/> Agregar Habitación</Link>
        </div>
      </div>

      <div className="flex-col px-1 mt-3 max-h-[80vh] min-h-[80vh] h-4/5 shadow-lg items-center w-full">
          <div style={{ overflowY: 'auto' }} className="max-h-[75vh]">
        <table className="text-sm text-left text-gray-700 w-full">
          {/* Estos son todos los encabezados */}
          {/* ================================================================================================= */}
          <thead className="text-xs text-white uppercase bg-[#003A70] sticky top-0 z-1 h-8">
            <tr className="place-content-center border-solid border-2">
              <th className="px-3 py-2 bg-white border-white border-2">  </th>
              <th className="px-3 py-2 border-solid border-2"> Nº </th>
              <th className="px-3 py-2 border-solid border-2"> Título </th>
              <th className="px-3 py-2 border-solid border-2"> Tipo </th>
              <th className="px-3 py-2 border-solid border-2"> Precio </th>
              <th className="px-3 py-2 border-solid border-2"> Ocupación </th>
              <th className="px-3 py-2 border-solid border-2"> Estado </th>
              <th className="px-3 py-2 border-solid border-2"> Camas</th>
              <th className="px-3 py-2 border-solid border-2"> Tipo</th>
              <th className="px-3 py-2 border-solid border-2"> Destacado</th>
              <th className="px-3 py-2 bg-white border-white border-2"></th>
            </tr>
          </thead>
          <tbody >
            {/* se iteran todos los datos de la base de datos y se distribuyen en las celdas de la tabla */}
            {/* =============================================================================================== */}
            {allRooms.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-3 py-2">
                  <div className="flex items-end justify-center">
                    {item.photos && item.photos.length > 0 && (
                        <div className="relative">
                          <img
                            src={item.photos[0]}
                            alt="Room"
                            className="min-w-12 max-h-12 w-12 h-12 object-cover transition-transform transform hover:scale-125"
                          />
                        </div>
                      )}
                  </div>
                </td>
                <td className="px-3 py-2">
                  <div className="flex items-end justify-center w-full h-full">
                    <BdRooms roomNum={item.roomNum} />
                  </div>
                </td>
                <td className="px-3 py-2"> <BdRooms title={item.title} /> </td>
                <td className="px-3 py-2"> <BdRooms roomType={item.roomType} /> </td>
                <td className="px-3 py-2">
                  <div className="flex items-end justify-center w-full h-full">
                    <BdRooms rate={`€ ` + item.rate} /> 
                  </div>
                </td>
                <td className="px-3 py-2"> 
                  <div className="flex items-center justify-center w-full h-full">
                    <BdRooms maxPeople={item.maxPeople} />
                  </div>
                </td>
                <td className="px-3 py-2"> <BdRooms status={item.status} /> </td>
                <td className="px-3 py-2"> 
                  <div className="flex items-center justify-center w-full h-full">
                    <BdRooms bedNum={item.bedNum} /> 
                  </div>
                </td>
                <td className="px-3 py-2"> <BdRooms bedType={item.bedType} /> </td>
                <td className="px-3 py-2"> 
                  <div className="flex items-center justify-center w-full h-full">
                    <BdRooms featured={item.featured} />
                    <input type="checkbox" checked={item.featured} readOnly  />
                  </div>
                </td>

                <td className="px-1 md:px-3 bg-gray-100">
                  <div className="flex flex-row justify-center">
                    <button className="hover:shadow hover:bg-[#003A70] hover:text-white p-3 text-black">
                      {/* con este Link se pasa el codigo del usuario mediante la ruta 
                ==================================================================================================*/}
                      <Link to={"../habitaciones/edit/" + item._id}>
                        {/* <CiEdit /> es el icono de Editar */}
                        <CiEdit />
                      </Link>{" "}
                    </button>

                    {/* este boton elinina el usuario, onclick llama la funcion de eliminar el usuario especifico
                ==================================================================================================*/}
                    <button
                      className="hover:shadow hover:bg-[#003A70] hover:text-white p-3 text-black"
                      onClick={() => confirmDeleteRoom(item._id, item.roomNum, item.title)}
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