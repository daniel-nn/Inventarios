import movingBox from '../../assets/MovingBox.png'
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { user } = useUser();
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className="bg-slate-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
                <div className="flex items-center gap-3">
                    <img src={movingBox} alt="Moving box" className="h-10 w-auto object-contain" />
                    <h1 className="text-lg font-semibold">Atreo</h1>
                </div>
                
                <div className="flex items-center gap-6">
                    {/* Language Selector */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleLanguageChange('en')}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                                i18n.language === 'en' 
                                    ? 'bg-blue-600 text-white scale-110' 
                                    : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                            }`}
                            title="English"
                        >
                            🇬🇧
                        </button>
                        <button
                            onClick={() => handleLanguageChange('es')}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                                i18n.language === 'es' 
                                    ? 'bg-red-600 text-white scale-110' 
                                    : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                            }`}
                            title="Español"
                        >
                            🇪🇸
                        </button>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-2 border-l border-slate-700 pl-6">
                        <span className="text-sm text-slate-300">{t('navbar.user')}:</span>
                        <span className="text-sm font-medium">{user?.email || 'Guest'}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
