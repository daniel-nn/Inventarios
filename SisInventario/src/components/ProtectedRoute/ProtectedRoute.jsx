import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

// ==========================================
// ProtectedRoute: Componente para proteger rutas
// ==========================================
// Solo permite acceder si el usuario está autenticado
// Si no hay usuario, redirige a /login

function ProtectedRoute({ children }) {
    const { user, loading } = useUser();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin text-4xl mb-4">⏳</div>
                    <p className="text-slate-600">Cargando...</p>
                </div>
            </div>
        );
    }

    // Si no hay usuario, redirige a login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Si hay usuario, muestra el componente protegido
    return children;
}

export default ProtectedRoute;
