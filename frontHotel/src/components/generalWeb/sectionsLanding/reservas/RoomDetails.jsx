/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import { Link, useParams } from 'react-router-dom'

import AdutsDropdown from '../a_parts/AdultsDropdown'
import KidsDropdown from '../a_parts/KidsDropdown'
import Checkin from '../a_parts/CheckIn'
import Checkout from '../a_parts/CheckOut'
import ScrollToTop from '../a_parts/ScrollToTop'

import { RoomContext } from '../../../../context/RoomContext';

import { FaCheck } from 'react-icons/fa'

const RoomDetails = () => {
  const { id } = useParams()
  console.log(id)

  return (
    <div>
        <div className='flex h-screen bg-green-100 w-full p-50'>
        <div className='flex justify-center items-center uppercase font-tertiary mb-5 text-2xl h-full w-full'>
          <Link to='/bookings/rooms'>
          volver
          </Link>
        </div>
            
        </div>
    </div>
  )
};

export default RoomDetails;
