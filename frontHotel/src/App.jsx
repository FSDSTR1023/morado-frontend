import './App.css';
import DashboardMain from './components/admin/DashboardMain';
import NavAdmin from './components/admin/NavAdmin';
import SideNavDashboard from './components/admin/SideNavDashboard';
import './styles/components.css';
// import NavBar from './components/NavBar'
// import NavLogin from './components/NavLogin';
// import Formulario from './components/AddUsers';
// import DashboardMain from './components/DashboardMain';

function App() {

  return (
    <>
      <div>
        <NavAdmin />
      </div>
      <div className='w-full flex'>
        <SideNavDashboard />
        <main className='flex grow'>
          <DashboardMain />
        </main>

        {/* <DashboardMain /> */}
        {/* <NavLogin />
        <NavBar />
        <Formulario /> */}     
      </div>
    </>
  )
}

export default App
