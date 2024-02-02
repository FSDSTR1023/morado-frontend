/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './sectionsLanding/a_parts/NavBar'
import Footer from './sectionsLanding/a_parts/footer/Footer'

const Policies = () => {
    return (
        <div>
            <NavBar />
            <div className='flex h-screen bg-green-100 w-full p-50'>
            <div className='flex justify-center items-center uppercase font-tertiary mb-5 text-2xl h-full w-full'>
              Politica de Privacidad
            </div>
                
            </div>
            <Footer />
        </div>
      )
}

export default Policies