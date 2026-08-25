import NavBar from '../components/Layout/NavBar.jsx';
import SideBar from '../components/Layout/SideBar.jsx';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="flex h-screen flex-col overflow-hidden md:flex-row">

      <div className="h-auto w-full shrink-0 md:h-full md:w-64">
        <SideBar />
      </div>

      <div className="flex h-[calc(100vh-5rem)] min-w-0 w-full flex-col md:h-full md:flex-1">

        <NavBar />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default Main;
