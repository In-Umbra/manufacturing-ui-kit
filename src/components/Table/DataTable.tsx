import React from 'react';

export interface Column {
    key: string;
    label: string;
    width?: string;
}

export interface DataTableProps {
    columns: Column[];
    data: any[];
    onRowClick?: (row: any) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data, onRowClick }) => {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto max-h-[400px]">
                <table className="w-full text-left border-collapse">
                    {/* ヘッダー固定 (sticky) */}
                    <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    style={{ width: col.width }}
                                    className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((row, i) => (
                            <tr
                                key={i}
                                onClick={() => onRowClick?.(row)}
                                className={`group hover:bg-blue-50/50 transition-colors cursor-pointer ${row.status === 'error' ? 'bg-red-50/30' : ''
                                    }`}
                            >
                                {columns.map((col) => (
                                    <td key={col.key} className="px-4 py-3 text-xs font-medium text-slate-600">
                                        {col.key === 'status' ? (
                                            <span className={`flex items-center gap-1.5 font-bold ${row[col.key] === 'running' ? 'text-green-600' :
                                                row[col.key] === 'error' ? 'text-red-600' : 'text-slate-400'
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${row[col.key] === 'running' ? 'bg-green-500' :
                                                    row[col.key] === 'error' ? 'bg-red-500 animate-pulse' : 'bg-slate-300'
                                                    }`} />
                                                {row[col.key].toUpperCase()}
                                            </span>
                                        ) : (
                                            row[col.key]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};