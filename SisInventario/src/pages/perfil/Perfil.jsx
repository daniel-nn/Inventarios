import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';

const Perfil = () => {
    const { user } = useUser();
    const { t } = useTranslation();
    const profile = user || { name: t('navbar.defaultName'), email: t('navbar.guest'), role: 'User' };

    return (
        <div className="min-h-full bg-slate-50 p-5 sm:p-8">
            <div className="mb-8"><p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">{t('profile.eyebrow')}</p><h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{t('profile.title')}</h1><p className="mt-2 text-slate-600">{t('profile.description')}</p></div>
            <section className="max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-4 border-b border-slate-200 pb-6"><img src="/user-avatar.svg" alt={t('navbar.avatarAlt')} className="h-16 w-16 rounded-full" /><div><h2 className="text-xl font-bold text-slate-900">{profile.name || t('navbar.defaultName')}</h2><p className="text-slate-500">{profile.email}</p></div></div><dl className="grid gap-5 pt-6 sm:grid-cols-2"><div><dt className="text-sm font-semibold text-slate-500">{t('profile.name')}</dt><dd className="mt-1 text-slate-900">{profile.name || t('navbar.defaultName')}</dd></div><div><dt className="text-sm font-semibold text-slate-500">{t('profile.email')}</dt><dd className="mt-1 break-all text-slate-900">{profile.email}</dd></div><div><dt className="text-sm font-semibold text-slate-500">{t('profile.role')}</dt><dd className="mt-1 text-slate-900">{profile.role}</dd></div><div><dt className="text-sm font-semibold text-slate-500">{t('profile.id')}</dt><dd className="mt-1 text-slate-900">{profile.id || t('profile.pending')}</dd></div></dl><p className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-500">{t('profile.permissionsNote')}</p></section>
        </div>
    );
};

export default Perfil;
