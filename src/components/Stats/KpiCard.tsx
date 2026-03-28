import React from 'react';

interface KpiCardProps {
    label: string;
    value: string | number;
    unit?: string;
    trend?: {
        value: number;
        isUp: boolean;
    };
}

export const KpiCard: React.FC<KpiCardProps> = ({ label, value, unit, trend }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
        <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-black text-gray-900">{value}</span>
            {unit && <span className="text-xs font-bold text-gray-400">{unit}</span>}
        </div>
        {trend && (
            <div className={`mt-2 text-[10px] font-bold flex items-center ${trend.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {trend.isUp ? '▲' : '▼'} {trend.value}%
                <span className="text-gray-400 ml-1 font-normal text-[9px]">vs yesterday</span>
            </div>
        )}
    </div>
);