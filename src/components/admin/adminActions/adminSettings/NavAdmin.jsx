/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from "../../../../assets/Logo.png";
import { Link } from 'react-router-dom';

const NavAdmin = () => {
  return (
    <div className='w-screen h-[6vh] bg-[#0e2235] text-white'>
      <div className="flex justify-between items-center py-2 px-8">
        <div className='flex items-center'>
          <img src={Logo} alt="Logo" className='mr-5'/>
          <span className='ml-2'>Hotel Manzanares</span>
        </div>
        <div className='flex items-center'>
          <Link to='/'>Ver Web</Link>
        </div>
      </div>
    </div>
  );
}

export default NavAdmin

