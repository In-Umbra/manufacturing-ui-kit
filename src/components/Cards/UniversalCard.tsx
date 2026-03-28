import React from 'react';

export interface UniversalCardProps {
    title: string;
    value?: string | number;
    unit?: string;
    icon?: React.ReactNode;
    description?: string;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    statusColor?: 'blue' | 'green' | 'red' | 'amber' | 'slate';
    children?: React.ReactNode;
}

export const UniversalCard: React.FC<UniversalCardProps> = ({
    title,
    value,
    unit,
    icon,
    description,
    trend,
    statusColor = 'blue',
    children,
}) => {
    const colorMap = {
        blue: 'border-blue-500 text-blue-600 bg-blue-50/50',
        green: 'border-green-500 text-green-600 bg-green-50/50',
        red: 'border-red-500 text-red-600 bg-red-50/50',
        amber: 'border-amber-500 text-amber-600 bg-amber-50/50',
        slate: 'border-slate-500 text-slate-600 bg-slate-50/50',
    };

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${colorMap[statusColor].split(' ')[0]}`} />

            <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {title}
                </span>
                {icon && <div className={`p-2 rounded-lg ${colorMap[statusColor]}`}>{icon}</div>}
            </div>

            {/* 数値表示（ある場合のみ） */}
            {(value !== undefined) && (
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-800 tracking-tight">{value}</span>
                    {unit && <span className="text-xs font-bold text-slate-400">{unit}</span>}
                </div>
            )}

            {/* 自由記述エリア */}
            {children && <div className="mt-4">{children}</div>}

            {(description || trend) && (
                <div className="mt-3 flex items-center gap-2">
                    {trend && (
                        <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${trend.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                            {trend.isPositive ? '↑' : '↓'} {trend.value}
                        </span>
                    )}
                    {description && <span className="text-[10px] font-bold text-slate-500">{description}</span>}
                </div>
            )}
        </div>
    );
};