/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function BdRooms({
  roomNum,
  title,
  roomType,
  amenities,
  rate,
  maxPeople,
  status,
  bedNum,
  bedType,
  photos,
  featured
}) {
  return (
    <div>
  {roomNum}
  {title}
  {roomType}
  {amenities}
  {rate}
  {maxPeople}
  {status}
  {bedNum}
  {bedType}
  {photos}
  {featured}
    </div>
  );
}

export default BdRooms;
