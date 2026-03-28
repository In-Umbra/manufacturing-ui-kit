import React from 'react';

type MachineStatus = 'running' | 'stopped' | 'idle' | 'error';

export interface StatusConfig {
    label: string;
    color: string;
    bg: string;
    text: string;
    animate?: string;
}

export interface MachineStatusCardProps {
    machineName: string;
    id: string;
    status: MachineStatus;
    uptime: string;
    operator?: string;
    history: MachineStatus[];
}

const statusMap: Record<MachineStatus, StatusConfig> = {
    running: { label: '稼働中', color: 'bg-factory-running', bg: 'bg-green-50', text: 'text-green-700' },
    stopped: { label: '停止中', color: 'bg-factory-stopped', bg: 'bg-red-50', text: 'text-red-700' },
    idle: { label: '待機中', color: 'bg-factory-idle', bg: 'bg-yellow-50', text: 'text-yellow-700' },
    error: { label: '異常', color: 'bg-factory-alert', bg: 'bg-orange-50', text: 'text-orange-800', animate: 'animate-pulse' },
};

export const MachineStatusCard: React.FC<MachineStatusCardProps> = ({
    machineName, id, status, uptime, operator, history,
}) => {
    const config = statusMap[status];

    return (
        <div className={`relative overflow-hidden rounded-lg border-l-8 ${config.color} ${config.bg} p-4 shadow-sm border border-gray-200 transition-all hover:shadow-md`}>
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID: {id}</span>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{machineName}</h3>
                </div>
                <div className={`px-2 py-1 rounded text-[10px] font-black text-white ${config.color} ${config.animate || ''}`}>
                    {config.label}
                </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
                <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Uptime</p>
                    <p className="text-md font-mono font-bold text-gray-800 tracking-tighter">{uptime}</p>
                </div>
                <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Operator</p>
                    <p className="text-sm font-bold text-gray-700 truncate">{operator || '---'}</p>
                </div>
            </div>

            <div className="mt-4 flex gap-1 h-1.5">
                {history.map((h, i) => (
                    <div key={i} className={`flex-1 rounded-full ${statusMap[h].color} opacity-30`} />
                ))}
            </div>
        </div>
    );
};