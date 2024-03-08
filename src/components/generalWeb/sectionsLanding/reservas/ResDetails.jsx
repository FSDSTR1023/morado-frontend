/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
// import { RoomContext, PplContext } from "../../../../context/RoomContext";
import ResCart from "./ResCart";
import { socket } from "../../../../socket.jsx";

const ResDetails = () => {
  const [connectedUsers, setConnectedUsers] = useState(0);

  useEffect(() => {
    socket.on("userConnection", ({ message, count }) => {
      setConnectedUsers(count);
    });
  }, []);

  return (
    <div className="w-full mt-16 flex flex-col justify-center items-center">
            {connectedUsers === 0 ? (
        <div className="w-full flex justify-center text-red-500 font-bold text-sm bg-accent/25 py-1">
          <p>Hay personas completando la reserva actualmente.</p>
        </div>
      ) : (
        <div className="w-full flex justify-center text-orange-900 font-bold text-sm bg-accent/25 py-1">
          <p>
            <span>{`${connectedUsers}`}</span> personas están completando sus reservas
          </p>
        </div>
      )}
      <div className="w-full mt-3">
        {/* ***************************************************************************************************** */}
        <ResCart />
      </div>
    </div>
  );
};

export default ResDetails;
