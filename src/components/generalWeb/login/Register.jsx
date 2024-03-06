/* eslint-disable no-unused-vars */
import React from 'react'
import AddUser from '../../admin/adminActions/users/AddUsers'

const Register = () => {
  return (
    // <div className='flex justify-center items-center font-tertiary mb-5 text-2xl h-full w-full mt-96'>
    <div className='w-screen h-screen bg-black/75 flex justify-center items-center flex-col lg:gap-20 lg:flex-row' >
        <div className='bg-white/50 backdrop-blur-sm  drop-shadow-md font-light'>
            <AddUser />
        </div>
    </div>
  )
}

export default Register