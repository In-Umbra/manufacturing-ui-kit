import React from 'react';

interface Event {
    time: string;
    message: string;
    type: 'system' | 'user' | 'alert';
}

export const EventLog: React.FC<{ events: Event[] }> = ({ events }) => (
    <div className="bg-gray-900 rounded-lg p-3 font-mono text-[11px]">
        <div className="flex justify-between mb-2 border-b border-gray-700 pb-1">
            <span className="text-gray-500 font-bold uppercase">System Logs</span>
            <span className="text-green-500">● LIVE</span>
        </div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
            {events.map((e, i) => (
                <div key={i} className="flex gap-2">
                    <span className="text-gray-500">[{e.time}]</span>
                    <span className={e.type === 'alert' ? 'text-red-400' : 'text-gray-300'}>{e.message}</span>
                </div>
            ))}
        </div>
    </div>
);