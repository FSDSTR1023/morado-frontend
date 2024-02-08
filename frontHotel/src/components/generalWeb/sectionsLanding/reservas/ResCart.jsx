/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { RoomContext, PplContext } from "../../../../context/RoomContext";
import { FaChildren } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
// import FilteredRoomDesign from './FilteredRoomDesign'
import FilteredRoomCART from "./FilteredRoomCART";

const ResCart = () => {
  const { cartItems, adults, kids } = useContext(PplContext);
  const rooms = useContext(RoomContext);

  // Función para encontrar la información de una habitación por su ID
  // const findRoomById = (roomId) => {
  //   return rooms.find((room) => room.id === roomId);
  // };

  return (
    <div className="m-2 shadow-lg pb-3">
      <div className="m-2 pb-3 mb-2">
        <div className="flex flex-row gap-6 justify-end">
          {/* ------------------  1  ------------------ */}
          <div className="flex flex-row gap-2">
            <div className="flex flex-row">
              <BsFillPeopleFill
                className="h-full flex self-center mr-2 text-accent/35"
                size={20}
              />
              <div className="shadow px-2">{adults}</div>
            </div>
          </div>
          {/* ------------------  2  ------------------ */}
          <div className="flex flex-row gap-2">
            <div className="flex flex-row">
              <FaChildren
                className="h-full flex self-center mr-2 text-accent/35"
                size={20}
              />
              <div className="shadow px-2">{kids}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Mapear y renderizar la información de las habitaciones en cartItems */}
        {Object.values(cartItems).map((roomId, index) => {
          const room = rooms.find((room) => room._id === roomId[0]);

          const AC_CC = roomId[1];
          const x = Object.values(AC_CC).length;

          // console.log('************************')
          // console.log('roomId', roomId[0])
          // console.log('detalles == ', AC_CC)

          // Renderizar la información de la habitación si se encuentra
          if (room) {
            return (
              <div key={index}>
                <FilteredRoomCART room={room} key={index} />

                {/* Mapear y renderizar los elementos de AC_CC */}

                {Object.values(AC_CC).map((element, elementIndex) => (
                  <div key={elementIndex} className="grid grid-cols-2 grid-row-2">
                    {/* Aquí puedes renderizar cada elemento de AC_CC como lo necesites */}
                    {/* <p>{element}</p> */}
                  <div className="flex bg-blue-gray-50-50">
                    {(function () {
                      for (let i = 0; i < x-3; i++) {
                        if (elementIndex === 0) {
                          return <p className="text-red-900">{element}</p>;
                        }
                        // if (elementIndex === 1) {
                        //   return <p className="text-green-900">{element}</p>;
                        // }
                        // if (elementIndex === 2) {
                        //   return <p className="text-orange-900 flex">Check in={element}</p>;
                        // }
                        // if (elementIndex === 3) {
                        //   return <p className="text-blue-900 flex">Check out={element}</p>;
                        // }
                      }
                    })()}
                    </div>

                    <div className="flex bg-green-50">
                    {(function () {
                      for (let i = 0; i < x-3; i++) {
                        // if (elementIndex === 0) {
                        //   return <p className="text-red-900 flex">{element}</p>;
                        // }
                        // if (elementIndex === 1) {
                        //   return <p className="text-green-900 flex">{element}</p>;
                        // }
                        // if (elementIndex === 2) {
                        //   return <p className="text-orange-900">Check in={element}</p>;
                        // }
                        if (elementIndex === 3) {
                          return <p className="text-blue-900">Check out={element}</p>;
                        }
                      }
                    })()}</div>

                  </div>
                ))}
              </div>
            );
          }
          // Renderizar un mensaje de error si no se encuentra la habitación
          return (
            <div key={index}>
              <p>Error: Habitación no disponible</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResCart;
