/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useEffect, useState} from 'react';
import { getAllRooms } from '../utils/HandleApiRooms';

export const RoomContext = createContext()
export const PplContext = createContext()
// export const ResContext = createContext()

const RoomProvider = ({ children }) => {
  const [reservedRooms, setReservedRooms] = useState([]);

  const [allRooms, setAllRooms] = useState([]);

  const [CheckInPrev, setCheckInPrev] = useState ('')
  const [CheckOutPrev, setCheckOutPrev] = useState ('')
  const [adultsPrev, setAdultsPrev] = useState( '1 Adultos' );
  const [kidsPrev, setKidsPrev] = useState( '0 Niños' );
  const [total, setTotal] = useState(0);

  const [CheckIn, setCheckIn] = useState ('')
  const [CheckOut, setCheckOut] = useState ('')
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


  const handleResGuests = () => {
    setGName2(gName)
    setGLastName2(gLastName)
    setGTel2(gTel)
    setGTypeDoc2(gTypeDoc)
    setGNumDoc2(gNumDoc);
    setGExtraInfo2(gExtraInfo)
  }

  const handleResInfo = () => {
    setAdults(adultsPrev)
    setKids(kidsPrev)
    setCheckIn(CheckInPrev)
    setCheckOut(CheckOutPrev)
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
    console.log('Adding to cart:', itemId, userData);
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: [itemId, userData, userInfo],
      };
      console.log('updatedCart ==', updatedCart);
      return updatedCart;
    });
    setReservedRooms((prevReservedRooms) => [...prevReservedRooms, itemId]);
  };  

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => {
  //     const updatedCart = { 
  //       ...prev, 
  //       [itemId]:[itemId,{adults, kids, CheckIn, CheckOut, gName2, gLastName, gTel, gTypeDoc, gNumDoc, gExtraInfo}]
  //     };
  //     console.log('updatedCart ==', updatedCart);
  //     return updatedCart;
  //   });
  //   setReservedRooms((prevReservedRooms) => [...prevReservedRooms, itemId]);
  // };
  
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

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => {
  //     const updatedCart = { 
  //       ...prev, 
  //       [itemId]:[itemId,{adults, kids, CheckIn, CheckOut, gName2, gLastName, gTel, gTypeDoc, gNumDoc, gExtraInfo}]-1
  //     };
  //     console.log('updatedCart ==', updatedCart);
  //     return updatedCart;
  //   });
  // };

  // =============< Provider Values >===============================================
// const ResInfoPrev = (adultsPrev, setAdultsPrev, kidsPrev, setKidsPrev, CheckInPrev, setCheckInPrev, CheckOutPrev, setCheckOutPrev)
// const ResInfo = (adults, setAdults, kids, setKids, CheckIn, setCheckIn, CheckOut, setCheckOut)
// const GeneralRes = (total, resRoom, setResroom, cartItems, setCartItems,  reservedRooms)
// const ResFunctions = (handleResInfo, addToCart, removeFromCart, handleResGuests)
// const ResguestInfo = (gName, SetGName, gLastName, SetGLastName,  gTel, SetGTel,  gTypeDoc, SetGTypeDoc, gNumDoc, SetGNumDoc, gExtraInfo, SetGExtraInfo)


return (
    <RoomContext.Provider value={allRooms}  >
      <PplContext.Provider value={{
        adultsPrev, setAdultsPrev, kidsPrev, setKidsPrev, CheckInPrev, setCheckInPrev, CheckOutPrev, setCheckOutPrev,
        adults, setAdults, kids, setKids, CheckIn, setCheckIn, CheckOut, setCheckOut,
        total, resRoom, setResroom, cartItems, setCartItems,  reservedRooms,
        handleResInfo, addToCart, removeFromCart,
        gName, setGName, gLastName, setGLastName,  gTel, setGTel,  gTypeDoc, setGTypeDoc, gNumDoc, setGNumDoc, gExtraInfo, setGExtraInfo,
        gName2, setGName2, gLastName2, setGLastName2,  gTel2, setGTel2,  gTypeDoc2, setGTypeDoc2, gNumDoc2, setGNumDoc2, gExtraInfo2, setGExtraInfo2
      }}>
            {children}
      </PplContext.Provider>
    </RoomContext.Provider> 
  )
};

export default RoomProvider;
