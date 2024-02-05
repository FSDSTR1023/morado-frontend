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

const navlinks = [
  { name: "Dashboard", icon: MdDashboard, link: "dashboard" },
  { name: "Reservas", icon: PiNotepad, link: "bookings" },
  { name: "Huéspedes", icon: IoPeople, link: "guests" },
  { name: "Calendario", icon: ImCalendar, link: "calendar" },
  { name: "Habitaciones", icon: FaHotel, link: "settings" },
];

const SideNavDashboard = () => {
  const [open, setOpen] = useState(true);
  return (
    <section>
      <div
        className={`bg-gray-100 h-[94vh] ${
          open ? "w-[200px]" : "w-[80px]"
        } duration-200 pl-4 text-[#003A70] font-bold py-12 flex flex-col w-1/5 h-[94vh] relative bg-gray-100`}
      >
        <div
          className="cursor-pointer self-end w-5 h-5 bg-[#003A70] rounded-full flex items-center justify-center text-white"
          size={26}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <MdOutlineKeyboardDoubleArrowLeft />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight />
          )}
        </div>

        <div className="flex flex-col font-semibold">
          {navlinks.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) => {
                return isActive
                  ? " text-[#003A70] bg-white duration-500"
                  : " hover:bg-white hover:text-[#003A70] text-black duration-300";
              }}
            >
              <div className="flex flex-row space-x-3 items-center p-4">
                <div>
                  <item.icon size={21} className={"items-center"} />
                </div>

                <div
                  style={{
                    transitionDelay: `${index + 2}00ms`,
                  }}
                  className={`duration-500 ${
                    !open && "opacity-0 translate-x-3 overflow-hidden "
                  }`}
                >
                  {item.name}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <div>

        </div>
      </div>
    </section>
  );
};

export default SideNavDashboard;
