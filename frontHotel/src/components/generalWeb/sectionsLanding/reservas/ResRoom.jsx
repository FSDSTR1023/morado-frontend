/* eslint-disable no-unused-vars */
import React from 'react'
import { BreadcrumbsRes } from './BreadcrumbsRes'
import BookFormLight from './BookFormLight'
import FilteredRooms from './FilteredRooms'

const ResRoom = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-col px-10'>
        <div className='flex justify-center flex-col'>
          <div className=' justify-center items-center flex-col'>
            <div className='mb-5 w-full flex justify-center shadow-lg border-2'><BookFormLight /></div>
            <div className='mb-5 w-full flex justify-center'><BreadcrumbsRes /></div>
          </div>
        </div>
        <div className='w-full'>
          <FilteredRooms />
        </div>
      </div>
    </div>
  )
}

export default ResRoom