/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function BdUserslist({
  nameu,
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
      {nameu}
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
