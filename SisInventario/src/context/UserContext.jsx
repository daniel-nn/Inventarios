import { createContext, useContext, useState, useEffect } from 'react';

// Creación contexto de usuario
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    // ==========================================
    // CONTEXTO: Lo siguiente vendría del LOGIN
    // ==========================================
    // Estos datos serían obtenidos después de que el usuario inicie sesión y se autentique correctamente. 
    
    const [user, setUser] = useState(null);
    // Estructura esperada del usuario (viene del backend):
    // {
    //   id: 1,
    //   name: 'John Doe',
    //   email: 'john@example.com',
    //   role: 'Admin', // 'Admin' | 'User' | 'Gestor' | 'Despachador'
    //   token: 'jwt_token_here'
    // }
    // Nota: Los permisos de CRUD se validan en el backend según el rol del usuario

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para simular login (será reemplazada con llamada a API)
    const login = async (email, password) => {
        try {
            setLoading(true);
            // ==========================================
            // TODO: IMPLEMENTAR AUTENTICACIÓN REAL
            // ==========================================
            // Llamada al backend:
            // const response = await fetch('http://localhost:3001/api/auth/login', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ email, password })
            // });
            // 
            // if (!response.ok) {
            //   throw new Error('Credenciales inválidas');
            // }
            // 
            // const userData = await response.json();
            // setUser(userData);
            // localStorage.setItem('token', userData.token);
            // localStorage.setItem('user', JSON.stringify(userData));
            // 
            // return userData;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Función para logout
    const logout = () => {
        setUser(null);
        // localStorage.removeItem('user');
    };

    // Efecto para verificar si hay sesión guardada al cargar la app
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (err) {
                console.error('Error al cargar usuario guardado:', err);
                localStorage.removeItem('user');
            }
        }
        // Termina loading en cualquier caso (con o sin usuario guardado)
        setLoading(false);
    }, []);

    return (
        <UserContext.Provider value={{ 
            user, 
            setUser, 
            loading, 
            setLoading,
            error,
            setError,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe usarse dentro de UserProvider');
    }
    return context;
};

export default UserContext;
