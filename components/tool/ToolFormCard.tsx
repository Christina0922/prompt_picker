'use client';

import { useState } from 'react';
import Segmented from './Segmented';

interface ToolFormCardProps {
  snippets: string;
  onSnippetsChange: (value: string) => void;
  goalType: string;
  onGoalTypeChange: (value: string) => void;
  aiTarget: string;
  onAiTargetChange: (value: string) => void;
  language: 'ko' | 'en';
  onLanguageChange: (lang: 'ko' | 'en') => void;
  tone: string;
  onToneChange: (tone: string) => void;
  length: 'short' | 'medium' | 'detailed';
  onLengthChange: (length: 'short' | 'medium' | 'detailed') => void;
  outputFormat: string;
  onOutputFormatChange: (format: string) => void;
}

const GOAL_OPTIONS = [
  { value: 'content', label: '콘텐츠 작성', description: 'Content' },
  { value: 'analysis', label: '분석', description: 'Analysis' },
  { value: 'code', label: '코드', description: 'Code' },
  { value: 'translation', label: '번역', description: 'Translation' },
  { value: 'creative', label: '창작', description: 'Creative' },
];

const AI_OPTIONS = [
  { value: 'chatgpt', label: 'ChatGPT' },
  { value: 'claude', label: 'Claude' },
  { value: 'gemini', label: 'Gemini' },
  { value: 'auto', label: '자동 선택' },
];

const LENGTH_OPTIONS = [
  { value: 'short', label: '짧게', description: 'Short' },
  { value: 'medium', label: '보통', description: 'Medium' },
  { value: 'detailed', label: '상세', description: 'Detailed' },
];

const TONE_OPTIONS = [
  { value: 'professional', label: '전문적' },
  { value: 'casual', label: '캐주얼' },
  { value: 'technical', label: '기술적' },
  { value: 'creative', label: '창의적' },
];

const OUTPUT_OPTIONS = [
  { value: 'paragraph', label: '문단' },
  { value: 'checklist', label: '체크리스트' },
  { value: 'table', label: '표' },
  { value: 'markdown', label: '마크다운' },
  { value: 'json', label: 'JSON' },
  { value: 'script', label: '대본' },
];

export default function ToolFormCard({
  snippets,
  onSnippetsChange,
  goalType,
  onGoalTypeChange,
  aiTarget,
  onAiTargetChange,
  language,
  onLanguageChange,
  tone,
  onToneChange,
  length,
  onLengthChange,
  outputFormat,
  onOutputFormatChange,
}: ToolFormCardProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="space-y-6">
      {/* Card 1: 조각 입력 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <label className="block mb-3">
          <span className="text-sm font-semibold text-gray-900 mb-1 block">
            조각 입력 <span className="text-red-500">*</span>
          </span>
          <span className="text-xs text-gray-500 block mb-3">
            원하는 내용을 자유롭게 작성하세요. 키워드, 제약사항, 톤 등을 포함할 수 있습니다.
          </span>
        </label>
        <textarea
          value={snippets}
          onChange={(e) => onSnippetsChange(e.target.value)}
          placeholder="예: 인스타에 올릴 운동화 홍보 문구, 편안함 강조, 60대도 이해할 표현, 과장 금지"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none text-sm"
          rows={6}
        />
      </div>

      {/* Card 2: 목표 및 AI 선택 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-6">
        <div>
          <label className="text-sm font-semibold text-gray-900 mb-3 block">
            목적 선택 <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-5 gap-2">
            {GOAL_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => onGoalTypeChange(option.value)}
                className={`px-3 py-2.5 rounded-lg border-2 transition-all text-center ${
                  goalType === option.value
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="text-sm font-medium">{option.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-900 mb-3 block">
            AI 플랫폼
          </label>
          <Segmented
            options={AI_OPTIONS}
            value={aiTarget}
            onChange={onAiTargetChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-900 mb-3 block">
            길이 <span className="text-red-500">*</span>
          </label>
          <Segmented
            options={LENGTH_OPTIONS}
            value={length}
            onChange={onLengthChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Card 3: 고급 옵션 (Accordion) */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm font-semibold text-gray-900">고급 옵션</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showAdvanced && (
          <div className="px-6 pb-6 space-y-6 border-t border-gray-100 pt-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">언어</label>
              <div className="inline-flex rounded-lg bg-gray-100 p-1">
                <button
                  onClick={() => onLanguageChange('ko')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    language === 'ko'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">톤</label>
              <select
                value={tone}
                onChange={(e) => onToneChange(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm"
              >
                {TONE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">출력 형식</label>
              <select
                value={outputFormat}
                onChange={(e) => onOutputFormatChange(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm"
              >
                {OUTPUT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

