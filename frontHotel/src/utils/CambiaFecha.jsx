export const CambiaFecha = (fecha) => {
    const fechaObj = new Date(fecha);
    
    let formattedDate ='dd/mm/aaaa'

    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1;
    const año = fechaObj.getFullYear();
    
    const x = `${dia < 10 ? '0' : ''}${dia} / ${mes < 10 ? '0' : ''}${mes} / ${año}`
  
    if (x !== 'NaN / NaN / NaN') {
        formattedDate = x
    } else { formattedDate }
     
  
    return formattedDate;
  };