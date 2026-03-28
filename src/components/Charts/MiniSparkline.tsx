import React from 'react';

export interface MiniSparklineProps {
    data: number[];
    color?: 'blue' | 'green' | 'red' | 'amber' | 'slate';
    height?: number;
}

export const MiniSparkline: React.FC<MiniSparklineProps> = ({
    data,
    color = 'blue',
    height = 40
}) => {
    const colorMap = {
        blue: 'bg-blue-100 group-hover:bg-blue-200',
        green: 'bg-green-100 group-hover:bg-green-200',
        red: 'bg-red-100 group-hover:bg-red-200',
        amber: 'bg-amber-100 group-hover:bg-amber-200',
        slate: 'bg-slate-100 group-hover:bg-slate-200',
    };

    const gapClass = data.length > 40 ? 'gap-0' : data.length > 20 ? 'gap-[1px]' : 'gap-1';

    return (
        <div
            style={{ height: `${height}px` }}
            className={`flex items-end ${gapClass} px-0.5 group w-full`}
        >
            {data.map((val, i) => (
                <div
                    key={i}
                    className={`flex-1 ${colorMap[color]} rounded-t-[1px] transition-all duration-700 ease-out`}
                    style={{ height: `${Math.min(Math.max(val, 5), 100)}%` }}
                />
            ))}
        </div>
    );
};