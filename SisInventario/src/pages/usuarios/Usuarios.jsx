import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';
import TableSkeleton from '../../components/TableSkeleton';

const Usuarios = () => {
    const { user } = useUser();
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const users = [{ id: 1, name: user?.name || t('navbar.defaultName'), email: user?.email || t('navbar.guest'), role: user?.role || 'User', status: t('users.active') }];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    return <div className="min-h-full bg-slate-50 p-5 sm:p-8"><div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-600">{t('users.eyebrow')}</p><h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{t('users.title')}</h1><p className="mt-2 text-slate-600">{t('users.description')}</p></div><button className="rounded-lg bg-cyan-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-cyan-700">+ {t('users.new')}</button></div><section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-200 px-5 py-4"><h2 className="text-lg font-bold text-slate-900">{t('users.tableTitle')}</h2><p className="text-sm text-slate-500">{t('users.tableDescription')}</p></div>{isLoading ? <TableSkeleton columns={5} /> : <div className="overflow-x-auto"><table className="min-w-[680px] w-full text-left text-sm"><thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3">{t('users.name')}</th><th className="px-5 py-3">{t('users.email')}</th><th className="px-5 py-3">{t('users.role')}</th><th className="px-5 py-3">{t('users.status')}</th><th className="px-5 py-3">{t('users.actions')}</th></tr></thead><tbody className="divide-y divide-slate-100">{users.map((item) => <tr key={item.id}><td className="px-5 py-4 font-semibold text-slate-900">{item.name}</td><td className="px-5 py-4 text-slate-600">{item.email}</td><td className="px-5 py-4 text-slate-600">{item.role}</td><td className="px-5 py-4"><span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{item.status}</span></td><td className="px-5 py-4"><button className="font-semibold text-cyan-700 hover:text-cyan-900">{t('users.view')}</button></td></tr>)}</tbody></table></div>}</section></div>;
};

export default Usuarios;
