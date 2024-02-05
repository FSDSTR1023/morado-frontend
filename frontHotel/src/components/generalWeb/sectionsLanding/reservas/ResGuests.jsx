/* eslint-disable no-unused-vars */
import React from 'react'
import { BreadcrumbsRes } from './BreadcrumbsRes'
import BookFormLight from './BookFormLight'

const ResGuests = () => {
  return (
    <div className='mt-16'>
      <div className='flex justify-center'>
        <div className='flex justify-center items-center flex-col'>
          <div className='mb-5 w-full flex justify-center shadow-lg border-2'><BookFormLight/></div>
          <div className='mb-5 w-full flex justify-center'><BreadcrumbsRes /></div>
        </div>
      </div>
    </div>
  )
}

export default ResGuests