/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import { EffectFade, Autoplay } from 'swiper';
import Img1 from '../../../../assets/heroSlider/1.jpg'	
import Img2 from '../../../../assets/heroSlider/2.jpg'
import Img3 from '../../../../assets/heroSlider/3.jpg'

const slides =[
  {
    title: 'El Mejor Hotel para tus Vacaciones',
    bg: Img1,
    btnText: 'Ver Nuestras Habitaciones'
  },
  {
    title: 'El Mejor Hotel para tus Vacaciones',
    bg: Img2,
    btnText: 'Ver Nuestras Habitaciones'
  },
  {
    title: 'El Mejor Hotel para tus Vacaciones',
    bg: Img3,
    btnText: 'Ver Nuestras Habitaciones'
  }
]

const HeroSlider = () => {
  return (
    <Swiper 
    // modules={[EffectFade, Autoplay]}
    effect={'fade'}
    loop={true}
    autoplay={{
      delay:1000,
      disableOnInteraction: false,
    }}
    className='heroSlider h-[600px] lg:h-[650px]'>
      {slides.map((slide, index) => {
        const {title, bg, btnText} = slide
        return <SwiperSlide key={index} className='h-full relative flex justify-center items-center'>
           <div className='z-20 text-white text-center'>
              <div className='uppercase font-tertiary tracking-[4px] mb-5'>
                Solo relájate y dispfruta
              </div>
              <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[40px] leading-tight mb-6'>
                {title}
              </h1>
              <button className='btn btn-lg btn-primary mx-auto'>
                {btnText}
              </button>
           </div>
           <div className='absolute top-0 w-full h-full'>
              <img 
              className='object-cover h-full w-full' 
              src={bg} 
              alt="" />
           </div>
           <div className='absolute w-full h-full bg-black/70'></div>
          </SwiperSlide>;
      })}
    </Swiper>
  )
};

export default HeroSlider;