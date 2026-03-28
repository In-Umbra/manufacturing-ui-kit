import React from 'react';

interface TimeSlot {
    status: 'running' | 'stopped' | 'idle';
    width: number; // パーセンテージ
}

export const DayServiceBar: React.FC<{ slots: TimeSlot[] }> = ({ slots }) => (
    <div className="space-y-1">
        <div className="flex justify-between text-[8px] font-bold text-gray-400 uppercase">
            <span>08:00</span>
            <span>12:00</span>
            <span>17:00</span>
        </div>
        <div className="h-3 w-full flex rounded-sm overflow-hidden border border-gray-200 bg-gray-100">
            {slots.map((slot, i) => {
                const color = slot.status === 'running' ? 'bg-green-500' : slot.status === 'stopped' ? 'bg-red-500' : 'bg-yellow-400';
                return <div key={i} style={{ width: `${slot.width}%` }} className={`${color} h-full border-r border-white/20 last:border-0`} />;
            })}
        </div>
    </div>
);