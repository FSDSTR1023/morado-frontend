/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import  Navbar  from '../../generalWeb/sectionsLanding/a_parts/NavBar'
import line from '../../../assets/line.png'

const urlUser = import.meta.env.VITE_BACKEND_USER_URL;
const loginUrl = `${urlUser}/login`

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    pwd: undefined,
  })

  const {loading, error, dispatch, isAdmin} = useContext(AuthContext);

  const navigate = useNavigate()

  useEffect(() => {
    if (isAdmin === undefined || isAdmin === null) {
      return; 
    }
    if (isAdmin) {
      navigate("/adminctrl");
      console.log('isAdmin === ', isAdmin);
    } else {
      navigate("/");
    }
  }, [isAdmin]);

  const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(loginUrl, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className='bg-cover bg-center w-screen h-screen'>
      
      <div className='w-screen h-screen bg-black/75 flex justify-center items-center flex-col lg:gap-20 lg:flex-row'>
      <div className='flex flex-col justify-center items-center text-white tracking-[2px]'>
                <span className=' text-3xl place-self-start'>Hotel</span>
                <strong className='text-4xl lg:text-6xl uppercase'><span className='text-7xl lg:text-9xl'>M</span>anzanares</strong>
                  <h1 className='text-3xl lg:text-5xl tracking-[2px] leading-tight mb-6 drop-shadow-xl place-self-end font-tang'>
                    {/* {title} */}
                    tu hogar lejos de casa...
                  </h1>
                <img src={line} alt="" className='w-[300px] mb-10 drop-shadow-xl' />
              </div>
        <div className='shadow-xl p-5 bg-black/60 backdrop-blur-sm rounded-md'>
          <span className='mb-5 flex justify-center text-white text-2xl'>Bienvenido</span>
          <div className='shadow-xl mb-5 p-5 bg-black rounded-md'>
              <div className='flex flex-col justify-center items-center'>
                <input className='p-2 m-1 shadow-xl w-full' type='email' placeholder='Email' id='email' onChange={handleChange}/>
                <input className='p-2 m-1 shadow-xl w-full' type='password' placeholder='Contraseña' id='pwd' onChange={handleChange}/>
                <button disabled={loading} onClick={handleClick} className='bg-accent w-full m-1 mt-5 p-2 text-white font-bold'>Acceder</button>
                {error && <span>{error.message}</span>}
              </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-center'>
            <span className='text-white mr-3 font-extralight'>Aun no tienes Cuenta?</span>
            <Link to={'/login/register'} className='cursor-pointer text-accent hover:text-white hover:underline'>Registrate</Link>
          </div>
          {/* <span className='mx-3 text-white'>|</span> */}
          {/* <Link className='text-white'>Olvidaste la contraseña?</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Login
