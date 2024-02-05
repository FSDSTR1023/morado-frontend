/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { RoomContext, PplContext } from "../../../../context/RoomContext";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

const CheckIn = () => {
  const { CheckOut, setCheckOut } = useContext(PplContext);

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-row lg:flex-col w-full h-full items-center">
            <label className="pl-2 w-[150px] lg:w-full h-full font-bold flex items-center text-black border-b-0 lg:border-b-2">Check-Out:</label>
            <input className="w-full h-full self-center px-2 pl-4 cursor-text" type="date" value={CheckOut} name="CheckOut" onChange={(e) => { setCheckOut(e.target.value); }} />
        {/* ================================================================================== */}
      </div>
    </div>
  );
};

export default CheckIn;
