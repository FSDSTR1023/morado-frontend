/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useEffect, useState} from 'react';
// import { PplContext } from "./RoomContext";

export const ResContext = createContext()

const ResContextProvider = ({ children }) => {

//    const {adultsPrev, kidsPrev, CheckInPrev, CheckOutPrev} = useContext(PplContext)

  const [CheckIn, setCheckIn] = useState ('')
  const [CheckOut, setCheckOut] = useState ('')
  const [adults, setAdults] = useState('1 Adultos');
  const [kids, setKids] = useState( '0 Niños');

return (
      <ResContext.Provider value={{adults, setAdults, kids, setKids, CheckIn, setCheckIn, CheckOut, setCheckOut}}>
        {children}
      </ResContext.Provider>
  )
};

export default ResContextProvider;
