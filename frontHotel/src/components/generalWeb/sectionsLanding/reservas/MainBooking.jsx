/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom' 
import React from 'react'
import NavBar from '../a_parts/NavBarLight.jsx'
import ResDetails from './ResDetails.jsx'
import Footer from '../a_parts/footer/Footer.jsx'

const MainBooking = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      {/*==================================================================*/}
      <div className='flex flex-col-reverse lg:flex-row'>
        <main className='w-full justify-center'>
          <Outlet />
        </main>
        <div className='w-full lg:w-3/4'>
          <ResDetails />
        </div>
      </div>
      {/*==================================================================*/}
      <div>
        <Footer />
      </div>
    </>
  )
}

export default MainBooking