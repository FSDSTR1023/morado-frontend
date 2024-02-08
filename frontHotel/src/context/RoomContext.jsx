/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useEffect, useState} from 'react';
import { getAllRooms } from '../utils/HandleApiRooms';

export const RoomContext = createContext()
export const PplContext = createContext()
// export const ResContext = createContext()

const RoomProvider = ({ children }) => {

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
      cart[roomId, adultsPrev, kidsPrev]; 
    }
    return cart;
  };
  
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { 
        ...prev, 
        [itemId]:[itemId,{adults, kids, CheckIn, CheckOut}]
        
        // {itemId,
        //   adultsPrev,
        //   kidsPrev,
        //   CheckInPrev,
        //   CheckOutPrev,
        // },
      };
      console.log('updatedCart ==', updatedCart);
      return updatedCart;
    });
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] -1 };
      console.log(updatedCart)
      return updatedCart;
    });
  };

  // =============< / CART >===============================================

return (
    <RoomContext.Provider value={allRooms}  >
      <PplContext.Provider value={{adultsPrev, setAdultsPrev, kidsPrev, setKidsPrev, CheckInPrev, setCheckInPrev, CheckOutPrev, setCheckOutPrev, total, resRoom, setResroom, cartItems, setCartItems, addToCart, removeFromCart, adults, setAdults, kids, setKids, CheckIn, setCheckIn, CheckOut, setCheckOut, handleResInfo}}>
        {/* <ResContext value={{adults, setAdults, kids, setKids, CheckIn, setCheckIn, CheckOut, setCheckOut, handleResInfo}}> */}
            {children}
        {/* </ResContext> */}
      </PplContext.Provider>
    </RoomContext.Provider>
  )
};

export default RoomProvider;
