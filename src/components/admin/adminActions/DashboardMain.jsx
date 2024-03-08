/* eslint-disable no-unused-vars */
import React from 'react'
import line from '../../../assets/line.png'

const DashboardMain = () => {
  return (
    <div className='bg-cover w-full h-full flex justify-center' style={{background:'url(https://images.pexels.com/photos/545034/pexels-photo-545034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover no-repeat'}}>
      <div className='bg-black/50 w-full flex justify-center items-center'>
    <div className='flex flex-col w-1/2 items-center text-white tracking-[2px]'>
    <span className=' text-3xl place-self-start'>Hotel</span>
    <strong className='text-4xl lg:text-6xl uppercase'><span className='text-7xl lg:text-9xl'>M</span>anzanares</strong>
      <h1 className='text-3xl lg:text-5xl tracking-[2px] leading-tight mb-6 drop-shadow-xl place-self-end font-tang'>
        tu hogar lejos de casa...
      </h1>
    <img src={line} alt="" className='w-[300px] mb-10 drop-shadow-xl' />
  </div>
  </div>
  </div>
  )
}

export default DashboardMain