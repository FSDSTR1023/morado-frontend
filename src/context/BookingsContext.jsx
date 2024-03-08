/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useEffect, useState} from 'react';
import { getAllBookings } from '../utils/HandleApiRes';

export const BookingsContext = createContext()

const BookingsProvider = ({ children }) => {
    const [allBookings, setAllbookings] = useState([]);
    
    useEffect(() => {
      console.log('useEffect en BookingsProvider ejecutado bookings == ', allBookings);
      getAllBookings(setAllbookings);
    }, []);

return (
    <BookingsContext.Provider value={{allBookings, setAllbookings}}  >
            {children}
    </BookingsContext.Provider> 
  )
};

export default BookingsProvider;
