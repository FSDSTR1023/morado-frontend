/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react';
import { RoomContext, PplContext }  from '../../../../context/RoomContext.jsx';
import FilteredRoomDesign  from '../reservas/FilteredRoomDesign.jsx';

const FilteredRooms = () => {
  const rooms = useContext(RoomContext);
  const {total} = useContext(PplContext)

  console.log('total', total)

const ftRooms = rooms.filter((ftroom) => ftroom.maxPeople >= total )
console.log('ftRooms==', ftRooms)

  return (
    <section className="p-3 shadow-md border-2">
      <div className="container mx-auto lg:px-0">
        <div className="grid grid-cols-1 mx-auto gap-[30px]">
          {ftRooms.map((room) => {
            return <FilteredRoomDesign room={room} key={room._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FilteredRooms