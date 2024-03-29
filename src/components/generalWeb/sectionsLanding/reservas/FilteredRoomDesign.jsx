/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { PplContext } from "../../../../context/RoomContext";
import { AuthContext } from "../../../../context/AuthContext";
import { useLocation } from 'react-router-dom';

const Room = ({ room }) => {
  const [connectedUsers, setConnectedUsers] = useState(0);
  const {user} = useContext(AuthContext);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate()
  const {addToCart, removeFromCart, adultsPrev, kidsPrev, checkInPrev, checkOutPrev, reservedRooms} = useContext(PplContext)
  const location = useLocation();

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

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
  
 const isRoomReserved = reservedRooms.includes(_id);


  if (isRoomReserved) {
    return null;
  }

  const checkInDate = new Date(checkInPrev);
  const checkOutDate = new Date(checkOutPrev);
  const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);


  const userData = {
    adults: adultsPrev,
    kids: kidsPrev,
    checkIn: checkInPrev,
    checkOut: checkOutPrev,
    nights: nights,
  };

  const handleReservation = () => {
    if (user) {
      if (room && room._id) {
        addToCart(room._id, userData);
        setTimeout(() => {
          const redirectPath = location.pathname; // Obtener la ruta actual
          navigate("/bookings/guests", { state: { from: redirectPath } });
        }, 100);
      }
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        if (!user) {
          const redirectPath = location.pathname; // Obtener la ruta actual
          console.log('redirectPath == ', redirectPath)
          navigate("/login", { state: { from: redirectPath } });
        }
      }, 2000);
    }
  };

  return (
    <div className="shadow-lg group">
      <div className='flex flex-col lg:flex-row w-full'>
          <div className="">
              {/* ==== imagen =============== */}
              <div className="overflow-hidden w-full h-full">
                <img
                  className="object-cover group-hover:scale-105 transition-all duration-300 lg:w-[250px] lg:h-full cursor-pointer"
                  src={photos[0]}
                  alt=""
                />
              </div>
              {/* ==== detalles ============= */}
              <div className="bg-white lg:bg-black/80 lg:text-white shadow-lg lg:shadow-xl max-w-[300px] mx-auto h-[60px] -translate-y-1/2 lg:-translate-y-16 flex justify-center items-center font-tertiary font-semibold text-base">
                <div className="flex justify-between w-[90%] lg:w-full lg:flex-col lg:ml-5">
                  {/* =================    camas    ================= */}
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-2">
                      Camas:
                      <div className="grid grid-cols-4 lg:ml-5">
                        {(function () {
                          let camas = [];
                          for (let i = 0; i < bedNum; i++) {
                            camas.push(
                              <IoBedOutline key={i} className="text-accent" />
                            );
                          }
                          return camas;
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* =============    Room Capacity    ============= */}
                  <div className="flex items-center gap-x-5">
                    <div className="flex items-center">
                      <span className="mr-1">Personas:</span>
                      {(function () {
                        for (let i = 0; i < maxPeople; i++) {
                          if (maxPeople == "1") {
                            return <IoPerson className="text-xl text-accent lg:ml-3 lg:drop-shadow-md lg:font-bold" />;
                          }
                          if (maxPeople == "2") {
                            return <IoPeople className="text-2xl text-accent lg:ml-3 lg:drop-shadow-md lg:font-bold" />;
                          }
                          if (maxPeople == "3") {
                            return <IoIosPeople className="text-3xl text-accent lg:ml-3 lg:drop-shadow-md lg:font-bold" />;
                          }
                          if (maxPeople == "4") {
                            return (
                              <>
                                <IoPeople className="text-2xl text-accent ml-0 lg:ml-3 lg:drop-shadow-md lg:font-bold" />
                                <IoPeople className="text-2xl text-accent ml-0 lg:ml-3 lg:drop-shadow-md lg:font-bold" />
                              </>
                            );
                          }
                        }
                      })()}
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="lg:w-[80%] lg:justify-center">
            {/* ==== titulo y descripcion ================ */}
            <div className="lg:flex-col text-center">
              <Link to={"/#Rooms/" + _id}> <h3 className="h3 border-b-2 text-accent font-extrabold drop-shadow-xl">{title}</h3> </Link>
              <p className="max-w-[300px] mx-auto mb-3 lg:mb-6"> {desc} </p>
            </div>{/* ====================== */}
              
              {/* ==== Botón ================ */}
              {/* <Link to={"/#Rooms/" + _id} className="btn btn-secondary btn-sm max-w-[240px] mx-auto self-end">
                  Reserva desde €{rate}
                </Link> */}
              <div className="flex flex-col">
                <div className="flex justify-center flex-col lg:flex-row w-full h-1/2 lg:gap-3 px-5 mb-3 content-end">
                  <div className="w-full">
                    <div className="w-full font-bold text-md border-b-2">
                      Servicios en la habitación
                    </div>
                    <div className="w-full mb-2 pl-5 lg:mb-0">
                      {amenitiesList.slice(0, 3)}
                    </div>

                  </div>
                  {/* ------------------------------------------------------------- */}
                  <div className="flex flex-col w-full">
                        <div className="flex flex-row font-extrabold text-2xl justify-end text-accent">
                          <span className="mr-2">€</span>{rate}
                        </div>
                    <div className="flex-col text-right">
                        <div className="text-gray-700">Por noche</div>
                        <div className="font-normal text-sm">Impuestos y tasas incluidos (puede aplicar un impuesto municipal adicional)</div>
                    </div>
                  </div>
                </div> {/* ---------------------------------------------- */}
                <div className=" flex flex-col lg:flex-row gap-5 w-full mb-3 justify-center items-center">
                  <Link className="w-full flex justify-start hover:text-accent-hover" to={"/roomdetails/" + room._id}>
                    <div className=" flex justify-center items-center mx-2"><RiArrowRightDoubleLine  size={18}/></div>
                    <div className="flex-flex-row underline" >
                      Detalle de la habitación
                    </div>
                  </Link>
                
                  <div className="w-full flex justify-center mx-5">
                    {showMessage ? (
                      <div className="text-red-500">Para reservar, necesita estar autenticado.</div>
                    ) : (
                      <Link
                      onClick={handleReservation}
                      className="btn btn-secondary btn-xs rounded-full shadow-xl"
                      // to="/bookings/guests"
                      >
                        Reservar
                      </Link>
                    )}
                  </div>
                {/* **************************************** */}
                {/* <div className="w-full flex justify-center">
                  <p>{`Usuarios Conectados: ${connectedUsers}`}</p>
                </div> */}
                </div>
              </div>
          </div>
      </div>
{/* to={"/roomdetails/" + room._id}  */}
    </div>
  );
};

export default Room;