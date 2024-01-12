/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DatePiker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dob: new Date ("2008", "06", "22"),
    telefono: "",
    correo: "",
    pais: "",
    tipo: "",
    docNum: "",
    usuario: "",
    contrasena: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log('Datos del formulario:', formData);
  };

//   =================================

// class App extends Component {
//     state = {
//       startDate: new Date(),
//     };
  
//     render() {
//       const { startDate } = this.state;
//       return <DatePiker selected={startDate} onChange={this.handleChange} />;
//     }
  
//     handleChange = (startDate) => {
//       this.setState({
//         startDate,
//       });
//     };
//   }
  



// =====================================

  
  return (
    <form onSubmit={handleSubmit}>
      <label>  Nombre: <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} /> </label>
      <br />
      <label>  Apellido: <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} /> </label>
      <br />
      <label>  Fecha de Nacimiento: 
        
       
        <DatePiker selected={formData.dob} onChange={handleInputChange}/> </label>
      
      <br />
      <label>  Teléfono: <input type="text" name="telefono" value={formData.telefono} onChange={handleInputChange} /> </label>
      <br />
      <label> Correo electrónico: <input type="email" name="correo" value={formData.correo} onChange={handleInputChange} /> </label>
      <br />
      <label>  Pais: <input type="text" name="pais" value={formData.pais} onChange={handleInputChange} /> </label>
      <br />
      <label>  Tipo de Documento: 
        <select>
            <option value="NIF/NIE">____________</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="NIF/NIE">NIF/NIE</option>
        </select>
      </label>
      <br />    
      <label>  Número de Documento: <input type="text" name="docNum" value={formData.docNum} onChange={handleInputChange} /> </label>

      <br />
      <br />
      <label>  Usuario: <input type="text" name="usuario" value={formData.usuario} onChange={handleInputChange} /> </label>
      <br />
      <label>  Contraseña: <input type="text" name="contrasena" value={formData.contrasena} onChange={handleInputChange} /> </label>
      <br />

      <label>  Contraseña: <input type="calendar" name="cal" value={formData.cal} onChange={handleInputChange} /> </label>
      <br />

      <br />
      <br />
      <button type="submit">Enviar</button>
    </form>

  );
};

export default Formulario;