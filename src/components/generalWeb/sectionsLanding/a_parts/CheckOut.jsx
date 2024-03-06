/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { RoomContext, PplContext } from "../../../../context/RoomContext";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";


const CheckIn = () => {
  const { checkInPrev, checkOutPrev, setCheckOutPrev } = useContext(PplContext);

  const getMinDate = () => {
    // Si hay un checkInPrev válido, calcula el día siguiente
    if (checkInPrev) {
      const nextDay = new Date(checkInPrev);
      nextDay.setDate(nextDay.getDate() + 1);

      const year = nextDay.getFullYear();
      const month = String(nextDay.getMonth() + 1).padStart(2, "0");
      const day = String(nextDay.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    }

    // Si no hay un checkInPrev válido, devuelve la fecha actual
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-row lg:flex-col w-full h-full items-center">
            <label className="pl-2 w-[150px] bg-white lg:w-full h-full font-bold flex items-center text-black border-b-0 lg:border-b-2">CheckOut:</label>
            <input className="w-full h-full self-center px-2 pl-4 cursor-text" type="date" value={checkOutPrev} min={getMinDate()}  name="checkOut" onChange={(e) => { setCheckOutPrev(e.target.value); }} />
        {/* ================================================================================== */}
      </div>
    </div>
  );
};

export default CheckIn;
