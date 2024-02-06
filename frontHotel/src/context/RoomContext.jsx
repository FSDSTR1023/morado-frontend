/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useEffect, useState} from 'react';
import { getAllRooms } from '../utils/HandleApiRooms';

export const RoomContext = createContext()
export const PplContext = createContext()

const RoomProvider = ({ children }) => {
  const [allRooms, setAllRooms] = useState([]);

  const [CheckIn, setCheckIn] = useState ('')
  const [CheckOut, setCheckOut] = useState ('')

  const [adults, setAdults] = useState( '1 Adultos' );
  const [kids, setKids] = useState( '0 Niños' );
  const [total, setTotal] = useState(0);

  // const [newRes, setNewRes ] = useState(true);
  const [resRoom, setResroom ] = useState(0);

useEffect(() => {
  getAllRooms(setAllRooms);
}, []);

useEffect(() => {
  setTotal(Number(adults[0]) + Number(kids[0]));
},[adults, kids]);

const handleClick = (e) => {

  // {setNewRes(!newRes)}
//   e.preventDefault();
//   const newRooms = allRooms.filter((room) => {
//   return total <= room.maxPeople
// })
//   setAllRooms(newRooms)
}

const handleresRoom = (e) => {
  setResroom(resRoom +1)
}
console.log(resRoom)

return (
    <RoomContext.Provider value={allRooms}  >
      <PplContext.Provider value={{adults, setAdults, kids, setKids, handleClick, CheckIn, setCheckIn, CheckOut, setCheckOut, total, resRoom, setResroom, handleresRoom}}>
        {children}
      </PplContext.Provider>
    </RoomContext.Provider>
  )
};

export default (RoomProvider);
