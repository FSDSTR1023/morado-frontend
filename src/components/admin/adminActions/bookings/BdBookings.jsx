/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function BdBookings({
  resRef,
  // resDetail,
  email,
  totalRate,
  resStatus
}) {
  return (
    <div>
  {resRef}
  {/* {resDetail} */}
  {email}
  {totalRate}
  {resStatus}
    </div>
  );
}

export default BdBookings;
