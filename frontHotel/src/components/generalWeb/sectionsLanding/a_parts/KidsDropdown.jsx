/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import { PplContext } from '../../../../context/RoomContext';
import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs';


const list =[
  {name: '0 Niños' },
  {name: '1 Niño'},
  {name: '3 Niños'},
  {name: '4 Niños'}
]

const KidsDropdown = () => {
  const{kids, setKids} = useContext(PplContext)
  
  return <Menu as='div' className="w-full h-full bg-white relative">
    {/* button */}
    <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
      {kids}
      <BsChevronDown className='text-base text-accent-hover'/>
    </Menu.Button>

    {/* items */}
    <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40 shadow-xl' >
      {list.map((li, index) => {
          return (
            <Menu.Item 
            onClick={() => setKids(li.name)}
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

export default KidsDropdown;
