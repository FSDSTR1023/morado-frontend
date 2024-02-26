/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import AdultsDropdown from './AdultsDropdown.jsx'
import KidsDropdown from './KidsDropdown.jsx'
import CheckIn from './CheckIn.jsx'
import CheckOut from './CheckOut.jsx'
import { PplContext } from '../../../../context/RoomContext.jsx';
import { useNavigate  } from 'react-router-dom';
import { IoMdAlert } from "react-icons/io";


const BookForm = () => {
const {handleResInfo,  checkInPrev, checkOutPrev} = useContext(PplContext)
const navigate = useNavigate ();
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  // Obtener los valores de CheckIn y CheckOut
  const checkInValue = checkInPrev
  const checkOutValue = checkOutPrev
  // Verificar que ambos valores no sean null ni tengan el formato 'dd/mm/yyyy'
  if (!isValidDate(checkInValue) || !isValidDate(checkOutValue)) {
    // Mostrar un mensaje de error o tomar la acción correspondiente
    setErrorMessage('Por favor, selecciona fechas válidas para CheckIn y CheckOut');
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
    return;
  }
  setErrorMessage('');
  // Resto de la lógica de handleSubmit
  handleResInfo();
  navigate(isValidDate(checkInPrev) && isValidDate(checkOutPrev) ? '/bookings/rooms' : '/');
};

// Función para verificar si una fecha tiene un formato válido
const isValidDate = (dateString) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString) && dateString !== 'yyyy-mm-dd';
};
  
  return (
  <form  onSubmit={handleSubmit} className='h-[300px] w-full lg:h-[70px]'>
    <div className='flex flex-col w-full h-full lg:flex-row'>
      <div className='flex-1 border-r'>
        <CheckIn />
      </div>
      <div className='flex-1 border-r'>
        <CheckOut />
      </div>
      <div className='flex-1 border-r'>
        <AdultsDropdown />
      </div>
      <div className='flex-1 border-r'>
        <KidsDropdown />
      </div>

      <div className='flex justify-center items-center'>
        <button type='submit' className='btn btn-primary w-full h-full'>
          Buscar
        </button>
      </div>
    </div>

    {errorMessage && (
        <div className="text-red-500 mt-2 flex justify-center bg-red-50 mb-52">
         <IoMdAlert className='self-center mr-3'/> {errorMessage}
        </div>
      )}

  </form>
  )
};

export default BookForm;