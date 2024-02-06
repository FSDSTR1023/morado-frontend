/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import AdultsDropdown from './AdultsDropdown.jsx'
import KidsDropdown from './KidsDropdown.jsx'
import CheckIn from './CheckIn.jsx'
import CheckOut from './CheckOut.jsx'
import { RoomContext, PplContext } from '../../../../context/RoomContext.jsx';
import { Link } from 'react-router-dom';

// const handleClick = (e) => {
  //   e.preventDefault();
  //   const newRooms = allRooms.filter((room) => {
  //   return total <= room.maxPeople
  // })
  //   setAllRooms(newRooms)
  // }
  

const BookForm = () => {
  const {handleClick} = useContext(PplContext)

  return (
  <form className='h-[300px] bg-white w-full lg:h-[70px]'>
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
      <button type='submit' className='btn btn-primary w-full h-full'>
      <Link className='w-full h-full flex justify-center items-center' to='/bookings/rooms'>
          Buscar
      </Link>
      </button>
    </div>
  </form>
  )
};

export default BookForm;