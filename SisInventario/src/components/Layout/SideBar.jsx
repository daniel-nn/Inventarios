import movingBox from '../../assets/MovingBox.png'
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';

const SideBar = () => {
    const { logout } = useUser();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="h-full bg-slate-200 text-slate-900 p-6 flex flex-col justify-between">
            {/* Top Section - Logo & Navigation */}
            <div>
                {/* Logo Section */}
                <div className="mb-4">
                    <img src={movingBox} alt="Atreo Logo" className="h-16 w-auto object-contain mb-3" /> 
                    <h1 className="text-2xl font-bold">Atreo</h1>
                </div>

                {/* Divider - Extends full width */}
                <div className="mx-[-24px] mb-6">
                    <hr className="border-slate-400" />
                </div>

                {/* Navigation Routes */}
                <nav className="flex flex-col gap-3">
                    <Link 
                        to="/home" 
                        className="px-4 py-2 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                    >
                        🏠 {t('sidebar.home')}
                    </Link>
                    <Link 
                        to="/productos" 
                        className="px-4 py-2 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                    >
                        📦 {t('sidebar.products')}
                    </Link>
                    <Link 
                        to="/categorias" 
                        className="px-4 py-2 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                    >
                        🏷️ {t('sidebar.categories')}
                    </Link>
                    <Link 
                        to="/reportes" 
                        className="px-4 py-2 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                    >
                        📊 {t('sidebar.reports')}
                    </Link>
                </nav>
            </div>

            {/* Bottom Section - Logout Button */}
            <div className="mx-[-24px] mb-6">
                <div className="border-t border-slate-300 pt-6">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md"
                    >
                        🚪 {t('sidebar.logout')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
