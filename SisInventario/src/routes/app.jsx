import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/home/Home";
import Productos from "../pages/productos/Productos";
import Categorias from "../pages/categorias/Categorias";
import Reportes from "../pages/reportes/Reportes";
import Login from "../pages/login/Login";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==================== RUTAS PÚBLICAS ==================== */}
        <Route path="/login" element={<Login />} />

        {/* ==================== RUTAS PROTEGIDAS ==================== */}
        {/* Main contiene el layout con SideBar y NavBar */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="reportes" element={<Reportes />} />
          {/* <Route path="perfil" element={<Perfil />} /> */}
        </Route>

        {/* Ruta por defecto - redirige a login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

// Importar Navigate para manejar redirecciones
import { Navigate } from "react-router-dom";

export default AppRoutes;
