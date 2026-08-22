import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setUser, setLoading } = useUser();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            alert(t('login.completeFields'));
            return;
        }

        setIsSubmitting(true);
        setLoading(true);

        // ==========================================
        // TODO: Reemplazar con autenticación real
        // ==========================================
        // Backend API call:
        // const response = await fetch('/api/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email, password })
        // });
        // const userData = await response.json();
        // if (response.ok) {
        //   setUser(userData);
        //   localStorage.setItem('token', userData.token);
        //   navigate('/home');
        // }

        // Por ahora: usuario dummy sin autenticación real
        setTimeout(() => {
            const dummyUser = {
                id: 1,
                name: 'Demo User',
                email: email,
                role: 'Admin',
                token: 'dummy_token_' + Date.now()
            };
            
            setUser(dummyUser);
            localStorage.setItem('user', JSON.stringify(dummyUser));
            localStorage.setItem('token', dummyUser.token);
            
            setLoading(false);
            setIsSubmitting(false);
            navigate('/home');
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <div className="mb-4">
                        <span className="text-4xl">📦</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">{t('login.title')}</h1>
                    <p className="text-slate-400">{t('login.subtitle')}</p>
                </div>

                {/* Form Card */}
                <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                {t('login.email')}
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                                {t('login.password')}
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                        >
                            {isSubmitting ? t('login.signingIn') : t('login.signIn')}
                        </button>
                    </form>

                    {/* Demo Info */}
                    <div className="mt-6 p-4 bg-amber-900 border border-amber-700 rounded-lg">
                        <p className="text-sm text-amber-100">
                            <span className="font-bold">💡 Demo:</span> {t('login.demoInfo')}
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-slate-500 text-sm mt-6">
                    {t('login.version')}
                </p>
            </div>
        </div>
    );
}

export default Login;
