export const CambiaFecha = (fecha) => {
    const fechaObj = new Date(fecha);
    
    let formattedDate ='dd/mm/aaaa'

    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1;
    const año = fechaObj.getFullYear();
    
    const x = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${año}`
  
    if (x !== 'NaN/NaN/NaN') {
        formattedDate = x
    } else { formattedDate }

    return formattedDate;
  };

 export const CalculateTotalNights = (checkIn, checkOut) => {
    const checkInDate = new Date(CambiaFecha(checkIn));
    const checkOutDate = new Date(CambiaFecha(checkOut));
  
    const timeDifference = checkOutDate - checkInDate;
    const nights = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Calculate nights
  
    return nights;
  };
  