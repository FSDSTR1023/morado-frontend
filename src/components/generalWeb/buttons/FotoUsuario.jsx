/* eslint-disable no-unused-vars */
import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FotoUsuario() {

  const {loading, error, user, dispatch} = useContext(AuthContext);
  const navigate = useNavigate()


  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/")
  };

  return (
      <Menu as="div" className="relative ml-3"> 
      <div>
        <Menu.Button className="w-10 h-10 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        <img
          className="h-10 w-10 rounded-full" 
          src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="perfil"
        />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4 ml-5">
              <span className="block font-bold pl-2">
                Marina Diaz
              </span>
              <span className="block pl-2 text-xs">
                marina.diaz@email.com
              </span>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div className="flex flex-row pl-2">
                  <span className="self-center"><MdOutlineSwitchAccount /></span>
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  gestionar Cuenta
                </a>
                </div>

              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex flex-row pl-2">
                  <span className="self-center"><CiSettings /></span>
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  Configuración
                </a>
                </div>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div className="flex flex-row pl-2">
                  <span className="self-center"><BiLogOutCircle /></span>
                <a
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                  onClick={handleLogout}     
                >
                  Salir
                </a>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


                

  );
}
