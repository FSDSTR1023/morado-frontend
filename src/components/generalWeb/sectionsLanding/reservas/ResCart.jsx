/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { RoomContext, PplContext } from "../../../../context/RoomContext";
import { FaChildren } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiCalendar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const ResCart = () => {
  const { cartItems, removeFromCart } = useContext(PplContext);

  const rooms = useContext(RoomContext);
  let totalGeneral = 0;

  return (
    <div>
      <div className="p-2 shadow-xl w-full mb-5">
        <div className="flex justify-center font-bold py-1 mb-2 border-b-2">
          Tu Estancia
        </div>

        {/* ////////////////////////////////////////////////////////////////////// */}
        <div>
          {Object.values(cartItems).map((roomId, index) => {
            const room = rooms.find((room) => room._id === roomId[0]);
            const rate = room.rate;
            const PplDates = roomId[1];
            const x = Object.values(PplDates).length;
            const numRoom = index + 1;
            const checkInDate = new Date(PplDates.checkIn);
            const checkOutDate = new Date(PplDates.checkOut);
            const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
            const subtotal = nights * rate;

            if (room) {
              totalGeneral += subtotal;
              return (
                <div key={index}>
                  <div className="border-b-2 bg-gray-50">
                    Habitación # {numRoom}
                  </div>
                  <div className="flex flex-col justify-between shadow-md p-2 mb-3">
                    <div className="flex flex-row">
                      <div className="text-sm w-1/2 lg:w-full border-r-2 self-end">
                        {Object.values(PplDates).map((element, elementIndex) => (
                          <div key={elementIndex}>
                            <ul className="flex w-full">
                              {(function () {
                                for (let i = 0; i < x - 3; i++) {
                                  if (elementIndex === 0) { return <li className="flex flex-row items-center"><BsFillPeopleFill className="mr-2 text-accent"/>{element}</li>; }
                                  if (elementIndex === 1) { return <li className="flex flex-row items-center"><FaChildren className="mr-2 text-accent"/>{element}</li>; }
                                  if (elementIndex === 2) { return (
                                      <li className="flex flex-row items-center"><GiCalendar className="mr-2 text-accent"/><span className="mr-3">Check in :</span>{new Date(element).toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                      })} </li>
                                    );}
                                  if (elementIndex === 3) { return (
                                      <li className="flex flex-row items-center"><GiCalendar className="mr-2 text-accent"/><span className="mr-2">Check out:</span>{new Date(element).toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                      })} </li>
                                    );}
                                }
                              })()}
                            </ul>
                          </div>
                        ))}

                      </div>
                      {/* ***************** Título de la Habitación ***************** */}
                      <div className="flex flex-col w-1/2 lg:w-[150%] ml-1">
                        <div className="flex flex-row justify-between w-full border-b-2">
                          <Link
                            to={"/#Rooms/" + room._id}
                            className=" text-accent font-extrabold self-end pl-1"
                          >
                            {room.title}
                          </Link>
                          <div className="flex flex-col">
                          <div className="flex text-gray-700 justify-end text-xs"> Por noche </div>
                          <div className="flex flex-row justify-end m-0">
                            <span className="mr-2">€</span>
                            {rate}
                          </div>
                        </div>
                        </div>
                        <div className="flex flex-row justify-between">
                          <span className="flex self-end pl-1 font-extrabold">Noches: {nights}</span>
                          <div className="flex flex-col">
                            <span className="flex text-gray-700 justify-end text-xs mt-2">Subtotal</span>
                            <strong className="flex text-accent text-2xl justify-end">€ {nights * rate}</strong>
                          </div>
                        </div>
                        {/* ******************************************************************************* */}
                      </div>
                    </div>

                    <div className="flex flex-row justify-end gap-5 border-t-2 mb-0 mt-1 font-bold text-gray-700">
                      <div className="border-r-2 pr-5 mt-1 hover:text-accent-hover cursor-pointer"
                          // onClick={() => { removeFromCart(room._id, room.adults, room.kids, room.CheckIn, room.CheckOut); }}
                        >
                        Editar
                      </div>
                      <div className="mt-1 hover:text-accent-hover cursor-pointer"
                          // onClick={() => { removeFromCart(room._id, room.adults, room.kids, room.CheckIn, room.CheckOut); }}
                          onClick={() => removeFromCart(room._id)}
                        >
                        Quitar
                      </div>
                    </div>

                  </div>



                </div>
              );
            }

            // Renderizar un mensaje de error si no se encuentra la habitación
            totalGeneral -= subtotal;
            return (
              <div key={index}>
                <p>Error: Habitación no disponible</p>
              </div>
            );
          })}
        </div>
        {/* ////////////////////////////////////////////////////////////////////// */}

        {/* Mostrar el total general al final del componente */}
        <div className="mt-3 pt-2 px-3 flex justify-between border-t-2">
        <Link className="flex justify-start hover:text-accent-hover" to="/bookings/rooms">
                    <div className=" flex justify-center items-center"><RiArrowRightDoubleLine  size={18}/></div>
                    <div className="flex-flex-row underline" >
                      Agregar habitación
                    </div>
                  </Link>
          <strong>
            Total:
            <span className="text-accent text-2xl ml-2">€ {totalGeneral}</span>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ResCart;