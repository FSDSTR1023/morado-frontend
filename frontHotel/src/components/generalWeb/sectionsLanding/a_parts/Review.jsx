/* eslint-disable react/prop-types */
// import React from 'react'
import { Typography, Avatar, Rating } from "@material-tailwind/react";

// let info2 = [
//   {
//     id: 1,
//     opinion:
//       "This is an excellent product, the documentation is excellent and helped me get things done more efficiently.",
//     src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80z",
//     name: "Toni Andrew",
//     desc: "Lead Frontend Developer",
//     value: 2,
//   },
//   {
//     id: 2,
//     opinion:
//       "This is an excellent product, the documentation is excellent and helped me get things done more efficiently.",
//     src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80z",
//     name: "Toni Andrew",
//     desc: "Lead Frontend Developer",
//     value: 5,
//   },
//   {
//     id: 3,
//     opinion:
//       "This is an excellent product, the documentation is excellent and helped me get things done more efficiently.",
//     src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80z",
//     name: "Toni Andrew",
//     desc: "Lead Frontend Developer",
//     value: 3,
//   },
// ];

const Review = ({ info }) => {
    const {
      id,
      opinion,
      src,
      name,
      desc,
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
                className="mb-6 font-medium"
              >
                &quot; {opinion} &quot;
              </Typography>
              <Avatar className="rounded-full max-w-full w-[80px] h-[80px] shadow-xl" src={src} size="md" />
              <Typography variant="h6" className="mt-4">
                {name}
              </Typography>
              <Typography color="gray" className="mb-4 font-normal">
                {desc}
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
