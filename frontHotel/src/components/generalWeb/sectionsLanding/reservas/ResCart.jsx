/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { RoomContext, PplContext } from "../../../../context/RoomContext";
import { FaChildren } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import FilteredRoomCART from "./FilteredRoomCART";
import { CambiaFecha } from "../../../../utils/CambiaFecha";
import { Link } from "react-router-dom";

const ResCart = () => {
  const { cartItems, adults, kids, CheckIn, CheckOut } = useContext(PplContext);
  const rooms = useContext(RoomContext);
  let totalGeneral = 0;

  return (
    <div>
      <div className="p-2 shadow-xl w-full mb-5">
        <div className="flex justify-center font-bold py-1 mb-2 border-b-2">
          Tu Estancia
        </div>

        <div>
          {Object.values(cartItems).map((roomId, index) => {
            const room = rooms.find((room) => room._id === roomId[0]);

            const rate = room.rate;

            const PplDates = roomId[1];
            const x = Object.values(PplDates).length;
            const numRoom = index + 1;

            const checkInDate = new Date(PplDates.CheckIn);
            const checkOutDate = new Date(PplDates.CheckOut);
            const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
            const subtotal = nights * rate;

            if (room) {
              totalGeneral += subtotal;
              return (
                <div key={index}>
                  <div className="border-b-2 bg-gray-50">
                    Habitación # {numRoom}
                  </div>
                  <div className="flex flex-col md:flex-row justify-between shadow-md p-2 mb-3">
                    <div className="text-sm w-[40%]">
                      {Object.values(PplDates).map((element, elementIndex) => (
                        <div key={elementIndex}>
                          <ul className="flex">
                            {(function () {
                              for (let i = 0; i < x - 3; i++) {
                                if (elementIndex === 0) { return <li>{element}</li>; }
                                if (elementIndex === 1) { return <li>{element}</li>; }
                                if (elementIndex === 2) { return (
                                    <li> <span className="mr-2">Check in : </span> {CambiaFecha(element)} </li>
                                  );}
                                if (elementIndex === 3) { return (
                                    <li> <span className="mr-2">Check out:</span> {CambiaFecha(element)} </li>
                                  );}
                              }
                            })()}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* ***************** Título de la Habitación ***************** */}
                    <div className="flex flex-col w-[60%]">
                      <div className="flex flex-row justify-between w-full border-b-2">
                        <Link
                          to={"/#Rooms/" + room._id}
                          className=" text-accent font-extrabold "
                        >
                          {room.title}
                        </Link>
                        <div className="flex flex-row font-extrabold text-xl justify-end text-accent m-0">
                          <span className="mr-2">€</span>
                          {rate}
                        </div>
                      </div>
                      <div className="flex text-gray-700 justify-end text-sm">
                        Por noche
                      </div>
                      <div className="ml-3">
                        {nights} noches <span>{nights * rate}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-end mb-0 border-t-2 mt-2">
                          <div
                          // onClick={() => { removeFromCart(room._id, room.adults, room.kids, room.CheckIn, room.CheckOut); }}
                          >
                            Quitar
                          </div>
                        </div>
                      </div>
                      {/* ******************************************************************************* */}
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

        {/* Mostrar el total general al final del componente */}
        <div className="mt-3 pt-2 px-3 flex justify-end border-t-2">
          <strong>
            Total:
            <span className="text-accent text-xl ml-2">€{totalGeneral}</span>
          </strong>
        </div>
      </div>

      <div className="grid justify-items-end">
        <button className="btn btn-secondary btn-xs rounded-full">
          Completar la Reserva
        </button>
      </div>
    </div>
  );
};

export default ResCart;
