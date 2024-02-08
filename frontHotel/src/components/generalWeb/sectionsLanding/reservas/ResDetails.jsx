/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { RoomContext, PplContext } from "../../../../context/RoomContext";
import { CambiaFecha } from '../../../../utils/CambiaFecha';
import { LuCalendarClock } from "react-icons/lu";
import ResDates from "./ResDates";
import ResCart from "./ResCart";

const ResDetails = () => {

const { CheckIn, CheckOut, adults, kids } = useContext(PplContext);

return (
      <div className='w-full mt-16 flex justify-center items-center'>
        <div className='w-full h-full shadow-xl mt-3 bg-white border-2'>
{/* ***************************************************************************************************** */}
          <ResDates />
{/* ***************************************************************************************************** */}
          <ResCart />


        </div>
      </div>
  )
}

export default ResDetails;