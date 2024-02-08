/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { LuCalendarClock } from 'react-icons/lu'
import { CambiaFecha } from '../../../../utils/CambiaFecha'
import { RoomContext, PplContext } from "../../../../context/RoomContext";

const ResDates = () => {

    const { CheckIn, CheckOut, adults, kids } = useContext(PplContext);

  return (
    <div className='m-2 shadow-md pb-3 mb-3'>
    <div className='flex justify-center font-bold py-1 mb-2 border-b-2'>
      Tu Estancia
    </div>
    <div className='flex flex-row gap-6 justify-center'>
        {/* ------------------  1  ------------------ */}
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
      </div>
        {/* ------------------  2  ------------------ */}
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
      </div>
    </div>
  </div>
  )
}

export default ResDates