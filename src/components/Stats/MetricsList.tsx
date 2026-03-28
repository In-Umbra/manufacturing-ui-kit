import React from 'react';

interface Metric {
    label: string;
    value: string | number;
    isAlert?: boolean;
}

export const MetricsList: React.FC<{ metrics: Metric[] }> = ({ metrics }) => (
    <div className="grid grid-cols-2 gap-2">
        {metrics.map((m, i) => (
            <div key={i} className={`p-2 rounded border ${m.isAlert ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
                <p className="text-[8px] font-bold text-gray-400 uppercase">{m.label}</p>
                <p className={`text-sm font-mono font-bold ${m.isAlert ? 'text-red-600' : 'text-slate-700'}`}>{m.value}</p>
            </div>
        ))}
    </div>
);