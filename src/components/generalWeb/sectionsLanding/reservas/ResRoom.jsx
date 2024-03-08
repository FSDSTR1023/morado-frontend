/* eslint-disable no-unused-vars */
import React from 'react'
import { BreadcrumbsRes } from './BreadcrumbsRes'
import FilteredRooms from './FilteredRooms'
import BookForm from '../a_parts/BookForm'

const ResRoom = () => {
  return (
    <div className='mt-16 gap-1'>
            <div className='mb-5 w-full flex justify-center '>
              <div className='shadow-lg'><BookForm /></div>
            </div>
      <div className='flex flex-col px-10'>
          <div className=' justify-center items-center'>
            <div className='mb-5 w-full flex justify-center'><BreadcrumbsRes /></div>
          </div>
        <div className='w-full'>
          <FilteredRooms />
        </div>
      </div>
    </div>
  )
}

export default ResRoom