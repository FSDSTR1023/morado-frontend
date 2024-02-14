/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { PplContext } from "../../../../context/RoomContext";

const Room = ({ room }) => {
  const {
    _id,
    roomNum,
    title,
    isSuite,
    roomType,
    desc,
    amenities,
    rate,
    maxPeople,
    status,
    bedNum,
    bedType,
    photos,
    featured,
  } = room;

  const amenitiesList = room.amenities.map((amenity, index) => (
    <div key={index}>{amenity}</div>
  ));

  const { removeFromCart } = useContext(PplContext);

  // // Estado para almacenar los valores de rate
  // const [totalRates, setTotalRates] = useState([]);

  // useEffect(() => {
  //   // Actualizar el estado cuando cambia la propiedad rate
  //   setTotalRates((prevRates) => [...prevRates, rate]);
  // }, [rate]);

  return (
    <div className="group h-full">

      <div className="flex flex-col">

        <div>
          <Link to={"/#Rooms/" + _id}>
            <h3 className=" text-accent font-extrabold border-b-2 mb-2">
              {title}
            </h3>
          </Link>
        </div>

        <div>
          <div className="flex flex-row font-extrabold text-xl justify-end text-accent m-0">
            <span className="mr-2">€</span>
            {rate}
          </div>
          <div className="flex text-gray-700 justify-end m">Por noche</div>
        </div>
      </div>

        <div className="flex justify-end mb-0 border-t-2 mt-2">
          <div onClick={() => { removeFromCart(room._id, room.adults, room.kids, room.CheckIn, room.CheckOut); }} >
            Quitar
          </div>
        </div>
    </div>
  );
};

export default Room;
