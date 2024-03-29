import {Route, Routes} from 'react-router-dom'
import Login from './components/generalWeb/login/Login.jsx';
import HomeRes from './components/HomeRes.jsx'
import MainAdmin from './components/MainAdmin.jsx';
import DashboardMain from './components/admin/adminActions/DashboardMain.jsx';
import Bookings from './components/admin/adminActions/bookings/Bookings.jsx';
// import Calendar from './components/admin/adminActions/calendar/Calendar.jsx';
import Habitaciones from './components/admin/adminActions/rooms/Habitaciones.jsx';
import RoomsList from './components/admin/adminActions/rooms/RoomsList.jsx'
import AddUser from './components/admin/adminActions/users/AddUsers.jsx';
import UsersList from './components/admin/adminActions/users/UsersList.jsx';
import MainBooking from './components/generalWeb/sectionsLanding/reservas/MainBooking.jsx';
import ResRoom from './components/generalWeb/sectionsLanding/reservas/ResRoom.jsx';
import ResGuests from './components/generalWeb/sectionsLanding/reservas/ResGuests.jsx'
import ResConfirmation from './components/generalWeb/sectionsLanding/reservas/ResConfirmation.jsx'
import MainLogin from './components/generalWeb/login/MainLogin.jsx'
import Register from './components/generalWeb/login/Register.jsx';

import Conditions from './components/generalWeb/Conditions.jsx'
import Policies from './components/generalWeb/Policies.jsx';
import RoomDetails from './components/generalWeb/sectionsLanding/reservas/RoomDetails.jsx';

function App() {
  return (
    <div>
      <Routes>
        {/* ===================================================================== */}
        <Route path='/Login' element={<MainLogin />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        {/* ===================================================================== */}
        <Route path='/' element={<HomeRes />} />
        <Route path='/policies' element={<Policies />} />
        <Route path='/conditions' element={<Conditions />} />
        <Route path='/roomdetails/:id' element={<RoomDetails />}/>
        {/* ===================================================================== */}
        <Route path='/bookings' element={<MainBooking />}>
              <Route path='rooms' element={<ResRoom />} />
              <Route path='guests' element={<ResGuests />}/>
              <Route path='confirmation' element={<ResConfirmation />}/>
        </Route>
        {/* ===================================================================== */}
        <Route path='/rooms/:id' element={<HomeRes />} />
        {/* ===================================================================== */}
        <Route path='/adminctrl' element={<MainAdmin />}>
              <Route index element={<DashboardMain />} />
              <Route path='dashboard' element={<DashboardMain />}/>
              <Route path='bookings' element={<Bookings />}/>
              <Route path='guests' element={<UsersList />}/>
                  <Route path='guests/create' element={<AddUser />}/>
                  <Route path='guests/edit/:id' element={<AddUser />}/>
              {/* <Route path='calendar' element={<Calendar />}/> */}
              <Route path='habitaciones' element={<RoomsList />}/>
                  <Route path='habitaciones/create' element={<Habitaciones />}/>
                  <Route path='habitaciones/edit/:id' element={<Habitaciones />}/>
        </Route>
      </Routes>
    </div>  
  )
}



export default App
