/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from "./../../assets/Logo.png";

const NavAdmin = () => {
  return (
    <div className='w-screen h-[6vh] bg-black text-white'>
        <div className="logo-div flex space-x-8 items-center py-2 px-8">
            <img src={Logo} />
            <span>Hotel Manzanares</span>
      </div>
    </div>
  )
}

export default NavAdmin