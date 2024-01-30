/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react';
import { getAllRooms } from '../../../../utils/HandleApiRooms';
// import BdRoomslist from "./BDRoomsList.jsx";
import Room  from './Room.jsx';

const Rooms = () => {

const [allRooms, setAllRooms] = useState([]);
  useEffect(() => {
    getAllRooms(setAllRooms);
  }, []);

  return (
    <section className='py-24' >
      <div className='container mx-auto lg:px-0'>
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
        {allRooms.map((room) => {
          return <Room  room={room} key={room._id} />;
        })}
        </div>
      </div>
    </section>
  );
};

export default Rooms