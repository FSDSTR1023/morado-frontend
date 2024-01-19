/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  MdDashboard,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { PiNotepad } from "react-icons/pi";
import { ImCalendar } from "react-icons/im";
import { FaHotel } from "react-icons/fa";
import { motion } from "framer-motion";

const navlinks = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    link: "dashboard",
  },
  {
    name: "Reservas",
    icon: PiNotepad,
    link: "bookings",
  },
  {
    name: "Huéspedes",
    icon: IoPeople,
    link: "guests",
  },
  {
    name: "Calendario",
    icon: ImCalendar,
    link: "calendar",
  },
  {
    name: "Configuración",
    icon: FaHotel,
    link: "settings",
  },
];

const variants = {
  expanded: { width: "300px" },
  nonExpanded: { width: "100px" },
};

const SideNavDashboard = () => {
  const [activeSideIndex, setActiveSideIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <motion.div
        animate={isExpanded ? "expanded" : "nonExpanded"}
        variants={variants}
        className={
          "py-12 flex flex-col border border-r-1 w-1/5 h-[94vh] relative shadow-xl  bg-gray-100" +
          (isExpanded ? " px-10" : " px-4")
        }
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-5 h-5  bg-[#003A70] rounded-full absolute -right-[10.5px] top-14 flex items-center justify-center text-white hover:cursor-pointer md:cursor-auto "
        >
          {isExpanded ? (
            <MdOutlineKeyboardDoubleArrowLeft />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight />
          )}
        </div>

        <div>
          {navlinks.map((item, index) => (
            <button // * se cambia Div por button
              key={index}
              className={
                //Estilo modificado para que el link funcione al hacer click en cualquier parte
                "my-1 p-0 pl-5 pr-0 w-full h-14 rounded hover:cursor-pointer md:cursor-auto" +
                (activeSideIndex === index
                  ? " bg-[#003A70] hover:bg-[#003A70] text-white font-semibold"
                  : " hover:bg-[#dadada] hover:text-[#003A70]")
              }
              onClick={() => setActiveSideIndex(index)}
            >
              <NavLink
              // esta funcion marca el elemento que está activo al entrar en una ruta especifica
                className={({ isActive }) => {
                  return isActive ? setActiveSideIndex(index) : "";
                }}
                to={item.link}
              >
                <div className="flex flex-row space-x-3 items-center ">
                  <item.icon size={21} className="" />
                  <span
                    // cambiado el estilo para reubicar el texto
                    className={
                      "h-14 flex items-center " +
                      (isExpanded
                        ? "block  max-md:hidden max-w-2 before:text-transparent after:text-black"
                        : "hidden max-md:hidden md:w-10 after:text-transparent")
                    }
                  >
                    {item.name}
                  </span>
                </div>
              </NavLink>
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SideNavDashboard;
