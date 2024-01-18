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
  docType,
  docNum,
  username,
}) {
  return (
    <div>
      {name}
      {lastName}
      {phone}
      {email}
      {country}
      {docType} {docNum}
      {username}
    </div>
  );
}

export default BdUserslist;
