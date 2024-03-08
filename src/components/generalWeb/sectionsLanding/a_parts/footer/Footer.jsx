/* eslint-disable no-unused-vars */
import React from 'react';
import LinksPagesFooter from './LinksPagesFooter';
import ContactFooter from './ContactFooter';
import VariousPanel from './VariousPanel';
import CopyRight from './CopyRight';

const Footer = () => {
  return (
  <footer className='bg-white w-full'>
    <div className='shadow-xl mb-8 flex justify-center'>
      <div className='mx-auto lg:px-0'>
          <div className='grid grid-cols-1 px-5 lg:gap-[30px] lg:grid-cols-3 lg:mx-0 py-4'>
              <div className='min-h-[100px] mb-10'>
                <LinksPagesFooter />
              </div>
              <div className='min-h-[100px] mb-10'>
                <ContactFooter />
              </div>
              <div className='min-h-[100px] mb-10'>
                <VariousPanel />
              </div>
          </div>
      </div>
    </div>
    <CopyRight />
  </footer>
  )
};

export default Footer;
