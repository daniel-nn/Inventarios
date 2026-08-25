import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Reportes = () => {
    const { t } = useTranslation();
    const reportTypes = [
        { id: 'sales', label: t('reports.types.sales'), title: t('reports.titles.sales'), detail: t('reports.details.sales') },
        { id: 'stock', label: t('reports.types.stock'), title: t('reports.titles.stock'), detail: t('reports.details.stock') },
        { id: 'purchases', label: t('reports.types.purchases'), title: t('reports.titles.purchases'), detail: t('reports.details.purchases') },
        { id: 'movements', label: t('reports.types.movements'), title: t('reports.titles.movements'), detail: t('reports.details.movements') },
        { id: 'categories', label: t('reports.types.categories'), title: t('reports.titles.categories'), detail: t('reports.details.categories') },
    ];
    const [selectedReport, setSelectedReport] = useState(reportTypes[0].id);
    const [activeReport, setActiveReport] = useState(reportTypes[0]);

    useEffect(() => {
        const nextReport = reportTypes.find((report) => report.id === selectedReport) || reportTypes[0];
        setActiveReport(nextReport);
    }, [selectedReport]);

    return (
        <div className="min-h-full bg-slate-50 p-5 sm:p-8">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-600">{t('reports.eyebrow')}</p><h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">📊 {activeReport.title}</h1><p className="mt-2 text-slate-600">{activeReport.detail}</p></div><label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">{t('reports.selector')}<select value={selectedReport} onChange={(event) => setSelectedReport(event.target.value)} className="min-w-64 rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-normal outline-none focus:border-violet-500">{reportTypes.map((report) => <option key={report.id} value={report.id}>{report.label}</option>)}</select></label></div>
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-bold text-slate-900">{activeReport.title}</h2><p className="text-sm text-slate-500">{t('reports.filters')}</p></div><button className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50">{t('reports.export')}</button></div><div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3"><div className="h-24 rounded-lg bg-slate-100" /><div className="h-24 rounded-lg bg-slate-100" /><div className="h-24 rounded-lg bg-slate-100" /></div><div className="mt-5 h-64 rounded-lg border border-dashed border-slate-300 bg-slate-50" /></section>
        </div>
    );
};

export default Reportes;
