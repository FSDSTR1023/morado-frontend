export const ValidateConfRes = (data) => {
    const errors = [];
  
    // Validar el número de la tarjeta
    if (!data.number || !/^\d{16}$/.test(data.number)) {
      errors.push('Número de tarjeta inválido');
    }
  
    // Validar el mes de expiración
    if (!data.expiryMonth || !/^(0[1-9]|1[0-2])$/.test(data.expiryMonth)) {
      errors.push('Mes de expiración inválido');
    }
  
    // Validar el año de expiración
    if (!data.expiryYear || !/^\d{2}$/.test(data.expiryYear)) {
      errors.push('Año de expiración inválido');
    }
  
    // Validar el titular de la tarjeta
    if (!data.cardHolder || !/^[a-zA-Z\s]+$/.test(data.cardHolder)) {
      errors.push('Titular de tarjeta inválido');
    }
  
    // Validar los checkboxes
    if (!data.policiesChecked) {
      errors.push('Debes aceptar las políticas de privacidad');
    }

    if (!data.termsChecked) {
      errors.push('Debes aceptar los términos y condiciones');
    }
  
    return errors;
  };
