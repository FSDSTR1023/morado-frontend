// import './App.css';
import { Outlet } from 'react-router-dom';
// import DashboardMain from './admin/DashboardMain.jsx';
import NavAdmin from './admin/NavAdmin.jsx';
import SideNavDashboard from './admin/SideNavDashboard';
// import './styles/components.css';
// import {Route} from 'react-router-dom'

function MainAdmin() {

    return (
      <>
        <div>
          <NavAdmin />
        </div>
        <div className='w-full flex'>
          <SideNavDashboard />
          <main className='flex grow'>
            <Outlet />
          </main>
        </div>
      </>
    )
  }
  
  export default MainAdmin