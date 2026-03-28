import React from 'react';

interface DeviceSwitchProps {
    label: string;
    isEnabled: boolean;
    onChange: (val: boolean) => void;
}

export const DeviceSwitch: React.FC<DeviceSwitchProps> = ({ label, isEnabled, onChange }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 min-w-[200px] w-full shadow-sm">
        <span className="text-sm font-black text-slate-700 tracking-tight">{label}</span>
        <button
            onClick={() => onChange(!isEnabled)}
            className={`w-12 h-6 rounded-full relative transition-colors duration-200 focus:outline-none ${isEnabled ? 'bg-green-500' : 'bg-slate-300'}`}
        >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 shadow-sm ${isEnabled ? 'right-1' : 'left-1'}`} />
        </button>
    </div>
);