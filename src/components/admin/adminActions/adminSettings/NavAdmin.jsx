/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Logo from "../../../../assets/Logo.png";
import { Link } from 'react-router-dom';
import FotoUsuario from '../../../generalWeb/buttons/FotoUsuario';
import { AuthContext } from '../../../../context/AuthContext';

const NavAdmin = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='w-screen h-[6vh] bg-[#0e2235] text-white'>
      <div className="flex justify-between items-center py-2 px-8">
        <div className='flex items-center'>
          <img src={Logo} alt="Logo" className='mr-5'/>
          <span className='ml-2'>Hotel Manzanares</span>
        </div>
        <div className='flex items-center'>
          <Link to='/' className='pr-12'>Ver Web</Link>
          {user && (<div className="right-2 absolute top-2 md:right-5 md:top-4 text-black">
                <FotoUsuario />
              </div>)}
        </div>
      </div>
    </div>
  );
}

export default NavAdmin

