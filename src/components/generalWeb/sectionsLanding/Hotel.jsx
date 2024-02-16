/* eslint-disable no-unused-vars */
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GaleriaHotel } from "./GaleriaHotel";

const Hotel = () => {
  return (
    <div className="my-24 lg:my-10">
      <div className="flex h-screen w-full">
        <div className="flex flex-col py-5 lg:py-0 lg:flex-row justify-center items-center font-tertiary mb-5 text-2xl h-full w-full gap-5 lg:gap-16 lg:px-16">
            <div className="flex justify-center items-center text-black p-28 top-0 w-[50%] h-[80%]">
                <div className="flex flex-col">
                <h1 className="text-center text-5xl font-extrabold mb-10">Hotel Manzanares</h1>
              <div className="self-start top-0">
                <RiDoubleQuotesL size={50} />
              </div>
              <p className="text-center drop-shadow-xl">
                Mucho más que un hotel; es un destino donde la elegancia se
                encuentra con la comodidad, creando recuerdos inolvidables para
                todos los que tienen el privilegio de alojarse en este rincón de
                lujo en medio de la ciudad
              </p>
                </div>
            </div>

          <div className="w-full pb-8 lg:pb-auto">
            <GaleriaHotel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
