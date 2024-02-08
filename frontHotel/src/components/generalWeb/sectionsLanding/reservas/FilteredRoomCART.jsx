/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
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
    featured
  } = room;

  const amenitiesList = room.amenities.map((amenity, index) => (
    <div key={index}>
      {amenity}
    </div>
  ));

  const {addToCart, removeFromCart} = useContext(PplContext)

  return (
    <div className="shadow-lg group">

      <div className='flex flex-col lg:flex-row'>
          <div className="">
          </div>
          <div className="lg:w-[80%] lg:justify-center">
            {/* ==== titulo y descripcion ================ */}
            <div className="lg:flex-col text-center">
              <Link to={"/#Rooms/" + _id}> <h3 className="h3 border-b-2 text-accent font-extrabold drop-shadow-xl">{title}</h3> </Link>
              <p className="max-w-[300px] mx-auto mb-3 lg:mb-6"> {desc} </p>
            </div>{/* ====================== */}
              <div className="flex flex-col">
                <div className="flex justify-center flex-col lg:flex-row w-full h-1/2 lg:gap-3 px-5 mb-3 content-end">
                  {/* ------------------------------------------------------------- */}
                  <div className="flex flex-col w-full">
                        <div className="flex flex-row font-extrabold text-2xl justify-end text-accent">
                          <span className="mr-2">€</span>{rate}
                        </div>
                    <div className="flex-col text-right">
                        <div className="text-gray-700">Por noche</div>
                    </div>
                  </div>
                </div> {/* ---------------------------------------------- */}
                <div className=" flex flex-col lg:flex-row gap-5 w-full mb-3 justify-center items-center">
                  <div className="w-full flex justify-center mx-5">
                    <button
                    onClick={()=>{removeFromCart(room._id)}}
                    className="btn btn-secondary btn-xs rounded-full shadow-xl">
                      Quitar
                    </button>
                  </div>
                {/* **************************************** */}
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Room;
