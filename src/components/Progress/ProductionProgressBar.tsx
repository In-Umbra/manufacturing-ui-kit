import React from 'react';

interface ProductionProgressBarProps {
    label: string;
    target: number;
    actual: number;
    defects: number;
    unit?: string;
}

export const ProductionProgressBar: React.FC<ProductionProgressBarProps> = ({
    label, target, actual, defects, unit = 'pcs',
}) => {
    const progress = Math.min((actual / target) * 100, 100);
    const isDelayed = actual < target * 0.8;

    return (
        <div className="w-full bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">{label}</h4>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-gray-900">{actual.toLocaleString()}</span>
                        <span className="text-sm font-bold text-gray-400 italic">/ {target.toLocaleString()} {unit}</span>
                    </div>
                </div>
                <div className="text-right">
                    <p className={`text-xl font-black ${defects > 0 ? 'text-factory-stopped' : 'text-factory-running'}`}>
                        {(((actual - defects) / actual) * 100 || 0).toFixed(1)}%
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Yield Rate</p>
                </div>
            </div>

            <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                <div
                    className={`h-full transition-all duration-700 ${isDelayed ? 'bg-factory-idle' : 'bg-factory-primary'}`}
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="mt-2 flex justify-between items-center">
                <span className={`text-[10px] font-bold ${isDelayed ? 'text-factory-alert' : 'text-gray-400'}`}>
                    {isDelayed ? '⚠️ BEHIND SCHEDULE' : '✓ ON TRACK'}
                </span>
                <span className="text-[10px] font-bold text-factory-stopped text-red-600">DEFECTS: {defects}</span>
            </div>
        </div>
    );
};