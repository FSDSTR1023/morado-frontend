/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { LiaLanguageSolid } from "react-icons/lia";
import FotoUsuario from "../../buttons/FotoUsuario";

function NavBar() {
  let LinksMain = [
    { name: "Inicio", link: "/#Home" },
    { name: "Nosotros", link: "/#Hotel" },
    { name: "Habitaciones", link: "/#Rooms" },
    { name: "Ubicación", link: "/#Location" },
    { name: "Reseñas", link: "/#Review" },
    { name: "Preguntas Frecuentes", link: "/#Faquestions" },
  ];

  let LinksLogin = [
    { name: "Mi Reserva", link: "/" },
    { name: "Mi Cuenta", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 flex flex-col z-[300]">
      <div>
        <div className="fixed w-full transition-all duration-300 md:flex items-center justify-between py-2 md:px-10 px-7 bg-white">
          <div className="md:text-xl transition-all font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            Hotel Manzanares
          </div>

          <div className="flex flex-row">
            <div className="md:flex md:flex-col items-center transition-all duration-500 ease-in">
              <ul
                className={`bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-10 " : "top-[-490px]"
                }`}
              >
                <div className="block  items-center md:flex">
                  {LinksMain.map((link) => (
                    <li key={link.name} className="md:ml-8 md:my-0 my-7">
                      <a
                        href={link.link}
                        onClick={() => setOpen(false)}
                        className="text-gray-800 hover:text-gray-400 duration-500"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </div>{" "}
                {/*============================================================ */}
                <div className="block  items-center md:flex  border-black">
                  {LinksLogin.map((link) => (
                    <li key={link.name} className="md:ml-8 md:my-0 my-7">
                      <a
                        href={link.link}
                        onClick={() => setOpen(false)}
                        className="text-gray-800 hover:text-gray-400 duration-500"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <div className="pl-5 text-3xl pr-9">
                    <LiaLanguageSolid />
                  </div>
                </div>
              </ul>
            </div>
            {/*============================================================ */}
            <div className="right-10 absolute top-2 md:right-5 md:top-4">
                <FotoUsuario />
              </div>
          </div>

          <div className="text-3xl absolute right-2 top-3 cursor-pointer md:hidden">
            <div onClick={() => setOpen(!open)}>
              <CgMenuGridR name={open ? "close" : "menu"}></CgMenuGridR>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
