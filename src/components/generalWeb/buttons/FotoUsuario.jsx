/* eslint-disable no-unused-vars */
import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { AuthContext } from '../../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import { PiUserCircleDuotone } from "react-icons/pi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FotoUsuario() {

  const {loading, error, user, email, username, isAdmin, dispatch} = useContext(AuthContext);
  const navigate = useNavigate()

// console.log('user==', user)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/")
  };

  return (
      <Menu as="div" className="relative ml-3"> 
      <div>
        <Menu.Button className="w-10 h-10 relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        {/* <img
          className="h-10 w-10 rounded-full" 
          src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="perfil"
        /> */}
        <PiUserCircleDuotone className="h-10 w-10 rounded-full"/>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4 shadow-md">
              <span className="block font-bold text-xl">
                {username}
              </span>
              <span className="block text-xs">
                {email}
              </span>
          </div>
          {/* <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div className="flex flex-row pl-2">
                  <span className="self-center"><MdOutlineSwitchAccount /></span>
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 cursor-pointer text-sm w-full"
                  )}
                >
                  Gestionar Cuenta
                </Link>
                </div>

              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex flex-row pl-2">
                  <span className="self-center"><CiSettings /></span>
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm cursor-pointer w-full"
                  )}
                >
                  Configuración
                </Link>
                </div>
              )}
            </Menu.Item>
          </div> */}
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div className="flex flex-row pl-2">
                  <span className="self-center"><BiLogOutCircle /></span>
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm cursor-pointer w-full"
                  )}
                  onClick={handleLogout}     
                >
                  Salir
                </Link>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


                

  );
}
