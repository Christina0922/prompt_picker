'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import { useUiLang } from '@/lib/i18n/UiLangProvider';
import type { UiLang } from '@/lib/i18n/storage';

interface AdvancedOptionsCardProps {
  outputLang: UiLang;
  onOutputLangChange: (lang: UiLang) => void;
  tone: string;
  onToneChange: (tone: string) => void;
  outputFormat: string;
  onOutputFormatChange: (format: string) => void;
}

const TONES = [
  { value: 'professional', labelKr: '전문적', labelEn: 'Professional' },
  { value: 'casual', labelKr: '캐주얼', labelEn: 'Casual' },
  { value: 'technical', labelKr: '기술적', labelEn: 'Technical' },
  { value: 'creative', labelKr: '창의적', labelEn: 'Creative' },
];

const FORMATS = [
  { value: 'paragraph', labelKr: '문단', labelEn: 'Paragraph' },
  { value: 'checklist', labelKr: '체크리스트', labelEn: 'Checklist' },
  { value: 'table', labelKr: '표', labelEn: 'Table' },
  { value: 'markdown', labelKr: '마크다운', labelEn: 'Markdown' },
  { value: 'json', labelKr: 'JSON', labelEn: 'JSON' },
  { value: 'script', labelKr: '대본', labelEn: 'Script' },
];

export default function AdvancedOptionsCard({
  outputLang,
  onOutputLangChange,
  tone,
  onToneChange,
  outputFormat,
  onOutputFormatChange,
}: AdvancedOptionsCardProps) {
  const { lang: uiLang, t } = useUiLang();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="text-left">
          <div className="text-sm font-semibold text-gray-900">{uiLang === 'kr' ? '고급 옵션' : 'Advanced Options'} {isExpanded ? '▲' : '▼'}</div>
          <div className="text-xs text-gray-500">{uiLang === 'kr' ? '결과 언어, 톤, 출력 형식 설정' : 'Output language, tone, output format'}</div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-5 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pt-6 grid grid-cols-3 gap-6">
            {/* Output Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 min-h-[44px] flex items-center">
                {uiLang === 'kr' ? '결과 언어' : 'Output language'}
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer min-h-[44px]">
                  <input
                    type="radio"
                    name="outputLang"
                    value="kr"
                    checked={outputLang === 'kr'}
                    onChange={() => onOutputLangChange('kr')}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Korean</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer min-h-[44px]">
                  <input
                    type="radio"
                    name="outputLang"
                    value="en"
                    checked={outputLang === 'en'}
                    onChange={() => onOutputLangChange('en')}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">English</span>
                </label>
              </div>
            </div>

            {/* Tone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{uiLang === 'kr' ? '톤' : 'Tone'}</label>
              <select
                value={tone}
                onChange={(e) => onToneChange(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm min-h-[44px]"
              >
                {TONES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {uiLang === 'kr' ? t.labelKr : t.labelEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Output Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{uiLang === 'kr' ? '출력 형식' : 'Output format'}</label>
              <select
                value={outputFormat}
                onChange={(e) => onOutputFormatChange(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none text-sm min-h-[44px]"
              >
                {FORMATS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {uiLang === 'kr' ? f.labelKr : f.labelEn}
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
