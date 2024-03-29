/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { LiaLanguageSolid } from "react-icons/lia";
import FotoUsuario from "../../buttons/FotoUsuario";
import { AuthContext } from "../../../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import SearchRes from '../reservas/SearchRes';

function NavBar() {
  const {user, isAdmin} = useContext(AuthContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isRegisterRoute = location.pathname === "/login/register";
  const isLoginRoute = location.pathname === "/login";
  const [showModal, setShowModal] = useState(false);

  let LinksMain = [
    { name: "Nosotros", link: "#Hotel" },
    { name: "Habitaciones", link: "#Rooms" },
    { name: "Ubicación", link: "#Location" },
    { name: "Reseñas", link: "#Review" },
    { name: "Preguntas Frecuentes", link: "#Faquestions" },
  ];
let LinksHome =[
  { name: "Inicio", link: "/" },
]

let [open, setOpen] = useState(false);

const renderMainLinks = isHomePage && (
  <div className="block  items-center md:flex pr-9">
    {LinksMain.map((link) => (
      <li key={link.name} className="md:ml-8 md:my-0 my-7 flex flex-row">
        <Link
          to={link.link}
          onClick={(e) => {
            setOpen(false);
            e.preventDefault();
            const element = document.querySelector(link.link);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-gray-800 hover:text-gray-400 duration-500"
        >
          {link.name}
        </Link>
        <div className="ml-8 hidden lg:block">|</div>
      </li>
    ))}
  </div>
);

  return (
    <div className="shadow-md w-screen fixed top-0 left-0 flex flex-col z-[300] bg-gray">
      <div>
        <div className="fixed w-full transition-all duration-300 md:flex items-center justify-between py-2 md:px-10 px-7 bg-white shadow-lg">
          <div className="md:text-xl transition-all font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <Link
            to="/#Home"
            onClick={() => setOpen(false)}
           >
            Hotel Manzanares
            </Link>
          </div>

          {isAdmin == true && (<Link to="/adminctrl" onClick={() => setOpen(false)} className="text-accent font-extrabold hover:text-green-800"
           >
            Panel de Administrador
          </Link>)}

          <div className="flex flex-row">
            <div className="md:flex md:flex-col items-center transition-all duration-500 ease-in">
              <ul
                className={`bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-10 " : "top-[-800px]"
                }`}
              >
               { !isHomePage && (
                  <div className="block  items-center md:flex pr-9">
                  {LinksHome.map((link) => (
                    <li key={link.name} className="md:ml-8 md:my-0 my-7">
                      <Link
                        to={link.link}
                        onClick={() => setOpen(false)}
                        className="text-gray-800 hover:text-gray-400 duration-500"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </div>
                )}
                {renderMainLinks}
                {/* ============================================================ */}
                
               {!user && ( 
                  <div className="flex flex-col lg:flex-row items-start lg:items-center md:flex  border-black">
                    {/* <Link to='/'className="mr-5 font-bold"> Mi Reserva </Link> */}
                      {!isLoginRoute &&(<Link to='/login' className="mr-5 font-bold border-2 px-3 bg-black text-white hover:bg-accent"> Login </Link>)}
                      {!isRegisterRoute &&(<Link to='/login/register' className="mr-5 font-bold border-2 px-3 bg-black text-white hover:bg-accent"> Registrarme </Link>)}
                    <div className="pl-5 text-3xl pr-9">
                      <LiaLanguageSolid />
                    </div>
                  </div>)}

              </ul>
            </div>
            {/*============================================================ */}
            {user && (<div className="right-10 absolute top-2 md:right-5 md:top-4">
                <FotoUsuario />
              </div>)}
          </div>

          <div className="text-3xl absolute right-2 top-3 cursor-pointer md:hidden">
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <AiOutlineClose />
              ) : (
                <CgMenuGridR name={open ? "close" : "menu"}></CgMenuGridR>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <SearchRes
          showModal={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
export default NavBar;
