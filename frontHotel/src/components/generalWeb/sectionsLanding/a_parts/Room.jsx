/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";

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
  } = room;
  return (
    <div className="bg-white  shadow-2xl min-h-[500px] group">
      {/* ==== imagen =============== */}
      <div className="overflow-hidden">
        <img
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full cursor-pointer"
          src={photos}
          alt=""
        />
      </div>
      {/* ==== detalles ============= */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center font-tertiary font-semibold text-base">
        <div className="flex justify-between w-[90%]">
          {/* =================    camas    ================= */}
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              Camas:
              <div className="grid grid-cols-4">
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
                    return <IoPerson className="text-xl text-accent" />;
                  }
                  if (maxPeople == "2") {
                    return <IoPeople className="text-2xl text-accent" />;
                  }
                  if (maxPeople == "3") {
                    return <IoIosPeople className="text-3xl text-accent" />;
                  }
                  if (maxPeople == "4") {
                    return (
                      <>
                        <IoPeople className="text-2xl text-accent ml-0" />
                        <IoPeople className="text-2xl text-accent ml-0" />{" "}
                      </>
                    );
                  }
                }
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* ==== titulo y descripcion ================ */}
      <div className="text-center">
        <Link to={"/#Rooms/" + _id}>
          <h3 className="h3">{title}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {desc.slice(0, 56)}
        </p>
      </div> {/* ====================== */}
      {/* ==== Botón ================ */}
      <Link to={"/#Rooms/" + _id} className="btn btn-secondary btn-sm max-w-[240px] mx-auto self-end">
          Reserva desde €{rate}
      </Link>
    </div>
  );
};

export default Room;
