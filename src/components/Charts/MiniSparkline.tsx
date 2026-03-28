import React from 'react';

interface MiniSparklineProps {
    data: number[];
    color?: 'blue' | 'green' | 'red' | 'amber' | 'slate';
    height?: number; // 単位はpx
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

    return (
        <div
            style={{ height: `${height}px` }}
            className="flex items-end gap-1 px-1 group w-full"
        >
            {data.map((val, i) => (
                <div
                    key={i}
                    className={`flex-1 ${colorMap[color]} rounded-t-sm transition-all duration-700 ease-out`}
                    style={{ height: `${Math.min(Math.max(val, 5), 100)}%` }} // 最低5%見せることで視認性を確保
                />
            ))}
        </div>
    );
};