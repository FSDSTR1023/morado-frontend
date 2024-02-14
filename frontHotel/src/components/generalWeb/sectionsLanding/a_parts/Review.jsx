/* eslint-disable react/prop-types */
// import React from 'react'
import { Typography, Avatar, Rating } from "@material-tailwind/react";


const Review = ({ info }) => {
    const {
      id,
      opinion,
      src,
      name,
      value
    } = info;

  return (
    <div className="bg-white flex shadow-2xl min-h-[500px] group align-center">
      <div className="text-2xl shadow-xl p-5 mt-6">
          <div key={id}>
            <div className="px-8 text-center">
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-6 font-normal text-[1rem]"
              >
                &quot; {opinion} &quot;
              </Typography>
              <Avatar className="rounded-full max-w-full w-[80px] h-[80px] shadow-xl" src={src} size="md" />
              <Typography variant="h6" className="mt-4">
                {name}
              </Typography>
              <Rating
                value={value}
                readonly
                className="text-amber-800"
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Review
