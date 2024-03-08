/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
    let newValue = type === "checkbox" ? checked : value;

    if (name === "phone" && type === "number") {
      newValue = newValue.slice(0, 9);
    }
    setAddUser((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (urlId) {
        await axios.put(`${urlUser}/${urlId}`, addUser);
        showAlert("Usuario Actualizado con éxito");
      } else {
        await axios.post(`${urlUser}/signup`, addUser);
        showAlert("Usuario registrado con éxito");
      }
      setAddUser(newUserInit);
      setUrlId("");
    } catch (error) {
      console.error("No se puede guardar/actualizar el usuario", error);
      showAlert("No se pudo registrar el usuario, Inténtelo nuevamente.");
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
    } catch (error){
      console.error("Error fetching user data:", error);
    }
    
  };

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current && urlId !== "" && urlId !== undefined){
      actualId(urlId);
    }
    isMounted.current = false;
  }, [urlId]);

  const location = useLocation();
  const isRegisterRoute = location.pathname === "/login/register";
  const [alertMessage, setAlertMessage] = useState(null);
  const navigate = useNavigate()

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage(null);
      if (message.includes("con éxito")) {
        const isEditRoute = location.pathname.startsWith("/adminctrl/guests/edit/");
        const isCreateRoute = location.pathname.startsWith("/adminctrl/guests/create/");
        navigate(isEditRoute || isCreateRoute? "/adminctrl/guests" : "/login");
      }
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center w-full gap-5">

    {!isRegisterRoute && (
        <div className="flex w-full shadow-md justify-between">
          <div className="p-5 text-xl font-bold self-start">
            Datos del Usuario
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
      )}

      <div className="flex shadow-xl p-8 w-fit flex-col-reverse lg:flex-row">
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

      <img className=" ml-7 w-80 object-cover shadow-2xl hidden lg:block" 
           src="https://images.pexels.com/photos/5371683/pexels-photo-5371683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="Agregar Usuario" 
      />

      </div>
      {alertMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 bg-accent text-white text-xl rounded text-center shadow-xl">
            {alertMessage}
          </div>
        )}
    </div>
  );
};

export default AddUser;
