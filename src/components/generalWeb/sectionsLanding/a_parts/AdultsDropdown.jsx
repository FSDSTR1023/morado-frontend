/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import { RoomContext, PplContext } from '../../../../context/RoomContext'
import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs';


const list =[
  {name: '1 Adulto' },
  {name: '2 Adultos'},
  {name: '3 Adultos'},
  {name: '4 Adultos'}
]

const AdultsDropdown = () => {
const { adultsPrev, setAdultsPrev } = useContext(PplContext)

  return <Menu as='div' className="w-full h-full bg-white relative">
    {/* button */}
    <Menu.Button className='w-full h-full flex items-center justify-between px-5 mr-10'>
      {adultsPrev}
      <BsChevronDown className='text-base text-accent-hover'/>
    </Menu.Button>

    {/* items */}
    <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40 shadow-xl' >
      {list.map((li, index) => {
          return (
            <Menu.Item 
            onClick={() => setAdultsPrev(li.name)}
            as='li'
            className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer'
            key={index}>
              {li.name}
            </Menu.Item>
          )
      })}
    </Menu.Items>
  </Menu>;
};

export default AdultsDropdown;
