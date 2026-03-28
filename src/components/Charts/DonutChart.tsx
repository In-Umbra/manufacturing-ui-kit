import React from 'react';

export interface ChartSegment {
    label: string;
    value: number;
    color: string;
}

export interface DonutChartProps {
    title: string;
    data: ChartSegment[];
    centerLabel?: string;
    centerValue?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ title, data, centerLabel, centerValue }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const size = 120;
    const thickness = 14;
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;

    let currentAngle = -90;

    return (
        <div className="bg-white p-5 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center">
            <h3 className="w-full text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5 text-center">
                {title}
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative" style={{ width: size, height: size }}>
                    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            className="stroke-slate-100"
                            strokeWidth={thickness}
                        />

                        {data.map((segment, i) => {
                            if (total === 0) return null;
                            const percentage = segment.value / total;
                            const strokeDasharray = `${circumference * percentage} ${circumference}`;
                            const rotation = currentAngle;
                            currentAngle += percentage * 360;

                            const isTailwind = segment.color.includes('-');

                            return (
                                <circle
                                    key={i}
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                    fill="none"
                                    className={`${isTailwind ? segment.color.replace('fill-', 'stroke-') : ''} transition-all duration-700 ease-out`}
                                    style={!isTailwind ? { stroke: segment.color } : {}}
                                    strokeWidth={thickness}
                                    strokeDasharray={strokeDasharray}
                                    strokeDashoffset={0}
                                    strokeLinecap="round"
                                    transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
                                />
                            );
                        })}
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        {centerValue && (
                            <span className="text-xl font-black text-slate-800 leading-none">
                                {centerValue}
                            </span>
                        )}
                        {centerLabel && (
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                                {centerLabel}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-row sm:flex-col flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-start">
                    {data.map((segment, i) => {
                        const percentage = total > 0 ? (segment.value / total * 100).toFixed(1) : 0;
                        const isTailwind = segment.color.includes('-');

                        return (
                            <div key={i} className="flex items-center gap-2">
                                <span
                                    className={`w-2 h-2 rounded-full ${isTailwind ? segment.color.replace('stroke-', 'bg-').replace('fill-', 'bg-') : ''}`}
                                    style={!isTailwind ? { backgroundColor: segment.color } : {}}
                                />
                                <span className="text-[10px] font-bold text-slate-600">
                                    {segment.label}
                                </span>
                                <span
                                    className={`text-[10px] font-black ${isTailwind ? segment.color.replace('stroke-', 'text-').replace('fill-', 'text-') : ''}`}
                                    style={!isTailwind ? { color: segment.color } : {}}
                                >
                                    {percentage}%
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};