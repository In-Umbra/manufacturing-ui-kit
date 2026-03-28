import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    helperText?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ label, error, helperText, ...props }) => {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                {label}
            </label>
            <div className="relative">
                <input
                    {...props}
                    className={`
            w-full px-4 py-3 bg-white border-2 rounded-xl text-sm font-bold transition-all outline-none
            placeholder:text-slate-300
            ${error
                            ? 'border-red-500 text-red-600 focus:ring-4 focus:ring-red-100'
                            : 'border-slate-200 text-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                        }
            disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
          `}
                />
                {error && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        ⚠️
                    </span>
                )}
            </div>
            {(error || helperText) && (
                <p className={`text-[10px] font-bold ml-1 ${error ? 'text-red-500' : 'text-slate-400'}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
};