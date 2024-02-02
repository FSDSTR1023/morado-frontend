/* eslint-disable no-unused-vars */
import React from 'react'


const LinksPagesFooter = () => {

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


  return (
    <div>
        <div className="flex flex-col font-normal">
            <div>
              <ul className="flex flex-col pb-0 static p-5 w-auto" >
                <div className="flex flex-col border-b-2 border-b-gray-200 pb-5">
                  {LinksMain.map((link) => (
                    <li key={link.name} className="">
                      <a
                        href={link.link}
                        className="text-black hover:text-gray-400 duration-500"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </div>{" "}
                {/*============================================================ */}
                <div className="flex flex-col p-5">
                  {LinksLogin.map((link) => (
                    <li key={link.name} className="">
                      <a
                        href={link.link}
                        className="text-black hover:text-gray-400 duration-500"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default LinksPagesFooter