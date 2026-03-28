import React from 'react';

export interface ChartData {
    label: string;
    value: number;
}

export interface BarChartProps {
    title: string;
    data: ChartData[];
    height?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ title, data, height = 200 }) => {
    const maxValue = Math.max(...data.map((d) => d.value), 1);
    const barHeight = 12;
    const barGap = 16;
    const labelWidth = 60;

    const svgHeight = (barHeight + barGap) * data.length;

    return (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                {title}
            </h3>

            <div style={{ height: `${height}px` }} className="w-full overflow-y-auto pr-2">
                <svg viewBox={`0 0 300 ${svgHeight}`} className="w-full h-auto">
                    {data.map((d, i) => {
                        const y = i * (barHeight + barGap);
                        const barWidth = (d.value / maxValue) * (300 - labelWidth - 40);

                        return (
                            <g key={d.label} className="group">
                                <text
                                    x={labelWidth}
                                    y={y + barHeight / 2}
                                    textAnchor="end"
                                    dominantBaseline="middle"
                                    className="text-[10px] fill-slate-500 font-bold"
                                >
                                    {d.label}
                                </text>
                                <rect
                                    x={labelWidth + 8}
                                    y={y}
                                    width={300 - labelWidth - 8}
                                    height={barHeight}
                                    rx={2}
                                    className="fill-slate-100"
                                />
                                <rect
                                    x={labelWidth + 8}
                                    y={y}
                                    width={barWidth}
                                    height={barHeight}
                                    rx={2}
                                    className="fill-blue-500 transition-all duration-500 ease-out"
                                />
                                <text
                                    x={labelWidth + 8 + barWidth + 6}
                                    y={y + barHeight / 2}
                                    dominantBaseline="middle"
                                    className="text-[10px] fill-blue-700 font-black"
                                >
                                    {d.value.toLocaleString()}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};