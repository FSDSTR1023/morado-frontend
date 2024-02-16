/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { BreadcrumbsRes } from "./BreadcrumbsRes";
import BookForm from "../a_parts/BookForm";
import { RoomContext, PplContext } from "../../../../context/RoomContext";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const ResGuests = () => {
    const { cartItems, addToCart, gName, gLastName, setGName, setGLastName, gTel, setGTel, gTypeDoc, setGTypeDoc,  gNumDoc,setGNumDoc, gExtraInfo, setGExtraInfo} = useContext(PplContext);
    const { email, setEmail} = useContext(PplContext);
    const [openAccordions, setOpenAccordions] = useState([]);
    const rooms = useContext(RoomContext);

  const handleOpen = (index) => {
    setOpenAccordions((prevOpenAccordions) => {
      const isOpen = prevOpenAccordions.includes(index);
      return isOpen ? [] : [index];
    });
  };

  return (
    <div className='mt-16 gap-1'>
      <div className="flex justify-center flex-col">
          <div className="flex justify-center items-center flex-col">
              <div className='mb-5 w-full flex justify-center '>
                <div className='shadow-lg'><BookForm /></div>
              </div>
              <div className="mb-5 w-full flex justify-center">
                <BreadcrumbsRes />
              </div>
          </div>

        {/* ================== Acordion ================== */}
        <div className="grid grid-cols-1 mx-[40px]">
            {Object.values(cartItems).map((roomId, index) => {

            const handleResGuests = (index) => {
              const userInfo = { gName, gLastName, gTel, gTypeDoc, gNumDoc, gExtraInfo};
               addToCart(room._id, roomId[1], userInfo, email); 
            };

              const room = rooms.find((room) => room._id === roomId[0]);
              const numRoom = index + 1;
              const PplDates = roomId[1];
              const x = Object.values(PplDates).length;

              if (room) {
                return (
                  <div key={index} className="mb-3">
                    <Accordion open={openAccordions.includes(index)} animate={ANIMATION} className="w-full shadow-lg text-sm">
                      <AccordionHeader onClick={() => handleOpen(index)} className="p-0 flex items-center">
                        {/* ================   encabezado con la info del cuarto  ================*/}
                        <div className="flex flex-row p-2 w-full">
                          <div className="w-[120px] mr-10">
                            <img src={room.photos} alt="" />
                          </div>
                          <div className="flex flex-col text-sm w-full">
                            <div className="border-b-2 mb-3">
                              Habitación # {numRoom}
                            </div>
                            <div className=" text-accent font-extrabold">
                              {room.title}
                            </div>
                            <div className="flex flex-col md:flex-row justify-between">
                              <div className="flex justify-start">
                                {Object.values(PplDates).map(
                                  (element, elementIndex) => (
                                    <div key={elementIndex} className="flex text-xs">
                                      {(function () {
                                        for (let i = 0; i < x - 3; i++) {
                                          if (elementIndex === 2) {
                                            return (
                                              <div className="mr-5">
                                                <span className="mr-2">Check in:</span>
                                                {new Date(element).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric", })}
                                              </div>
                                            );
                                          } if (elementIndex === 3) {
                                            return (
                                              <div>
                                                <span className="mr-2">Check in:</span>
                                                {new Date(element).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric", })}
                                              </div>
                                            );
                                          }
                                        }
                                      })()}
                                    </div>
                                  )
                                )}
                              </div>
                              <div className="flex flex-row self-end hover:text-accent-hover mt-2 md:mt-0">
                              <span className="mr-5">Datos del huésped</span>
                              <span className="items-center">{openAccordions.includes(index) ? <IoMdArrowDropdown size={20} className="mr-2" /> : <IoMdArrowDropright size={20}className="mr-2" />}</span>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </AccordionHeader>
                      <AccordionBody className="w-full px-5">
                        <form className="flex flex-col lg:flex-row lg:gap-3">

                          <div className="grid grid-cols-4 gap-3">
                            <label className="col-span-2 block text-sm leading-6 text-gray-800"> Nombre <br />
                              <input className="px-2 border border-20 shadow w-full" type="text" name="gName" value={index.gName2}
                              onChange={(e) => {setGName(e.target.value); }}/>
                            </label>
                            <label className="col-span-2 block text-sm leading-6 text-gray-800"> Apellido <br />
                              <input className="px-2 border border-20 shadow w-full" type="text" name="gLastName" value={index.gLastName2} onChange={(e) => {setGLastName(e.target.value); }}/>
                            </label>
                            <label className="col-span-4 lg:col-span-2  block text-sm leading-6 text-gray-800"> Teléfono <br />
                              <input className="px-2 border border-20 shadow w-full" type="text" name="gTel" value={index.gTel2} 
                              onChange={(e) => {setGTel(e.target.value); }}/>
                            </label>
                            <label className="col-span-2 lg:col-span-1 block text-sm leading-6 text-gray-800"> Identificación <br />
                              <input className="px-2 border border-20 shadow w-full" type="text" name="gTypeDoc"  value={index.gTypeDoc2}
                              onChange={(e) => {setGTypeDoc(e.target.value); }}/>
                            </label>
                            <label className="col-span-2 lg:col-span-1 block text-sm leading-6 text-gray-800"> <br />
                              <input className="px-2 border border-20 shadow w-full" type="text" name="gNumDoc"  value={index.gNumDoc2}
                              onChange={(e) => {setGNumDoc(e.target.value); }}/>
                            </label>
                          </div>
                          <div className="w-full lg:w-1/2">
                            <label className="block text-sm leading-6 text-gray-800"> Comentarios <br />
                              <textarea className="px-2 border-2 shadow w-full resize-none" type="text-area" name="gExtraInfo" rows="4" 
                              value={index.gExtraInfo2}
                              onChange={(e) => {setGExtraInfo(e.target.value); }}/>
                            </label>
                          </div>
                        </form>
                          <div 
                          onClick={() => {
                            handleResGuests(index)
                          }}
                          className="font-bold text-accent mt-2 pt-2 hover:text-accent-hover cursor-pointer w-full border-t-2 flex justify-end">
                            Guardar
                          </div>
                      </AccordionBody>
                    </Accordion>
                  </div>
                );
              }
            })}

        <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="mb-5 flex flex-col  w-full">
              <label htmlFor="email">Por favor, Facilite un Email para recibir la confirmación de la Reserva</label>
              <input id="email" type="email" className="w-full shadow-xl border-2 p-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="w-full flex items-center justify-end">
                <Link className='flex rounded-full shadow-xl w-[200px] justify-center bg-black text-white hover:bg-accent-hover' to={'/bookings/confirmation'}>
                Siguiente
                </Link>
            </div>
        </div>           
          </div> 
        </div>
    </div>
  );
};

export default ResGuests;
