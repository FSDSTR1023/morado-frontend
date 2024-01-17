/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { getAllusers } from "../../../../utils/HandelApi.jsx";
import BdUserslist from './../users/BdUserslist.jsx'

const UsersList = () => {
  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    getAllusers(setAllusers);
  }, []);

  // const columns = [
  //   { accesorKey: "nombre", header: "Nombre" },
  //   { accesorKey: "apellido", header: "Apellido" },
  //   { accesorKey: "telefono", header: "Teléfono" },
  //   { accesorKey: "email", header: "E-mail" },
  //   { accesorKey: "pais", header: "País" },
  //   { accesorKey: "identificacion", header: "Identificación" },
  //   { accesorKey: "usuario", header: "Usuario" },
  // ];

console.log(allusers)
  return (
    <div className="list">
      {allusers.map((item) => (
        <BdUserslist 
          key={item.id} 
              name={item.name} 
              lastName={item.lastName}
              phone={item.phone}
              email={item.email}
              country={item.country}
              docType={item.docType}
              docNum={item.docNum}
              username={item.username}
        />
        
      ))}
    </div>
  )};

export default UsersList;