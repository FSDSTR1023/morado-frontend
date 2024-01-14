/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";


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
    link: "guests"
  },
  {
    name: "Calendario",
    icon: ImCalendar,
    link: "calendar"
  },
  {
    name: "Configuración",
    icon: FaHotel,
    link: "settings"
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
          "py-12 flex flex-col border border-r-1 w-1/5 h-[94vh] relative" +
          (isExpanded ? " px-10" : " px-4")
        }
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-5 h-5  bg-[#003A70] rounded-full absolute -right-[10.5px] top-14 flex items-center justify-center text-white hover:cursor-pointer md:cursor-auto"
        >
          {isExpanded ? (
            <MdOutlineKeyboardDoubleArrowLeft />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight />
          )}
        </div>

        <div className="flex flex-col space-y-3">
          {navlinks.map((item, index) => (
            <div
              key={index}
              className={
                "flex space-x-6 p-5 rounded hover:cursor-pointer md:cursor-auto" +
                (activeSideIndex === index
                  ? " bg-[#003A70] hover:bg-[#003A70] text-white font-semibold"
                  : " hover:bg-[#dadada] hover:text-[#003A70]")
              }
              onClick={() => setActiveSideIndex(index)}
            >
              <Link to={item.link}>
                
              <item.icon size={21} />
              <span
                className={
                  isExpanded
                    ? "block  max-md:hidden max-w-2 before:text-transparent after:text-black"
                    : "hidden max-md:hidden md:w-10 after:text-transparent"
                }
              >
                {item.name}
              </span>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SideNavDashboard;
