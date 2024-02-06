/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { RoomContext, PplContext } from "../../../../context/RoomContext";
import { CambiaFecha } from '../../../../utils/CambiaFecha';
import { LuCalendarClock } from "react-icons/lu";

const ResDetails = () => {

const { CheckIn, CheckOut, adults, kids } = useContext(PplContext);

return (
      <div className='w-full mt-16 flex justify-center items-center'>
        <div className='w-full h-full shadow-xl mt-3 bg-white border-2'>
{/* ***************************************************************************************************** */}
          <div className='m-2 shadow-lg pb-3 mb-3'>
            <div className='flex justify-center font-bold py-1 mb-2 border-b-2'>
              Tu Estancia
            </div>
            <div className='flex flex-row gap-6 justify-center'>
              <div className="flex flex-col gap-2">
                <div className="font-bold border-b-2"> Check in: </div>
                <div className="flex flex-row">
                <LuCalendarClock className="h-full flex self-center mr-2 text-accent/35" size={20}/>
                  <div className="shadow px-2">
                    {CambiaFecha(CheckIn)}
                  </div>
                  <div className="shadow px-2">
                    13:00
                  </div>
                </div>
                {/* ----------------------------------------- */}
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold border-b-2"> Check out: </div>
                <div className="flex flex-row">
                  <LuCalendarClock className="h-full flex self-center mr-2 text-accent/35" size={20}/>
                  <div className="shadow px-2"> 
                    {CambiaFecha(CheckOut)}
                  </div>
                  <div className="shadow px-2">
                    11:00
                  </div>
                </div>
                {/* ----------------------------------------- */}
              </div>
            </div>
          </div>
{/* ***************************************************************************************************** */}
          <div className='m-2 shadow-lg pb-3'>
              hola
          </div>


        </div>
      </div>
  )
}

export default ResDetails;