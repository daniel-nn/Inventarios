import NavBar from '../components/Layout/NavBar.jsx';
import SideBar from '../components/Layout/SideBar.jsx';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="flex h-screen overflow-hidden">

      <div className="w-1/5 h-full">
        <SideBar />
      </div>

      <div className="w-4/5 h-full flex flex-col">

        <NavBar />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default Main;
