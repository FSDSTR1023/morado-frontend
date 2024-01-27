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
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <motion.div
        animate={isExpanded ? "expanded" : "nonExpanded"}
        variants={variants}
        className={
          "py-16 flex flex-col w-1/5 h-[94vh] relative bg-gray-100"
        }
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-5 h-5  bg-[#003A70] rounded-full absolute -right-[10.5px] top-6 flex items-center justify-center text-white hover:cursor-pointer md:cursor-auto "
        >
          {isExpanded ? (
            <MdOutlineKeyboardDoubleArrowLeft />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight />
          )}
        </div>

        <div>
          {navlinks.map((item, index) => (
            <div
              key={index}
              className="my-1 p-0 pl-5 pr-0 w-full h-14 rounded md:cursor-auto hover:bg-white"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) => {
                  return isActive
                    ? "hover:ease-in-out text-[#003A70] font-bold text-lg bg-white"
                    : "hover:ease-in-out  hover:bg-white  hover:text-[#003A70] hover:font-bold hover:text-lg ";
                }}
              >
                <div className="flex flex-row space-x-3 items-center">
                  <item.icon
                    size={21}
                    className={
                      "h-14 items-center block before:text-transparent "
                    }
                  />
                  <span
                    className={
                      "h-14 flex items-center " +
                      (isExpanded
                        ? " max-xl:hidden max-w-2 block"
                        : "hidden max-md:hidden md:w-10 after:text-transparent px-5")
                    }
                  >
                    {item.name}
                  </span>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SideNavDashboard;
