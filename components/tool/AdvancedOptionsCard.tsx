'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';

interface AdvancedOptionsCardProps {
  language: 'ko' | 'en';
  onLanguageChange: (lang: 'ko' | 'en') => void;
  tone: string;
  onToneChange: (tone: string) => void;
  outputFormat: string;
  onOutputFormatChange: (format: string) => void;
}

const TONES = [
  { value: 'professional', label: '전문적' },
  { value: 'casual', label: '캐주얼' },
  { value: 'technical', label: '기술적' },
  { value: 'creative', label: '창의적' },
];

const FORMATS = [
  { value: 'paragraph', label: '문단' },
  { value: 'checklist', label: '체크리스트' },
  { value: 'table', label: '표' },
  { value: 'markdown', label: '마크다운' },
  { value: 'json', label: 'JSON' },
  { value: 'script', label: '대본' },
];

export default function AdvancedOptionsCard({
  language,
  onLanguageChange,
  tone,
  onToneChange,
  outputFormat,
  onOutputFormatChange,
}: AdvancedOptionsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="text-left">
          <div className="text-sm font-semibold text-gray-900">고급 옵션</div>
          <div className="text-xs text-gray-500">언어, 톤, 출력 형식 설정</div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-5 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pt-6 grid grid-cols-3 gap-6">
            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">언어</label>
              <div className="inline-flex rounded-lg bg-gray-100 p-1 w-full">
                <button
                  onClick={() => onLanguageChange('ko')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    language === 'ko'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Tone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">톤</label>
              <select
                value={tone}
                onChange={(e) => onToneChange(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm"
              >
                {TONES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Output Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">출력 형식</label>
              <select
                value={outputFormat}
                onChange={(e) => onOutputFormatChange(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm"
              >
                {FORMATS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

