import NavBar from '../componets/NavBar/Navbar.jsx';
import SideBar from '../componets/SideBar/SideBar.jsx';


function Main() {
  return (
    <div className="flex min-h-screen">


      <aside className="w-1/5">
        <SideBar />
      </aside>

      <div className="w-4/5">


        <NavBar />


        <main>
          
        </main>

      </div>

    </div>
  )
}

export default Main;
