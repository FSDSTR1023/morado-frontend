/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import AdultsDropdown from './AdultsDropdown.jsx'
import KidsDropdown from './KidsDropdown.jsx'
import CheckIn from './CheckIn.jsx'
import CheckOut from './CheckOut.jsx'
import { PplContext } from '../../../../context/RoomContext.jsx';
import { Link, useLocation } from 'react-router-dom';

// const handleClick = (e) => {
  //   e.preventDefault();
  //   const newRooms = allRooms.filter((room) => {
  //   return total <= room.maxPeople
  // })
  //   setAllRooms(newRooms)
  // }
  

const BookForm = () => {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const {handleResInfo} = useContext(PplContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResInfo(); // Puedes agregar console.log aquí para depurar
  };
  
  return (
  <form onSubmit={handleSubmit}  className='h-[300px] w-full lg:h-[70px]'>
    <div className='flex flex-col w-full h-full lg:flex-row'>
      <div className='flex-1 border-r'>
        <CheckIn />
      </div>
      <div className='flex-1 border-r'>
        <CheckOut />
      </div>
      <div className='flex-1 border-r'>
        <AdultsDropdown />
      </div>
      <div className='flex-1 border-r'>
        <KidsDropdown />
      </div>
      {/* <button  className=''> */}
      <Link type='submit' className='btn btn-primary w-full h-full flex justify-center items-center' to='/bookings/rooms'>
          Buscar
      </Link>
      {/* </button> */}
    </div>
  </form>
  )
};

export default BookForm;