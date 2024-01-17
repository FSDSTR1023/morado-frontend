import './styles/components.css';
import {Route, Routes} from 'react-router-dom'
import Login from './components/login/login.jsx';
import HomeRes from './components/HomeRes.jsx'
import MainAdmin from './components/MainAdmin.jsx';
// cambiada la ruta para acceder a la seccion de usuarios
import MainUsers from './components/admin/adminActions/users/MainUsers.jsx'
import DashboardMain from './components/admin/adminActions/DashboardMain.jsx';
import Bookings from './components/admin/adminActions/bookings/Bookings.jsx';
import Calendar from './components/admin/adminActions/calendar/Calendar.jsx';
import Settings from './components/admin/adminActions/adminSettings/Settings.jsx';
// import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeRes />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/adminctrl' element={<MainAdmin />}>
          <Route path='dashboard' element={<DashboardMain />}/>
          <Route path='bookings' element={<Bookings />}/>
          {/* se cambia el elemento de guests a la nueva pagina principal de usuarios */}
          <Route path='guests' element={<MainUsers />}/>
          <Route path='calendar' element={<Calendar />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
