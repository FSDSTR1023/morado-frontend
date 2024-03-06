/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import  Navbar  from '../sectionsLanding/a_parts/NavBar'
import line from '../../../assets/line.png'
import { Outlet } from 'react-router-dom';
import Login from './Login.jsx';

const urlUser = import.meta.env.VITE_BACKEND_USER_URL;
const loginUrl = `${urlUser}/login`

const MainLogin = () => {
  const {loading, error, dispatch, isAdmin} = useContext(AuthContext);

  const navigate = useNavigate()

  return (
    <div className='bg-cover bg-center w-screen h-screen' style={{background:'url(https://images.pexels.com/photos/53577/hotel-architectural-tourism-travel-53577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover no-repeat'}}>
      <div>
        <Navbar />
      </div>
      <main className='flex items-start w-screen justify-center'>
        <Outlet />
      </main>

    </div>
  )
}

export default MainLogin