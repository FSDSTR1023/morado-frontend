/* eslint-disable no-unused-vars */
import React from 'react';
import AdultsDropdown from './AdultsDropdown.jsx'
import KidsDropdown from './KidsDropdown.jsx'
import CheckIn from './CheckIn.jsx'
import CheckOut from './CheckOut.jsx'

const BookForm = () => {
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
    </div>
  </form>
  )
};

export default BookForm;
