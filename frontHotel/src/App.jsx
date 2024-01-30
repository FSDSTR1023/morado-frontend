import {Route, Routes} from 'react-router-dom'
import Login from './components/generalWeb/login/Login.jsx';
import HomeRes from './components/HomeRes.jsx'
import MainAdmin from './components/MainAdmin.jsx';
import DashboardMain from './components/admin/adminActions/DashboardMain.jsx';
import Bookings from './components/admin/adminActions/bookings/Bookings.jsx';
import Calendar from './components/admin/adminActions/calendar/Calendar.jsx';
import Settings from './components/admin/adminActions/adminSettings/Settings.jsx';
import AddUser from './components/admin/adminActions/users/AddUsers.jsx';
import UsersList from './components/admin/adminActions/users/UsersList.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeRes />} />
        <Route path='/#Rooms/:id' element={<HomeRes />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/adminctrl' element={<MainAdmin />}>
              <Route path='dashboard' element={<DashboardMain />}/>
              <Route path='bookings' element={<Bookings />}/>
              <Route path='guests' element={<UsersList />}/>
                  <Route path='guests/create' element={<AddUser />}/>
                  <Route path='guests/edit/:id' element={<AddUser />}/>
              <Route path='calendar' element={<Calendar />}/>
              <Route path='settings' element={<Settings />}/>
        </Route>
      </Routes>
    </div>
    
  )
}


export default App
