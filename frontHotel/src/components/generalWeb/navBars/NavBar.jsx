/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { LiaLanguageSolid } from "react-icons/lia";
import FotoUsuario from "../buttons/FotoUsuario";

function NavBar() {
  let LinksMain = [
    { name: "Inicio", link: "#Home" },
    { name: "Habitaciones", link: "#Rooms" },
    { name: "Ubicación", link: "#Location" },
    { name: "Reseñas", link: "#Review" },
    { name: "Preguntas Frecuentes", link: "#Faquestions" },
  ];

  let LinksLogin = [
    { name: "Mi Reserva", link: "/" },
    { name: "Mi Cuenta", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 flex flex-col">
      <div>
        <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
          <div className="md:text-xl transition-all font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            Hotel Manzanares
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
          >
            <CgMenuGridR name={open ? "close" : "menu"}></CgMenuGridR>
          </div>

          <div className="flex flex-col">
            <ul
              className={`self-end md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-10 " : "top-[-490px]"
              }`}
            >
              {LinksLogin.map((link) => (
                <li key={link.name} className="md:ml-8 md:my-0 my-7">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <div className="pl-5 text-3xl pr-9">
                <LiaLanguageSolid />
              </div>
            </ul>
            <div className="flex flex-row">
              <ul
                className={`self-end md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-10 " : "top-[-490px]"
                }`}
              >
                {LinksMain.map((link) => (
                  <li key={link.name} className="md:ml-8 md:my-0 my-7">
                    <a
                      href={link.link}
                      className="text-gray-800 hover:text-gray-400 duration-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-10 pr-10">
                <FotoUsuario />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
