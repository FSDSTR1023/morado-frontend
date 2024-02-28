/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import { Link, useParams } from 'react-router-dom'
import NavBar from '../a_parts/NavBar.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiArrowGoBackFill } from "react-icons/ri";

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/pagination';

import { RoomContext } from '../../../../context/RoomContext';
import { IoBedOutline, IoPeople, IoPerson } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';

const RoomDetails = () => {

  const rooms = useContext(RoomContext);
  const { id } = useParams()

  
  const ftRooms = rooms.find((ftroom) => ftroom._id === id )
  
  if (!ftRooms) {
    // Handle the case where ftRooms is not available yet
    return <div>Loading...</div>;
  }

  const amenitiesList = ftRooms.amenities.map((amenity, index) => (
    <div key={index}>
      {amenity}
    </div>
  ));

    // Muestra cada una de las fotos
  // ===================================================================
  const fotos = ftRooms.photos.map((foto, index) => (
    <div key={index}>
      <img src={foto} alt="" />
    </div>
  ));

  return (
    <div className='flex justify-center'>
        <NavBar />
        <div className='flex  flex-col h-screen w-3/5 p-50'>
        
        <div className='flex justify-end items-center mb-10 text-xl mt-48 text-accent hover:text-black hover:font-bold'>
          <Link to='/bookings/rooms' className='flex flex-row'>
          <RiArrowGoBackFill className='flex self-center'/><span className='ml-3'>Volver</span>
          </Link>
        </div>

          <div className="shadow-lg group h-auto">
<div className='flex flex-col lg:flex-row w-full'>
    <div className="">
        {/* ==== imagen =============== */}
        <div className="mb-16 bg-black/80 h-[60%]">

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-[240px]"
        >
            {fotos.map((foto, index) => (
              <SwiperSlide key={index}>
                {foto}
              </SwiperSlide>
            ))}
        </Swiper>
      
        </div>
        {/* ==== detalles ============= */}
        <div className="bg-black/80  text-white shadow-lg w-full mx-auto -translate-y-16 flex justify-center items-center font-tertiary font-semibold lg:h-[40%]">
          <div className="flex justify-evenly lg:w-full lg:flex-col ml-5">
            {/* =================    camas    ================= */}
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-2">
                Camas:
                <div className="grid grid-cols-4 lg:ml-5">
                  {(function () {
                    let camas = [];
                    for (let i = 0; i < ftRooms.bedNum; i++) {
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
                  for (let i = 0; i < ftRooms.maxPeople; i++) {
                    if (ftRooms.maxPeople == "1") {
                      return <IoPerson className="text-xl text-accent lg:ml-3 lg:drop-shadow-md lg:font-bold" />;
                    }
                    if (ftRooms.maxPeople == "2") {
                      return <IoPeople className="text-2xl text-accent lg:ml-3 lg:drop-shadow-md lg:font-bold" />;
                    }
                    if (ftRooms.maxPeople == "3") {
                      return <IoIosPeople className="text-3xl text-accent lg:ml-3 lg:drop-shadow-md lg:font-bold" />;
                    }
                    if (ftRooms.maxPeople == "4") {
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
        <Link to={"/#Rooms/" + ftRooms._id}> <h3 className="h3 border-b-2 text-accent font-extrabold drop-shadow-xl">{ftRooms.title}</h3> </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6"> {ftRooms.desc} </p>
      </div>{/* ====================== */}
        <div className="flex flex-col">
          <div className="flex justify-center flex-col lg:flex-row w-full h-1/2 lg:gap-3 px-5 mb-3 content-end">
            <div className="w-full">
              <div className="w-full font-bold text-md border-b-2">
                Servicios en la habitación
              </div>
              <div className="w-full mb-2 pl-5 lg:mb-0">
                {amenitiesList}
              </div>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className="flex flex-col w-full">
                  <div className="flex flex-row font-extrabold text-2xl justify-end text-accent">
                    <span className="mr-2">€</span>{ftRooms.rate}
                  </div>
              <div className="flex-col text-right">
                  <div className="text-gray-700">Por noche</div>
                  <div className="font-normal text-sm">Impuestos y tasas incluidos (puede aplicar un impuesto municipal adicional)</div>
              </div>
            </div>
          </div> {/* ---------------------------------------------- */}
          <div className=" flex flex-col lg:flex-row gap-5 w-full mb-3 justify-center items-center">
          
          {/* **************************************** */}
          </div>
        </div>
    </div>
</div>

</div>

          {/* ******************************************************* */}
        </div>
        </div>

  )
};

export default RoomDetails;
