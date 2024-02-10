/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PiUserListFill } from "react-icons/pi";

const AddUser = () => {

  const urlUser = import.meta.env.VITE_BACKEND_USER_URL;

  const newUserInit = {
    nameu: "",
    lastName: "",
    phone: 0,
    email: "",
    DoB: "",
    country: "",
    docType: "",
    docNum: "",
    isAdmin: false,
    username: "",
    pwd: ""
  };

  let { id } = useParams();
  const [addUser, setAddUser] = useState(newUserInit);
  const [urlId, setUrlId] = useState(id || "");

  const handleOnChange = (event) => {
    const { nameu, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setAddUser((prevData) => ({ ...prevData, [nameu]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (urlId) {
        await axios.put(`${urlUser}/${urlId}`, addUser);
        console.log("Usuario Actualizado con éxito");
      } else {
        await axios.post(`${urlUser}`, addUser);
        console.log("Usuario registrado con éxito");
      }
      setAddUser(newUserInit);
      setUrlId("");
    } catch (error) {
      console.error("No se puede guardar/actualizar el usuario", error);
    }
  };

  const actualId = async (idValue) => {
    try {
      const res = await axios.get(`${urlUser}/${idValue}`);
        setAddUser({
          nameu: res.data.nameu,
          lastName: res.data.lastName,
          phone: res.data.phone,
          email: res.data.email,
          DoB: res.data.DoB,
          country: res.data.country,
          docType: res.data.docType,
          docNum: res.data.docNum,
          username: res.data.username,
          pwd: res.data.pwd,
          isAdmin: res.data.isAdmin
        });
        // console.log(res.data.isAdmin)
    } catch (error){
      console.error("Error fetching user data:", error);
    }
    
  };


  const isMounted = useRef(true);

  useEffect(() => {
    // if (isMounted.current && urlId !== "") {
    if (isMounted.current && urlId !== "" && urlId !== undefined){
      actualId(urlId);
    }
    isMounted.current = false;
  }, [urlId]);

  return (
    <div className="flex flex-col items-center w-full gap-5">
      <div className="flex w-full shadow-md justify-between">
        <div className="p-5 text-xl font-bold self-start">
          Datos del Huésped
        </div>
        <div className="flex">
          <Link
            className="flex h-14 items-center hover:text-[#003A70] pr-10"
            to="../guests"
          >
            <PiUserListFill size={25} className="w-14" /> Lista de Usuarios
          </Link>
        </div>
      </div>

      <div className="flex shadow-xl p-8 w-fit">
        <form onSubmit={handleSubmit}>
          {/* //////////////////////////////////////////////////////////////////////////////////////  */}
        <div>
          <div className="border-b-black border-b-2 mb-7">
            Datos Personales
          </div>
          <div className="place-content-center px-5"> 
            <div className="flex flex-row gap-5"> {/* =================================================== */}
              <label className="block text-sm font-medium leading-6 text-gray-900"> Nombre <br />
                <input className="px-2 border border-20 mb-3 shadow w-72" type="text" name="nameu" value={addUser.nameu} onChange={handleOnChange} />
              </label>
              {/* ------------------------- */}
              <label className="block text-sm font-medium leading-6 text-gray-900"> Apellidos <br />
                <input className="px-2 border border-20 mb-3 shadow w-72" type="text" name="lastName" value={addUser.lastName} onChange={handleOnChange} />
              </label>
              </div> {/* ================================================================================== */}


            <label className="block text-sm font-medium leading-6 text-gray-900"> Fecha de Nacimiento <br />
              <input className="px-2 border border-20 mb-3 shadow pr-1" type="date" name="DoB" value={addUser.DoB} onChange={handleOnChange} />
            </label>{/* ================================================================================== */}

            <div className="flex flex-row gap-4">
                <label className="block text-sm font-medium leading-6 text-gray-900"> País <br />
                  <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="country" value={addUser.country} onChange={handleOnChange} />
                </label>{/* ================================================================================== */}
                <label className="block text-sm font-medium leading-6 text-gray-900"> Tipo de Documento <br />
                  <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="docType" value={addUser.docType} onChange={handleOnChange} />
                </label>{/* ================================================================================== */}
                <label className="block text-sm font-medium leading-6 text-gray-900"> Numero de Documento <br />
                  <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="docNum" value={addUser.docNum} onChange={handleOnChange} />
                </label>{/* ================================================================================== */}
            </div>

            <div className="flex flex-row gap-4 w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900"> Teléfono <br />
                  <input className="px-2 border border-20 mb-3 shadow " type="number" name="phone" value={addUser.phone} onChange={handleOnChange} />
                </label>{/* ================================================================================== */}
                <label className="block text-sm font-medium leading-6 text-gray-900"> Email <br />
                  <input className="px-2 border border-20 mb-3 shadow w-[208%]" type="email" name="email" value={addUser.email} onChange={handleOnChange} />
                </label>{/* ================================================================================== */}
              </div>
            </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////  */}

          <div className="border-b-black border-b-2 my-7 flex flex-row justify-between">
            Información de Usuario
         </div>

          <div className="flex gap-5 px-5"> 
            {/* ================================================================================== */}
            <label className="block text-sm font-medium leading-6 text-gray-900"> Nombre de Usuario <br />
              <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="username" value={addUser.username} onChange={handleOnChange} />
            </label>
            {/* ================================================================================== */}
            <label className="block text-sm font-medium leading-6 text-gray-900"> Contraseña <br />
              <input className="px-2 border border-20 mb-3 shadow w-full" type="password" name="pwd" value={addUser.pwd} onChange={handleOnChange} />
            </label>
            {/* ================================================================================== */}
            <label className="flex text-sm font-medium leading-6 text-gray-900 align-middle">
              <input className="px-2 border border-20 mx-3 w-full" type="checkbox" name="isAdmin" checked={addUser.isAdmin} onChange={handleOnChange} />
              Administrador
            </label>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////////  */}
        </div>
        <div className="flex flex-col w-full">
            <button type="submit" className="bg-[#003A70] text-white hover:bg-[#dadada] hover:text-[#003A70] h-8">
               Guardar
            </button>
          </div>
        </form>

      <img className="ml-7 w-80 object-cover shadow-2xl" 
           src="https://images.pexels.com/photos/5371683/pexels-photo-5371683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="Agregar Usuario" 
      />

      </div>
    </div>
  );
};

export default AddUser;
