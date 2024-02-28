/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom' 
import React from 'react'
import NavBar from '../a_parts/NavBar.jsx'
import ResDetails from './ResDetails.jsx'
import Footer from '../a_parts/footer/Footer.jsx'

const MainBooking = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      {/*==================================================================*/}
      <div className='flex flex-col-reverse mx-0 lg:flex-row lg:mx-20'>
        <main className='justify-center'>
          <Outlet />
        </main>
        <div className='w-full lg:w-1/2 justify-center'>
          <ResDetails />
        </div>
      </div>
      {/*==================================================================*/}
      <div className='mt-5 lg:mt-10'>
        <Footer />
      </div>
    </>
  )
}

export default MainBooking