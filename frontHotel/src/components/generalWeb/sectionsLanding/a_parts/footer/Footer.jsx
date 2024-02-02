/* eslint-disable no-unused-vars */
import React from 'react';
import LinksPagesFooter from './LinksPagesFooter';
import ContactFooter from './ContactFooter';
import VariousPanel from './VariousPanel';

const Footer = () => {
  return (
  <footer className='bg-white'>
    <div className='shadow-xl mb-5'>
      <div className='container mx-auto lg:px-0'>
          <div className='grid grid-cols-1 mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0 py-4'>
              <div className='min-h-[100px] mb-auto md:mb-5'>
                <LinksPagesFooter />
              </div>
              <div className='min-h-[100px] mb-auto md:mb-5'>
                <ContactFooter />
              </div>
              <div className='min-h-[100px] mb-auto md:mb-5'>
                <VariousPanel />
              </div>
          </div>
      </div>
    </div>

    <div className='mx-auto text-gray-400 flex flex-col items-center pb-4 text-md shadow-xl'>
      <span className='text-black text-lg'>Hotel Manzanares</span>
      Copyright &copy; 2024. All Rights Reserved
    </div>
  </footer>
  )
};

export default Footer;
