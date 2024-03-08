/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { getAllBookings } from "../../../../utils/HandleApiRes";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import BdBookings from "./BdBookings";
import { RoomContext }  from '../../../../context/RoomContext';

const Bookings = () => {
  const [allBookings, setAllbookings] = useState([]);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const rooms = useContext(RoomContext);

  useEffect(() => {
    getAllBookings(setAllbookings);
  }, []);

  const getRoomNumber = (roomCode) => {
    const room = rooms.find(room => room._id === roomCode);
    return room ? room.roomNum : "N/A";
  };


return (
<div className="flex flex-col w-full">

        <div className="flex w-full shadow-md p-5 text-xl font-bold self-start">Reservaciones</div>
    <div className="w-full flex justify-center items-center mt-3">
      <div className="bg-white w-full max-h-[80vh] overflow-y-auto mx-5">


        {allBookings.map((item) => (
          <div className="border-b-4 border-accent mb-3 shadow-lg" key={item._id}>
            <div className="">
                <div>
                  <div className="ml-5">
                    <div className="flex flex-row w-full">
                        <div className="w-full flex flex-row gap-10 justify-start">
                            <div className="flex flex-row"><span className="flex items-center mr-5 font-extrabold">Referencia:</span><span className="font-bold text-xl text-amber-900">{item.resRef}</span></div>
                        <p className="flex justify-start items-center"><strong>Total:</strong><span className="ml-3 font-bold text-xl pr-3">€{item.totalRate}</span></p>
                        </div>
                    </div>

                  {item.resDetail && item.resDetail.length > 0 && (
                    <div className="mt-3">
                      <strong className="text-lg">Detalle por Habitación:</strong>
                      {item.resDetail.map((roomReservation, index) => (
                        <div key={index} className="ml-5">
                          <div className="w-full border-b-2 flex flex-row justify-between bg-gray-200 pr-3">
                            <span className="font-bold pl-3">Habitación #{index + 1}</span>
                            <div className="flex flex-row gap-10 items-center">
                              <span>Tarifa por Habitación:
                              <strong className="ml-2">
                                € {roomReservation.ratePerRoom}
                              </strong></span>
                              <p className="flex justify-end  pr-3"><strong>Subtotal:</strong><span className="ml-3 font-bold text-xl">€{roomReservation.subtotal}</span></p>
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <div className="flex flex-col w-full px-5">
                              <div className="w-full">
                                {/* Renderizar ResData */}
                                {roomReservation.resData && (
                                  <div className="w-full flex flex-row border-b-2">
                                    <strong className=" mx-3 flex">Estadía:</strong>
                                    <div className="ml-5 flex flex-row gap-3">
                                      <p>
                                          <strong className="mr-2">Noches:</strong> {roomReservation.resData.nights}
                                      </p>
                                      <p>
                                          <strong className="mr-2">checkIn:</strong> {roomReservation.resData.checkIn}
                                      </p>
                                      <p>
                                          <strong className="mr-2">checkOut:</strong> {roomReservation.resData.checkOut}
                                      </p>
                                      <span className="flex flex-row gap-5">
                                          <p>
                                            <strong className="mr-2">Adultos:</strong>  {roomReservation.resData.adults[0]}
                                          </p>
                                          <p>
                                              <strong className="mr-2">Niños:</strong> {roomReservation.resData.kids[0]}
                                          </p>
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                              {/* Renderizar userInfo */}
                              <div className="w-full">
                                {roomReservation.userInfo && (
                                  <div className="w-full border-b-2 flex flex-row">
                                    <strong className=" mx-3 flex">Huésped:</strong>
                                    <div className="ml-5 flex flex-row gap-3">
                                      <p>
                                      <strong className="mr-2">Nombre y Apellidos:</strong>
                                          {roomReservation.userInfo.gName}
                                          {roomReservation.userInfo.gLastName}
                                      </p>
                                      <p>
                                          <strong className="mr-2">Identificación:</strong>
                                          {roomReservation.userInfo.gTypeDoc}
                                          {" = "}
                                          {roomReservation.userInfo.gNumDoc}
                                      </p>
                                      <p>
                                          <strong className="mr-2">Teléfono:</strong>{roomReservation.userInfo.gTel}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="px-5 w-[40%] mb-3">
                              <div className="w-full border-b-2 font-bold"> Información Adicional: </div>
                              <p className="pl-5 bg-gray-50">{roomReservation.userInfo?.gExtraInfo}</p>
                            </div>
                            </div>
                          </div>
                      ))}
                    </div>
                  )}
                  </div>
                </div>

            </div>
          </div>
          ))}

      </div>
    </div>
</div>
);
};

export default Bookings;
