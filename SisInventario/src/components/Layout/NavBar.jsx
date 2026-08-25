import movingBox from '../../assets/MovingBox.png'
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const { user } = useUser();
    const { t, i18n } = useTranslation();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userEmail = user?.email || t('navbar.guest');

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
                
                <div className="flex items-center gap-4">
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

                    <div className="relative border-l border-slate-700 pl-4">
                        <button type="button" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center gap-2 rounded-full p-1 transition hover:bg-slate-800" aria-expanded={isUserMenuOpen} aria-label={t('navbar.openProfileMenu')}>
                            <img src="/user-avatar.svg" alt={t('navbar.avatarAlt')} className="h-10 w-10 rounded-full" />
                            <span className="hidden text-left sm:block"><span className="block text-sm font-semibold">{user?.name || t('navbar.defaultName')}</span><span className="block max-w-40 truncate text-xs text-slate-400">{userEmail}</span></span>
                        </button>
                        {isUserMenuOpen && <div className="absolute right-0 top-14 z-20 w-64 rounded-lg border border-slate-200 bg-white p-4 text-slate-900 shadow-xl"><p className="text-sm font-bold">{user?.name || t('navbar.defaultName')}</p><p className="mt-1 truncate text-sm text-slate-500">{userEmail}</p><div className="my-3 border-t border-slate-200" /><Link to="/perfil" onClick={() => setIsUserMenuOpen(false)} className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-slate-100">{t('navbar.profile')}</Link></div>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
