import React from 'react';

interface OperatorCardProps {
    name: string;
    role: string;
    avatarUrl?: string;
    shift: 'Day' | 'Night';
}

export const OperatorCard: React.FC<OperatorCardProps> = ({ name, role, avatarUrl, shift }) => (
    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-white shadow-inner">
            {avatarUrl ? <img src={avatarUrl} alt={name} /> : <span className="text-xl">👤</span>}
        </div>
        <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-slate-800 truncate">{name}</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{role}</p>
        </div>
        <div className={`px-2 py-0.5 rounded text-[8px] font-black ${shift === 'Day' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'}`}>
            {shift.toUpperCase()}
        </div>
    </div>
);