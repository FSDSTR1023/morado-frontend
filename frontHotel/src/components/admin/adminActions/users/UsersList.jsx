/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getAllusers } from "../../../../utils/HandelApi.jsx";
import BdUserslist from "./../users/BdUserslist.jsx";

const UsersList = () => {
  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    getAllusers(setAllusers);
  }, []);

  console.log(allusers);
  return (
    // ==== Creación de la tabla para mostrar todos los datos de os usuarios
    <div>
      <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

        {/* Estos son todos los encabezados */}
        {/* ================================================================================================= */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="place-content-center border-solid border-2">
            <th className="px-6 py-3 border-solid border-2 row-span-2"> Nombre </th>
            <th className="px-6 py-3 border-solid border-2 row-span-2"> Apellido </th>
            <th className="px-6 py-3 border-solid border-2 row-span-2"> Teléfono </th>
            <th className="px-6 py- border-solid border-2 row-span-2"> E-mail </th>
            <th className="px-6 py-3  row-span-2"> País </th>
            <th className="px-6 py-3 border-solid border-2 col-span-2"> Documento</th>
            <th className="px-6 py-3 border-solid border-2 col-span-2"> Número</th>
            <th className="px-6 py-3 border-solid border-2 row-span-2"> Usuario </th>
          </tr>
        </thead>
        <tbody>

          {/* se iteran todos los datos de la base de datos y se distribuyen en las celdas de la tabla */}
          {/* =============================================================================================== */}
          {allusers.map((item) => (
          <tr  key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-3"><BdUserslist name={item.name}/></td>
            <td className="px-6 py-3"><BdUserslist lastName={item.lastName}/></td>
            <td className="px-6 py-3"><BdUserslist phone={item.phone}/></td>
            <td className="px-6 py-3"><BdUserslist email={item.email}/></td>
            <td className="px-6 py-3"><BdUserslist country={item.country}/></td>
            <td className="px-6 py-3 flex space-x-3"><BdUserslist docType={item.docType} /></td>
            <td className="px-6 py-3"><BdUserslist docNum={item.docNum}/></td>
            <td className="px-6 py-3"><BdUserslist username={item.username}/></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;



{/* <BdUserslist
key={item._id}
name={item.name}
lastName={item.lastName}
phone={item.phone}
email={item.email}
country={item.country}
docType={item.docType}
docNum={item.docNum}
username={item.username}
/> */}