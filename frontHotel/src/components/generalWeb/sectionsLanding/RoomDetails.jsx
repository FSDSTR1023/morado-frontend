/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import { useParams } from 'react-router-dom'

import AdutsDropdown from './a_parts/AdultsDropdown'
import KidsDropdown from './a_parts/KidsDropdown'
import Checkin from './a_parts/CheckIn'
import Checkout from './a_parts/CheckOut'
import ScrollToTop from './a_parts/ScrollToTop'

import { RoomContext } from '../../../context/RoomContext';

import { FaCheck } from 'react-icons/fa'

const RoomDetails = () => {
  const { id } = useParams()
  console.log(id)

  return <div className='bg-pink-200'>
    
  </div>;
};

export default RoomDetails;
