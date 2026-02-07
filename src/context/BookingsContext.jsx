/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { getAllBookings } from '../utils/HandleApiRes';

export const BookingsContext = createContext();

const BookingsProvider = ({ children }) => {
  const [allBookings, setAllBookings] = useState([]);

useEffect(() => {
  const fetchBookings = async () => {
    try {
      console.log('useEffect ejecutado: obteniendo reservas...');
      const data = await getAllBookings();
      setAllBookings(data);
    } catch (error) {
      console.error('Error al obtener reservas:', error);
    }
  };

  fetchBookings();
}, []);

  return (
    <BookingsContext.Provider value={{ allBookings, setAllBookings }}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsProvider;