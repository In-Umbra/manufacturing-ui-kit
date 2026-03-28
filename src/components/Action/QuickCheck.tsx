import React, { useState } from 'react';

interface QuickCheckProps {
    label: string;
    onCheck?: (checked: boolean) => void;
    defaultChecked?: boolean;
}

export const QuickCheck: React.FC<QuickCheckProps> = ({
    label,
    onCheck,
    defaultChecked = false
}) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        if (onCheck) onCheck(newState);
    };

    return (
        <button
            onClick={handleToggle}
            className={`w-full py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex justify-between items-center group border-2 ${isChecked
                ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm shadow-blue-50'
                : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                }`}
        >
            <span className="flex items-center gap-2">
                {label}
            </span>

            <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${isChecked ? 'bg-blue-600 text-white' : 'border-2 border-slate-200 group-hover:border-slate-300'
                }`}>
                {isChecked && (
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </div>
        </button>
    );
};