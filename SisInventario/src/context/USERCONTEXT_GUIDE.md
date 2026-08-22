# UserContext - Guía de Implementación Futura

## Propósito
El `UserContext` permitirá:
- Gestionar la autenticación del usuario (login/logout)
- Almacenar datos del usuario después del login
- Controlar vistas diferentes según el rol del usuario
- Restringir acceso a rutas según permisos
- Mantener la sesión del usuario entre recargas de página

## ¿De dónde viene el UserProvider?
El `UserProvider` envuelve toda la aplicación y **obtiene los datos del usuario del login**:

1. Usuario accede a página de login
2. Ingresa email y contraseña
3. Se hace llamada a backend `/api/login`
4. Backend valida y retorna datos del usuario + token JWT
5. UserContext almacena estos datos
6. Usuario accede a las páginas protegidas

```
Login Page → Backend Auth → UserContext.setUser() → Aplicación disponible
```

## Estructura del Usuario (después del login)
```javascript
{
  id: 1,
  nombre: 'Juan Pérez',
  email: 'juan@example.com',
  rol: 'Administrador', // 'Administrador' | 'Almacenero' | 'Gestor'
  permisos: ['leer', 'crear', 'editar', 'eliminar'],
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
}
```

## Pasos para Implementar

### 1. Envolver la App con UserProvider
En `src/app.jsx`:
```jsx
import { UserProvider } from './context/UserContext';
import AppRoutes from './routes/app';

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}
```

### 2. Crear página de Login
Crear `src/pages/login/Login.jsx`:
```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    // Si login es exitoso, redirigir a home
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" disabled={loading}>{loading ? 'Ingresando...' : 'Ingresar'}</button>
    </form>
  );
}
```

### 3. Usar el Hook en Componentes
```jsx
import { useUser } from '../context/UserContext';

function MiComponente() {
  const { user, loading } = useUser();
  
  if (loading) return <div>Cargando...</div>;
  
  return <div>Bienvenido, {user?.nombre}</div>;
}
```

### 4. Crear Rutas Protegidas
```jsx
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, requiredRole }) {
  const { user, loading } = useUser();
  
  if (loading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/login" />;
  if (requiredRole && user.rol !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children;
}
```

### 5. Modificar SideBar según rol
```jsx
import { useUser } from '../../context/UserContext';

const SideBar = () => {
  const { user } = useUser();
  
  return (
    <nav>
      {/* Mostrar siempre */}
      <Link to="/home">Home</Link>
      
      {/* Solo para Administrador */}
      {user?.rol === 'Administrador' && (
        <Link to="/usuarios">Gestionar Usuarios</Link>
      )}
      
      {/* Solo para Almacenero o Administrador */}
      {['Almacenero', 'Administrador'].includes(user?.rol) && (
        <Link to="/productos">Productos</Link>
      )}
    </nav>
  );
};
```

## Próximas Acciones Sugeridas
1. ✅ Crear página de Login (`src/pages/login/Login.jsx`)
2. ✅ Crear componente ProtectedRoute
3. ✅ Implementar autenticación real (conectar con backend)
4. ✅ Guardar token en localStorage
5. ✅ Verificar sesión al cargar la app (useEffect en UserContext)
6. ✅ Modificar vistas según rol del usuario
7. ✅ Agregar botón logout en NavBar
