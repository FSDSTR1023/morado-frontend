import './styles/components.css';
import {Route, Routes} from 'react-router-dom'
import Login from './components/login/login.jsx';
import HomeRes from './components/HomeRes.jsx'
import MainAdmin from './components/MainAdmin.jsx';
import AddUsers from './components/admin/adminActions/AddUsers.jsx';
import DashboardMain from './components/admin/adminActions/DashboardMain.jsx';
import Bookings from './components/admin/adminActions/Bookings.jsx';
import Calendar from './components/admin/adminActions/Calendar.jsx';
import Settings from './components/admin/adminActions/Settings.jsx';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeRes />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/adminctrl' element={<MainAdmin />}>
          <Route path='dashboard' element={<DashboardMain />}/>
          <Route path='bookings' element={<Bookings />}/>
          <Route path='guests' element={<AddUsers />}/>
          <Route path='calendar' element={<Calendar />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
