'use client';

interface OptionsPanelProps {
  language: 'ko' | 'en';
  onLanguageChange: (lang: 'ko' | 'en') => void;
  tone: string;
  onToneChange: (tone: string) => void;
  length: 'short' | 'medium' | 'detailed';
  onLengthChange: (length: 'short' | 'medium' | 'detailed') => void;
  outputFormat: string;
  onOutputFormatChange: (format: string) => void;
}

const TONES = [
  { value: 'professional', label: '전문적' },
  { value: 'casual', label: '캐주얼' },
  { value: 'technical', label: '기술적' },
  { value: 'creative', label: '창의적' },
];

const LENGTHS = [
  { value: 'short', label: '짧게', description: 'Concise' },
  { value: 'medium', label: '보통', description: 'Balanced' },
  { value: 'detailed', label: '상세', description: 'Detailed' },
];

const OUTPUT_FORMATS = [
  { value: 'paragraph', label: '문단' },
  { value: 'checklist', label: '체크리스트' },
  { value: 'table', label: '표' },
  { value: 'markdown', label: '마크다운' },
  { value: 'json', label: 'JSON' },
  { value: 'script', label: '대본' },
];

export default function OptionsPanel({
  language,
  onLanguageChange,
  tone,
  onToneChange,
  length,
  onLengthChange,
  outputFormat,
  onOutputFormatChange,
}: OptionsPanelProps) {
  return (
    <div className="card space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">세부 옵션</h3>

      {/* Language Toggle */}
      <div>
        <label className="label">언어</label>
        <div className="flex gap-2">
          <button
            onClick={() => onLanguageChange('ko')}
            className={`flex-1 py-2.5 rounded-lg border-2 transition-all font-medium text-sm ${
              language === 'ko'
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            한국어
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`flex-1 py-2.5 rounded-lg border-2 transition-all font-medium text-sm ${
              language === 'en'
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Tone Selector */}
      <div>
        <label className="label">톤</label>
        <select
          value={tone}
          onChange={(e) => onToneChange(e.target.value)}
          className="input-field"
        >
          {TONES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Length Selector */}
      <div>
        <label className="label">
          길이 <span className="text-indigo-600">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {LENGTHS.map((len) => (
            <button
              key={len.value}
              onClick={() => onLengthChange(len.value as 'short' | 'medium' | 'detailed')}
              className={`p-3 rounded-lg border-2 transition-all text-center ${
                length === len.value
                  ? 'border-indigo-600 bg-indigo-50 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="text-sm font-semibold text-gray-900 mb-1">{len.label}</div>
              <div className="text-xs text-gray-500">{len.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Output Format */}
      <div>
        <label className="label">출력 형식</label>
        <select
          value={outputFormat}
          onChange={(e) => onOutputFormatChange(e.target.value)}
          className="input-field"
        >
          {OUTPUT_FORMATS.map((format) => (
            <option key={format.value} value={format.value}>
              {format.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

