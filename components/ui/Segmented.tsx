'use client';

interface SegmentedOption {
  value: string;
  label: string;
  sublabel?: string;
}

interface SegmentedProps {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

export default function Segmented({ options, value, onChange, fullWidth = false }: SegmentedProps) {
  return (
    <div className={`inline-flex rounded-xl bg-gray-100 p-1.5 ${fullWidth ? 'w-full' : ''}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            value === option.value
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="text-center">
            <div className="font-semibold">{option.label}</div>
            {option.sublabel && (
              <div className="text-xs text-gray-500 mt-0.5">{option.sublabel}</div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

