import { Outlet } from 'react-router-dom';
import NavAdmin from './admin/adminActions/adminSettings/NavAdmin';
import SideNavDashboard from './admin/SideNavDashboard';

function MainAdmin() {

    return (
      <>
        <div>
          <NavAdmin />
        </div>
        <div className='flex'>
          <SideNavDashboard />
          <main className='flex items-start w-screen justify-center'>
            <Outlet />
          </main>
        </div>
      </>
    )
  }
  
  export default MainAdmin