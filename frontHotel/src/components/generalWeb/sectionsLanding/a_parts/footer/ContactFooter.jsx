/* eslint-disable no-unused-vars */
import React from 'react'
import { TfiMapAlt, TfiYoutube } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { PiMapPinLineLight, PiFacebookLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTripadvisor } from "react-icons/lia";

const ContactFooter = () => {
  return (
    <div className='items-center flex flex-col'>
        <div className='text-center w-full font-bold mb-5 border-b-2 border-b-gray-200 pb-5 uppercase'>
            Contacto
        </div>
        <div className='justify-self-center w-full'>
            <ul className='w-full'>
                <li className='flex flex-row gap-4 mb-2'>
                    <MdAlternateEmail size={25} className='font-extralight text-gray-500' />
                    hmanzanares@hotelmanzanares.com.es
                </li>
                <li className='flex flex-row gap-4 mb-2'>
                    <BsTelephone size={20} className='font-extrabold text-gray-500' />
                    911 98 97 07
                </li>
                <li className='flex flex-row gap-4 mb-2'>
                    <FaWhatsapp size={25} className='font-light text-gray-500' />
                    911 95 95 03
                </li>
                <li className='flex flex-row gap-4 mb-5'>
                    <PiMapPinLineLight size={30} className='font-extrabold text-gray-500' />
                    Calle de Núñez de Balboa, 12, Salamanca, 28001 Madrid
                </li>
            
                    <div className='flex' >
                        <a href="#Location" className='btn btn-secondary btn-xs mx-auto gap-5 rounded-full shadow-xl'>
                            Ver mapa<TfiMapAlt />
                        </a>
                    </div>
          
                <div className='w-full flex flex-row justify-center gap-3 text-xl mt-5'>
                    <a href="https://es-es.facebook.com/" target="blank">
                        <PiFacebookLogo className='rounded-full shadow-lg cursor-pointer outline-1 bg-white w-7 h-7 p-1 hover:bg-blue-800 hover:text-white hover:scale-110 duration-200 ease-in-out' />
                    </a>
                    <a href="https://www.instagram.com/" target="blank">
                        <FaInstagram className='rounded-full shadow-lg cursor-pointer outline-1 bg-white w-7 h-7 p-1 hover:bg-orange-600 hover:text-white hover:scale-110 duration-200 ease-in-out'/>
                    </a>
                    <a href="https://www.pinterest.es/" target="blank">
                        <FaPinterestP className='rounded-full shadow-lg cursor-pointer outline-1 bg-white w-7 h-7 p-1 hover:bg-[#FF0000] hover:text-white hover:scale-110 duration-200 ease-in-out'/>
                    </a>
                    <a href="https://twitter.com/" target="blank">
                        <RiTwitterXLine className='rounded-full shadow-lg cursor-pointer outline-1 bg-white w-7 h-7 p-1 hover:bg-black hover:text-white hover:scale-110 duration-200 ease-in-out'/>
                    </a>
                    <a href="https://www.youtube.com/" target="blank">
                        <TfiYoutube className='rounded-full shadow-lg cursor-pointer outline-1 bg-white w-7 h-7 p-1 hover:bg-[#FF0000] hover:text-white hover:scale-110 duration-200 ease-in-out'/>
                    </a>
                    <a href="https://www.tripadvisor.es/" target="blank">
                        <LiaTripadvisor className='rounded-full shadow-lg cursor-pointer outline-1 bg-white w-7 h-7 p-1 hover:bg-green-800 hover:text-white hover:scale-110 duration-200 ease-in-out'/>
                    </a>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default ContactFooter