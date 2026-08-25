import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TableSkeleton from '../../components/TableSkeleton';

const Productos = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const products = [
        { name: 'Laptop Pro 14', sku: 'LP-1401', category: 'Tecnología', stock: 24, price: '$1,299', status: 'active' },
        { name: 'Teclado mecánico', sku: 'TM-2204', category: 'Accesorios', stock: 8, price: '$89', status: 'lowStock' },
        { name: 'Monitor 27 pulgadas', sku: 'MO-2708', category: 'Tecnología', stock: 0, price: '$349', status: 'outOfStock' },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-full bg-slate-50 p-5 sm:p-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">{t('products.eyebrow')}</p>
                    <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">📦 {t('products.title')}</h1>
                    <p className="mt-2 text-slate-600">{t('products.description')}</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700">+ {t('products.new')}</button>
            </div>
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-bold text-slate-900">{t('products.tableTitle')}</h2><p className="text-sm text-slate-500">{products.length} {t('products.registered')}</p></div><input aria-label={t('products.search')} placeholder={t('products.search')} className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500" /></div>
                {isLoading ? <TableSkeleton columns={7} /> : <div className="overflow-x-auto"><table className="min-w-[760px] w-full text-left text-sm"><thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3">{t('products.product')}</th><th className="px-5 py-3">SKU</th><th className="px-5 py-3">{t('products.category')}</th><th className="px-5 py-3">{t('products.stock')}</th><th className="px-5 py-3">{t('products.price')}</th><th className="px-5 py-3">{t('products.status')}</th><th className="px-5 py-3">{t('products.actions')}</th></tr></thead><tbody className="divide-y divide-slate-100">{products.map((product) => <tr key={product.sku} className="hover:bg-slate-50"><td className="px-5 py-4 font-semibold text-slate-900">{product.name}</td><td className="px-5 py-4 text-slate-500">{product.sku}</td><td className="px-5 py-4 text-slate-600">{product.category}</td><td className="px-5 py-4 font-medium text-slate-700">{product.stock}</td><td className="px-5 py-4 text-slate-700">{product.price}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${product.stock === 0 ? 'bg-red-100 text-red-700' : product.stock < 10 ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{t(`products.statusValues.${product.status}`)}</span></td><td className="px-5 py-4"><button className="font-semibold text-blue-600 hover:text-blue-800">{t('products.edit')}</button></td></tr>)}</tbody></table></div>}
            </section>
        </div>
    );
};

export default Productos;
