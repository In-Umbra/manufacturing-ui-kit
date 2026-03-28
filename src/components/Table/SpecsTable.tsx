import React from 'react';

interface SpecRow {
    label: string;
    value: string;
}

export const SpecsTable: React.FC<{ title: string; specs: SpecRow[] }> = ({ title, specs }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase">{title}</h3>
        </div>
        <table className="w-full text-left text-xs">
            <tbody>
                {specs.map((spec, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-2 font-bold text-gray-400 bg-gray-50/30 w-1/3">{spec.label}</td>
                        <td className="px-4 py-2 text-gray-700 font-mono">{spec.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);