/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";


// en esta parte estaba toda la estructura de la tabla
// ahora la estructura esta en UsersList.jsx
// =============================================================================
function BdUserslist({
  name,
  lastName,
  phone,
  email,
  country,
  DoB,
  docType,
  docNum,
  username,
  isAdmin
}) {
  return (
    <div>
      {name}
      {lastName}
      {phone}
      {email}
      {country}
      {DoB}
      {docType}
      {docNum}
      {username}
      {isAdmin}
    </div>
  );
}

export default BdUserslist;
