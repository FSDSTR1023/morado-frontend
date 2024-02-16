/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { BreadcrumbsRes } from './BreadcrumbsRes';
import BookForm from '../a_parts/BookForm';
import chipTarjeta from '../../../../assets/tarjetas/chipTarjeta.png'
import amex from '../../../../assets/tarjetas/amex.png'
import diners from '../../../../assets/tarjetas/diners.png'
import discover from '../../../../assets/tarjetas/discover.png'
import jcb from '../../../../assets/tarjetas/jcb.png'
import maestro from '../../../../assets/tarjetas/maestro.png'
import mastercard from '../../../../assets/tarjetas/mastercard.png'
import visa from '../../../../assets/tarjetas/visa.png'

import { RoomContext, PplContext } from "../../../../context/RoomContext";
import { Link } from 'react-router-dom';




const ResConfirmation = () => {
  const [number, setNumber] = useState('');
  const [cardProvider, setCardProvider] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const { cartItems, addToCart, gName, gLastName, setGName, setGLastName, gTel, setGTel, gTypeDoc, setGTypeDoc,  gNumDoc,setGNumDoc, gExtraInfo, setGExtraInfo} = useContext(PplContext);


  const detectCardProvider = (cardNumber) => {
    const cleanedNumber = cardNumber.replace(/\D/g, '');

    const cardPatterns = {
      amex:{ pattern: /^3[47]/, backgroundImage:'url(https://images.pexels.com/photos/978503/pexels-photo-978503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'},
      diners: {pattern:/^3(?:0[0-59]{1}|[689])[0-9]{0,}/, backgroundImage:'url(https://images.pexels.com/photos/13734215/pexels-photo-13734215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'},
      discover: {pattern:/^6(?:011|5)/, backgroundImage:'url(https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'},
      jcb: {pattern:/^(?:2131|1800|35[0-9]{3})/, backgroundImage:'url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'},
      maestro: {pattern:/^(?:5[06789]|6[0-9])/, backgroundImage:'url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'},
      mastercard: {pattern:/^5[1-5]/, backgroundImage:'url(https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'},
      visa: {pattern:/^4/, backgroundImage:'url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}, 
    };

    // for (const [provider, pattern] of Object.entries(cardPatterns)) {
    //   if (pattern.test(cleanedNumber)) {
    //     return provider;
    //   }
    // }

    for (const [provider, { pattern, backgroundImage }] of Object.entries(cardPatterns)) {
      if (pattern.test(cleanedNumber)) {
        setBackgroundImage(backgroundImage);
        return provider;
      }
    }
  setBackgroundImage('url(https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg)');
  return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('name=', name,'value=', value)
  
    switch (name) {
      case 'number':
        setNumber(value);
        const provider = detectCardProvider(value);
        setCardProvider(provider);
        break;
      default:
        break;
    }
  };

  const opMonth = [];
  for (let i = 0; i <= 12; i++) {
    const numeroFormateado = i < 10 ? `0${i}` : `${i}`;
    opMonth.push(<option key={i} value={numeroFormateado}>{numeroFormateado}</option>);
  }
  const opYear = [];
    for (let i = 24; i <= 34; i++) {
      opYear.push(<option key={i} value={i}>{i}</option>);
    }

    const getCardLogo = (provider) => {
      switch (provider) {
        case 'amex':
          return amex;
        case 'diners':
          return diners;
        case 'discover':
          return discover;
        case 'jcb':
          return jcb;
        case 'maestro':
          return maestro;
        case 'mastercard':
          return mastercard;
        case 'visa':
          return visa;

        default:
           // Default logo if no specific match
      }
    };

    const rooms = useContext(RoomContext);

  return (
    <div className='mt-16 gap-1'>
      <div className="flex justify-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <div className='mb-5 w-full flex justify-center '>
            <div className='shadow-lg'><BookForm /></div>
          </div>

          <div className="mb-5 w-full flex justify-center">
            <BreadcrumbsRes />
          </div>

        </div>

        <div className="grid grid-cols-1 mx-[40px]">
          <div className='flex flex-col-reverse lg:flex-row'>

            {/* ********************************************* */}
            <div className='w-full p-4 flex justify-center'>

              <div name='back' className='w-[500px] h-[300px] lg:h-auto lg:w-21/2 p-8 rounded-[20px] shadow-xl transition-all duration-500' style={{ backgroundImage: backgroundImage }}>
                <div className='grid grid-cols-2'>
                  <div className='flex justify-start items-center '>
                    <span className='w-20'>
                      <img src={chipTarjeta} id='chip' alt=""/>
                    </span>
                  </div>
                  <div className='flex justify-center items-center h-[100px]'>
                    <span className='w-28'>
                      <img src={getCardLogo(cardProvider)} id='logo' alt="" />
                    </span>
                  </div>
                </div>
                <form className='flex justify-center flex-col'>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="number" 
                      id="number"
                      maxLength="16"
                      className="w-full px-3 bg-white/50 text-2xl tracking-widest"
                      onChange={handleInputChange}
                      placeholder='Número de la tarjeta'
                    />
                  </div>
                  <div className="flex">

                  <div className='flex flex-col lg:flex-row lg:gap-2 h-full self-center'>

                      <div className="mb-4 h-full flex items-center">
                        <input type="text" id="name" maxLength="30" className="bg-white/50 text-md p-2 h-full uppercase w-[300px]" 
                        placeholder='Titular de la Cuenta'/>
                      </div>

                      <div className="w-full mr-2 flex flex-row text-xl h-full ">
                        <label className="text-black mr-1 text-sm font-bold flex text-end">Válido hasta</label>
                        <select id="expiry" maxLength="2" className="bg-white/50 w-15" defaultValue="00">
                          {opMonth}
                        </select>
                        <span className='flex self-center'>/</span>
                        <select id="expiry" maxLength="2" className="bg-white/50 w-15" defaultValue="00">
                          {opYear}
                        </select>
                      </div>

                  </div>
                  </div>

                  
                </form>
              </div>

            </div>
          </div>
          <p className='flex justify-center'>Al momento del check in debe presentar esta misma tarjeta</p>

        <div className='bg-white shadow-lg mt-2 p-5 w-full'>
            <strong className='flex text-xl w-full border-b-2 mb-3'>Normativas</strong>
          <div className='shadow-xl p-3 mt-5 flex flex-col lg:flex-row lg:gap-5'>
            <div className='border-r-2'>
              <div className='flex flex-col'>
                <span className='w-40 font-bold'>Entrada</span>
                <span className='w-40'>Despues de las 13:00</span>
              </div>
              <div className='flex flex-col'>
                <span className='w-40 font-bold'>Salida</span>
                <span className='w-40'>Antes de las 12:00</span>
              </div>
            </div>

            <div>
            {Object.values(cartItems).map((roomId, index) => {
                
                const room = rooms.find((room) => room._id === roomId[0]);
                const numRoom = index + 1;

                if (room) {
                  return(
                    <div key={index}>
                      <div className='flex flex-row gap-2'>
                        <div>
                          Habitación # {numRoom}
                        </div>
                        <span>:</span>
                        <div className=" text-accent font-extrabold">
                          {room.title}
                        </div>
                      </div>
                    </div>
                  )
                }
            })}
            </div>
          </div>
          <div className='shadow-xl p-3 mt-2'>
              <div className='font-extrabold border-b-2'>Tarjeta de Garantía:</div>
              <ul className='list-disc list-outside ml-6'>
                  <li>Se requiere una tarjeta de crédito válida para garantizar la reserva.</li>
                  <li>La tarjeta solo se utilizará en caso de no presentación o cancelación fuera del plazo establecido.</li>
              </ul>
              {/* ******************************************* */}
              <div className='pt-5 font-extrabold border-b-2'>Política de Cancelación:</div>
              <ul className='list-disc list-outside ml-6'>
                  <li>Se permiten cancelaciones hasta 48 horas antes del check-in sin cargos adicionales.</li>
                  <li>Si cancela fuera del las 48 horas previas se cargará el 40% del precio total de la estadía enla tarjeta que usó para garantizar la reserva.</li>
                  <li>Los cambios en la reserva estarán sujetos a disponibilidad de habitaciones para las fechas de su viaje.</li>
              </ul>
              {/* ******************************************* */}
              <div className='pt-5 font-extrabold border-b-2'>No Show:</div>
              <ul className='list-disc list-outside ml-6'>
                  <li>En caso de no presentarse (no show), se cargará el importe de la primera noche a la tarjeta de garantía, por cada habiracion reservada.</li>
              </ul>
              {/* ******************************************* */}
              <div className='pt-5 font-extrabold border-b-2'>Pago en el Hotel:</div>
              <ul className='list-disc list-outside ml-6'>
                  <li>El pago se realizará directamente en el hotel al momento del check-in.</li>
                  <li>Se acepta efectivo, tarjetas de crédito o débito.</li>
              </ul>
              {/* ******************************************* */}
              <div className='pt-5 font-extrabold border-b-2'>Circunstancias Especiales:</div>
              <ul className='list-disc list-outside ml-6'>
                  <li>En situaciones excepcionales o eventos imprevistos, favor contactar directamente con el Hotel Manzanares para revisión del caso. <br />
                      <span className='ml-3'><strong>E-mail:</strong>  hmanzanares@hotelmanzanares.com.es </span><br />
                      <span className='ml-3'><strong>Teléfono:</strong> 911 98 97 07 <br /> <strong className='ml-3'>WhatsApp:</strong> 911 95 95 03 </span>
                  </li>
              </ul>
              {/* ******************************************* */}
          </div>
          <div className='shadow-xl p-3 mt-3 bg-accent/15'>
            <label className='flex flex-row'><input type="checkbox" className='hover:cursor-pointer'/>
              <p className='ml-3'>He leído y acepto el uso de mis datos para los fines detallados en las
                 <Link to='/policies'className='mx-2 underline font-bold'>Políticas de Privacidad</Link></p>
            </label>
            <label className='flex flex-row'><input type="checkbox" className='hover:cursor-pointer'/>
              <p className='ml-3'>Acepto los 
                 <Link to='/conditions' className='mx-2 underline font-bold'>Términos y Condiciones</Link> del Hotel Manzanares</p>
            </label>
          </div>
        </div>

        <div className="grid justify-items-end mt-5">
          <button className="btn btn-secondary btn-xs rounded-full">
            Completar la Reserva
          </button>
        </div>

        </div>
      </div>
      
    </div>
  );
};

export default ResConfirmation;
