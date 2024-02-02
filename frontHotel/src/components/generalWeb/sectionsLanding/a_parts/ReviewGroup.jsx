/* eslint-disable no-unused-vars */
import React from 'react'
import Review from './Review'

let information = [
    {
      id: 1,
      opinion:
        "This is an excellent product, the documentation is excellent and helped me get things done more efficiently.",
      src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80z",
      name: "Toni Andrew",
      desc: "Lead Frontend Developer",
      value: 2,
    },
    {
      id: 2,
      opinion:
        "This is an excellent product, the documentation is excellent and helped me get things done more efficiently.",
      src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80z",
      name: "Toni Andrew",
      desc: "Lead Frontend Developer",
      value: 5,
    },
    {
      id: 3,
      opinion:
        "This is an excellent product, the documentation is excellent and helped me get things done more efficiently.",
      src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Toni Andrew",
      desc: "Lead Frontend Developer",
      value: 3,
    },
  ];

const ReviewGroup = () => {
  return (
<section className='py-24' >
    <div className='container mx-auto lg:px-0'>
      <div className='grid md:grid-cols-1 max-w-sm mx-auto gap-[25px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
      {information.map((info) => {
          return <Review  info={info} key={info.id} />;
        })}
      </div>
    </div>
  </section>
  )
}

export default ReviewGroup