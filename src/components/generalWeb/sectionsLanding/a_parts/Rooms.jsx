/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react';
import { RoomContext }  from '../../../../context/RoomContext.jsx';
import Room  from './Room.jsx';

const Rooms = () => {
  const rooms = useContext(RoomContext);
  console.log(rooms)

const ftRooms = rooms.filter((ftroom) => ftroom.featured === true )

  return (
    <section className="py-24">
      <div className="w-[85%] mx-auto lg:px-0">
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {ftRooms.map((room) => {
            return <Room room={room} key={room._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms