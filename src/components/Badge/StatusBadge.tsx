import React from 'react';

interface StatusBadgeProps {
    level: 'info' | 'warning' | 'critical';
    text: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ level, text }) => {
    const styles = {
        info: "bg-blue-100 text-blue-700 border-blue-200",
        warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
        critical: "bg-red-100 text-red-700 border-red-200 animate-pulse"
    };

    return (
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${styles[level]}`}>
            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${level === 'critical' ? 'bg-red-600' : level === 'warning' ? 'bg-yellow-600' : 'bg-blue-600'}`} />
            {text}
        </span>
    );
};