const TableSkeleton = ({ columns = 5, rows = 5 }) => (
    <div className="animate-pulse space-y-4 p-5" aria-label="Loading">
        {Array.from({ length: rows }, (_, rowIndex) => (
            <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
                {Array.from({ length: columns }, (_, columnIndex) => (
                    <div key={columnIndex} className="h-5 rounded bg-slate-200" />
                ))}
            </div>
        ))}
    </div>
);

export default TableSkeleton;
