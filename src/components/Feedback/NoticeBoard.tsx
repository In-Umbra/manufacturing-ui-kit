import React from 'react';

export const NoticeBoard: React.FC<{ message: string; date: string }> = ({ message, date }) => (
    <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-yellow-200 px-2 py-0.5 text-[9px] font-bold text-yellow-700 rounded-bl">
            NOTICE
        </div>
        <p className="text-sm text-yellow-900 font-bold leading-snug pr-8">{message}</p>
        <p className="text-[10px] text-yellow-600 mt-2 font-mono">{date}</p>
    </div>
);