/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import AdultsDropdown from './AdultsDropdown.jsx'
import KidsDropdown from './KidsDropdown.jsx'
import CheckIn from './CheckIn.jsx'
import CheckOut from './CheckOut.jsx'
import { RoomContext, PplContext } from '../../../../context/RoomContext.jsx';

const BookForm = () => {
  const {handleClick} = useContext(PplContext)
  return (
  <form className='h-[300px] bg-green-100 w-full lg:h-[70px]'>
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
      <button onClick={(e) => handleClick(e)} type='submit' className='btn btn-primary w-full h-full'>
        Buscar
      </button>
    </div>
  </form>
  )
};

export default BookForm;