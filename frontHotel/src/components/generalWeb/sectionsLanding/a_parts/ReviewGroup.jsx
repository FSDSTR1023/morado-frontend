/* eslint-disable no-unused-vars */
import React from 'react'
import Review from './Review'

let information = [
    {
      id: 1,
      opinion:
        "Mi estancia en este hotel fue excepcional. Desde el momento en que llegué, el personal fue increíblemente amable y servicial. Las habitaciones eran espaciosas y limpias, con una vista impresionante. Disfruté de la deliciosa comida en el restaurante y definitivamente volveré en mi próximo viaje.",
      src: "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Toni Andrew",
      value: 4,
    },
    {
      id: 2,
      opinion:
        "¡Qué experiencia tan maravillosa! Este hotel superó mis expectativas. El servicio al cliente fue impecable, la decoración del lugar era elegante y moderna, y la ubicación era perfecta. La piscina y el gimnasio eran excelentes añadidos. Sin duda, recomendaré este hotel a mis amigos.",
      src: "https://images.pexels.com/photos/159864/waterfowl-mallard-young-young-duck-159864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "AventureroSatisfecho456",
      value: 5,
    },
    {
      id: 3,
      opinion:
        "Pasamos una estancia encantadora en este hotel. Desde la cálida bienvenida hasta la cómoda cama, todo fue perfecto. El personal se esforzó por hacer nuestra estancia especial, y la atención a los detalles en cada rincón del hotel fue evidente. ¡Definitivamente regresaremos en nuestro próximo aniversario!",
      src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "EstrellaViajera123",
      value: 3,
    },
  ];

const ReviewGroup = () => {
  return (
<section className='py-24' >
    <div className='container mx-auto lg:px-0'>

        <div className='flex justify-center uppercase font-tertiary mb-16 text-2xl h-5 w-full'>
          Lo que opinan nuestros Huéspedes
        </div>

      <div className='grid md:grid-cols-1 max-w-sm mx-auto gap-[25px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
      {information.map((info) => {
          return <Review  info={info} key={info.id} />;
        })}
      </div>
    </div>
  </section>
  )
}

export default ReviewGroup