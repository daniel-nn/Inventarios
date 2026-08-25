import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TableSkeleton from '../../components/TableSkeleton';

const Categorias = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const categories = [
        { name: 'Tecnología', description: 'Equipos y dispositivos electrónicos', products: 18, status: 'active' },
        { name: 'Accesorios', description: 'Complementos para equipos', products: 12, status: 'active' },
        { name: 'Oficina', description: 'Suministros para el espacio de trabajo', products: 7, status: 'active' },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-full bg-slate-50 p-5 sm:p-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600">{t('categories.eyebrow')}</p><h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">🏷️ {t('categories.title')}</h1><p className="mt-2 text-slate-600">{t('categories.description')}</p></div><button className="rounded-lg bg-emerald-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-emerald-700">+ {t('categories.new')}</button></div>
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-200 px-5 py-4"><h2 className="text-lg font-bold text-slate-900">{t('categories.tableTitle')}</h2><p className="text-sm text-slate-500">{categories.length} {t('categories.registered')}</p></div>{isLoading ? <TableSkeleton columns={5} /> : <div className="overflow-x-auto"><table className="min-w-[680px] w-full text-left text-sm"><thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3">{t('categories.name')}</th><th className="px-5 py-3">{t('categories.descriptionColumn')}</th><th className="px-5 py-3">{t('categories.products')}</th><th className="px-5 py-3">{t('categories.status')}</th><th className="px-5 py-3">{t('categories.actions')}</th></tr></thead><tbody className="divide-y divide-slate-100">{categories.map((category) => <tr key={category.name} className="hover:bg-slate-50"><td className="px-5 py-4 font-semibold text-slate-900">{category.name}</td><td className="px-5 py-4 text-slate-600">{category.description}</td><td className="px-5 py-4 text-slate-700">{category.products}</td><td className="px-5 py-4"><span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{t(`categories.statusValues.${category.status}`)}</span></td><td className="px-5 py-4"><button className="font-semibold text-emerald-700 hover:text-emerald-900">{t('categories.edit')}</button></td></tr>)}</tbody></table></div>}</section>
        </div>
    );
};

export default Categorias;
