import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../View/main.jsx";
// Importa tus páginas aquí
// import Home from "../View/pages/Home/Home";
// import Dashboard from "../View/pages/Dashboard/Dashboard";
// import Login from "../View/pages/Login/Login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Main />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
