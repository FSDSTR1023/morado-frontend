/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useEffect, useState} from 'react';
import { getAllRooms } from '../../../utils/HandleApiRooms.jsx';


export const RoomContext = createContext()

const RoomProvider = ({ children }) => {
  const [allRooms, setAllRooms] = useState([]);

useEffect(() => {
  getAllRooms(setAllRooms);
}, []);

console.log(allRooms)

  return (
    <RoomContext.Provider value={"allRooms"}>
      {children}
    </RoomContext.Provider>
    
  )
};

export default RoomProvider;
