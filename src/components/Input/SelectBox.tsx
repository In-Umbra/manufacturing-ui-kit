import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectBoxProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: Option[];
    error?: string;
    helperText?: string;
}

export const SelectBox: React.FC<SelectBoxProps> = ({ label, options, error, helperText, ...props }) => {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                {label}
            </label>
            <div className="relative">
                <select
                    {...props}
                    className={`
            w-full px-4 py-3 bg-white border-2 rounded-xl text-sm font-bold transition-all outline-none appearance-none cursor-pointer
            ${error
                            ? 'border-red-500 text-red-600 focus:ring-4 focus:ring-red-100'
                            : 'border-slate-200 text-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                        }
            disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
          `}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {/* カスタムの矢印アイコン */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </div>
            </div>
            {(error || helperText) && (
                <p className={`text-[10px] font-bold ml-1 ${error ? 'text-red-500' : 'text-slate-400'}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
};