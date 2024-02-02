/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useEffect, useState} from 'react';
import { RoomContext } from './RoomContext.jsx';

export const PplContext = createContext()

const PplProvider = ({ children }) => {
  const rooms = useContext(RoomContext);

  // console.log(rooms)
  // console.log(_id)

  // const [adults, setAdults] = useState( '1 Adulto' );
  // const [kids, setKids] = useState( '0 Niños' );
  // const [total, setTotal] = useState(0);

// useEffect(() => {
//   setTotal(Number(adults[0]) + Number(kids[0]));
// },[adults, kids]);

// const handleClick = (e) => {
//   e.preventDefault();
//   console.log(total)
// }
// adults, setAdults, kids, setKids, handleClick
  return (
    <PplContext.Provider value={{}}  >
      {children}
    </PplContext.Provider>
  )
};

export default PplProvider;