/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import AdultsDropdown from '../a_parts/AdultsDropdown.jsx'
import KidsDropdown from '../a_parts/KidsDropdown.jsx'
import CheckIn from '../a_parts/CheckIn.jsx'
import CheckOut from '../a_parts/CheckOut.jsx'
import { RoomContext, PplContext } from '../../../../context/RoomContext.jsx';



const BookFormLight = () => {
return (
  <form className='w-full h-fit'>
    <div className='flex w-full h-full flex-col lg:flex-row'>
      <div className='flex flex-col lg:flex-row mb-3 lg:mb-0'>
          <div className='flex-1'>
            <CheckIn />
          </div>
          <div className='flex-1'>
            <CheckOut />
          </div>
      </div>
      <div className='flex flex-row'>
          <div className='flex'>
            <AdultsDropdown />
          </div>
          <div className='flex'>
            <KidsDropdown />
          </div>
      </div>
    </div>
  </form>
  )
};

export default BookFormLight;