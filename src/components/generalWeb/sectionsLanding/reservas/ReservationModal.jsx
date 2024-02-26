/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ReservationModal = ({ reservationSummary, onClose }) => {
  const creditCard = reservationSummary.creditCard;
  const resDetail = reservationSummary.resDetail;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/85 flex justify-center items-center z-10 shadow-xl">
      <div className="bg-white p-[20px] w-[70%] max-h-[90vh] mt-10 overflow-y-auto">
        <h2 className="mb-3 font-extrabold text-2xl border-b-2 bg-black text-white flex justify-center">Detalles de la Reservación</h2>
        {reservationSummary && (
          <div>
            {/* <p>Reserva ID: {reservationSummary._id}</p> */}
            {/* ... (mostrar otros detalles de la reserva según tu estructura de datos) */}

            <div className="">
              {creditCard && (
                <div>
                  <div className="ml-5">
                    <div className="flex flex-row w-full">
                        <div className="w-full">
                            <p>
                            Tarjeta: {creditCard.cardProvider}
                            {" = "}
                            {creditCard.numCard}
                            </p>
                            <p><strong>Titular:</strong> {creditCard.cardHolder}</p>
                            <p><strong>vencimiento:</strong> {creditCard.expiry}</p>
                            <p><strong>email:</strong> {reservationSummary.email}</p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <div className="flex flex-col items-center"><span>Referencia:</span><span className="font-bold text-2xl">{reservationSummary.resRef}</span></div>
                        </div>
                    </div>

                  {resDetail && resDetail.length > 0 && (
                    <div className="mt-3">
                      <strong className="text-xl">Detalle por Habitación:</strong>
                      {resDetail.map((roomReservation, index) => (
                        <div key={index} className="ml-5">
                          <div className="w-full border-b-2 flex justify-between bg-gray-100 ">
                            <span className="font-bold">Habitación #{index + 1}</span>
                            <div>
                              <span>Tarifa por Habitación:</span>
                              <span className="ml-2">
                                € {roomReservation.ratePerRoom}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-row w-full px-5">
                            <div className="w-full">
                              {/* Renderizar ResData */}
                              {roomReservation.resData && (
                                <div className="w-full">
                                  <strong className="border-b-2 mx-3 flex">Estadía:</strong>
                                  <div className="ml-5">
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
                                <div className="w-full">
                                  <strong className="border-b-2 mx-3 flex">Huésped:</strong>
                                  <div className="ml-5">
                                    <p>
                                    <strong className="mr-2">Nombre y Apellidos:</strong>
                                        {roomReservation.userInfo.gName}{" "}
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
                          <div className="px-5 border-b-2 mt-5">
                            <strong> Información Adicional: </strong>
                            <br />
                            {roomReservation.userInfo && (
                              <p className="ml-5">{roomReservation.userInfo.gExtraInfo}</p>
                            )}
                          </div>


                          <p className="flex justify-end mb-5 items-center"><strong>Subtotal:</strong><span className="ml-3 font-bold text-xl">€{roomReservation.subtotal}</span></p>
                        </div>
                      ))}
                    </div>
                  )}
                   <p className="flex justify-end items-center mt-5"><strong>Total de la Reservación:</strong><span className="ml-3 font-bold text-2xl">€{reservationSummary.totalRate}</span></p>
                   <div className="w-full flex justify-end mt-5"><span className="text-white font-bold flex justify-center text-xl cursor-pointer hover:font-extraboldbold bg-black rounded-md hover:bg-accent-hover w-52 p-1" onClick={onClose}>
          Aceptar
        </span></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;
