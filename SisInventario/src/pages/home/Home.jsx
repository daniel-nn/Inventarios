import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-slate-900">{t('home.welcome')}</h1>
            <p className="text-lg text-slate-600 mb-6">
                {t('home.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card de Productos */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-blue-600 mb-2">📦</h2>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('home.products')}</h3>
                    <p className="text-slate-600 mb-4">{t('home.productsDesc')}</p>
                    <Link to="/productos" className="text-blue-500 hover:text-blue-700 font-medium">
                        {t('home.products')} →
                    </Link>
                </div>

                {/* Card de Categorías */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                    <h2 className="text-2xl font-bold text-green-600 mb-2">🏷️</h2>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('home.categories')}</h3>
                    <p className="text-slate-600 mb-4">{t('home.categoriesDesc')}</p>
                    <Link to="/categorias" className="text-green-500 hover:text-green-700 font-medium">
                        {t('home.categories')} →
                    </Link>
                </div>

                {/* Card de Reportes */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                    <h2 className="text-2xl font-bold text-purple-600 mb-2">📊</h2>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('home.reports')}</h3>
                    <p className="text-slate-600 mb-4">{t('home.reportsDesc')}</p>
                    <Link to="/reportes" className="text-purple-500 hover:text-purple-700 font-medium">
                        {t('home.reports')} →
                    </Link>
                </div>

                {/* Card de Usuario (Future UserContext) */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                    <h2 className="text-2xl font-bold text-orange-600 mb-2">👤</h2>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('home.profile')}</h3>
                    <p className="text-slate-600 mb-4">{t('home.profileDesc')}</p>
                    <Link to="/perfil" className="text-orange-500 hover:text-orange-700 font-medium">
                        {t('home.profile')} →
                    </Link>
                </div>
            </div>

            {/* Info section for future UserContext */}
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-2">💡 {t('home.futureNote')}</h2>
                <p className="text-blue-800">
                    {t('home.futureText')}
                </p>
            </div>
        </div>
    );
};

export default Home;
