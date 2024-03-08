/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useEffect, useState} from 'react';
import { getAllRooms } from '../utils/HandleApiRooms';

export const RoomContext = createContext()
export const PplContext = createContext()

const RoomProvider = ({ children }) => {
  const [resReftofind, setResReftofind] = useState('');
  console.log('resReftofind=== ', resReftofind)

  const [reservedRooms, setReservedRooms] = useState([]);

  const [allRooms, setAllRooms] = useState([]);

  const [checkInPrev, setCheckInPrev] = useState ('')
  const [checkOutPrev, setCheckOutPrev] = useState ('')
  const [adultsPrev, setAdultsPrev] = useState( ' Adultos' );
  const [kidsPrev, setKidsPrev] = useState( ' Niños' );
  const [total, setTotal] = useState(0);

  const [checkIn, setCheckIn] = useState ('')
  const [checkOut, setCheckOut] = useState ('')
  const [adults, setAdults] = useState('1 Adultos');
  const [kids, setKids] = useState( '0 Niños');

  const [resRoom, setResroom ] = useState(0);

  // ================= guest info =================
  const [gName, setGName] = useState('')
  const [gLastName, setGLastName] = useState('')
  const [gTel, setGTel] = useState(0)
  const [gTypeDoc, setGTypeDoc] = useState('')
  const [gNumDoc, setGNumDoc] = useState('')
  const [gExtraInfo, setGExtraInfo] = useState('')

  const [gName2, setGName2] = useState('')
  const [gLastName2, setGLastName2] = useState('')
  const [gTel2, setGTel2] = useState(0)
  const [gTypeDoc2, setGTypeDoc2] = useState('')
  const [gNumDoc2, setGNumDoc2] = useState('')
  const [gExtraInfo2, setGExtraInfo2] = useState('')

  const [email, setEmail]= useState('')

  const handleResInfo = () => {
    setAdults(adultsPrev)
    setKids(kidsPrev)
    setCheckIn(checkInPrev)
    setCheckOut(checkOutPrev)
    setTotal(Number(adultsPrev[0]) + Number(kidsPrev[0]));
  }

useEffect(() => {
  getAllRooms(setAllRooms);
}, []);

useEffect(() => {
  setCartItems(getDefaultCart());
}, [allRooms]);


  // =============< CART >===============================================
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < allRooms.length; i++) {
      const roomId = allRooms[i].roomId;
      cart[roomId]; 
    }
    return cart;
  };
  
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId, userData, userInfo) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: [itemId, userData, userInfo],
      };

      return updatedCart;
    });
    setReservedRooms((prevReservedRooms) => [...prevReservedRooms, itemId]);
  };  

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });
    setReservedRooms((prevReservedRooms) =>
    prevReservedRooms.filter((id) => id !== itemId)
    );
  };


return (
    <RoomContext.Provider value={allRooms}  >
      <PplContext.Provider value={{ 
        adultsPrev, setAdultsPrev, kidsPrev, setKidsPrev, checkInPrev, setCheckInPrev, checkOutPrev, setCheckOutPrev,
        adults, setAdults, kids, setKids, checkIn, setCheckIn, checkOut, setCheckOut,
        total, resRoom, setResroom, cartItems, setCartItems,  reservedRooms,
        handleResInfo, addToCart, removeFromCart,
        gName, setGName, gLastName, setGLastName,  gTel, setGTel,  gTypeDoc, setGTypeDoc, gNumDoc, setGNumDoc, gExtraInfo, setGExtraInfo,
        gName2, setGName2, gLastName2, setGLastName2,  gTel2, setGTel2,  gTypeDoc2, setGTypeDoc2, gNumDoc2, setGNumDoc2, gExtraInfo2, setGExtraInfo2, email, setEmail,
        resReftofind, setResReftofind
      }}>
            {children}
      </PplContext.Provider>
    </RoomContext.Provider> 
  )
};

export default RoomProvider;
