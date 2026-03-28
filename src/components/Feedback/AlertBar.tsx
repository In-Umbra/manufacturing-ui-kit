import React from 'react';

interface AlertBarProps {
    message: string;
    type: 'error' | 'warning' | 'info';
    onClose?: () => void;
}

export const AlertBar: React.FC<AlertBarProps> = ({ message, type, onClose }) => {
    const styles = {
        error: "bg-red-600 text-white",
        warning: "bg-amber-400 text-amber-950",
        info: "bg-blue-600 text-white"
    };

    return (
        <div className={`w-full py-2 px-4 flex items-center justify-between shadow-md ${styles[type]} transition-all`}>
            <div className="flex items-center gap-2">
                <span className="text-sm font-black uppercase tracking-widest">
                    {type === 'error' ? '⚠️ Critical' : type === 'warning' ? '🔔 Attention' : 'ℹ️ Info'}
                </span>
                <span className="text-xs font-bold border-l border-white/30 pl-2">
                    {message}
                </span>
            </div>
            {onClose && (
                <button onClick={onClose} className="text-lg font-bold hover:opacity-70">
                    ×
                </button>
            )}
        </div>
    );
};