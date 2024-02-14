/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PiUserListFill } from "react-icons/pi";
import UserFormInputs from "./UserFormInputs";

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
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setAddUser((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (urlId) {
        await axios.put(`${urlUser}/${urlId}`, addUser);
        console.log("Usuario Actualizado con éxito");
      } else {
        await axios.post(`${urlUser}/signup`, addUser);
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
        nameu: res.data.nameu || "",
        lastName: res.data.lastName || "",
        phone: res.data.phone || 0,
        email: res.data.email || "",
        DoB: res.data.DoB || "",
        country: res.data.country || "",
        docType: res.data.docType || "",
        docNum: res.data.docNum || "",
        username: res.data.username || "",
        pwd: res.data.pwd || "",
        isAdmin: res.data.isAdmin || false
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

          <UserFormInputs addUser={addUser} handleOnChange={handleOnChange} />

          {/* /////////////////////////////////////////////////////////////////////////////////////  */}
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
