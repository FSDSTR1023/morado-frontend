/* eslint-disable no-unused-vars */
import React from "react";
import { BsChevronBarRight } from "react-icons/bs";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const LinksPagesFooter = () => {
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

  let LinksTC = [
    { name: "Políticas de Privacidad", link: "/policies" },
    { name: "Términos y Condiciones", link: "/conditions" },
  ];

  return (
    <div>
      <div className="flex flex-col font-normal">
        <div className="text-center w-full font-bold mb-5 border-b-2 border-b-gray-200 pb-5 uppercase">
          Explora nuestra Web
        </div>
        <div>
          <ul className="flex flex-col pb-0 static pl-10 w-auto">
            <div className="flex flex-col border-b-2 border-b-gray-200 pb-5">
              {LinksMain.map((link) => (
                <li key={link.name} className="">
                  <a
                    href={link.link}
                    className="text-black hover:text-accent-hover duration-300 flex flex-row gap-3"
                  >
                    <RiArrowRightDoubleLine className="self-center"/>
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
            {/*============================================================ */}
            <div className="flex flex-row gap-8 border-b-2 hover:text-accent-hover p-5">
              {LinksLogin.map((link) => (
                <li key={link.name} className="">
                  <a
                    href={link.link}
                    className="text-black hover:text-accent-hover duration-300 flex flex-row gap-3"
                  >
                    <BsChevronBarRight className="self-center" />
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
            {/*============================================================ */}
            <div className="flex flex-col pt-5">
              {LinksTC.map((link) => (
                <li key={link.name} className="">
                  <a
                    href={link.link}
                    className="text-black hover:text-accent-hover duration-300 flex flex-row gap-3"
                  >
                    <RiArrowRightDoubleLine className="self-center"/>
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinksPagesFooter;
